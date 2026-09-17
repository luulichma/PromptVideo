import type { ProjectDocumentV1 } from '../project/schema'
import type { RenderAssets, RenderImageSource } from '../rendering/renderer'
import type { ExportResolution } from './encoderSupport'
import type { ExportPath } from './outputTarget'
import type { ExportBenchmarkResult } from './exportMp4'
import type { ExportRequest, ExportResponse } from './exportWorker'

export type ExportProgress = {
  completedFrames: number
  totalFrames: number
  ratio: number
  elapsedMs: number
  /** Null until enough frames are done for the estimate to mean anything. */
  remainingMs: number | null
}

export type RunExportOptions = {
  project: ProjectDocumentV1
  assets: RenderAssets
  resolution: ExportResolution
  watermark: boolean
  path: ExportPath
  filename: string
  fileHandle?: FileSystemFileHandle
  signal?: AbortSignal
  onProgress?: (progress: ExportProgress) => void
}

export type ExportOutcome =
  | {
      status: 'done'
      blob: Blob
      path: ExportPath
      result: ExportBenchmarkResult
    }
  | { status: 'cancelled' }
  | { status: 'error'; message: string }

/**
 * Live workers, for the leak test to read.
 *
 * Every export must return this to zero, cancelled or not. A worker left
 * running keeps an encoder and a file handle alive, and the symptom of getting
 * that wrong is not a failure but a tab that slowly gets heavier.
 */
let activeWorkers = 0

export function getActiveExportWorkerCount(): number {
  return activeWorkers
}

/** Ignore the first frames: the encoder is still warming up and would lie. */
const MIN_FRAMES_FOR_ESTIMATE = 10

function estimateRemainingMs(
  completedFrames: number,
  totalFrames: number,
  elapsedMs: number,
): number | null {
  if (completedFrames < MIN_FRAMES_FOR_ESTIMATE) return null
  const perFrame = elapsedMs / completedFrames
  return Math.max(0, Math.round(perFrame * (totalFrames - completedFrames)))
}

/**
 * Copies the project's images so the originals survive the transfer.
 *
 * ImageBitmaps are transferable, and transferring the editor's own copies would
 * leave the preview drawing from closed bitmaps the moment an export starts.
 */
async function cloneAssets(
  assets: RenderAssets,
): Promise<[string, ImageBitmap][]> {
  const entries: [string, ImageBitmap][] = []
  for (const [id, source] of assets) {
    entries.push([id, await createImageBitmap(source as RenderImageSource)])
  }
  return entries
}

/**
 * Runs one export in a worker and resolves with its outcome.
 *
 * Cancellation, failure and success all land in the same place: the worker is
 * terminated in `finally`, so there is no path out of this function that leaves
 * one behind.
 */
export async function runExport(
  options: RunExportOptions,
): Promise<ExportOutcome> {
  const assets = await cloneAssets(options.assets)

  const worker = new Worker(new URL('./exportWorker.ts', import.meta.url), {
    type: 'module',
  })
  activeWorkers += 1

  const startedAt = performance.now()
  let onAbort: (() => void) | null = null
  let transferred = false

  try {
    return await new Promise<ExportOutcome>((resolve) => {
      worker.onmessage = (event: MessageEvent<ExportResponse>) => {
        const message = event.data
        if (message.type === 'progress') {
          const elapsedMs = performance.now() - startedAt
          options.onProgress?.({
            completedFrames: message.completedFrames,
            totalFrames: message.totalFrames,
            ratio: message.completedFrames / message.totalFrames,
            elapsedMs,
            remainingMs: estimateRemainingMs(
              message.completedFrames,
              message.totalFrames,
              elapsedMs,
            ),
          })
          return
        }

        if (message.type === 'done') {
          resolve({
            status: 'done',
            blob: message.blob,
            path: message.path,
            result: message.result,
          })
        } else if (message.type === 'cancelled') {
          resolve({ status: 'cancelled' })
        } else {
          resolve({ status: 'error', message: message.message })
        }
      }

      worker.onerror = (event) =>
        resolve({
          status: 'error',
          message: event.message || 'Worker xuất video gặp lỗi không xác định.',
        })

      const cancel: ExportRequest = { type: 'cancel' }
      onAbort = () => worker.postMessage(cancel)
      if (options.signal?.aborted) {
        // Already cancelled before the worker got going; do not start at all.
        resolve({ status: 'cancelled' })
        return
      }
      options.signal?.addEventListener('abort', onAbort)

      const start: ExportRequest = {
        type: 'start',
        project: options.project,
        assets,
        resolution: options.resolution,
        watermark: options.watermark,
        path: options.path,
        filename: options.filename,
        fileHandle: options.fileHandle,
      }
      worker.postMessage(
        start,
        assets.map(([, bitmap]) => bitmap),
      )
      transferred = true
    })
  } finally {
    if (onAbort) options.signal?.removeEventListener('abort', onAbort)
    // Copies that never reached the worker are ours to release; transferred
    // ones now belong to it and closing them here would throw.
    if (!transferred) for (const [, bitmap] of assets) bitmap.close()
    worker.terminate()
    activeWorkers -= 1
  }
}
