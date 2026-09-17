import { useCallback, useRef, useState } from 'react'
import {
  allowedResolutions,
  type ExportResolution,
} from '../../core/export/encoderSupport'
import type { ExportProgress } from '../../core/export/exportClient'
import { exportProject } from '../../core/export/exportProject'
import {
  downloadBlob,
  pickExportFile,
  type ExportPath,
} from '../../core/export/outputTarget'
import type { ProjectDocumentV1 } from '../../core/project/schema'
import type { RenderAssets } from '../../core/rendering/renderer'
import type { CapabilityState } from '../account/useCapabilities'

type ExportPanelProps = {
  project: ProjectDocumentV1
  assets: RenderAssets
  capabilities: CapabilityState
  /** True while the project still has blocking validation errors. */
  blocked: boolean
}

type PanelState =
  | { phase: 'idle' }
  | { phase: 'running'; progress: ExportProgress | null }
  | { phase: 'done'; blob: Blob; path: ExportPath; watermark: boolean }
  | { phase: 'cancelled' }
  | { phase: 'error'; message: string }

function formatDuration(ms: number): string {
  const seconds = Math.ceil(ms / 1000)
  if (seconds < 60) return `${seconds} giây`
  return `${Math.floor(seconds / 60)} phút ${String(seconds % 60).padStart(2, '0')} giây`
}

function formatSize(bytes: number): string {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

/**
 * Chooses where the file is written.
 *
 * OPFS is the default because it streams — nothing large is held in memory —
 * and costs the user no dialog. Saving straight to a chosen file streams too
 * and avoids the final copy into Downloads, but it needs a picker, so it is
 * offered rather than imposed. The in-memory buffer is the last resort: it must
 * hold the whole video at once, and only a browser without OPFS needs it.
 */
function preferredPath(saveToFile: boolean): ExportPath {
  if (saveToFile && typeof window !== 'undefined' && window.showSaveFilePicker)
    return 'file'
  if (typeof navigator?.storage?.getDirectory === 'function') return 'opfs'
  return 'buffer'
}

const canPickFile = (): boolean =>
  typeof window !== 'undefined' && Boolean(window.showSaveFilePicker)

export function ExportPanel({
  project,
  assets,
  capabilities,
  blocked,
}: ExportPanelProps) {
  const [state, setState] = useState<PanelState>({ phase: 'idle' })
  const [resolution, setResolution] = useState<ExportResolution>('720p')
  const [saveToFile, setSaveToFile] = useState(false)
  const abortRef = useRef<AbortController | null>(null)

  const ready = capabilities.status === 'ready' ? capabilities : null
  const choices = ready
    ? allowedResolutions(ready.capabilities.maxExportHeight)
    : ['720p' as const]
  const running = state.phase === 'running'

  const filename = `${project.name.replace(/\s+/g, '-') || 'video'}.mp4`

  const handleExport = useCallback(async () => {
    // The save dialog needs the click's user activation, so it is opened before
    // anything else is awaited. A cancelled dialog is not an error.
    const path = preferredPath(saveToFile)
    let fileHandle: FileSystemFileHandle | undefined
    if (path === 'file') {
      try {
        fileHandle = await pickExportFile(filename)
      } catch {
        return
      }
    }

    const controller = new AbortController()
    abortRef.current = controller
    setState({ phase: 'running', progress: null })

    const result = await exportProject({
      project,
      assets,
      resolution,
      path,
      filename,
      fileHandle,
      signal: controller.signal,
      onProgress: (progress) => setState({ phase: 'running', progress }),
    })

    abortRef.current = null

    if (result.status === 'done') {
      setState({
        phase: 'done',
        blob: result.blob,
        path: result.path,
        watermark: result.watermark,
      })
    } else if (result.status === 'cancelled') {
      setState({ phase: 'cancelled' })
    } else {
      setState({ phase: 'error', message: result.message })
    }
  }, [project, assets, resolution, filename, saveToFile])

  const quota = ready?.capabilities

  return (
    <section
      aria-labelledby="export-heading"
      data-testid="export-panel"
      className="space-y-3 rounded-lg border border-slate-200 bg-white p-4"
    >
      <h2 id="export-heading" className="text-sm font-semibold">
        Xuất video
      </h2>

      {quota && (
        <p className="text-xs text-slate-600">
          Gói {quota.planName} · tối đa {quota.maxExportHeight}p ·{' '}
          {quota.hasUnlimitedExports
            ? 'không giới hạn lượt xuất'
            : `còn ${quota.exportsRemaining ?? 0}/${quota.exportsPerMonth ?? 0} lượt tháng này`}
          {quota.watermarkRequired ? ' · có watermark' : ''}
        </p>
      )}

      {capabilities.status === 'anonymous' && (
        <p className="text-xs text-amber-800">
          Hãy đăng nhập để xuất video. Mọi thao tác biên tập vẫn lưu trên máy
          bạn.
        </p>
      )}

      <label className="flex items-center gap-3 text-sm">
        <span className="font-medium">Độ phân giải</span>
        <select
          value={resolution}
          disabled={running}
          onChange={(event) =>
            setResolution(event.target.value as ExportResolution)
          }
          className="rounded-md border border-slate-300 px-3 py-2"
        >
          {choices.map((choice) => (
            <option key={choice} value={choice}>
              {choice}
            </option>
          ))}
        </select>
      </label>

      {canPickFile() && (
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={saveToFile}
            disabled={running}
            onChange={(event) => setSaveToFile(event.target.checked)}
          />
          <span>Lưu thẳng vào tệp</span>
        </label>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => void handleExport()}
          disabled={running || blocked}
          data-testid="export-start"
          className="rounded-md bg-sky-700 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-40"
        >
          Xuất MP4
        </button>
        {running && (
          <button
            type="button"
            onClick={() => abortRef.current?.abort()}
            data-testid="export-cancel"
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm"
          >
            Hủy
          </button>
        )}
        {state.phase === 'done' && (
          <button
            type="button"
            onClick={() => downloadBlob(state.blob, filename)}
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm"
          >
            Tải xuống
          </button>
        )}
      </div>

      {blocked && (
        <p className="text-xs text-red-700">
          Project còn lỗi cần sửa trước khi xuất.
        </p>
      )}

      {running && (
        <div data-testid="export-progress" className="space-y-1">
          <progress
            value={state.progress?.ratio ?? 0}
            max={1}
            className="w-full"
            aria-label="Tiến độ xuất video"
          />
          <p className="text-xs text-slate-600">
            {state.progress
              ? `${state.progress.completedFrames}/${state.progress.totalFrames} frame` +
                (state.progress.remainingMs !== null
                  ? ` · còn khoảng ${formatDuration(state.progress.remainingMs)}`
                  : '')
              : 'Đang chuẩn bị…'}
          </p>
        </div>
      )}

      {state.phase === 'done' && (
        <p
          role="status"
          data-testid="export-done"
          className="text-xs text-emerald-700"
        >
          Đã tạo MP4 {formatSize(state.blob.size)}
          {state.watermark ? ' (có watermark)' : ''}.
        </p>
      )}

      {state.phase === 'cancelled' && (
        <p
          role="status"
          data-testid="export-cancelled"
          className="text-xs text-slate-600"
        >
          Đã hủy xuất video. Lượt xuất của bạn được hoàn lại.
        </p>
      )}

      {state.phase === 'error' && (
        <p
          role="alert"
          data-testid="export-error"
          className="text-xs text-red-700"
        >
          {state.message}
        </p>
      )}
    </section>
  )
}
