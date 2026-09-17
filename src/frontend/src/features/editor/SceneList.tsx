import {
  renameScene,
  reorderScene,
  setSceneDuration,
} from '../../core/project/commands'
import type { ProjectDocumentV1 } from '../../core/project/schema'
import {
  MAX_SCENE_SECONDS,
  MIN_SCENE_SECONDS,
} from '../../core/project/validation'
import { useEditorStore } from './editorStore'

type SceneListProps = {
  project: ProjectDocumentV1
  selectedSceneId: string | null
}

/**
 * Scene reordering is driven by buttons rather than drag and drop: the plan
 * requires every main area to be reachable without a mouse, and a button pair
 * is keyboard-operable and screen-reader-announceable without extra work.
 */
export function SceneList({ project, selectedSceneId }: SceneListProps) {
  const run = useEditorStore((state) => state.run)
  const selectScene = useEditorStore((state) => state.selectScene)

  return (
    <section aria-labelledby="scene-list-heading" className="space-y-2">
      <h2 id="scene-list-heading" className="text-sm font-semibold">
        Cảnh ({project.scenes.length})
      </h2>
      <ol className="space-y-2">
        {project.scenes.map((scene, index) => {
          const selected = scene.id === selectedSceneId
          return (
            <li
              key={scene.id}
              className={`rounded-lg border p-3 ${
                selected
                  ? 'border-sky-500 bg-sky-50'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => selectScene(scene.id)}
                  aria-current={selected ? 'true' : undefined}
                  className="flex-1 text-left text-sm font-medium"
                >
                  {index + 1}. {scene.name}
                </button>
                <button
                  type="button"
                  onClick={() => run(reorderScene(scene.id, index - 1))}
                  disabled={index === 0}
                  aria-label={`Đưa ${scene.name} lên trên`}
                  className="rounded border border-slate-300 px-2 py-1 text-xs disabled:opacity-40"
                >
                  ↑
                </button>
                <button
                  type="button"
                  onClick={() => run(reorderScene(scene.id, index + 1))}
                  disabled={index === project.scenes.length - 1}
                  aria-label={`Đưa ${scene.name} xuống dưới`}
                  className="rounded border border-slate-300 px-2 py-1 text-xs disabled:opacity-40"
                >
                  ↓
                </button>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2">
                <label className="flex flex-col gap-1 text-xs">
                  <span>Tên cảnh</span>
                  <input
                    value={scene.name}
                    onChange={(event) =>
                      run(renameScene(scene.id, event.target.value))
                    }
                    className="rounded border border-slate-300 px-2 py-1 text-sm"
                  />
                </label>
                <label className="flex flex-col gap-1 text-xs">
                  <span>Thời lượng (giây)</span>
                  <input
                    type="number"
                    min={MIN_SCENE_SECONDS}
                    max={MAX_SCENE_SECONDS}
                    step={0.5}
                    value={scene.durationSeconds}
                    onChange={(event) =>
                      run(
                        setSceneDuration(scene.id, Number(event.target.value)),
                      )
                    }
                    className="rounded border border-slate-300 px-2 py-1 text-sm"
                  />
                </label>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
