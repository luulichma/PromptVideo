import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  exportProjectPackage,
  packageFileName,
} from '../../core/package/projectPackage'
import { switchTemplate } from '../../core/project/commands'
import type { ProjectDocumentV1 } from '../../core/project/schema'
import type { ValidationIssue } from '../../core/project/validation'
import {
  discardDraft,
  findRecoverableDraft,
  loadProject,
} from '../../core/storage/projectStore'
import { EDITOR_TEMPLATES } from '../../core/templates/templates'
import { useCapabilities } from '../account/useCapabilities'
import { ExportPanel } from './ExportPanel'
import { PreviewCanvas } from './PreviewCanvas'
import { SceneInspector } from './SceneInspector'
import { SceneList } from './SceneList'
import {
  useCurrentProject,
  useEditorStore,
  useHistoryFlags,
  useSelectedScene,
} from './editorStore'
import { useProjectAssets } from './useProjectAssets'

/** Scene and layer both matter: one scene can raise the same code twice. */
function issueKey(issue: ValidationIssue): string {
  return [issue.code, issue.sceneId ?? 'project', issue.layerId ?? ''].join('-')
}

const SAVE_LABEL: Record<string, string> = {
  idle: 'Chưa có thay đổi',
  pending: 'Đang chờ lưu…',
  saving: 'Đang lưu…',
  saved: 'Đã lưu cục bộ',
  error: 'Lưu thất bại',
}

export function EditorPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = useCurrentProject()
  const scene = useSelectedScene()
  const selectedSceneId = useEditorStore((state) => state.selectedSceneId)
  const issues = useEditorStore((state) => state.issues)
  const saveState = useEditorStore((state) => state.saveState)
  const open = useEditorStore((state) => state.open)
  const close = useEditorStore((state) => state.close)
  const run = useEditorStore((state) => state.run)
  const saveNow = useEditorStore((state) => state.saveNow)
  const undoEdit = useEditorStore((state) => state.undoEdit)
  const redoEdit = useEditorStore((state) => state.redoEdit)
  const { canUndo, canRedo } = useHistoryFlags()
  const { assets, reload } = useProjectAssets(project)
  const capabilities = useCapabilities()

  const [timestamp, setTimestamp] = useState(0)
  const [notFound, setNotFound] = useState(false)
  const [recovery, setRecovery] = useState<ProjectDocumentV1 | null>(null)

  useEffect(() => {
    if (!projectId) return
    let cancelled = false

    async function load() {
      const draft = await findRecoverableDraft(projectId!)
      const saved = await loadProject(projectId!)
      if (cancelled) return

      if (!saved && !draft) {
        setNotFound(true)
        return
      }

      open(saved ?? draft!.document)
      // Offer the newer autosaved copy instead of silently choosing for the user.
      if (draft) setRecovery(draft.document)
    }

    void load()
    return () => {
      cancelled = true
      close()
    }
  }, [projectId, open, close])

  const handleSave = useCallback(() => void saveNow(), [saveNow])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (!(event.ctrlKey || event.metaKey)) return
      const key = event.key.toLowerCase()

      if (key === 's') {
        event.preventDefault()
        handleSave()
      } else if (key === 'z' && !event.shiftKey) {
        event.preventDefault()
        undoEdit()
      } else if (key === 'y' || (key === 'z' && event.shiftKey)) {
        event.preventDefault()
        redoEdit()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [handleSave, undoEdit, redoEdit])

  async function handleExportPackage() {
    if (!project) return
    const blob = await exportProjectPackage(project)
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = packageFileName(project)
    anchor.click()
    URL.revokeObjectURL(url)
  }

  if (notFound) {
    return (
      <p className="text-sm">
        Không tìm thấy project này.{' '}
        <Link to="/" className="text-sky-700 underline">
          Quay lại danh sách
        </Link>
      </p>
    )
  }

  if (!project || !scene) {
    return <p className="text-sm">Đang mở project…</p>
  }

  // Split so a blocking problem never sits in the same list as a suggestion.
  const errors = issues.filter((issue) => issue.severity === 'error')
  const warnings = issues.filter((issue) => issue.severity === 'warning')

  const watermark =
    capabilities.status === 'ready'
      ? capabilities.capabilities.watermarkRequired
      : true

  return (
    <div className="space-y-4">
      {recovery && (
        <div
          role="alert"
          className="flex flex-wrap items-center gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm"
        >
          <span>Tìm thấy bản autosave mới hơn từ phiên làm việc trước.</span>
          <button
            type="button"
            onClick={() => {
              open(recovery)
              setRecovery(null)
            }}
            className="rounded-md bg-amber-700 px-3 py-1.5 font-medium text-white"
          >
            Khôi phục
          </button>
          <button
            type="button"
            onClick={() => {
              void discardDraft(project.id)
              setRecovery(null)
            }}
            className="rounded-md border border-amber-400 px-3 py-1.5"
          >
            Bỏ qua
          </button>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-xl font-semibold">{project.name}</h1>
        <span
          data-testid="save-state"
          data-state={saveState}
          className="rounded-full bg-slate-200 px-3 py-1 text-xs"
        >
          {SAVE_LABEL[saveState]}
        </span>

        <div className="ml-auto flex flex-wrap gap-2">
          <button
            type="button"
            onClick={undoEdit}
            disabled={!canUndo}
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm disabled:opacity-40"
          >
            Hoàn tác
          </button>
          <button
            type="button"
            onClick={redoEdit}
            disabled={!canRedo}
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm disabled:opacity-40"
          >
            Làm lại
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm"
          >
            Lưu (Ctrl+S)
          </button>
          <button
            type="button"
            onClick={handleExportPackage}
            className="rounded-md bg-sky-700 px-3 py-1.5 text-sm font-medium text-white"
          >
            Xuất gói project
          </button>
        </div>
      </div>

      <label className="flex items-center gap-3 text-sm">
        <span className="font-medium">Template</span>
        <select
          value={project.templateId}
          onChange={(event) => run(switchTemplate(event.target.value))}
          className="rounded-md border border-slate-300 px-3 py-2"
        >
          {EDITOR_TEMPLATES.map((template) => (
            <option key={template.id} value={template.id}>
              {template.name} — {template.description}
            </option>
          ))}
        </select>
      </label>

      {errors.length > 0 && (
        <ul
          role="alert"
          data-testid="validation-issues"
          className="space-y-1 rounded-lg border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-900"
        >
          {errors.map((issue) => (
            <li key={issueKey(issue)}>{issue.message}</li>
          ))}
        </ul>
      )}

      {warnings.length > 0 && (
        <ul
          role="status"
          data-testid="validation-warnings"
          className="space-y-1 rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm text-amber-950"
        >
          {warnings.map((issue) => (
            <li key={issueKey(issue)}>{issue.message}</li>
          ))}
        </ul>
      )}

      <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)_20rem]">
        <SceneList project={project} selectedSceneId={selectedSceneId} />
        <PreviewCanvas
          project={project}
          assets={assets}
          timestampSeconds={timestamp}
          watermark={watermark}
          onTimestampChange={setTimestamp}
        />
        <div className="space-y-4">
          <ExportPanel
            project={project}
            assets={assets}
            capabilities={capabilities}
            blocked={errors.length > 0}
          />
          <SceneInspector scene={scene} onAssetsChanged={reload} />
        </div>
      </div>
    </div>
  )
}
