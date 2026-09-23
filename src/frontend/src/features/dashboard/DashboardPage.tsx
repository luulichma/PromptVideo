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
import { useTemplateCatalog } from '../editor/useTemplateCatalog'

const dateFormat = new Intl.DateTimeFormat('vi-VN', {
  dateStyle: 'short',
  timeStyle: 'short',
})

export function DashboardPage() {
  const navigate = useNavigate()
  const [projects, setProjects] = useState<ProjectSummary[]>([])
  const [name, setName] = useState('Dự án mới')
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
    const project = createProject(name.trim() || 'Dự án mới', { templateId })
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
    setMessage(`Đã nhập "${result.document.name}".`)
    await refresh()
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
          Dự án của bạn
        </h1>
        <form
          onSubmit={handleCreate}
          className="flex flex-wrap items-end gap-3 rounded-lg border border-slate-200 bg-white p-4"
        >
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">Tên project</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-64 rounded-md border border-slate-300 px-3 py-2"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">Template</span>
            <select
              value={templateId ?? ''}
              onChange={(event) => setTemplateId(event.target.value)}
              className="rounded-md border border-slate-300 px-3 py-2"
            >
              {templates.map((template) => (
                <option key={template.id} value={template.id}>
                  {template.name}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            disabled={!templateId}
            title={templateId ? undefined : 'Chưa có mẫu nào đang mở'}
            className="rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800"
          >
            Tạo project
          </button>
          <button
            type="button"
            onClick={() => fileInput.current?.click()}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100"
          >
            Nhập gói project
          </button>
          <input
            ref={fileInput}
            type="file"
            accept="application/json,.json"
            onChange={handleImport}
            className="sr-only"
            aria-label="Chọn tệp gói project"
          />
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
            Chưa có project nào. Tạo project đầu tiên ở trên.
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
                    Sửa lần cuối {dateFormat.format(project.updatedAtMs)} ·
                    Template {project.templateId}
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
