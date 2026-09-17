import type {
  LayerRole,
  ProjectDocumentV1,
  SceneV1,
  TextLayerV1,
} from '../project/schema'

/**
 * Geometry and typography for one slot of a composition, expressed as fractions
 * of the frame so a template works at any output resolution.
 */
export type SlotStyle = {
  x: number
  y: number
  width: number
  height: number
  fontSizeRatio?: number
  fontWeight?: number
  align?: TextLayerV1['align']
  color?: string
  opacity?: number
}

/**
 * A template is pure presentation: palette, slot geometry, typography. It holds
 * no business logic and never carries user content, which is what lets a project
 * move between templates without losing anything the user entered.
 *
 * Every text slot sits inside the default safe area; templates.test.ts holds that
 * so a restyle can never be the thing that pushes a subtitle off a phone screen.
 */
export type EditorTemplate = {
  id: string
  name: string
  description: string
  /** One background per scene index, cycled if a project has more scenes. */
  palette: readonly string[]
  transitionSeconds: number
  slots: Record<Exclude<LayerRole, 'free'>, SlotStyle>
}

export const EDITOR_TEMPLATES: readonly EditorTemplate[] = [
  {
    id: 'classic',
    name: 'Cổ điển',
    description: 'Tiêu đề căn trái, ảnh nền phủ toàn khung.',
    palette: ['#0d366f', '#0f5b78', '#236b63', '#80531d', '#713249'],
    transitionSeconds: 0.5,
    slots: {
      image: { x: 0, y: 0, width: 1, height: 1, opacity: 0.55 },
      title: {
        x: 0.08,
        y: 0.56,
        width: 0.84,
        height: 0.16,
        fontSizeRatio: 0.058,
        fontWeight: 800,
        align: 'left',
        color: '#ffffff',
      },
      subtitle: {
        x: 0.08,
        y: 0.74,
        width: 0.74,
        height: 0.1,
        fontSizeRatio: 0.032,
        fontWeight: 400,
        align: 'left',
        color: '#e8eef8',
        opacity: 0.88,
      },
    },
  },
  {
    id: 'bold',
    name: 'Nổi bật',
    description: 'Chữ lớn căn giữa, nền tương phản cao.',
    palette: ['#11071f', '#2a0944', '#3b185f', '#12343b', '#451952'],
    transitionSeconds: 0.35,
    slots: {
      image: { x: 0, y: 0, width: 1, height: 1, opacity: 0.4 },
      title: {
        x: 0.06,
        y: 0.34,
        width: 0.88,
        height: 0.24,
        fontSizeRatio: 0.082,
        fontWeight: 900,
        align: 'center',
        color: '#ffffff',
      },
      subtitle: {
        x: 0.12,
        y: 0.62,
        width: 0.76,
        height: 0.1,
        fontSizeRatio: 0.034,
        fontWeight: 500,
        align: 'center',
        color: '#ffd7f5',
        opacity: 0.92,
      },
    },
  },
  {
    id: 'minimal',
    name: 'Tối giản',
    description: 'Nền sáng, chữ nhỏ gọn, nhiều khoảng trắng.',
    palette: ['#f5f3ee', '#eef1f4', '#f2efe9', '#edf1ee', '#f4f0f4'],
    transitionSeconds: 0.25,
    slots: {
      image: { x: 0.5, y: 0.1, width: 0.42, height: 0.8, opacity: 1 },
      title: {
        x: 0.07,
        y: 0.34,
        width: 0.38,
        height: 0.18,
        fontSizeRatio: 0.046,
        fontWeight: 700,
        align: 'left',
        color: '#161a1d',
      },
      subtitle: {
        x: 0.07,
        y: 0.55,
        width: 0.36,
        height: 0.16,
        fontSizeRatio: 0.026,
        fontWeight: 400,
        align: 'left',
        color: '#454b52',
      },
    },
  },
  {
    id: 'story',
    name: 'Kể chuyện',
    description: 'Ảnh nửa trên, chữ nửa dưới như trang sách.',
    palette: ['#1b2a41', '#324a5f', '#2d4654', '#3b3b58', '#243b53'],
    transitionSeconds: 0.6,
    slots: {
      image: { x: 0, y: 0, width: 1, height: 0.58, opacity: 1 },
      title: {
        x: 0.08,
        y: 0.62,
        width: 0.84,
        height: 0.13,
        fontSizeRatio: 0.05,
        fontWeight: 700,
        align: 'left',
        color: '#ffffff',
      },
      subtitle: {
        x: 0.08,
        y: 0.76,
        width: 0.8,
        height: 0.11,
        fontSizeRatio: 0.028,
        fontWeight: 400,
        align: 'left',
        color: '#cfdcea',
      },
    },
  },
  {
    id: 'promo',
    name: 'Khuyến mãi',
    description: 'Khối chữ góc dưới, màu nóng, chuyển cảnh nhanh.',
    palette: ['#7f1d1d', '#9a3412', '#a16207', '#166534', '#1e3a8a'],
    transitionSeconds: 0.2,
    slots: {
      image: { x: 0, y: 0, width: 1, height: 1, opacity: 0.65 },
      title: {
        x: 0.06,
        y: 0.62,
        width: 0.6,
        height: 0.15,
        fontSizeRatio: 0.062,
        fontWeight: 900,
        align: 'left',
        color: '#fff7ed',
      },
      subtitle: {
        x: 0.06,
        y: 0.79,
        width: 0.56,
        height: 0.08,
        fontSizeRatio: 0.03,
        fontWeight: 600,
        align: 'left',
        color: '#fed7aa',
      },
    },
  },
]

export function findTemplate(templateId: string): EditorTemplate {
  return (
    EDITOR_TEMPLATES.find((template) => template.id === templateId) ??
    EDITOR_TEMPLATES[0]
  )
}

function applySlot(
  layer: SceneV1['layers'][number],
  slot: SlotStyle,
  project: Pick<ProjectDocumentV1, 'width' | 'height'>,
): SceneV1['layers'][number] {
  const geometry = {
    x: Math.round(slot.x * project.width),
    y: Math.round(slot.y * project.height),
    width: Math.max(1, Math.round(slot.width * project.width)),
    height: Math.max(1, Math.round(slot.height * project.height)),
    opacity: slot.opacity ?? layer.opacity,
  }

  if (layer.type === 'image') {
    // assetId, fit, offset and scale are the user's choices; only the box moves.
    return { ...layer, ...geometry }
  }

  return {
    ...layer,
    ...geometry,
    fontSize: Math.max(
      12,
      Math.round((slot.fontSizeRatio ?? 0.04) * project.height),
    ),
    fontWeight: slot.fontWeight ?? layer.fontWeight,
    align: slot.align ?? layer.align,
    color: slot.color ?? layer.color,
  }
}

/**
 * Restyles a project with a different template.
 *
 * Text content, image assignments, image framing, scene names and durations are
 * all carried over untouched; only presentation is replaced. Layers with the
 * 'free' role are left exactly as they are, so anything the user positioned by
 * hand survives a template change.
 */
export function applyTemplate(
  project: ProjectDocumentV1,
  templateId: string,
): ProjectDocumentV1 {
  const template = findTemplate(templateId)

  return {
    ...project,
    templateId: template.id,
    scenes: project.scenes.map((scene, sceneIndex) => ({
      ...scene,
      background: template.palette[sceneIndex % template.palette.length],
      transitionSeconds: template.transitionSeconds,
      layers: scene.layers.map((layer) =>
        layer.role === 'free'
          ? layer
          : applySlot(layer, template.slots[layer.role], project),
      ),
    })),
  }
}
