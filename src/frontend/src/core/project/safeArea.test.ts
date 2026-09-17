import { describe, expect, it } from 'vitest'
import { createProject } from './createProject'
import { findSafeAreaOverflow, getSafeAreaBox } from './safeArea'
import type { TextLayerV1 } from './schema'

const project = createProject('Dự án', { id: 'safe-1' })
const box = getSafeAreaBox(project)

function textLayer(patch: Partial<TextLayerV1>): TextLayerV1 {
  const base = project.scenes[0].layers.find(
    (layer): layer is TextLayerV1 => layer.type === 'text',
  )!
  return { ...base, ...patch }
}

describe('safe area', () => {
  it('turns fractional margins into a pixel box', () => {
    // 1280×720 with the default 8/12/6/6 margins.
    expect(box).toEqual({
      left: 76.8,
      top: 57.6,
      right: 1203.2,
      bottom: 633.6,
    })
  })

  it('reports nothing for a layer well inside the box', () => {
    const layer = textLayer({ x: 200, y: 200, width: 400, height: 100 })

    expect(findSafeAreaOverflow(layer, box)).toEqual([])
  })

  it('names every side a layer crosses', () => {
    const layer = textLayer({ x: 0, y: 0, width: 1280, height: 720 })

    expect(findSafeAreaOverflow(layer, box).sort()).toEqual([
      'bottom',
      'left',
      'right',
      'top',
    ])
  })

  it('reports only the side that actually overflows', () => {
    const layer = textLayer({ x: 200, y: 500, width: 400, height: 200 })

    expect(findSafeAreaOverflow(layer, box)).toEqual(['bottom'])
  })

  it('forgives a layer sitting a rounded pixel outside the boundary', () => {
    // Slot geometry is rounded; the box is not. That gap is not an overflow.
    const layer = textLayer({
      x: Math.round(box.left),
      y: Math.round(box.top),
      width: Math.round(box.right - box.left),
      height: Math.round(box.bottom - box.top),
    })

    expect(findSafeAreaOverflow(layer, box)).toEqual([])
  })

  it('scales with the project resolution rather than assuming 720p', () => {
    const hd = getSafeAreaBox({ ...project, width: 1920, height: 1080 })

    expect(hd.right).toBeCloseTo(1920 - 0.06 * 1920)
    expect(hd.bottom).toBeCloseTo(1080 - 0.12 * 1080)
  })
})
