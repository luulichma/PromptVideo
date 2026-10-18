import { applyTemplate, kindUsesImage, relayout } from '../templates/templates'
import { createScene } from './createProject'
import type {
  AssetRefV1,
  ImageLayerV1,
  ProjectDocumentV1,
  SceneKind,
  SceneV1,
  TextLayerV1,
} from './schema'
import { MAX_SCENE_COUNT, MIN_SCENE_COUNT } from './validation'

/**
 * Every edit is a named, pure transformation of the project document.
 *
 * Keeping edits as functions of the whole document — rather than in-place
 * mutation — is what makes undo/redo a matter of keeping previous documents,
 * with no per-edit inverse to write and get wrong. A five-scene document is a
 * few kilobytes, so the memory cost of that simplicity is negligible.
 */
export type ProjectCommand = {
  readonly label: string
  readonly apply: (project: ProjectDocumentV1) => ProjectDocumentV1
}

function mapScene(
  project: ProjectDocumentV1,
  sceneId: string,
  update: (scene: SceneV1) => SceneV1,
): ProjectDocumentV1 {
  return {
    ...project,
    scenes: project.scenes.map((scene) =>
      scene.id === sceneId ? update(scene) : scene,
    ),
  }
}

function mapLayer(
  project: ProjectDocumentV1,
  sceneId: string,
  layerId: string,
  update: (layer: SceneV1['layers'][number]) => SceneV1['layers'][number],
): ProjectDocumentV1 {
  return mapScene(project, sceneId, (scene) => ({
    ...scene,
    layers: scene.layers.map((layer) =>
      layer.id === layerId ? update(layer) : layer,
    ),
  }))
}

export function renameProject(name: string): ProjectCommand {
  return {
    label: 'Đổi tên project',
    apply: (project) => ({ ...project, name }),
  }
}

export function renameScene(sceneId: string, name: string): ProjectCommand {
  return {
    label: 'Đổi tên cảnh',
    apply: (project) =>
      mapScene(project, sceneId, (scene) => ({ ...scene, name })),
  }
}

export function setSceneDuration(
  sceneId: string,
  durationSeconds: number,
): ProjectCommand {
  return {
    label: 'Đổi thời lượng cảnh',
    apply: (project) =>
      mapScene(project, sceneId, (scene) => ({ ...scene, durationSeconds })),
  }
}

/**
 * Moves a scene to a new index. Out-of-range targets are clamped rather than
 * rejected so drag-and-drop and keyboard reordering share one code path.
 */
export function reorderScene(sceneId: string, toIndex: number): ProjectCommand {
  return {
    label: 'Sắp xếp lại cảnh',
    apply: (project) => {
      const fromIndex = project.scenes.findIndex(
        (scene) => scene.id === sceneId,
      )
      if (fromIndex < 0) return project

      const target = Math.min(Math.max(0, toIndex), project.scenes.length - 1)
      if (target === fromIndex) return project

      const scenes = [...project.scenes]
      const [moved] = scenes.splice(fromIndex, 1)
      scenes.splice(target, 0, moved)
      // Backgrounds follow position, so the moved scenes are laid out again.
      return relayout({ ...project, scenes })
    },
  }
}

/** Drops assets no scene refers to any more, so a package carries no strays. */
function pruneAssets(project: ProjectDocumentV1): ProjectDocumentV1 {
  const used = new Set(
    project.scenes.flatMap((scene) =>
      scene.layers
        .filter((layer): layer is ImageLayerV1 => layer.type === 'image')
        .map((layer) => layer.assetId),
    ),
  )
  return {
    ...project,
    assets: project.assets.filter((asset) => used.has(asset.id)),
  }
}

/** A scene id no other scene uses, stable enough to read in a package. */
function nextSceneId(project: ProjectDocumentV1): string {
  const taken = new Set(project.scenes.map((scene) => scene.id))
  let index = project.scenes.length
  while (taken.has(`scene-${index + 1}`)) index += 1
  return `scene-${index + 1}`
}

/**
 * Adds a scene of the given kind after another one, or at the end. Refused
 * quietly once the project holds the most scenes a video may have.
 */
export function addScene(
  kind: SceneKind,
  afterSceneId?: string,
): ProjectCommand {
  return {
    label: 'Thêm cảnh',
    apply: (project) => {
      if (project.scenes.length >= MAX_SCENE_COUNT) return project
      const at = afterSceneId
        ? project.scenes.findIndex((scene) => scene.id === afterSceneId) + 1
        : project.scenes.length
      const scene = createScene(nextSceneId(project), kind)
      const scenes = [...project.scenes]
      scenes.splice(at <= 0 ? project.scenes.length : at, 0, scene)
      return relayout({ ...project, scenes })
    },
  }
}

/** Removes a scene; a video always keeps at least one. */
export function removeScene(sceneId: string): ProjectCommand {
  return {
    label: 'Xoá cảnh',
    apply: (project) => {
      if (project.scenes.length <= MIN_SCENE_COUNT) return project
      const scenes = project.scenes.filter((scene) => scene.id !== sceneId)
      if (scenes.length === project.scenes.length) return project
      return pruneAssets(relayout({ ...project, scenes }))
    },
  }
}

/**
 * Changes what kind of scene this is. The text stays; a picture is dropped
 * when the new kind has no place for one, which undo brings back.
 */
export function setSceneKind(sceneId: string, kind: SceneKind): ProjectCommand {
  return {
    label: 'Đổi kiểu cảnh',
    apply: (project) => {
      const current = project.scenes.find((scene) => scene.id === sceneId)
      if (!current || current.kind === kind) return project
      const next = mapScene(project, sceneId, (scene) => ({
        ...scene,
        kind,
        layers: kindUsesImage(kind)
          ? scene.layers
          : scene.layers.filter((layer) => layer.type !== 'image'),
      }))
      return pruneAssets(relayout(next))
    },
  }
}

/** Sets the title or the second line of a scene. */
export function setSceneText(
  sceneId: string,
  role: 'title' | 'subtitle',
  text: string,
): ProjectCommand {
  return {
    label: role === 'title' ? 'Sửa tiêu đề' : 'Sửa nội dung',
    apply: (project) =>
      mapScene(project, sceneId, (scene) => ({
        ...scene,
        layers: scene.layers.map((layer) =>
          layer.type === 'text' && layer.role === role
            ? { ...layer, text }
            : layer,
        ),
      })),
  }
}

export function updateTextLayer(
  sceneId: string,
  layerId: string,
  patch: Partial<Omit<TextLayerV1, 'id' | 'type' | 'role'>>,
): ProjectCommand {
  return {
    label: 'Sửa lớp chữ',
    apply: (project) =>
      mapLayer(project, sceneId, layerId, (layer) =>
        layer.type === 'text' ? { ...layer, ...patch } : layer,
      ),
  }
}

export function updateImageLayer(
  sceneId: string,
  layerId: string,
  patch: Partial<Omit<ImageLayerV1, 'id' | 'type' | 'role'>>,
): ProjectCommand {
  return {
    label: 'Sửa lớp ảnh',
    apply: (project) =>
      mapLayer(project, sceneId, layerId, (layer) =>
        layer.type === 'image' ? { ...layer, ...patch } : layer,
      ),
  }
}

/**
 * Attaches an imported image to a scene, replacing the scene's existing image
 * layer if it already has one so a scene never ends up with two backgrounds.
 */
export function attachImage(
  sceneId: string,
  asset: AssetRefV1,
): ProjectCommand {
  return {
    label: 'Thêm ảnh vào cảnh',
    apply: (project) => {
      const withAsset = project.assets.some((item) => item.id === asset.id)
        ? project
        : { ...project, assets: [...project.assets, asset] }

      const next = mapScene(withAsset, sceneId, (picked) => {
        // A picture added to a scene with no place for one makes it a
        // text-with-image scene, rather than being silently dropped.
        const scene = kindUsesImage(picked.kind)
          ? picked
          : { ...picked, kind: 'textImage' as const }
        const existing = scene.layers.find(
          (layer) => layer.type === 'image' && layer.role === 'image',
        )
        if (existing) {
          return {
            ...scene,
            layers: scene.layers.map((layer) =>
              layer.id === existing.id && layer.type === 'image'
                ? {
                    ...layer,
                    assetId: asset.id,
                    offsetX: 0,
                    offsetY: 0,
                    scale: 1,
                  }
                : layer,
            ),
          }
        }

        const imageLayer: ImageLayerV1 = {
          id: `${scene.id}-image`,
          type: 'image',
          role: 'image',
          assetId: asset.id,
          fit: 'cover',
          offsetX: 0,
          offsetY: 0,
          scale: 1,
          x: 0,
          y: 0,
          width: project.width,
          height: project.height,
          opacity: 1,
        }
        // Images go underneath the text the template placed on top of them.
        return { ...scene, layers: [imageLayer, ...scene.layers] }
      })

      // Lay out again so the new layer lands in the template's image slot.
      return relayout(next)
    },
  }
}

/** Removes a scene's image layer, and the asset itself once nothing uses it. */
export function detachImage(sceneId: string): ProjectCommand {
  return {
    label: 'Gỡ ảnh khỏi cảnh',
    apply: (project) => {
      const next = mapScene(project, sceneId, (scene) => ({
        ...scene,
        layers: scene.layers.filter((layer) => layer.type !== 'image'),
      }))
      // Lay out again so the empty slot shows where a picture belongs.
      return pruneAssets(relayout(next))
    },
  }
}

export function switchTemplate(templateId: string): ProjectCommand {
  return {
    label: 'Đổi template',
    apply: (project) => applyTemplate(project, templateId),
  }
}
