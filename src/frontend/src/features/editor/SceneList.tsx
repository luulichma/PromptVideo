import { useState } from 'react'
import {
  addScene,
  removeScene,
  reorderScene,
} from '../../core/project/commands'
import type {
  ProjectDocumentV1,
  SceneKind,
  TextLayerV1,
} from '../../core/project/schema'
import {
  MAX_SCENE_COUNT,
  MIN_SCENE_COUNT,
  type ValidationIssue,
} from '../../core/project/validation'
import { SCENE_KIND_LABELS } from '../../core/templates/templates'
import { useEditorStore } from './editorStore'

type SceneListProps = {
  project: ProjectDocumentV1
  selectedSceneId: string | null
  issues: readonly ValidationIssue[]
}

const KINDS = Object.keys(SCENE_KIND_LABELS) as SceneKind[]

/**
 * Scene reordering is driven by buttons rather than drag and drop: the plan
 * requires every main area to be reachable without a mouse, and a button pair
 * is keyboard-operable and screen-reader-announceable without extra work.
 */
export function SceneList({
  project,
  selectedSceneId,
  issues,
}: SceneListProps) {
  const run = useEditorStore((state) => state.run)
  const selectScene = useEditorStore((state) => state.selectScene)
  const [newKind, setNewKind] = useState<SceneKind>('textImage')

  const scenesWithErrors = new Set(
    issues
      .filter((issue) => issue.severity === 'error' && issue.sceneId)
      .map((issue) => issue.sceneId),
  )
  const full = project.scenes.length >= MAX_SCENE_COUNT

  function add() {
    const after = selectedSceneId ?? undefined
    const before = new Set(project.scenes.map((scene) => scene.id))
    run(addScene(newKind, after))
    // Select the scene just added so the user can fill it straight away.
    const added = useEditorStore
      .getState()
      .history?.present.scenes.find((scene) => !before.has(scene.id))
    if (added) selectScene(added.id)
  }

  return (
    <section aria-labelledby="scene-list-heading" className="space-y-2">
      <h2 id="scene-list-heading" className="text-sm font-semibold">
        Cảnh ({project.scenes.length})
      </h2>
      <ol className="space-y-2" data-testid="scene-list">
        {project.scenes.map((scene, index) => {
          const selected = scene.id === selectedSceneId
          const title = scene.layers.find(
            (layer): layer is TextLayerV1 =>
              layer.type === 'text' && layer.role === 'title',
          )?.text
          return (
            <li
              key={scene.id}
              className={`rounded-lg border p-2 ${
                selected
                  ? 'border-sky-500 bg-sky-50'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-start gap-1">
                <button
                  type="button"
                  onClick={() => selectScene(scene.id)}
                  aria-current={selected ? 'true' : undefined}
                  data-testid={`scene-select-${index + 1}`}
                  className="min-w-0 flex-1 text-left"
                >
                  <span className="block text-sm font-medium">
                    {index + 1}. {SCENE_KIND_LABELS[scene.kind]}
                    {scenesWithErrors.has(scene.id) && (
                      <span
                        className="ml-1 text-red-600"
                        aria-label="có chỗ cần sửa"
                      >
                        ●
                      </span>
                    )}
                  </span>
                  <span className="block truncate text-xs text-slate-600">
                    {title?.trim() || '(chưa có tiêu đề)'} ·{' '}
                    {scene.durationSeconds} giây
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => run(reorderScene(scene.id, index - 1))}
                  disabled={index === 0}
                  aria-label={`Đưa cảnh ${index + 1} lên trên`}
                  className="rounded border border-slate-300 px-1.5 py-0.5 text-xs disabled:opacity-30"
                >
                  ↑
                </button>
                <button
                  type="button"
                  onClick={() => run(reorderScene(scene.id, index + 1))}
                  disabled={index === project.scenes.length - 1}
                  aria-label={`Đưa cảnh ${index + 1} xuống dưới`}
                  className="rounded border border-slate-300 px-1.5 py-0.5 text-xs disabled:opacity-30"
                >
                  ↓
                </button>
                <button
                  type="button"
                  onClick={() => run(removeScene(scene.id))}
                  disabled={project.scenes.length <= MIN_SCENE_COUNT}
                  aria-label={`Xoá cảnh ${index + 1}`}
                  className="rounded border border-slate-300 px-1.5 py-0.5 text-xs disabled:opacity-30"
                >
                  ✕
                </button>
              </div>
            </li>
          )
        })}
      </ol>

      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-dashed border-slate-300 p-2">
        <select
          value={newKind}
          onChange={(event) => setNewKind(event.target.value as SceneKind)}
          aria-label="Kiểu của cảnh mới"
          className="min-w-0 flex-1 rounded-md border border-slate-300 px-2 py-1.5 text-sm"
        >
          {KINDS.map((kind) => (
            <option key={kind} value={kind}>
              {SCENE_KIND_LABELS[kind]}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={add}
          disabled={full}
          title={full ? `Tối đa ${MAX_SCENE_COUNT} cảnh` : undefined}
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100 disabled:opacity-40"
        >
          + Thêm cảnh
        </button>
      </div>
    </section>
  )
}
