import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createProject } from '../project/createProject'
import { exportProject } from './exportProject'
import type { ExportOutcome } from './exportClient'
import type { ExportBenchmarkResult } from './exportMp4'
import type { ReservationResult } from './reservation'

vi.mock('./encoderSupport', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./encoderSupport')>()),
  checkEncoderSupport: vi.fn(),
}))

vi.mock('./storageBudget', () => ({
  checkStorageBudget: vi.fn(),
}))

vi.mock('./exportClient', () => ({
  runExport: vi.fn(),
}))

vi.mock('./reservation', () => ({
  reserveExport: vi.fn(),
  completeExport: vi.fn().mockResolvedValue(true),
  cancelExport: vi.fn().mockResolvedValue(true),
}))

const { checkEncoderSupport } = await import('./encoderSupport')
const { checkStorageBudget } = await import('./storageBudget')
const { runExport } = await import('./exportClient')
const { reserveExport, completeExport, cancelExport } =
  await import('./reservation')

const project = createProject('Dự án', { id: 'export-1' })

/** Measurements the worker reports back; none of them steer this module. */
const benchmark = {
  capturedAt: '2026-01-01T00:00:00.000Z',
  projectId: project.id,
  outputPath: 'buffer',
  resolution: '720p',
  watermark: true,
  elapsedMilliseconds: 1234,
  peakJsHeapBytes: null,
  fileSizeBytes: 3,
  validation: {
    durationSeconds: 60,
    durationDeltaFrames: 0,
    frameCount: 1800,
    width: 1280,
    height: 720,
    codec: 'avc',
    firstFrameBlack: false,
    lastFrameBlack: false,
    isValid: true,
    errors: [],
  },
  environment: {
    userAgent: 'test',
    platform: 'test',
    language: 'vi',
    hardwareConcurrency: 8,
    deviceMemoryGiB: 8,
  },
} satisfies ExportBenchmarkResult

const reservation: ReservationResult = {
  ok: true,
  reservation: {
    reservationId: 'r-1',
    grantedHeight: 720,
    watermarkRequired: true,
    expiresAtUtc: '2026-01-01T00:00:00Z',
    exportsRemaining: 2,
    exportsPerMonth: 3,
  },
}

function run(overrides: Partial<Parameters<typeof exportProject>[0]> = {}) {
  return exportProject({
    project,
    assets: new Map(),
    resolution: '720p',
    path: 'buffer',
    filename: 'video.mp4',
    ...overrides,
  })
}

beforeEach(() => {
  vi.mocked(checkEncoderSupport).mockResolvedValue({ supported: true })
  vi.mocked(checkStorageBudget).mockResolvedValue({
    ok: true,
    estimatedBytes: 1,
    availableBytes: null,
  })
  vi.mocked(reserveExport).mockResolvedValue(reservation)
  vi.mocked(runExport).mockResolvedValue({
    status: 'done',
    blob: new Blob(['mp4']),
    path: 'buffer',
    result: benchmark,
  } satisfies ExportOutcome)
  vi.mocked(completeExport).mockClear().mockResolvedValue(true)
  vi.mocked(cancelExport).mockClear().mockResolvedValue(true)
})

describe('exportProject', () => {
  it('completes the reservation after a successful encode', async () => {
    const result = await run()

    expect(result.status).toBe('done')
    expect(completeExport).toHaveBeenCalledWith('r-1')
    expect(cancelExport).not.toHaveBeenCalled()
  })

  it('returns the slot when the user cancels', async () => {
    vi.mocked(runExport).mockResolvedValue({ status: 'cancelled' })

    const result = await run()

    expect(result.status).toBe('cancelled')
    expect(cancelExport).toHaveBeenCalledWith('r-1')
    expect(completeExport).not.toHaveBeenCalled()
  })

  it('returns the slot when the encode fails', async () => {
    vi.mocked(runExport).mockResolvedValue({
      status: 'error',
      message: 'encoder hỏng',
    })

    const result = await run()

    expect(result).toEqual({ status: 'failed', message: 'encoder hỏng' })
    expect(cancelExport).toHaveBeenCalledWith('r-1')
  })

  it('returns the slot even when the export throws outright', async () => {
    vi.mocked(runExport).mockRejectedValue(new Error('worker chết'))

    await expect(run()).rejects.toThrow('worker chết')
    // The slot must not be stranded waiting for the server to expire it.
    expect(cancelExport).toHaveBeenCalledWith('r-1')
  })

  it('never reserves when the project still has blocking errors', async () => {
    const broken = { ...project, scenes: project.scenes.slice(0, 2) }

    const result = await run({ project: broken })

    expect(result).toMatchObject({ status: 'refused', code: 'invalid-project' })
    expect(reserveExport).not.toHaveBeenCalled()
  })

  it('never reserves when the browser cannot encode the format', async () => {
    vi.mocked(checkEncoderSupport).mockResolvedValue({
      supported: false,
      reason: 'không hỗ trợ',
    })

    const result = await run()

    expect(result).toMatchObject({ status: 'refused', code: 'encoder' })
    expect(reserveExport).not.toHaveBeenCalled()
  })

  it('never reserves when there is no room for the file', async () => {
    vi.mocked(checkStorageBudget).mockResolvedValue({
      ok: false,
      estimatedBytes: 100,
      availableBytes: 1,
      reason: 'hết chỗ',
    })

    const result = await run()

    expect(result).toMatchObject({ status: 'refused', code: 'storage' })
    expect(reserveExport).not.toHaveBeenCalled()
  })

  it('reports the server refusal rather than encoding anyway', async () => {
    vi.mocked(reserveExport).mockResolvedValue({
      ok: false,
      refusal: { code: 'quota', message: 'Hết lượt xuất' },
    })

    const result = await run()

    expect(result).toEqual({
      status: 'refused',
      code: 'entitlement',
      message: 'Hết lượt xuất',
    })
    expect(runExport).not.toHaveBeenCalled()
  })

  it('encodes what the server granted, not what the UI asked for', async () => {
    // The user picked 1080p but the plan only grants 720p with a watermark.
    const result = await run({ resolution: '1080p' })

    expect(vi.mocked(runExport).mock.calls[0][0]).toMatchObject({
      resolution: '720p',
      watermark: true,
    })
    expect(result).toMatchObject({ status: 'done', resolution: '720p' })
  })

  it('keeps one idempotency key for the attempt it was given', async () => {
    await run({ idempotencyKey: 'attempt-7' })

    expect(reserveExport).toHaveBeenCalledWith('attempt-7', 720)
  })
})
