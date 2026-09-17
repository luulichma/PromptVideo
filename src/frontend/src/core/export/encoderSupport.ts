export type ExportResolution = '720p' | '1080p'

export type ResolutionSpec = {
  width: number
  height: number
  bitrate: number
  /** H.264 High profile at the level each size needs. */
  codec: string
}

export const RESOLUTIONS: Readonly<Record<ExportResolution, ResolutionSpec>> = {
  '720p': {
    width: 1280,
    height: 720,
    bitrate: 4_000_000,
    codec: 'avc1.64001f',
  },
  '1080p': {
    width: 1920,
    height: 1080,
    bitrate: 8_000_000,
    codec: 'avc1.640028',
  },
}

export type EncoderSupport =
  { supported: true } | { supported: false; reason: string }

/**
 * Asks the browser whether it can encode this exact configuration.
 *
 * This runs before a reservation is taken, not after. Discovering an
 * unsupported codec halfway through would mean the user has already spent one
 * of their monthly exports on a video the browser was never going to produce,
 * and refunding that is a race we should not need to win.
 */
export async function checkEncoderSupport(
  resolution: ExportResolution,
  fps: number,
): Promise<EncoderSupport> {
  if (typeof VideoEncoder === 'undefined') {
    return {
      supported: false,
      reason:
        'Trình duyệt không hỗ trợ WebCodecs, nên không thể tạo MP4 ngay trên máy bạn.',
    }
  }

  const spec = RESOLUTIONS[resolution]
  try {
    const result = await VideoEncoder.isConfigSupported({
      codec: spec.codec,
      width: spec.width,
      height: spec.height,
      bitrate: spec.bitrate,
      framerate: fps,
    })

    if (!result.supported) {
      return {
        supported: false,
        reason: `Trình duyệt từ chối cấu hình H.264 ${spec.height}p ở ${fps} fps.`,
      }
    }

    return { supported: true }
  } catch (error) {
    // A throw here means the configuration was not merely unsupported but
    // malformed for this browser; either way the export cannot go ahead.
    return {
      supported: false,
      reason: `Không kiểm tra được khả năng mã hoá: ${
        error instanceof Error ? error.message : String(error)
      }`,
    }
  }
}

/** The tallest resolution the account's plan allows, as a usable choice. */
export function allowedResolutions(
  maxExportHeight: number,
): ExportResolution[] {
  return (Object.keys(RESOLUTIONS) as ExportResolution[]).filter(
    (name) => RESOLUTIONS[name].height <= maxExportHeight,
  )
}
