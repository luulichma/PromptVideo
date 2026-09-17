import { applyTemplate } from '../templates/templates'
import type {
  AssetRefV1,
  ImageLayerV1,
  ProjectDocumentV1,
  SceneV1,
  TextLayerV1,
} from './schema'

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

export function setSceneBackground(
  sceneId: string,
  background: string,
): ProjectCommand {
  return {
    label: 'Đổi nền cảnh',
    apply: (project) =>
      mapScene(project, sceneId, (scene) => ({ ...scene, background })),
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
      return { ...project, scenes }
    },
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

      const next = mapScene(withAsset, sceneId, (scene) => {
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

      // Re-run the template so the new layer lands in the template's image slot.
      return applyTemplate(next, next.templateId)
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

      const stillUsed = new Set(
        next.scenes.flatMap((scene) =>
          scene.layers
            .filter((layer) => layer.type === 'image')
            .map((layer) => (layer as ImageLayerV1).assetId),
        ),
      )
      return {
        ...next,
        assets: next.assets.filter((asset) => stillUsed.has(asset.id)),
      }
    },
  }
}

export function switchTemplate(templateId: string): ProjectCommand {
  return {
    label: 'Đổi template',
    apply: (project) => applyTemplate(project, templateId),
  }
}
