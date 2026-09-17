import { CanvasSource, Mp4OutputFormat, Output, Quality } from 'mediabunny'
import type { CapabilityReport } from '../capabilities/probe'
import type { ProjectDocumentV1 } from '../project/schema'
import { getProjectDuration, getTotalFrames } from '../project/timeline'
import { renderProjectFrame, type RenderAssets } from '../rendering/renderer'
import { prepareOutputTarget, type ExportPath } from './outputTarget'
import { validateMp4, type Mp4Validation } from './validateMp4'

type PerformanceWithMemory = Performance & {
  memory?: { usedJSHeapSize: number }
}

export type ExportResolution = '720p' | '1080p'

export type ExportOptions = {
  path: ExportPath
  resolution: ExportResolution
  watermark: boolean
  filename: string
  signal?: AbortSignal
  onProgress?: (completedFrames: number, totalFrames: number) => void
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

function getResolution(resolution: ExportResolution) {
  return resolution === '1080p'
    ? { width: 1920, height: 1080, bitrate: 8_000_000 }
    : { width: 1280, height: 720, bitrate: 4_000_000 }
}

export async function exportProjectMp4(
  canvas: HTMLCanvasElement,
  project: ProjectDocumentV1,
  assets: RenderAssets,
  environment: CapabilityReport['browser'],
  options: ExportOptions,
): Promise<{ blob: Blob; result: ExportBenchmarkResult }> {
  const outputTarget = await prepareOutputTarget(options.path, options.filename)
  const output = new Output({
    format: new Mp4OutputFormat({ fastStart: false }),
    target: outputTarget.target,
  })
  const resolution = getResolution(options.resolution)
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
        canvas.getContext('2d')!,
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
