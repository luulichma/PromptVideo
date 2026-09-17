import { applyTemplate } from '../templates/templates'
import type { ProjectDocumentV1, SceneV1 } from './schema'
import { DEFAULT_TOTAL_SECONDS, REQUIRED_SCENE_COUNT } from './validation'

const DEFAULT_SCENE_SECONDS = DEFAULT_TOTAL_SECONDS / REQUIRED_SCENE_COUNT

const STARTER_COPY: readonly (readonly [string, string])[] = [
  ['Mở đầu', 'Giới thiệu ý tưởng trong một câu'],
  ['Vấn đề', 'Điều gì đang khiến khán giả bận tâm'],
  ['Giải pháp', 'Bạn mang lại điều gì khác biệt'],
  ['Bằng chứng', 'Con số hoặc câu chuyện thuyết phục'],
  ['Kêu gọi', 'Bước tiếp theo bạn muốn họ làm'],
]

export function createSceneId(index: number): string {
  return `scene-${index + 1}`
}

function createScene(index: number): SceneV1 {
  const [title, subtitle] = STARTER_COPY[index % STARTER_COPY.length]
  return {
    id: createSceneId(index),
    name: `Cảnh ${index + 1}`,
    durationSeconds: DEFAULT_SCENE_SECONDS,
    background: '#101418',
    transitionSeconds: 0.5,
    layers: [
      {
        id: `${createSceneId(index)}-title`,
        type: 'text',
        role: 'title',
        text: title,
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        opacity: 1,
        color: '#ffffff',
        fontFamily: 'Noto Sans',
        fontSize: 56,
        fontWeight: 800,
        align: 'left',
        lineHeight: 1.2,
      },
      {
        id: `${createSceneId(index)}-subtitle`,
        type: 'text',
        role: 'subtitle',
        text: subtitle,
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        opacity: 0.9,
        color: '#e8eef8',
        fontFamily: 'Noto Sans',
        fontSize: 30,
        fontWeight: 400,
        align: 'left',
        lineHeight: 1.3,
      },
    ],
  }
}

/**
 * A new project already has the five scenes and the 60 second timeline the MVP
 * promises, so a user never starts from an invalid document.
 */
export function createProject(
  name: string,
  options: { id?: string; templateId?: string } = {},
): ProjectDocumentV1 {
  const base: ProjectDocumentV1 = {
    version: 1,
    id: options.id ?? crypto.randomUUID(),
    name,
    width: 1280,
    height: 720,
    fps: 30,
    templateId: options.templateId ?? 'classic',
    safeArea: { top: 0.08, bottom: 0.12, left: 0.06, right: 0.06 },
    assets: [],
    scenes: Array.from({ length: REQUIRED_SCENE_COUNT }, (_, index) =>
      createScene(index),
    ),
  }

  // Run it through the template so slot geometry is correct from the first frame.
  return applyTemplate(base, base.templateId)
}
