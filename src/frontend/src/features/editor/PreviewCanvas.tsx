import { useEffect, useRef, useState } from 'react'
import type { ProjectDocumentV1 } from '../../core/project/schema'
import { getProjectDuration } from '../../core/project/timeline'
import { renderFrame, type RenderAssets } from '../../core/rendering/renderer'

type PreviewCanvasProps = {
  project: ProjectDocumentV1
  assets: RenderAssets
  timestampSeconds: number
  watermark: boolean
  onTimestampChange: (seconds: number) => void
}

/**
 * Draws the preview through the same renderFrame the exporter uses, so what is
 * on screen is the export, not an approximation of it.
 */
export function PreviewCanvas({
  project,
  assets,
  timestampSeconds,
  watermark,
  onTimestampChange,
}: PreviewCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [playing, setPlaying] = useState(false)
  const [showSafeArea, setShowSafeArea] = useState(false)
  const duration = getProjectDuration(project)

  // The only way rendering can fail is an image whose bytes are not loaded yet,
  // so it is derived here rather than caught in the effect. That keeps the
  // effect a pure "draw to an external surface" step with no state to set.
  const missingAssetCount = project.scenes
    .flatMap((scene) => scene.layers)
    .filter(
      (layer) => layer.type === 'image' && !assets.has(layer.assetId),
    ).length
  const error =
    missingAssetCount > 0
      ? `Đang tải ${missingAssetCount} ảnh của project…`
      : null

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d')
    if (!context || missingAssetCount > 0) return
    renderFrame(project, timestampSeconds, context, { assets, watermark })
  }, [project, assets, timestampSeconds, watermark, missingAssetCount])

  useEffect(() => {
    if (!playing) return

    let frame = 0
    let previous = performance.now()
    const step = (now: number) => {
      const next = timestampSeconds + (now - previous) / 1000
      previous = now
      if (next >= duration) {
        setPlaying(false)
        onTimestampChange(duration)
        return
      }
      onTimestampChange(next)
      frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [playing, timestampSeconds, duration, onTimestampChange])

  const { top, bottom, left, right } = project.safeArea

  return (
    <div className="space-y-3">
      {/*
        The guide is a DOM overlay, not something renderFrame draws. Preview and
        export share that one function precisely so their pixels are identical,
        and an editing aid that reached the encoder would break the guarantee.
      */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={project.width}
          height={project.height}
          aria-label="Xem trước video"
          data-testid="preview-canvas"
          className="w-full rounded-lg border border-slate-300 bg-black"
        />
        {showSafeArea && (
          <div
            data-testid="safe-area-guide"
            aria-hidden="true"
            className="pointer-events-none absolute border border-dashed border-sky-300/80"
            style={{
              top: `${top * 100}%`,
              bottom: `${bottom * 100}%`,
              left: `${left * 100}%`,
              right: `${right * 100}%`,
            }}
          />
        )}
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setPlaying((value) => !value)}
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium hover:bg-slate-100"
        >
          {playing ? 'Tạm dừng' : 'Phát'}
        </button>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={showSafeArea}
            onChange={(event) => setShowSafeArea(event.target.checked)}
          />
          <span className="whitespace-nowrap">Vùng an toàn</span>
        </label>
        <label className="flex flex-1 items-center gap-3 text-sm">
          <span className="whitespace-nowrap">Thời điểm</span>
          <input
            type="range"
            min={0}
            max={duration}
            step={1 / project.fps}
            value={Math.min(timestampSeconds, duration)}
            onChange={(event) => {
              setPlaying(false)
              onTimestampChange(Number(event.target.value))
            }}
            className="flex-1"
            aria-label="Vị trí trên timeline"
          />
          <output className="w-24 tabular-nums text-right">
            {timestampSeconds.toFixed(2)}s / {duration.toFixed(0)}s
          </output>
        </label>
      </div>
    </div>
  )
}
