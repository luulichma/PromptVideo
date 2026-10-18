import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { importProjectPackage } from '../../core/package/projectPackage'
import { createProject } from '../../core/project/createProject'
import {
  deleteProject,
  listProjects,
  pruneOrphanAssets,
  saveProject,
  type ProjectSummary,
} from '../../core/storage/projectStore'
import { selectableTemplates } from '../../core/templates/catalog'
import { findTemplate } from '../../core/templates/templates'
import { TemplatePicker } from '../editor/TemplatePicker'
import { useTemplateCatalog } from '../editor/useTemplateCatalog'

const dateFormat = new Intl.DateTimeFormat('vi-VN', {
  dateStyle: 'short',
  timeStyle: 'short',
})

export function DashboardPage() {
  const navigate = useNavigate()
  const [projects, setProjects] = useState<ProjectSummary[]>([])
  const [name, setName] = useState('Video mới')
  const templates = selectableTemplates(useTemplateCatalog())
  const [chosenTemplateId, setTemplateId] = useState<string | null>(null)
  // A choice the catalog has since withdrawn falls back to the first offered.
  const templateId = templates.some(
    (template) => template.id === chosenTemplateId,
  )
    ? chosenTemplateId
    : (templates[0]?.id ?? null)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInput = useRef<HTMLInputElement>(null)

  const refresh = useCallback(async () => {
    setProjects(await listProjects())
  }, [])

  useEffect(() => {
    let cancelled = false

    async function load() {
      const saved = await listProjects()
      if (!cancelled) setProjects(saved)
      // Imports that were abandoned leave blobs behind; clean them on entry.
      await pruneOrphanAssets()
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  async function handleCreate(event: React.FormEvent) {
    event.preventDefault()
    if (!templateId) return
    const project = createProject(name.trim() || 'Video mới', { templateId })
    await saveProject(project)
    navigate(`/editor/${project.id}`)
  }

  async function handleImport(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return

    setError(null)
    setMessage(null)
    const result = await importProjectPackage(await file.text())
    if (!result.ok) {
      setError(result.error.message)
      return
    }

    await saveProject(result.document)
    // Opening a project file means wanting to work on it.
    navigate(`/editor/${result.document.id}`)
  }

  async function handleDelete(project: ProjectSummary) {
    await deleteProject(project.id)
    setMessage(`Đã xoá "${project.name}".`)
    await refresh()
  }

  return (
    <div className="space-y-8">
      <section aria-labelledby="new-project" className="space-y-3">
        <h1 id="new-project" className="text-xl font-semibold">
          Tạo video mới
        </h1>
        <form
          onSubmit={handleCreate}
          className="space-y-4 rounded-lg border border-slate-200 bg-white p-4"
        >
          <p className="text-sm text-slate-700">
            Chọn một mẫu, điền chữ và ảnh vào từng cảnh, rồi bấm xuất. Chưa cần
            đăng nhập cho tới lúc xuất video.
          </p>
          <TemplatePicker
            label="Mẫu video"
            templates={templates}
            selectedId={templateId}
            onSelect={setTemplateId}
          />
          <div className="flex flex-wrap items-end gap-3">
            <label className="flex flex-col gap-1 text-sm">
              <span className="font-medium">Tên video</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-64 rounded-md border border-slate-300 px-3 py-2"
              />
            </label>
            <button
              type="submit"
              disabled={!templateId}
              title={templateId ? undefined : 'Chưa có mẫu nào đang mở'}
              className="rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800 disabled:opacity-40"
            >
              Tạo video
            </button>
            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100"
            >
              Mở file dự án
            </button>
            <input
              ref={fileInput}
              type="file"
              accept="application/json,.json"
              onChange={handleImport}
              className="sr-only"
              aria-label="Chọn file dự án"
            />
          </div>
        </form>

        {message && (
          <p role="status" className="text-sm text-emerald-700">
            {message}
          </p>
        )}
        {error && (
          <p role="alert" className="text-sm text-red-700">
            {error}
          </p>
        )}
      </section>

      <section aria-labelledby="project-list" className="space-y-3">
        <h2 id="project-list" className="text-lg font-semibold">
          Đã lưu trên thiết bị này
        </h2>
        {projects.length === 0 ? (
          <p className="text-sm text-slate-600">
            Chưa có video nào. Chọn mẫu ở trên để bắt đầu.
          </p>
        ) : (
          <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
            {projects.map((project) => (
              <li
                key={project.id}
                className="flex flex-wrap items-center gap-3 px-4 py-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{project.name}</p>
                  <p className="text-xs text-slate-600">
                    Sửa lần cuối {dateFormat.format(project.updatedAtMs)} · Mẫu{' '}
                    {findTemplate(project.templateId).name}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => navigate(`/editor/${project.id}`)}
                  className="rounded-md bg-sky-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-sky-800"
                >
                  Mở
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(project)}
                  className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100"
                >
                  Xoá
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
