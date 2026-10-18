import { applyTemplate } from '../templates/templates'
import type {
  ProjectDocumentV1,
  SceneKind,
  SceneV1,
  TextLayerV1,
} from './schema'
import { DEFAULT_SCENE_KINDS, DEFAULT_TOTAL_SECONDS } from './validation'

const DEFAULT_SCENE_SECONDS = DEFAULT_TOTAL_SECONDS / DEFAULT_SCENE_KINDS.length

/** Prompts in the fields of a new scene, so nobody starts from a blank card. */
const STARTER_COPY: Record<SceneKind, readonly (readonly [string, string])[]> =
  {
    intro: [['Tên sản phẩm hoặc chủ đề', 'Một câu giới thiệu ngắn']],
    text: [['Ý chính', 'Giải thích ý chính trong một hai câu']],
    textImage: [
      ['Điểm nổi bật thứ nhất', 'Một câu mô tả đi kèm ảnh'],
      ['Điểm nổi bật thứ hai', 'Một câu mô tả đi kèm ảnh'],
      ['Điểm nổi bật thứ ba', 'Một câu mô tả đi kèm ảnh'],
    ],
    outro: [
      ['Tên cửa hàng hoặc lời cảm ơn', 'Số điện thoại · địa chỉ · website'],
    ],
  }

function textLayer(
  sceneId: string,
  role: 'title' | 'subtitle',
  text: string,
): TextLayerV1 {
  // Geometry and typography are placeholders; the template sets them.
  return {
    id: `${sceneId}-${role}`,
    type: 'text',
    role,
    text,
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    opacity: 1,
    color: '#ffffff',
    fontFamily: 'Noto Sans',
    fontSize: 32,
    fontWeight: 400,
    align: 'left',
    verticalAlign: 'top',
    lineHeight: 1.25,
  }
}

/**
 * A scene of the given kind with starter text. It is not laid out yet: the
 * caller runs the project through its template, which places everything.
 */
export function createScene(
  id: string,
  kind: SceneKind,
  variant = 0,
  durationSeconds = DEFAULT_SCENE_SECONDS,
): SceneV1 {
  const copies = STARTER_COPY[kind]
  const [title, subtitle] = copies[variant % copies.length]
  return {
    id,
    kind,
    name: id,
    durationSeconds,
    background: '#101418',
    transitionSeconds: 0,
    entrance: 'none',
    layers: [
      textLayer(id, 'title', title),
      textLayer(id, 'subtitle', subtitle),
    ],
  }
}

/**
 * A new project already has the five scenes and the 60 second timeline of the
 * standard video: an opening, three scenes with a picture, and a closing.
 */
export function createProject(
  name: string,
  options: {
    id?: string
    templateId?: string
    /** Scene kinds in order; the standard five when omitted. */
    kinds?: readonly SceneKind[]
  } = {},
): ProjectDocumentV1 {
  const seen: Partial<Record<SceneKind, number>> = {}
  const base: ProjectDocumentV1 = {
    version: 1,
    id: options.id ?? crypto.randomUUID(),
    name,
    width: 1280,
    height: 720,
    fps: 30,
    templateId: options.templateId ?? 'classic',
    templateVersion: 1,
    safeArea: { top: 0.08, bottom: 0.12, left: 0.06, right: 0.06 },
    assets: [],
    scenes: (options.kinds ?? DEFAULT_SCENE_KINDS).map((kind, index) => {
      const variant = seen[kind] ?? 0
      seen[kind] = variant + 1
      return createScene(`scene-${index + 1}`, kind, variant)
    }),
  }

  // The current edition of the chosen template places everything.
  return applyTemplate(base, base.templateId)
}
