/// <reference lib="webworker" />

import type { CapabilityReport } from '../capabilities/probe'
import { loadBundledFontsInto } from '../rendering/fonts'
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

/** Holds the encoder between frames; nothing is lost while paused. */
export type ExportPauseMessage = { type: 'pause' } | { type: 'resume' }

export type ExportRequest =
  ExportStartMessage | ExportCancelMessage | ExportPauseMessage

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

/** Resolves the wait of a paused export; null while running. */
let paused: { promise: Promise<void>; resume: () => void } | null = null

function pause(): void {
  if (paused) return
  let resume = () => {}
  const promise = new Promise<void>((resolve) => {
    resume = resolve
  })
  paused = { promise, resume }
}

function resume(): void {
  paused?.resume()
  paused = null
}

/** Called between frames; returns at once unless the user paused. */
async function waitWhilePaused(): Promise<void> {
  while (paused) await paused.promise
}

/**
 * The worker has no stylesheet, so the bundled font is registered here once.
 * Without it the export would draw in a system fallback and wrap differently
 * from the preview.
 */
let fontsLoaded: Promise<void> | null = null

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
    fontsLoaded ??= loadBundledFontsInto(scope.fonts)
    await fontsLoaded

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
        waitWhilePaused,
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
    resume()
  }
}

scope.onmessage = (event: MessageEvent<ExportRequest>) => {
  if (event.data.type === 'cancel') {
    controller?.abort()
    // A paused export must wake up to notice it was cancelled.
    resume()
    return
  }
  if (event.data.type === 'pause') {
    pause()
    return
  }
  if (event.data.type === 'resume') {
    resume()
    return
  }

  void run(event.data)
}
