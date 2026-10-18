import { useId, useRef, useState } from 'react'
import { importImageFile } from '../../core/images/importImage'
import {
  attachImage,
  detachImage,
  setSceneDuration,
  setSceneKind,
  setSceneText,
} from '../../core/project/commands'
import type {
  ImageLayerV1,
  SceneKind,
  SceneV1,
  TextLayerV1,
} from '../../core/project/schema'
import {
  MAX_SCENE_SECONDS,
  MIN_SCENE_SECONDS,
  type ValidationIssue,
} from '../../core/project/validation'
import {
  SCENE_KIND_FIELDS,
  SCENE_KIND_LABELS,
  kindUsesImage,
} from '../../core/templates/templates'
import { useEditorStore } from './editorStore'

type SceneInspectorProps = {
  scene: SceneV1
  sceneIndex: number
  /** Problems found in this scene, used to mark the fields they concern. */
  issues: readonly ValidationIssue[]
  onAssetsChanged: () => void
}

const KINDS = Object.keys(SCENE_KIND_LABELS) as SceneKind[]

/**
 * Everything a user may change about one scene: its kind, its words, its
 * picture and how long it stays on screen. Position, font, colour and motion
 * belong to the template and are deliberately not here.
 */
export function SceneInspector({
  scene,
  sceneIndex,
  issues,
  onAssetsChanged,
}: SceneInspectorProps) {
  const id = useId()
  const run = useEditorStore((state) => state.run)
  const fileInput = useRef<HTMLInputElement>(null)
  const [imageError, setImageError] = useState<string | null>(null)

  const fields = SCENE_KIND_FIELDS[scene.kind]
  const textOf = (role: 'title' | 'subtitle') =>
    scene.layers.find(
      (layer): layer is TextLayerV1 =>
        layer.type === 'text' && layer.role === role,
    )
  const imageLayer = scene.layers.find(
    (layer): layer is ImageLayerV1 => layer.type === 'image',
  )
  const overflowing = new Set(
    issues
      .filter((issue) => issue.code === 'text-overflow')
      .map((issue) => issue.layerId),
  )
  const missingImage = issues.some((issue) => issue.code === 'missing-image')

  async function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return

    setImageError(null)
    const result = await importImageFile(file)
    if (!result.ok) {
      // A rejected file leaves the project exactly as it was.
      setImageError(result.error.message)
      return
    }

    run(attachImage(scene.id, result.asset))
    onAssetsChanged()
  }

  function textField(role: 'title' | 'subtitle', label: string) {
    const layer = textOf(role)
    if (!layer) return null
    const tooLong = overflowing.has(layer.id)
    const fieldId = `${id}-${role}`
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={fieldId} className="text-sm font-medium">
          {label}
        </label>
        <textarea
          id={fieldId}
          value={layer.text}
          rows={role === 'title' ? 2 : 3}
          aria-invalid={tooLong || undefined}
          aria-describedby={tooLong ? `${fieldId}-error` : undefined}
          data-testid={`scene-${role}`}
          onChange={(event) =>
            run(setSceneText(scene.id, role, event.target.value))
          }
          className={`rounded-md border px-3 py-2 text-sm ${
            tooLong
              ? 'border-red-500 bg-red-50 outline-red-500'
              : 'border-slate-300'
          }`}
        />
        {tooLong && (
          <p id={`${fieldId}-error`} className="text-xs text-red-700">
            Chữ dài quá khung của mẫu, đã thu nhỏ hết mức. Hãy rút gọn.
          </p>
        )}
      </div>
    )
  }

  return (
    <section
      aria-labelledby="inspector-heading"
      className="space-y-4 rounded-lg border border-slate-200 bg-white p-4"
    >
      <h2 id="inspector-heading" className="text-sm font-semibold">
        Cảnh {sceneIndex + 1}
      </h2>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium">Kiểu cảnh</span>
        <select
          value={scene.kind}
          data-testid="scene-kind"
          onChange={(event) =>
            run(setSceneKind(scene.id, event.target.value as SceneKind))
          }
          className="rounded-md border border-slate-300 px-3 py-2"
        >
          {KINDS.map((kind) => (
            <option key={kind} value={kind}>
              {SCENE_KIND_LABELS[kind]}
            </option>
          ))}
        </select>
      </label>

      {textField('title', fields.title)}
      {textField('subtitle', fields.subtitle)}

      {kindUsesImage(scene.kind) && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Ảnh</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              className={`rounded-md px-3 py-1.5 text-sm ${
                missingImage
                  ? 'bg-sky-700 font-medium text-white'
                  : 'border border-slate-300 hover:bg-slate-100'
              }`}
            >
              {imageLayer ? 'Đổi ảnh' : 'Chọn ảnh từ máy'}
            </button>
            {imageLayer && (
              <button
                type="button"
                onClick={() => {
                  run(detachImage(scene.id))
                  onAssetsChanged()
                }}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100"
              >
                Gỡ ảnh
              </button>
            )}
            <input
              ref={fileInput}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleImage}
              className="sr-only"
              aria-label="Chọn ảnh cho cảnh"
            />
          </div>
          {missingImage && (
            <p className="text-xs text-red-700">Cảnh này cần một ảnh.</p>
          )}
          {imageError && (
            <p role="alert" className="text-sm text-red-700">
              {imageError}
            </p>
          )}
        </div>
      )}

      <label className="flex items-center gap-3 text-sm">
        <span className="font-medium">Thời lượng</span>
        <input
          type="number"
          min={MIN_SCENE_SECONDS}
          max={MAX_SCENE_SECONDS}
          step={0.5}
          value={scene.durationSeconds}
          data-testid="scene-duration"
          onChange={(event) =>
            run(setSceneDuration(scene.id, Number(event.target.value)))
          }
          className="w-20 rounded-md border border-slate-300 px-2 py-1.5"
        />
        <span>giây</span>
      </label>

      <p className="text-xs text-slate-500">
        Vị trí chữ, font, màu và hiệu ứng do mẫu quyết định. Đổi mẫu ở phía trên
        để đổi phong cách mà vẫn giữ nguyên nội dung.
      </p>
    </section>
  )
}
