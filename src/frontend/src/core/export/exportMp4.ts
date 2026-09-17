import { CanvasSource, Mp4OutputFormat, Output, Quality } from 'mediabunny'
import type { CapabilityReport } from '../capabilities/probe'
import type { ProjectDocumentV1 } from '../project/schema'
import { getProjectDuration, getTotalFrames } from '../project/timeline'
import {
  renderProjectFrame,
  type RenderAssets,
  type RenderContext,
} from '../rendering/renderer'
import { RESOLUTIONS, type ExportResolution } from './encoderSupport'
import { prepareOutputTarget, type ExportPath } from './outputTarget'
import { validateMp4, type Mp4Validation } from './validateMp4'

/** Preview draws to a canvas element, the export worker to an OffscreenCanvas. */
export type EncodeSurface = HTMLCanvasElement | OffscreenCanvas

type PerformanceWithMemory = Performance & {
  memory?: { usedJSHeapSize: number }
}

export type { ExportResolution }

export type ExportOptions = {
  path: ExportPath
  resolution: ExportResolution
  watermark: boolean
  filename: string
  signal?: AbortSignal
  onProgress?: (completedFrames: number, totalFrames: number) => void
  /** Obtained on the main thread; the worker cannot open a file picker. */
  fileHandle?: FileSystemFileHandle
}

export type ExportBenchmarkResult = {
  capturedAt: string
  projectId: string
  outputPath: ExportPath
  resolution: ExportResolution
  watermark: boolean
  elapsedMilliseconds: number
  peakJsHeapBytes: number | null
  fileSizeBytes: number
  validation: Mp4Validation
  environment: CapabilityReport['browser']
}

function readHeapBytes(): number | null {
  return (performance as PerformanceWithMemory).memory?.usedJSHeapSize ?? null
}

export async function exportProjectMp4(
  canvas: EncodeSurface,
  project: ProjectDocumentV1,
  assets: RenderAssets,
  environment: CapabilityReport['browser'],
  options: ExportOptions,
): Promise<{ blob: Blob; result: ExportBenchmarkResult }> {
  const outputTarget = await prepareOutputTarget(
    options.path,
    options.filename,
    options.fileHandle,
  )
  const output = new Output({
    format: new Mp4OutputFormat({ fastStart: false }),
    target: outputTarget.target,
  })
  const resolution = RESOLUTIONS[options.resolution]
  const videoSource = new CanvasSource(canvas, {
    codec: 'avc',
    quality: new Quality({ bitrate: resolution.bitrate }),
    keyFrameInterval: 2,
    transform: {
      width: resolution.width,
      height: resolution.height,
      fit: 'fill',
    },
  })
  const totalFrames = getTotalFrames(project)
  output.addVideoTrack(videoSource, { frameRate: project.fps })
  const startedAt = performance.now()
  let peakJsHeapBytes = readHeapBytes()

  try {
    await output.start()
    for (let frameIndex = 0; frameIndex < totalFrames; frameIndex += 1) {
      if (options.signal?.aborted)
        throw new DOMException('Export đã hủy', 'AbortError')
      renderProjectFrame(
        canvas.getContext('2d') as RenderContext,
        project,
        frameIndex,
        assets,
        options.watermark,
      )
      await videoSource.add(frameIndex / project.fps, 1 / project.fps, {
        keyFrame: frameIndex % (project.fps * 2) === 0,
      })
      if (frameIndex % 15 === 0 || frameIndex === totalFrames - 1) {
        const heapBytes = readHeapBytes()
        if (heapBytes !== null)
          peakJsHeapBytes = Math.max(peakJsHeapBytes ?? 0, heapBytes)
        options.onProgress?.(frameIndex + 1, totalFrames)
      }
    }
    await output.finalize()
  } catch (error) {
    // Cancel releases the encoder and the partially written file. Without it a
    // cancelled export leaves a worker holding both until the tab is closed.
    if (output.state === 'started') await output.cancel()
    throw error
  }

  const blob = await outputTarget.finish()
  const validation = await validateMp4(
    blob,
    getProjectDuration(project),
    project.fps,
  )
  return {
    blob,
    result: {
      capturedAt: new Date().toISOString(),
      projectId: project.id,
      outputPath: outputTarget.path,
      resolution: options.resolution,
      watermark: options.watermark,
      elapsedMilliseconds: performance.now() - startedAt,
      peakJsHeapBytes,
      fileSizeBytes: blob.size,
      validation,
      environment,
    },
  }
}
