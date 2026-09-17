import {
  describeSafeAreaSides,
  findSafeAreaOverflow,
  getSafeAreaBox,
} from './safeArea'
import type { ProjectDocumentV1 } from './schema'
import { getProjectDuration } from './timeline'

/** The MVP ships a fixed five-scene story, so the editor holds that shape. */
export const REQUIRED_SCENE_COUNT = 5

/** 5 scenes × 12 seconds. */
export const DEFAULT_TOTAL_SECONDS = 60

export const MIN_SCENE_SECONDS = 1
export const MAX_SCENE_SECONDS = 60

/**
 * The MVP targets a 60 second video; three minutes is the outer bound the
 * browser export path is sized for. This is an independent limit, not implied
 * by the per-scene cap: five scenes at the per-scene maximum would be far
 * longer than anything the editor promises to export.
 */
export const MAX_TOTAL_SECONDS = 180

/**
 * 'error' blocks export; 'warning' is advice the user may knowingly ignore.
 *
 * The distinction earns its place with the safe area: text reaching past it is a
 * defect on a phone with a notch and a deliberate choice in a full-bleed design,
 * and only the person making the video can say which. Refusing to export would
 * be us overruling them; saying nothing would let a clipped subtitle ship.
 */
export type IssueSeverity = 'error' | 'warning'

export type ValidationIssue = {
  /** Stable code so the UI can decide how to present the problem. */
  code:
    | 'scene-count'
    | 'scene-duration'
    | 'total-duration'
    | 'missing-asset'
    | 'empty-title'
    | 'outside-safe-area'
  severity: IssueSeverity
  message: string
  sceneId?: string
  layerId?: string
}

/**
 * Business validation, deliberately separate from the Zod schema.
 *
 * The schema answers "is this document structurally readable", which must stay
 * permissive enough to open an older or partially edited file. This answers "is
 * this project fit to render and export", which is a stricter question and one
 * the user should be able to see and fix rather than be blocked by a parse error.
 */
export function validateProject(project: ProjectDocumentV1): ValidationIssue[] {
  const issues: ValidationIssue[] = []

  if (project.scenes.length !== REQUIRED_SCENE_COUNT) {
    issues.push({
      code: 'scene-count',
      severity: 'error',
      message: `Project cần đúng ${REQUIRED_SCENE_COUNT} cảnh, hiện có ${project.scenes.length}.`,
    })
  }

  const assetIds = new Set(project.assets.map((asset) => asset.id))
  const safeArea = getSafeAreaBox(project)

  for (const scene of project.scenes) {
    if (
      !Number.isFinite(scene.durationSeconds) ||
      scene.durationSeconds < MIN_SCENE_SECONDS ||
      scene.durationSeconds > MAX_SCENE_SECONDS
    ) {
      issues.push({
        code: 'scene-duration',
        severity: 'error',
        sceneId: scene.id,
        message: `Cảnh "${scene.name}" phải dài từ ${MIN_SCENE_SECONDS} đến ${MAX_SCENE_SECONDS} giây.`,
      })
    }

    // A transition longer than the scene would read past the scene's own end.
    if (scene.transitionSeconds > scene.durationSeconds) {
      issues.push({
        code: 'scene-duration',
        severity: 'error',
        sceneId: scene.id,
        message: `Chuyển cảnh của "${scene.name}" dài hơn chính cảnh đó.`,
      })
    }

    for (const layer of scene.layers) {
      if (layer.type === 'image' && !assetIds.has(layer.assetId)) {
        issues.push({
          code: 'missing-asset',
          severity: 'error',
          sceneId: scene.id,
          layerId: layer.id,
          message: `Cảnh "${scene.name}" tham chiếu ảnh không còn trong project.`,
        })
      }

      if (layer.type !== 'text') continue

      if (layer.role === 'title' && !layer.text.trim()) {
        issues.push({
          code: 'empty-title',
          severity: 'error',
          sceneId: scene.id,
          layerId: layer.id,
          message: `Cảnh "${scene.name}" chưa có tiêu đề.`,
        })
      }

      const sides = findSafeAreaOverflow(layer, safeArea)
      if (sides.length > 0) {
        issues.push({
          code: 'outside-safe-area',
          severity: 'warning',
          sceneId: scene.id,
          layerId: layer.id,
          message: `Chữ trong cảnh "${scene.name}" vượt vùng an toàn ở cạnh ${describeSafeAreaSides(sides)}; một số thiết bị có thể cắt mất.`,
        })
      }
    }
  }

  const total = getProjectDuration(project)
  if (total <= 0 || total > MAX_TOTAL_SECONDS) {
    issues.push({
      code: 'total-duration',
      severity: 'error',
      message: `Tổng thời lượng ${total.toFixed(1)} giây nằm ngoài khoảng cho phép (0 - ${MAX_TOTAL_SECONDS} giây).`,
    })
  }

  return issues
}

/**
 * True when the project can be rendered and exported.
 *
 * Warnings do not block: the user has been told, and the decision is theirs.
 */
export function isProjectExportable(project: ProjectDocumentV1): boolean {
  return validateProject(project).every((issue) => issue.severity === 'warning')
}
