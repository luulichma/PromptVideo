export type CapabilityState = 'supported' | 'unsupported' | 'unknown'

export type CapabilityResult = {
  state: CapabilityState
  detail: string
}

export type CapabilityReport = {
  capturedAt: string
  secureContext: boolean
  browser: {
    userAgent: string
    platform: string
    language: string
    hardwareConcurrency: number | null
    deviceMemoryGiB: number | null
  }
  capabilities: {
    webCodecs: CapabilityResult
    h264720p: CapabilityResult
    h2641080p: CapabilityResult
    aac: CapabilityResult
    offscreenCanvas: CapabilityResult
    opfs: CapabilityResult
    fileSystemAccess: CapabilityResult
  }
}

type NavigatorWithDeviceMemory = Navigator & { deviceMemory?: number }
type WindowWithFilePicker = Window & { showSaveFilePicker?: unknown }

async function probeVideoCodec(
  width: number,
  height: number,
): Promise<CapabilityResult> {
  if (typeof VideoEncoder === 'undefined')
    return { state: 'unsupported', detail: 'VideoEncoder không tồn tại' }
  try {
    const result = await VideoEncoder.isConfigSupported({
      codec: 'avc1.42001f',
      width,
      height,
      bitrate: width >= 1920 ? 8_000_000 : 4_000_000,
      framerate: 30,
      hardwareAcceleration: 'prefer-hardware',
      avc: { format: 'avc' },
    })
    return {
      state: result.supported ? 'supported' : 'unsupported',
      detail: `${width}×${height} · avc1.42001f`,
    }
  } catch (error) {
    return {
      state: 'unknown',
      detail: error instanceof Error ? error.message : String(error),
    }
  }
}

async function probeAudioCodec(): Promise<CapabilityResult> {
  if (typeof AudioEncoder === 'undefined')
    return { state: 'unsupported', detail: 'AudioEncoder không tồn tại' }
  try {
    const result = await AudioEncoder.isConfigSupported({
      codec: 'mp4a.40.2',
      sampleRate: 48_000,
      numberOfChannels: 2,
      bitrate: 128_000,
    })
    return {
      state: result.supported ? 'supported' : 'unsupported',
      detail: 'AAC-LC · 48 kHz · stereo',
    }
  } catch (error) {
    return {
      state: 'unknown',
      detail: error instanceof Error ? error.message : String(error),
    }
  }
}

export async function runCapabilityProbe(): Promise<CapabilityReport> {
  const navigatorWithMemory = navigator as NavigatorWithDeviceMemory
  const hasWebCodecs =
    typeof VideoEncoder !== 'undefined' && typeof VideoFrame !== 'undefined'
  const hasOpfs = typeof navigator.storage?.getDirectory === 'function'
  const [h264720p, h2641080p, aac] = await Promise.all([
    probeVideoCodec(1280, 720),
    probeVideoCodec(1920, 1080),
    probeAudioCodec(),
  ])

  return {
    capturedAt: new Date().toISOString(),
    secureContext: window.isSecureContext,
    browser: {
      userAgent: navigator.userAgent,
      platform: navigator.userAgentData?.platform ?? navigator.platform,
      language: navigator.language,
      hardwareConcurrency: navigator.hardwareConcurrency || null,
      deviceMemoryGiB: navigatorWithMemory.deviceMemory ?? null,
    },
    capabilities: {
      webCodecs: {
        state: hasWebCodecs ? 'supported' : 'unsupported',
        detail: hasWebCodecs
          ? 'VideoEncoder + VideoFrame'
          : 'Thiếu WebCodecs encode',
      },
      h264720p,
      h2641080p,
      aac,
      offscreenCanvas: {
        state:
          typeof OffscreenCanvas !== 'undefined' ? 'supported' : 'unsupported',
        detail:
          typeof OffscreenCanvas !== 'undefined'
            ? 'OffscreenCanvas khả dụng'
            : 'Chỉ dùng HTMLCanvasElement',
      },
      opfs: {
        state: hasOpfs ? 'supported' : 'unsupported',
        detail: hasOpfs ? 'navigator.storage.getDirectory' : 'Không có OPFS',
      },
      fileSystemAccess: {
        state:
          typeof (window as WindowWithFilePicker).showSaveFilePicker ===
          'function'
            ? 'supported'
            : 'unsupported',
        detail:
          typeof (window as WindowWithFilePicker).showSaveFilePicker ===
          'function'
            ? 'Có thể ghi trực tiếp ra file'
            : 'Dùng Blob download',
      },
    },
  }
}

export function downloadJson(value: unknown, filename: string): void {
  const blob = new Blob([JSON.stringify(value, null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}
