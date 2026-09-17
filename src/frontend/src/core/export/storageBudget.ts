import { RESOLUTIONS, type ExportResolution } from './encoderSupport'

/**
 * Generous multiple of the nominal bitrate.
 *
 * The encoder overshoots on complex frames and the container adds its own
 * overhead, so budgeting the exact bitrate would let an export fill the quota
 * at the last frame — the most expensive possible moment to fail.
 */
const SIZE_MARGIN = 1.6

/** Never start an export that would leave the origin with less than this. */
const RESERVE_BYTES = 64 * 1024 * 1024

export type StorageBudget =
  | { ok: true; estimatedBytes: number; availableBytes: number | null }
  | {
      ok: false
      estimatedBytes: number
      availableBytes: number
      reason: string
    }

export function estimateOutputBytes(
  resolution: ExportResolution,
  durationSeconds: number,
): number {
  return Math.ceil(
    (RESOLUTIONS[resolution].bitrate / 8) * durationSeconds * SIZE_MARGIN,
  )
}

function formatMegabytes(bytes: number): string {
  return `${(bytes / 1024 / 1024).toFixed(0)} MB`
}

/**
 * Checks there is room for the file before a single frame is encoded.
 *
 * Running out of space at the end wastes the whole encode and, on the buffer
 * path, does it while the entire video is resident in memory. Asking first
 * costs one call and turns a crash into a sentence the user can act on.
 *
 * A browser that will not estimate is not treated as a failure: refusing to
 * export because we could not measure would be worse than trying and reporting
 * a real error if it happens.
 */
export async function checkStorageBudget(
  resolution: ExportResolution,
  durationSeconds: number,
): Promise<StorageBudget> {
  const estimatedBytes = estimateOutputBytes(resolution, durationSeconds)

  if (typeof navigator === 'undefined' || !navigator.storage?.estimate) {
    return { ok: true, estimatedBytes, availableBytes: null }
  }

  let quota: number | undefined
  let usage: number | undefined
  try {
    ;({ quota, usage } = await navigator.storage.estimate())
  } catch {
    return { ok: true, estimatedBytes, availableBytes: null }
  }

  if (quota === undefined || usage === undefined) {
    return { ok: true, estimatedBytes, availableBytes: null }
  }

  const availableBytes = Math.max(0, quota - usage)
  if (availableBytes < estimatedBytes + RESERVE_BYTES) {
    return {
      ok: false,
      estimatedBytes,
      availableBytes,
      reason: `Video ${resolution} cần khoảng ${formatMegabytes(
        estimatedBytes,
      )} nhưng trình duyệt chỉ còn ${formatMegabytes(
        availableBytes,
      )} trống. Hãy xoá bớt project hoặc ảnh rồi thử lại.`,
    }
  }

  return { ok: true, estimatedBytes, availableBytes }
}
