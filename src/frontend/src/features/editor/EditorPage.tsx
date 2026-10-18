import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  exportProjectPackage,
  packageFileName,
} from '../../core/package/projectPackage'
import { renameProject, switchTemplate } from '../../core/project/commands'
import type { ProjectDocumentV1 } from '../../core/project/schema'
import type { ValidationIssue } from '../../core/project/validation'
import {
  discardDraft,
  findRecoverableDraft,
  loadProject,
} from '../../core/storage/projectStore'
import { isWithdrawn, selectableTemplates } from '../../core/templates/catalog'
import { ENTRANCE_SECONDS } from '../../core/rendering/renderer'
import { findTemplate } from '../../core/templates/templates'
import { useCapabilities } from '../account/useCapabilities'
import { ExportPanel } from './ExportPanel'
import { PreviewCanvas } from './PreviewCanvas'
import { SceneInspector } from './SceneInspector'
import { SceneList } from './SceneList'
import { TemplatePicker } from './TemplatePicker'
import {
  getOverflowCheck,
  useCurrentProject,
  useEditorStore,
  useHistoryFlags,
  useSelectedScene,
} from './editorStore'
import { useProjectAssets } from './useProjectAssets'
import { useTemplateCatalog } from './useTemplateCatalog'

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
  const catalog = useTemplateCatalog()

  const [timestamp, setTimestamp] = useState(0)
  const [showTemplates, setShowTemplates] = useState(false)
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

  // Choosing a scene shows it: the preview jumps to just after its text
  // arrives. Adjusted while rendering, not in an effect, so it happens on the
  // selection change itself and not on every later edit to durations.
  const [shownSceneId, setShownSceneId] = useState<string | null>(null)
  if (project && selectedSceneId && selectedSceneId !== shownSceneId) {
    const index = project.scenes.findIndex(
      (item) => item.id === selectedSceneId,
    )
    const start = project.scenes
      .slice(0, Math.max(0, index))
      .reduce((total, item) => total + item.durationSeconds, 0)
    setShownSceneId(selectedSceneId)
    setTimestamp(start + ENTRANCE_SECONDS)
  }

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
        Không tìm thấy dự án này.{' '}
        <Link to="/" className="text-sky-700 underline">
          Quay lại danh sách
        </Link>
      </p>
    )
  }

  if (!project || !scene) {
    return <p className="text-sm">Đang mở dự án…</p>
  }

  // Split so a blocking problem never sits in the same list as a suggestion.
  const errors = issues.filter((issue) => issue.severity === 'error')
  const warnings = issues.filter((issue) => issue.severity === 'warning')
  const sceneIndex = project.scenes.findIndex((item) => item.id === scene.id)

  const watermark =
    capabilities.status === 'ready'
      ? capabilities.capabilities.watermarkRequired
      : true

  const withdrawn = isWithdrawn(project.templateId, catalog)
  const current = findTemplate(project.templateId, project.templateVersion)
  const offered = selectableTemplates(catalog)

  return (
    <div className="space-y-4">
      {recovery && (
        <div
          role="alert"
          className="flex flex-wrap items-center gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm"
        >
          <span>Tìm thấy bản tự lưu mới hơn từ lần làm việc trước.</span>
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
        <input
          value={project.name}
          onChange={(event) => run(renameProject(event.target.value))}
          aria-label="Tên dự án"
          className="min-w-0 rounded-md border border-transparent px-2 py-1 text-xl font-semibold hover:border-slate-300 focus:border-slate-400"
        />
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
            onClick={handleExportPackage}
            title="Một file duy nhất, có kèm ảnh; mở được trên máy khác"
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm"
          >
            Lưu file dự án
          </button>
        </div>
      </div>

      <section className="space-y-2">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span>
            Mẫu: <strong>{current.name}</strong>
          </span>
          <button
            type="button"
            onClick={() => setShowTemplates((value) => !value)}
            aria-expanded={showTemplates}
            className="rounded-md border border-slate-300 px-3 py-1.5"
          >
            {showTemplates ? 'Đóng' : 'Đổi mẫu'}
          </button>
          <span className="text-xs text-slate-500">
            Đổi mẫu chỉ đổi phong cách; chữ và ảnh giữ nguyên.
          </span>
        </div>
        {showTemplates && (
          <TemplatePicker
            label="Chọn mẫu"
            templates={offered}
            selectedId={withdrawn ? null : project.templateId}
            onSelect={(templateId) => run(switchTemplate(templateId))}
          />
        )}
      </section>

      {withdrawn && (
        <p
          role="status"
          data-testid="template-withdrawn"
          className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm text-amber-900"
        >
          Mẫu của dự án này đã được gỡ khỏi danh mục. Dự án vẫn xem trước và
          xuất được; hãy chọn mẫu khác nếu muốn dùng mẫu đang được hỗ trợ.
        </p>
      )}

      {errors.length > 0 && (
        <div
          role="status"
          data-testid="validation-issues"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-900"
        >
          <p className="font-medium">Trước khi xuất video, còn cần:</p>
          <ul className="list-disc space-y-0.5 pl-5">
            {errors.map((issue) => (
              <li key={issueKey(issue)}>{issue.message}</li>
            ))}
          </ul>
        </div>
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

      <div className="grid gap-6 lg:grid-cols-[16rem_minmax(0,1fr)_20rem]">
        <SceneList
          project={project}
          selectedSceneId={scene.id}
          issues={issues}
        />
        <PreviewCanvas
          project={project}
          assets={assets}
          timestampSeconds={timestamp}
          watermark={watermark}
          onTimestampChange={setTimestamp}
        />
        <div className="space-y-4">
          <SceneInspector
            key={scene.id}
            scene={scene}
            sceneIndex={sceneIndex}
            issues={issues.filter((issue) => issue.sceneId === scene.id)}
            onAssetsChanged={reload}
          />
          <ExportPanel
            project={project}
            assets={assets}
            capabilities={capabilities}
            blocked={errors.length > 0}
            isOverflowing={getOverflowCheck()}
          />
        </div>
      </div>
    </div>
  )
}
