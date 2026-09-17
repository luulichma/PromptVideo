import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  RESOLUTIONS,
  allowedResolutions,
  checkEncoderSupport,
} from './encoderSupport'

type EncoderStub = {
  isConfigSupported: (config: VideoEncoderConfig) => Promise<{
    supported: boolean
  }>
}

function stubEncoder(stub: EncoderStub | undefined): void {
  vi.stubGlobal('VideoEncoder', stub)
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('encoder support', () => {
  it('refuses when the browser has no WebCodecs at all', async () => {
    stubEncoder(undefined)

    const result = await checkEncoderSupport('720p', 30)

    expect(result.supported).toBe(false)
    expect(result.supported === false && result.reason).toContain('WebCodecs')
  })

  it('passes the plan-granted resolution to the browser unchanged', async () => {
    const isConfigSupported = vi.fn().mockResolvedValue({ supported: true })
    stubEncoder({ isConfigSupported })

    await checkEncoderSupport('1080p', 30)

    expect(isConfigSupported).toHaveBeenCalledWith({
      codec: RESOLUTIONS['1080p'].codec,
      width: 1920,
      height: 1080,
      bitrate: RESOLUTIONS['1080p'].bitrate,
      framerate: 30,
    })
  })

  it('refuses a configuration the browser says it cannot encode', async () => {
    stubEncoder({
      isConfigSupported: () => Promise.resolve({ supported: false }),
    })

    const result = await checkEncoderSupport('1080p', 30)

    expect(result.supported).toBe(false)
    expect(result.supported === false && result.reason).toContain('1080p')
  })

  it('treats a throwing probe as a refusal rather than crashing the export', async () => {
    stubEncoder({
      isConfigSupported: () => Promise.reject(new Error('không hợp lệ')),
    })

    const result = await checkEncoderSupport('720p', 30)

    expect(result.supported).toBe(false)
    expect(result.supported === false && result.reason).toContain(
      'không hợp lệ',
    )
  })
})

describe('plan-allowed resolutions', () => {
  it('offers only what the plan height permits', () => {
    expect(allowedResolutions(720)).toEqual(['720p'])
    expect(allowedResolutions(1080)).toEqual(['720p', '1080p'])
  })

  it('offers nothing when the plan permits less than the smallest output', () => {
    expect(allowedResolutions(480)).toEqual([])
  })
})
