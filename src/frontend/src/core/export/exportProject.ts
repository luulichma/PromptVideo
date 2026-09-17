import type { ProjectDocumentV1 } from '../project/schema'
import { getProjectDuration } from '../project/timeline'
import { isProjectExportable } from '../project/validation'
import type { RenderAssets } from '../rendering/renderer'
import {
  RESOLUTIONS,
  checkEncoderSupport,
  type ExportResolution,
} from './encoderSupport'
import { runExport, type ExportProgress } from './exportClient'
import type { ExportBenchmarkResult } from './exportMp4'
import type { ExportPath } from './outputTarget'
import {
  cancelExport,
  completeExport,
  reserveExport,
  type ExportReservation,
} from './reservation'
import { checkStorageBudget } from './storageBudget'

export type ExportRefusalCode =
  'invalid-project' | 'encoder' | 'storage' | 'entitlement'

export type ExportProjectResult =
  | {
      status: 'done'
      blob: Blob
      path: ExportPath
      resolution: ExportResolution
      watermark: boolean
      reservation: ExportReservation
      result: ExportBenchmarkResult
    }
  | { status: 'cancelled' }
  | { status: 'refused'; code: ExportRefusalCode; message: string }
  | { status: 'failed'; message: string }

export type ExportProjectOptions = {
  project: ProjectDocumentV1
  assets: RenderAssets
  resolution: ExportResolution
  path: ExportPath
  filename: string
  fileHandle?: FileSystemFileHandle
  signal?: AbortSignal
  onProgress?: (progress: ExportProgress) => void
  /**
   * Identifies this attempt to the server. The caller keeps it stable across
   * retries of the same attempt so a lost response cannot cost a second slot.
   */
  idempotencyKey?: string
}

/**
 * One export, from permission to file.
 *
 * The order is deliberate: everything that can refuse locally — a project that
 * will not render, a codec the browser lacks, a disk with no room — is settled
 * before the server is asked for a slot. Quota is the scarce thing here, and
 * spending it to discover a problem we could have seen for free is the failure
 * mode worth designing against.
 *
 * Once a slot is held, every exit settles it. Success completes it; anything
 * else returns it.
 */
export async function exportProject(
  options: ExportProjectOptions,
): Promise<ExportProjectResult> {
  const { project, resolution } = options

  if (!isProjectExportable(project)) {
    return {
      status: 'refused',
      code: 'invalid-project',
      message: 'Hãy sửa các lỗi của project trước khi xuất video.',
    }
  }

  const encoder = await checkEncoderSupport(resolution, project.fps)
  if (!encoder.supported) {
    return { status: 'refused', code: 'encoder', message: encoder.reason }
  }

  const budget = await checkStorageBudget(
    resolution,
    getProjectDuration(project),
  )
  if (!budget.ok) {
    return { status: 'refused', code: 'storage', message: budget.reason }
  }

  const reserved = await reserveExport(
    options.idempotencyKey ?? crypto.randomUUID(),
    RESOLUTIONS[resolution].height,
  )
  if (!reserved.ok) {
    return {
      status: 'refused',
      code: 'entitlement',
      message: reserved.refusal.message,
    }
  }

  const { reservation } = reserved
  // The server decides the height and the watermark, not the UI. A client that
  // asked for 1080p and was granted 720p must encode what it was granted.
  const granted =
    (Object.keys(RESOLUTIONS) as ExportResolution[]).find(
      (name) => RESOLUTIONS[name].height === reservation.grantedHeight,
    ) ?? resolution

  let settled = false
  try {
    const outcome = await runExport({
      project,
      assets: options.assets,
      resolution: granted,
      watermark: reservation.watermarkRequired,
      path: options.path,
      filename: options.filename,
      fileHandle: options.fileHandle,
      signal: options.signal,
      onProgress: options.onProgress,
    })

    if (outcome.status === 'done') {
      settled = true
      await completeExport(reservation.reservationId)
      return {
        status: 'done',
        blob: outcome.blob,
        path: outcome.path,
        resolution: granted,
        watermark: reservation.watermarkRequired,
        reservation,
        result: outcome.result,
      }
    }

    settled = true
    await cancelExport(reservation.reservationId)
    return outcome.status === 'cancelled'
      ? { status: 'cancelled' }
      : { status: 'failed', message: outcome.message }
  } finally {
    // A throw between reserving and settling would otherwise strand the slot
    // until the server expires it, which the user experiences as a lost export.
    if (!settled) await cancelExport(reservation.reservationId)
  }
}
