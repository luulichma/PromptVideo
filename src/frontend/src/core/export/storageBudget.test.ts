import { afterEach, describe, expect, it, vi } from 'vitest'
import { checkStorageBudget, estimateOutputBytes } from './storageBudget'

function stubEstimate(
  estimate: (() => Promise<StorageEstimate>) | undefined,
): void {
  vi.stubGlobal('navigator', {
    storage: estimate ? { estimate } : undefined,
  })
}

afterEach(() => {
  vi.unstubAllGlobals()
})

const MB = 1024 * 1024

describe('storage budget', () => {
  it('estimates a 60 second 720p export in the hundreds of megabytes', () => {
    const bytes = estimateOutputBytes('720p', 60)

    // 4 Mbit/s for a minute is 30 MB; the margin puts it at 48 MB.
    expect(bytes).toBeGreaterThan(40 * MB)
    expect(bytes).toBeLessThan(60 * MB)
  })

  it('budgets more for 1080p than for 720p at the same duration', () => {
    expect(estimateOutputBytes('1080p', 60)).toBeGreaterThan(
      estimateOutputBytes('720p', 60),
    )
  })

  it('allows an export when the origin has ample room', async () => {
    stubEstimate(() => Promise.resolve({ quota: 4096 * MB, usage: 100 * MB }))

    const result = await checkStorageBudget('1080p', 60)

    expect(result.ok).toBe(true)
  })

  it('refuses before encoding when the file would not fit', async () => {
    stubEstimate(() => Promise.resolve({ quota: 200 * MB, usage: 190 * MB }))

    const result = await checkStorageBudget('1080p', 60)

    expect(result.ok).toBe(false)
    expect(result.ok === false && result.reason).toContain('MB')
  })

  it('refuses when the file fits but leaves the origin with nothing spare', async () => {
    // Exactly enough for the file and not a byte more.
    const estimated = estimateOutputBytes('720p', 60)
    stubEstimate(() => Promise.resolve({ quota: estimated, usage: 0 }))

    const result = await checkStorageBudget('720p', 60)

    expect(result.ok).toBe(false)
  })

  it('proceeds when the browser will not estimate rather than blocking', async () => {
    stubEstimate(undefined)

    const result = await checkStorageBudget('720p', 60)

    expect(result.ok).toBe(true)
    expect(result.ok === true && result.availableBytes).toBeNull()
  })

  it('proceeds when the estimate call itself throws', async () => {
    stubEstimate(() => Promise.reject(new Error('bị chặn')))

    const result = await checkStorageBudget('720p', 60)

    expect(result.ok).toBe(true)
  })
})
