import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { checkBrowserSupport } from '../../core/capabilities/browserSupport'
import {
  allowedResolutions,
  type ExportResolution,
} from '../../core/export/encoderSupport'
import type {
  ExportControls,
  ExportProgress,
} from '../../core/export/exportClient'
import { exportProject } from '../../core/export/exportProject'
import {
  downloadBlob,
  pickExportFile,
  type ExportPath,
} from '../../core/export/outputTarget'
import type { OverflowCheck } from '../../core/project/validation'
import type { ProjectDocumentV1 } from '../../core/project/schema'
import type { RenderAssets } from '../../core/rendering/renderer'
import { SignInForm } from '../account/SignInForm'
import {
  refreshCapabilities,
  type CapabilityState,
} from '../account/useCapabilities'

type ExportPanelProps = {
  project: ProjectDocumentV1
  assets: RenderAssets
  capabilities: CapabilityState
  /** True while the project still has blocking validation errors. */
  blocked: boolean
  isOverflowing?: OverflowCheck
}

type PanelState =
  | { phase: 'idle' }
  | { phase: 'sign-in' }
  | { phase: 'running'; progress: ExportProgress | null; paused: boolean }
  | {
      phase: 'done'
      blob: Blob
      path: ExportPath
      watermark: boolean
      height: string
    }
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

const UPGRADE_LINK = '/account#plans'

export function ExportPanel({
  project,
  assets,
  capabilities,
  blocked,
  isOverflowing,
}: ExportPanelProps) {
  const [state, setState] = useState<PanelState>({ phase: 'idle' })
  const [chosen, setResolution] = useState<ExportResolution | null>(null)
  const [saveToFile, setSaveToFile] = useState(false)
  const abortRef = useRef<AbortController | null>(null)
  const controlsRef = useRef<ExportControls | null>(null)
  const [support] = useState(() => checkBrowserSupport())

  const ready =
    capabilities.status === 'ready' ? capabilities.capabilities : null
  const choices = ready
    ? allowedResolutions(ready.maxExportHeight)
    : (['720p'] as ExportResolution[])
  // Default to the best the plan allows; a choice the plan lost falls back.
  const resolution =
    chosen && choices.includes(chosen) ? chosen : choices[choices.length - 1]
  const running = state.phase === 'running'
  const outOfExports =
    ready !== null &&
    !ready.hasUnlimitedExports &&
    (ready.exportsRemaining ?? 0) <= 0

  const filename = `${project.name.trim().replace(/\s+/g, '-') || 'video'}.mp4`

  // Leaving the editor mid-export must not leave a worker encoding for nobody.
  useEffect(() => () => abortRef.current?.abort(), [])

  async function startExport() {
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
    setState({ phase: 'running', progress: null, paused: false })

    const result = await exportProject({
      project,
      assets,
      resolution,
      path,
      filename,
      fileHandle,
      isOverflowing,
      signal: controller.signal,
      onControls: (controls) => {
        controlsRef.current = controls
      },
      // The quota is taken the moment the server says yes; show it then.
      onReserved: () => void refreshCapabilities(),
      onProgress: (progress) =>
        setState((current) =>
          current.phase === 'running'
            ? { ...current, progress }
            : { phase: 'running', progress, paused: false },
        ),
    })

    abortRef.current = null
    controlsRef.current = null
    // Done, cancelled or failed, the count of exports left may have changed.
    void refreshCapabilities()

    if (result.status === 'done') {
      setState({
        phase: 'done',
        blob: result.blob,
        path: result.path,
        watermark: result.watermark,
        height: result.resolution,
      })
      // A file saved through the picker is already where the user put it.
      if (result.path !== 'file') downloadBlob(result.blob, filename)
    } else if (result.status === 'cancelled') {
      setState({ phase: 'cancelled' })
    } else {
      setState({ phase: 'error', message: result.message })
    }
  }

  function handleExportClick() {
    // Nothing before this point needed an account; this is where one is asked.
    if (capabilities.status === 'anonymous') {
      setState({ phase: 'sign-in' })
      return
    }
    void startExport()
  }

  function togglePause() {
    if (state.phase !== 'running') return
    if (state.paused) controlsRef.current?.resume()
    else controlsRef.current?.pause()
    setState({ ...state, paused: !state.paused })
  }

  const exportDisabled =
    running ||
    blocked ||
    !support.ok ||
    outOfExports ||
    capabilities.status === 'loading' ||
    capabilities.status === 'offline'

  return (
    <section
      aria-labelledby="export-heading"
      data-testid="export-panel"
      className="space-y-3 rounded-lg border border-slate-200 bg-white p-4"
    >
      <h2 id="export-heading" className="text-sm font-semibold">
        Xuất video
      </h2>

      {!support.ok && (
        <p role="alert" className="text-sm text-red-700">
          {support.message}
        </p>
      )}

      {capabilities.status === 'offline' && (
        <p className="text-sm text-amber-800">
          Cần có mạng lúc bấm xuất để kiểm tra quyền. Soạn và xem trước vẫn dùng
          được bình thường.
        </p>
      )}

      {ready && !outOfExports && (
        <div
          data-testid="export-notice"
          className={`rounded-md px-3 py-2 text-sm ${
            ready.watermarkRequired
              ? 'bg-amber-50 text-amber-950'
              : 'bg-sky-50 text-sky-950'
          }`}
        >
          {ready.watermarkRequired ? (
            <>
              <p>
                Bản này có watermark, tối đa {ready.maxExportHeight}p.
                {!ready.hasUnlimitedExports &&
                  ` Tháng này còn ${ready.exportsRemaining ?? 0}/${ready.exportsPerMonth ?? 0} lượt.`}
              </p>
              <Link
                to={UPGRADE_LINK}
                className="mt-1 inline-block font-medium text-sky-800 underline"
              >
                Nâng cấp để bỏ watermark và xuất 1080p
              </Link>
            </>
          ) : (
            <p>
              Gói {ready.planName}: tối đa {ready.maxExportHeight}p, không
              watermark
              {ready.hasUnlimitedExports ? ', không giới hạn số video' : ''}.
            </p>
          )}
        </div>
      )}

      {outOfExports && (
        <div
          role="alert"
          data-testid="export-quota-blocked"
          className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-900"
        >
          <p>
            Bạn đã dùng hết {ready?.exportsPerMonth ?? 0} lượt xuất miễn phí của
            tháng này. Nâng cấp để xuất không giới hạn, hoặc chờ sang tháng mới.
          </p>
          <Link
            to={UPGRADE_LINK}
            className="mt-1 inline-block font-medium text-sky-800 underline"
          >
            Xem các gói
          </Link>
        </div>
      )}

      {state.phase === 'sign-in' && (
        <div
          data-testid="export-sign-in"
          className="space-y-2 rounded-md border border-sky-200 bg-sky-50 p-3"
        >
          <p className="text-sm">
            Đăng nhập để xuất video. Máy chủ chỉ kiểm tra quyền của bạn; chữ và
            ảnh không rời máy này.
          </p>
          <SignInForm compact onSignedIn={() => setState({ phase: 'idle' })} />
        </div>
      )}

      {choices.length > 1 && (
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
      )}

      {canPickFile() && ready && (
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={saveToFile}
            disabled={running}
            onChange={(event) => setSaveToFile(event.target.checked)}
          />
          <span>Chọn nơi lưu file</span>
        </label>
      )}

      <div className="flex flex-wrap items-center gap-2">
        {state.phase !== 'sign-in' && (
          <button
            type="button"
            onClick={handleExportClick}
            disabled={exportDisabled}
            data-testid="export-start"
            className="rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
          >
            Xuất video MP4
          </button>
        )}
        {state.phase === 'running' && (
          <>
            <button
              type="button"
              onClick={togglePause}
              data-testid="export-pause"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
            >
              {state.paused ? 'Tiếp tục' : 'Tạm dừng'}
            </button>
            <button
              type="button"
              onClick={() => abortRef.current?.abort()}
              data-testid="export-cancel"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
            >
              Huỷ
            </button>
          </>
        )}
        {state.phase === 'done' && state.path !== 'file' && (
          <button
            type="button"
            onClick={() => downloadBlob(state.blob, filename)}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          >
            Tải lại file
          </button>
        )}
      </div>

      {blocked && (
        <p className="text-xs text-red-700">
          Dự án còn chỗ cần sửa (xem thông báo đỏ) trước khi xuất.
        </p>
      )}

      {state.phase === 'running' && (
        <div data-testid="export-progress" className="space-y-1">
          <progress
            value={state.progress?.ratio ?? 0}
            max={1}
            className="w-full"
            aria-label="Tiến độ xuất video"
          />
          <p className="text-xs text-slate-600">
            {state.paused
              ? 'Đã tạm dừng. Bấm "Tiếp tục" để dựng tiếp.'
              : state.progress
                ? `Khung hình ${state.progress.completedFrames}/${state.progress.totalFrames}` +
                  (state.progress.remainingMs !== null
                    ? ` · còn khoảng ${formatDuration(state.progress.remainingMs)}`
                    : '')
                : 'Đang kiểm tra quyền và chuẩn bị…'}
          </p>
        </div>
      )}

      {state.phase === 'done' && (
        <p
          role="status"
          data-testid="export-done"
          className="text-sm text-emerald-700"
        >
          Đã có file {filename} ({formatSize(state.blob.size)}, {state.height}
          {state.watermark ? ', có watermark' : ''})
          {state.path === 'file'
            ? ' ở nơi bạn chọn.'
            : ' trong thư mục tải về.'}
        </p>
      )}

      {state.phase === 'cancelled' && (
        <p
          role="status"
          data-testid="export-cancelled"
          className="text-sm text-slate-600"
        >
          Đã huỷ xuất video. Lượt xuất được trả lại.
        </p>
      )}

      {state.phase === 'error' && (
        <p
          role="alert"
          data-testid="export-error"
          className="text-sm text-red-700"
        >
          {state.message}
        </p>
      )}

      <p className="text-xs text-slate-500">
        Video xuất ra chưa có tiếng. Máy của bạn tự dựng video; chỉ cần mạng lúc
        bấm xuất.
      </p>
    </section>
  )
}
