import { describe, expect, it } from 'vitest'
import { createProject } from './createProject'
import { getProjectDuration } from './timeline'
import {
  DEFAULT_TOTAL_SECONDS,
  REQUIRED_SCENE_COUNT,
  isProjectExportable,
  validateProject,
} from './validation'
import type { AssetRefV1, ImageLayerV1, TextLayerV1 } from './schema'

describe('project validation', () => {
  it('accepts a freshly created project of exactly five scenes and sixty seconds', () => {
    const project = createProject('Dự án', { id: 'p1' })

    expect(project.scenes).toHaveLength(REQUIRED_SCENE_COUNT)
    expect(getProjectDuration(project)).toBe(DEFAULT_TOTAL_SECONDS)
    expect(validateProject(project)).toEqual([])
    expect(isProjectExportable(project)).toBe(true)
  })

  it('warns, without blocking export, when text leaves the safe area', () => {
    const project = createProject('Dự án', { id: 'p9' })
    const spilling = {
      ...project,
      scenes: project.scenes.map((scene, index) =>
        index === 0
          ? {
              ...scene,
              layers: scene.layers.map((layer) =>
                layer.role === 'title'
                  ? ({ ...layer, y: 700, height: 200 } as TextLayerV1)
                  : layer,
              ),
            }
          : scene,
      ),
    }

    const issues = validateProject(spilling)
    const safeArea = issues.filter(
      (issue) => issue.code === 'outside-safe-area',
    )

    expect(safeArea).toHaveLength(1)
    expect(safeArea[0].severity).toBe('warning')
    expect(safeArea[0].sceneId).toBe('scene-1')
    expect(safeArea[0].message).toContain('dưới')
    // The user has been told; the decision to export is still theirs.
    expect(isProjectExportable(spilling)).toBe(true)
  })

  it('marks every blocking problem as an error', () => {
    const project = createProject('Dự án', { id: 'p10' })
    const broken = { ...project, scenes: project.scenes.slice(0, 2) }

    expect(
      validateProject(broken).some((issue) => issue.severity === 'error'),
    ).toBe(true)
    expect(isProjectExportable(broken)).toBe(false)
  })

  it('rejects a negative scene duration', () => {
    const project = createProject('Dự án', { id: 'p2' })
    const broken = {
      ...project,
      scenes: project.scenes.map((scene, index) =>
        index === 0 ? { ...scene, durationSeconds: -3 } : scene,
      ),
    }

    const issues = validateProject(broken)
    expect(issues.some((issue) => issue.code === 'scene-duration')).toBe(true)
    expect(isProjectExportable(broken)).toBe(false)
  })

  it('rejects a project that is missing scenes', () => {
    const project = createProject('Dự án', { id: 'p3' })
    const short = { ...project, scenes: project.scenes.slice(0, 3) }

    const issues = validateProject(short)
    expect(issues.some((issue) => issue.code === 'scene-count')).toBe(true)
  })

  it('rejects a timeline that runs past the allowed total', () => {
    const project = createProject('Dự án', { id: 'p4' })
    const long = {
      ...project,
      scenes: project.scenes.map((scene) => ({
        ...scene,
        durationSeconds: 59,
      })),
    }

    const issues = validateProject(long)
    expect(issues.some((issue) => issue.code === 'total-duration')).toBe(true)
  })

  it('rejects a transition longer than its own scene', () => {
    const project = createProject('Dự án', { id: 'p5' })
    const broken = {
      ...project,
      scenes: project.scenes.map((scene, index) =>
        index === 1
          ? { ...scene, durationSeconds: 1.5, transitionSeconds: 2 }
          : scene,
      ),
    }

    expect(
      validateProject(broken).some((issue) => issue.code === 'scene-duration'),
    ).toBe(true)
  })

  it('flags an image layer whose asset is no longer in the project', () => {
    const project = createProject('Dự án', { id: 'p6' })
    const orphan: ImageLayerV1 = {
      id: 'orphan',
      type: 'image',
      role: 'image',
      assetId: 'missing-asset',
      fit: 'cover',
      offsetX: 0,
      offsetY: 0,
      scale: 1,
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      opacity: 1,
    }
    const broken = {
      ...project,
      scenes: project.scenes.map((scene, index) =>
        index === 0 ? { ...scene, layers: [...scene.layers, orphan] } : scene,
      ),
    }

    expect(
      validateProject(broken).some((issue) => issue.code === 'missing-asset'),
    ).toBe(true)
  })

  it('accepts an image layer once its asset is present', () => {
    const project = createProject('Dự án', { id: 'p7' })
    const asset: AssetRefV1 = {
      id: 'asset-1',
      fileName: 'a.png',
      mimeType: 'image/png',
      byteLength: 10,
      sha256: 'c'.repeat(64),
      width: 10,
      height: 10,
    }
    const layer: ImageLayerV1 = {
      id: 'img',
      type: 'image',
      role: 'image',
      assetId: asset.id,
      fit: 'cover',
      offsetX: 0,
      offsetY: 0,
      scale: 1,
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      opacity: 1,
    }

    const withImage = {
      ...project,
      assets: [asset],
      scenes: project.scenes.map((scene, index) =>
        index === 0 ? { ...scene, layers: [...scene.layers, layer] } : scene,
      ),
    }

    expect(validateProject(withImage)).toEqual([])
  })

  it('flags a blank title so an empty scene cannot be exported unnoticed', () => {
    const project = createProject('Dự án', { id: 'p8' })
    const blanked = {
      ...project,
      scenes: project.scenes.map((scene, index) =>
        index === 0
          ? {
              ...scene,
              layers: scene.layers.map((layer) =>
                layer.role === 'title'
                  ? ({ ...layer, text: '   ' } as TextLayerV1)
                  : layer,
              ),
            }
          : scene,
      ),
    }

    expect(
      validateProject(blanked).some((issue) => issue.code === 'empty-title'),
    ).toBe(true)
  })
})
