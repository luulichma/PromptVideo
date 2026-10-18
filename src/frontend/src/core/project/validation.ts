import { kindUsesImage } from '../templates/templates'
import {
  describeSafeAreaSides,
  findSafeAreaOverflow,
  getSafeAreaBox,
} from './safeArea'
import type { ProjectDocumentV1, SceneKind, TextLayerV1 } from './schema'
import { getProjectDuration } from './timeline'

/** The standard video: an opening, three scenes with a picture, a closing. */
export const DEFAULT_SCENE_KINDS: readonly SceneKind[] = [
  'intro',
  'textImage',
  'textImage',
  'textImage',
  'outro',
]

/** 5 scenes × 12 seconds. */
export const DEFAULT_TOTAL_SECONDS = 60

/** A video needs at least one scene; past twenty the editor stops helping. */
export const MIN_SCENE_COUNT = 1
export const MAX_SCENE_COUNT = 20

export const MIN_SCENE_SECONDS = 1
export const MAX_SCENE_SECONDS = 60

/**
 * The standard video is 60 seconds; three minutes is the outer bound the
 * browser export path is sized for. This is an independent limit, not implied
 * by the per-scene cap.
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
    | 'missing-image'
    | 'empty-title'
    | 'text-overflow'
    | 'outside-safe-area'
  severity: IssueSeverity
  message: string
  sceneId?: string
  layerId?: string
}

/**
 * Says whether a text layer is too long for its box even at its smallest
 * allowed size. Measuring needs a canvas, so the caller supplies it; without
 * one, overflow is simply not checked.
 */
export type OverflowCheck = (layer: TextLayerV1) => boolean

export type ValidateOptions = { isOverflowing?: OverflowCheck }

/**
 * Business validation, deliberately separate from the Zod schema.
 *
 * The schema answers "is this document structurally readable", which must stay
 * permissive enough to open an older or partially edited file. This answers "is
 * this project fit to render and export", which is a stricter question and one
 * the user should be able to see and fix rather than be blocked by a parse error.
 *
 * Scenes are named by position ("Cảnh 3"), which is how the user sees them.
 */
export function validateProject(
  project: ProjectDocumentV1,
  options: ValidateOptions = {},
): ValidationIssue[] {
  const issues: ValidationIssue[] = []

  if (
    project.scenes.length < MIN_SCENE_COUNT ||
    project.scenes.length > MAX_SCENE_COUNT
  ) {
    issues.push({
      code: 'scene-count',
      severity: 'error',
      message: `Video cần từ ${MIN_SCENE_COUNT} đến ${MAX_SCENE_COUNT} cảnh, hiện có ${project.scenes.length}.`,
    })
  }

  const assetIds = new Set(project.assets.map((asset) => asset.id))
  const safeArea = getSafeAreaBox(project)

  project.scenes.forEach((scene, index) => {
    const label = `Cảnh ${index + 1}`

    if (
      !Number.isFinite(scene.durationSeconds) ||
      scene.durationSeconds < MIN_SCENE_SECONDS ||
      scene.durationSeconds > MAX_SCENE_SECONDS
    ) {
      issues.push({
        code: 'scene-duration',
        severity: 'error',
        sceneId: scene.id,
        message: `${label} phải dài từ ${MIN_SCENE_SECONDS} đến ${MAX_SCENE_SECONDS} giây.`,
      })
    }

    // A transition longer than the scene would read past the scene's own end.
    if (scene.transitionSeconds > scene.durationSeconds) {
      issues.push({
        code: 'scene-duration',
        severity: 'error',
        sceneId: scene.id,
        message: `Chuyển cảnh của ${label.toLowerCase()} dài hơn chính cảnh đó.`,
      })
    }

    const hasImage = scene.layers.some((layer) => layer.type === 'image')
    if (kindUsesImage(scene.kind) && !hasImage) {
      issues.push({
        code: 'missing-image',
        severity: 'error',
        sceneId: scene.id,
        message: `${label} là kiểu "Chữ kèm ảnh" nhưng chưa có ảnh. Hãy chọn ảnh, hoặc đổi sang kiểu "Chỉ có chữ".`,
      })
    }

    for (const layer of scene.layers) {
      if (layer.type === 'image' && !assetIds.has(layer.assetId)) {
        issues.push({
          code: 'missing-asset',
          severity: 'error',
          sceneId: scene.id,
          layerId: layer.id,
          message: `${label} dùng một ảnh không còn trong dự án.`,
        })
      }

      if (layer.type !== 'text') continue

      if (layer.role === 'title' && !layer.text.trim()) {
        issues.push({
          code: 'empty-title',
          severity: 'error',
          sceneId: scene.id,
          layerId: layer.id,
          message: `${label} chưa có tiêu đề.`,
        })
      }

      if (layer.text.trim() && options.isOverflowing?.(layer)) {
        issues.push({
          code: 'text-overflow',
          severity: 'error',
          sceneId: scene.id,
          layerId: layer.id,
          message: `Chữ ở ${label.toLowerCase()} quá dài so với khung của mẫu. Hãy rút gọn.`,
        })
      }

      const sides = findSafeAreaOverflow(layer, safeArea)
      if (sides.length > 0) {
        issues.push({
          code: 'outside-safe-area',
          severity: 'warning',
          sceneId: scene.id,
          layerId: layer.id,
          message: `Chữ ở ${label.toLowerCase()} vượt vùng an toàn ở cạnh ${describeSafeAreaSides(sides)}; một số thiết bị có thể cắt mất.`,
        })
      }
    }
  })

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
export function isProjectExportable(
  project: ProjectDocumentV1,
  options: ValidateOptions = {},
): boolean {
  return validateProject(project, options).every(
    (issue) => issue.severity === 'warning',
  )
}
