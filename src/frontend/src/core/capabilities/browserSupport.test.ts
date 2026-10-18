import { describe, expect, it } from 'vitest'
import { checkBrowserSupport } from './browserSupport'

const modern = {
  isSecureContext: true,
  VideoEncoder: class {},
  OffscreenCanvas: class {},
  Worker: class {},
  indexedDB: {},
} as unknown as typeof globalThis

describe('checkBrowserSupport', () => {
  it('passes a browser that has everything the export needs', () => {
    expect(checkBrowserSupport(modern)).toEqual({ ok: true })
  })

  it('names Chrome or Edge when the encoder is missing', () => {
    const old = {
      ...modern,
      VideoEncoder: undefined,
    } as unknown as typeof globalThis
    const result = checkBrowserSupport(old)

    expect(result.ok).toBe(false)
    if (result.ok) return
    expect(result.missing).toEqual(['WebCodecs'])
    expect(result.message).toContain('Chrome hoặc Edge')
  })
})
