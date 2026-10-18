import { useEffect, useRef } from 'react'
import { createProject } from '../../core/project/createProject'
import { ensurePageFontsReady } from '../../core/rendering/fonts'
import { renderFrame } from '../../core/rendering/renderer'
import type { EditorTemplate } from '../../core/templates/templates'

type TemplatePickerProps = {
  templates: readonly EditorTemplate[]
  selectedId: string | null
  onSelect: (templateId: string) => void
  /** Names the group for screen readers. */
  label: string
}

/** The opening scene, a moment after its text has arrived. */
const THUMBNAIL_SECONDS = 1

function Thumbnail({ template }: { template: EditorTemplate }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let cancelled = false
    void ensurePageFontsReady().then(() => {
      const context = canvasRef.current?.getContext('2d')
      if (cancelled || !context) return
      const sample = createProject('Mẫu', {
        id: `thumbnail-${template.id}`,
        templateId: template.id,
      })
      renderFrame(sample, THUMBNAIL_SECONDS, context)
    })
    return () => {
      cancelled = true
    }
  }, [template])

  return (
    <canvas
      ref={canvasRef}
      width={1280}
      height={720}
      aria-hidden="true"
      className="aspect-video w-full rounded-md border border-slate-200"
    />
  )
}

/**
 * Templates shown as small previews rather than names, because a style is
 * chosen by looking at it. Drawn with the real renderer, so the preview is the
 * video's own first scene.
 */
export function TemplatePicker({
  templates,
  selectedId,
  onSelect,
  label,
}: TemplatePickerProps) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
    >
      {templates.map((template) => {
        const selected = template.id === selectedId
        return (
          <button
            key={template.id}
            type="button"
            role="radio"
            aria-checked={selected}
            data-testid={`template-${template.id}`}
            onClick={() => onSelect(template.id)}
            className={`space-y-1 rounded-lg border p-2 text-left ${
              selected
                ? 'border-sky-600 bg-sky-50 ring-2 ring-sky-600'
                : 'border-slate-200 bg-white hover:border-slate-400'
            }`}
          >
            <Thumbnail template={template} />
            <span className="block text-sm font-medium">{template.name}</span>
            <span className="block text-xs text-slate-600">
              {template.description}
            </span>
          </button>
        )
      })}
    </div>
  )
}
