/// <reference lib="webworker" />

import type { CapabilityReport } from '../capabilities/probe'
import type { ProjectDocumentV1 } from '../project/schema'
import { exportProjectMp4, type ExportBenchmarkResult } from './exportMp4'
import type { ExportResolution } from './encoderSupport'
import type { ExportPath } from './outputTarget'

/**
 * The export runs here so a sixty second encode cannot freeze the editor.
 *
 * Only commands and progress cross the boundary. Frames never do: the worker
 * owns its OffscreenCanvas and draws into it, so no bitmap is copied per frame.
 * The images a project uses are transferred once, at start.
 */

export type ExportStartMessage = {
  type: 'start'
  project: ProjectDocumentV1
  /** Asset id → decoded image, transferred into the worker. */
  assets: [string, ImageBitmap][]
  resolution: ExportResolution
  watermark: boolean
  path: ExportPath
  filename: string
  fileHandle?: FileSystemFileHandle
}

export type ExportCancelMessage = { type: 'cancel' }

export type ExportRequest = ExportStartMessage | ExportCancelMessage

export type ExportResponse =
  | { type: 'progress'; completedFrames: number; totalFrames: number }
  | {
      type: 'done'
      blob: Blob
      path: ExportPath
      /** Timing, peak heap and container checks, measured where it happened. */
      result: ExportBenchmarkResult
    }
  | { type: 'cancelled' }
  | { type: 'error'; message: string }

const scope = self as unknown as DedicatedWorkerGlobalScope

type NavigatorWithDeviceMemory = WorkerNavigator & { deviceMemory?: number }

/** The worker reports its own environment; nothing is passed in to be wrong. */
function describeEnvironment(): CapabilityReport['browser'] {
  const nav = navigator as NavigatorWithDeviceMemory
  return {
    userAgent: nav.userAgent,
    platform: 'platform' in nav ? String(nav.platform) : '',
    language: nav.language,
    hardwareConcurrency: nav.hardwareConcurrency ?? null,
    deviceMemoryGiB: nav.deviceMemory ?? null,
  }
}

let controller: AbortController | null = null

function post(message: ExportResponse): void {
  scope.postMessage(message)
}

async function run(message: ExportStartMessage): Promise<void> {
  controller = new AbortController()
  const assets = new Map<string, ImageBitmap>(message.assets)
  // Sized to the project, not the output: the renderer works in project
  // coordinates and Mediabunny scales to the target resolution as it encodes.
  const canvas = new OffscreenCanvas(
    message.project.width,
    message.project.height,
  )

  try {
    const { blob, result } = await exportProjectMp4(
      canvas,
      message.project,
      assets,
      describeEnvironment(),
      {
        path: message.path,
        resolution: message.resolution,
        watermark: message.watermark,
        filename: message.filename,
        fileHandle: message.fileHandle,
        signal: controller.signal,
        onProgress: (completedFrames, totalFrames) =>
          post({ type: 'progress', completedFrames, totalFrames }),
      },
    )

    post({ type: 'done', blob, path: message.path, result })
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      post({ type: 'cancelled' })
      return
    }
    post({
      type: 'error',
      message: error instanceof Error ? error.message : String(error),
    })
  } finally {
    // Decoded images are the largest thing the worker holds; releasing them
    // here is what keeps three start-cancel cycles from growing memory.
    for (const [, bitmap] of assets) bitmap.close()
    controller = null
  }
}

scope.onmessage = (event: MessageEvent<ExportRequest>) => {
  if (event.data.type === 'cancel') {
    controller?.abort()
    return
  }

  void run(event.data)
}
