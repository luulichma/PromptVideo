import { useRef, useState } from 'react'
import { importImageFile } from '../../core/images/importImage'
import {
  attachImage,
  detachImage,
  setSceneBackground,
  updateImageLayer,
  updateTextLayer,
} from '../../core/project/commands'
import type {
  ImageLayerV1,
  SceneV1,
  TextLayerV1,
} from '../../core/project/schema'
import { useEditorStore } from './editorStore'

type SceneInspectorProps = {
  scene: SceneV1
  onAssetsChanged: () => void
}

export function SceneInspector({
  scene,
  onAssetsChanged,
}: SceneInspectorProps) {
  const run = useEditorStore((state) => state.run)
  const fileInput = useRef<HTMLInputElement>(null)
  const [imageError, setImageError] = useState<string | null>(null)

  const textLayers = scene.layers.filter(
    (layer): layer is TextLayerV1 => layer.type === 'text',
  )
  const imageLayer = scene.layers.find(
    (layer): layer is ImageLayerV1 => layer.type === 'image',
  )

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

  return (
    <section aria-labelledby="inspector-heading" className="space-y-4">
      <h2 id="inspector-heading" className="text-sm font-semibold">
        Thuộc tính · {scene.name}
      </h2>

      <label className="flex items-center gap-3 text-sm">
        <span className="w-28">Màu nền</span>
        <input
          type="color"
          value={scene.background}
          onChange={(event) =>
            run(setSceneBackground(scene.id, event.target.value))
          }
          className="h-9 w-16 rounded border border-slate-300"
          aria-label="Màu nền cảnh"
        />
      </label>

      {textLayers.map((layer) => (
        <fieldset
          key={layer.id}
          className="space-y-2 rounded-lg border border-slate-200 bg-white p-3"
        >
          <legend className="px-1 text-xs font-medium uppercase tracking-wide text-slate-600">
            {layer.role === 'title' ? 'Tiêu đề' : 'Mô tả'}
          </legend>

          <label className="flex flex-col gap-1 text-xs">
            <span>Nội dung</span>
            <textarea
              value={layer.text}
              rows={2}
              onChange={(event) =>
                run(
                  updateTextLayer(scene.id, layer.id, {
                    text: event.target.value,
                  }),
                )
              }
              className="rounded border border-slate-300 px-2 py-1 text-sm"
            />
          </label>

          <div className="grid grid-cols-3 gap-2">
            <label className="flex flex-col gap-1 text-xs">
              <span>Cỡ chữ</span>
              <input
                type="number"
                min={12}
                max={200}
                value={layer.fontSize}
                onChange={(event) =>
                  run(
                    updateTextLayer(scene.id, layer.id, {
                      fontSize: Number(event.target.value),
                    }),
                  )
                }
                className="rounded border border-slate-300 px-2 py-1 text-sm"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs">
              <span>Độ đậm</span>
              <select
                value={layer.fontWeight}
                onChange={(event) =>
                  run(
                    updateTextLayer(scene.id, layer.id, {
                      fontWeight: Number(event.target.value),
                    }),
                  )
                }
                className="rounded border border-slate-300 px-2 py-1 text-sm"
              >
                {[300, 400, 500, 600, 700, 800, 900].map((weight) => (
                  <option key={weight} value={weight}>
                    {weight}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs">
              <span>Màu chữ</span>
              <input
                type="color"
                value={layer.color}
                onChange={(event) =>
                  run(
                    updateTextLayer(scene.id, layer.id, {
                      color: event.target.value,
                    }),
                  )
                }
                className="h-8 w-full rounded border border-slate-300"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <label className="flex flex-col gap-1 text-xs">
              <span>Căn chỉnh</span>
              <select
                value={layer.align}
                onChange={(event) =>
                  run(
                    updateTextLayer(scene.id, layer.id, {
                      align: event.target.value as TextLayerV1['align'],
                    }),
                  )
                }
                className="rounded border border-slate-300 px-2 py-1 text-sm"
              >
                <option value="left">Trái</option>
                <option value="center">Giữa</option>
                <option value="right">Phải</option>
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs">
              <span>Giãn dòng</span>
              <input
                type="number"
                min={0.8}
                max={3}
                step={0.05}
                value={layer.lineHeight}
                onChange={(event) =>
                  run(
                    updateTextLayer(scene.id, layer.id, {
                      lineHeight: Number(event.target.value),
                    }),
                  )
                }
                className="rounded border border-slate-300 px-2 py-1 text-sm"
              />
            </label>
          </div>
        </fieldset>
      ))}

      <fieldset className="space-y-2 rounded-lg border border-slate-200 bg-white p-3">
        <legend className="px-1 text-xs font-medium uppercase tracking-wide text-slate-600">
          Ảnh
        </legend>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => fileInput.current?.click()}
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100"
          >
            {imageLayer ? 'Đổi ảnh' : 'Thêm ảnh'}
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

        {imageError && (
          <p role="alert" className="text-sm text-red-700">
            {imageError}
          </p>
        )}

        {imageLayer && (
          <div className="grid grid-cols-2 gap-2">
            <label className="flex flex-col gap-1 text-xs">
              <span>Kiểu khung</span>
              <select
                value={imageLayer.fit}
                onChange={(event) =>
                  run(
                    updateImageLayer(scene.id, imageLayer.id, {
                      fit: event.target.value as ImageLayerV1['fit'],
                    }),
                  )
                }
                className="rounded border border-slate-300 px-2 py-1 text-sm"
              >
                <option value="cover">Phủ kín (cover)</option>
                <option value="contain">Vừa khung (contain)</option>
                <option value="fill">Kéo giãn (fill)</option>
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs">
              <span>Phóng to ({imageLayer.scale.toFixed(2)}×)</span>
              <input
                type="range"
                min={0.5}
                max={3}
                step={0.05}
                value={imageLayer.scale}
                onChange={(event) =>
                  run(
                    updateImageLayer(scene.id, imageLayer.id, {
                      scale: Number(event.target.value),
                    }),
                  )
                }
              />
            </label>
            <label className="flex flex-col gap-1 text-xs">
              <span>Dịch ngang</span>
              <input
                type="number"
                step={10}
                value={imageLayer.offsetX}
                onChange={(event) =>
                  run(
                    updateImageLayer(scene.id, imageLayer.id, {
                      offsetX: Number(event.target.value),
                    }),
                  )
                }
                className="rounded border border-slate-300 px-2 py-1 text-sm"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs">
              <span>Dịch dọc</span>
              <input
                type="number"
                step={10}
                value={imageLayer.offsetY}
                onChange={(event) =>
                  run(
                    updateImageLayer(scene.id, imageLayer.id, {
                      offsetY: Number(event.target.value),
                    }),
                  )
                }
                className="rounded border border-slate-300 px-2 py-1 text-sm"
              />
            </label>
          </div>
        )}
      </fieldset>
    </section>
  )
}
