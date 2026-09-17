import { describe, expect, it } from 'vitest'
import {
  attachImage,
  updateImageLayer,
  updateTextLayer,
} from '../project/commands'
import { createProject } from '../project/createProject'
import type { AssetRefV1, ImageLayerV1, TextLayerV1 } from '../project/schema'
import { findSafeAreaOverflow, getSafeAreaBox } from '../project/safeArea'
import { EDITOR_TEMPLATES, applyTemplate } from './templates'

const asset: AssetRefV1 = {
  id: 'asset-1',
  fileName: 'anh.jpg',
  mimeType: 'image/jpeg',
  byteLength: 4096,
  sha256: 'b'.repeat(64),
  width: 1920,
  height: 1080,
}

function textOf(project: ReturnType<typeof createProject>): string[] {
  return project.scenes.flatMap((scene) =>
    scene.layers
      .filter((layer): layer is TextLayerV1 => layer.type === 'text')
      .map((layer) => layer.text),
  )
}

describe('editor templates', () => {
  it('ships exactly the five MVP templates with unique ids', () => {
    expect(EDITOR_TEMPLATES).toHaveLength(5)
    expect(new Set(EDITOR_TEMPLATES.map((item) => item.id)).size).toBe(5)
  })

  it('keeps every piece of user data while cycling through all five templates', () => {
    let project = createProject('Dự án', { id: 'p1' })
    project = attachImage('scene-2', asset).apply(project)
    project = updateTextLayer('scene-1', 'scene-1-title', {
      text: 'Nội dung của người dùng',
    }).apply(project)
    project = updateImageLayer('scene-2', 'scene-2-image', {
      fit: 'contain',
      offsetX: 40,
      scale: 1.4,
    }).apply(project)

    const expectedText = textOf(project)
    const expectedDurations = project.scenes.map(
      (scene) => scene.durationSeconds,
    )
    const expectedNames = project.scenes.map((scene) => scene.name)

    for (const template of EDITOR_TEMPLATES) {
      project = applyTemplate(project, template.id)

      expect(project.templateId).toBe(template.id)
      expect(textOf(project)).toEqual(expectedText)
      expect(project.scenes.map((scene) => scene.durationSeconds)).toEqual(
        expectedDurations,
      )
      expect(project.scenes.map((scene) => scene.name)).toEqual(expectedNames)
      expect(project.assets).toHaveLength(1)

      const image = project.scenes[1].layers.find(
        (layer): layer is ImageLayerV1 => layer.type === 'image',
      )
      // Framing choices are the user's, not the template's.
      expect(image?.assetId).toBe('asset-1')
      expect(image?.fit).toBe('contain')
      expect(image?.offsetX).toBe(40)
      expect(image?.scale).toBe(1.4)
    }
  })

  it('keeps every text slot of every template inside the safe area', () => {
    const base = createProject('Dự án', { id: 'safe' })
    const box = getSafeAreaBox(base)

    for (const template of EDITOR_TEMPLATES) {
      const project = applyTemplate(base, template.id)
      const overflowing = project.scenes.flatMap((scene) =>
        scene.layers
          .filter((layer): layer is TextLayerV1 => layer.type === 'text')
          .filter((layer) => findSafeAreaOverflow(layer, box).length > 0)
          .map((layer) => `${template.id}/${layer.id}`),
      )

      expect(overflowing).toEqual([])
    }
  })

  it('actually restyles rather than leaving the project untouched', () => {
    const classic = createProject('Dự án', { id: 'p2', templateId: 'classic' })
    const bold = applyTemplate(classic, 'bold')

    expect(bold.scenes[0].background).not.toBe(classic.scenes[0].background)
    const classicTitle = classic.scenes[0].layers[0] as TextLayerV1
    const boldTitle = bold.scenes[0].layers[0] as TextLayerV1
    expect(boldTitle.align).toBe('center')
    expect(boldTitle.align).not.toBe(classicTitle.align)
  })

  it('leaves free-role layers exactly where the user put them', () => {
    const project = createProject('Dự án', { id: 'p3' })
    const pinned: TextLayerV1 = {
      ...(project.scenes[0].layers[0] as TextLayerV1),
      id: 'pinned',
      role: 'free',
      x: 17,
      y: 23,
      fontSize: 41,
    }
    const withPinned = {
      ...project,
      scenes: project.scenes.map((scene, index) =>
        index === 0 ? { ...scene, layers: [...scene.layers, pinned] } : scene,
      ),
    }

    const restyled = applyTemplate(withPinned, 'promo')
    const after = restyled.scenes[0].layers.find(
      (layer) => layer.id === 'pinned',
    )

    expect(after).toEqual(pinned)
  })

  it('scales slot geometry to the project resolution', () => {
    const project = createProject('Dự án', { id: 'p4' })
    const hd = applyTemplate(
      { ...project, width: 1920, height: 1080 },
      'classic',
    )
    const title = hd.scenes[0].layers.find(
      (layer): layer is TextLayerV1 => layer.role === 'title',
    )

    expect(title?.width).toBe(Math.round(0.84 * 1920))
    expect(title?.fontSize).toBe(Math.round(0.058 * 1080))
  })
})
