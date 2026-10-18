import { describe, expect, it } from 'vitest'
import {
  addScene,
  attachImage,
  removeScene,
  setSceneKind,
  setSceneText,
  updateImageLayer,
  updateTextLayer,
} from '../project/commands'
import { createProject } from '../project/createProject'
import type { AssetRefV1, ImageLayerV1, TextLayerV1 } from '../project/schema'
import { findSafeAreaOverflow, getSafeAreaBox } from '../project/safeArea'
import {
  EDITOR_TEMPLATES,
  applyTemplate,
  findTemplate,
  relayout,
} from './templates'

const ALL_KINDS = ['intro', 'text', 'textImage', 'outro'] as const

function titleOf(scene: { layers: readonly { type: string; role: string }[] }) {
  return scene.layers.find(
    (layer) => layer.type === 'text' && layer.role === 'title',
  ) as TextLayerV1
}

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
    const base = createProject('Dự án', { id: 'safe', kinds: ALL_KINDS })
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
    const classicTitle = titleOf(classic.scenes[0])
    const boldTitle = titleOf(bold.scenes[0])
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
    expect(title?.fontSize).toBe(Math.round(0.085 * 1080))
  })

  it('gives every current template a layout for each of the four scene kinds', () => {
    for (const template of EDITOR_TEMPLATES) {
      expect(Object.keys(template.layouts).sort()).toEqual(
        [...ALL_KINDS].sort(),
      )
      // Only the kind that carries a picture has a place for one.
      expect(template.layouts.textImage.image).toBeDefined()
      expect(template.layouts.intro.image).toBeUndefined()
      expect(template.layouts.text.image).toBeUndefined()
      expect(template.layouts.outro.image).toBeUndefined()
    }
  })

  it('offers the bright and minimal styles by name', () => {
    const names = EDITOR_TEMPLATES.map((template) => template.name)
    expect(names).toContain('Tươi sáng')
    expect(names).toContain('Tối giản')
  })

  it('keeps an old project on the template edition it was made with', () => {
    // A project saved before versioning: first edition, no scene kinds.
    const legacy = applyTemplate(
      createProject('Cũ', { id: 'legacy', kinds: ['text', 'text'] }),
      'classic',
      1,
    )
    expect(legacy.templateVersion).toBe(1)
    const before = titleOf(legacy.scenes[0])

    // Editing it lays it out again with the same edition, not the newest one.
    const edited = relayout(
      setSceneText('scene-1', 'title', 'Sửa giá').apply(legacy),
    )
    const after = titleOf(edited.scenes[0])
    expect(edited.templateVersion).toBe(1)
    expect({ ...after, text: before.text }).toEqual(before)

    // Choosing the template again moves it to the current edition.
    const upgraded = applyTemplate(edited, 'classic')
    expect(upgraded.templateVersion).toBe(findTemplate('classic').version)
  })

  it('keeps kinds, text and pictures through a template switch', () => {
    let project = createProject('Dự án', { id: 'switch' })
    project = attachImage('scene-3', asset).apply(project)
    project = setSceneText('scene-1', 'title', 'Kem chống nắng').apply(project)

    const switched = applyTemplate(project, 'minimal')
    expect(switched.scenes.map((scene) => scene.kind)).toEqual(
      project.scenes.map((scene) => scene.kind),
    )
    expect(titleOf(switched.scenes[0]).text).toBe('Kem chống nắng')
    expect(
      switched.scenes[2].layers.some(
        (layer) => layer.type === 'image' && layer.assetId === 'asset-1',
      ),
    ).toBe(true)
  })

  it('adds, removes and retypes scenes and keeps the layout consistent', () => {
    let project = createProject('Dự án', { id: 'edit' })
    project = addScene('text', 'scene-1').apply(project)
    expect(project.scenes.map((scene) => scene.kind)).toEqual([
      'intro',
      'text',
      'textImage',
      'textImage',
      'textImage',
      'outro',
    ])

    project = attachImage('scene-2', asset).apply(project)
    project = setSceneKind('scene-2', 'text').apply(project)
    // The picture goes with the kind that had room for it, and so does the
    // asset once nothing uses it.
    expect(project.assets).toHaveLength(0)

    project = removeScene('scene-6').apply(project)
    expect(project.scenes).toHaveLength(5)
    expect(project.scenes.some((scene) => scene.id === 'scene-6')).toBe(false)
  })

  it('shows an empty picture slot until a picture is chosen', () => {
    const project = createProject('Dự án', { id: 'slot' })
    expect(
      project.scenes[1].layers.some(
        (layer) => layer.id === 'scene-2-placeholder',
      ),
    ).toBe(true)

    const filled = attachImage('scene-2', asset).apply(project)
    expect(
      filled.scenes[1].layers.some(
        (layer) => layer.id === 'scene-2-placeholder',
      ),
    ).toBe(false)
  })
})
