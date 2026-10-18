import type { OverflowCheck } from '../project/validation'
import type { RenderContext } from './renderer'
import { fitText } from './text'

function measuringContext(): RenderContext | null {
  if (typeof OffscreenCanvas !== 'undefined') {
    return new OffscreenCanvas(1, 1).getContext('2d')
  }
  if (typeof document !== 'undefined') {
    return document.createElement('canvas').getContext('2d')
  }
  return null
}

/**
 * Builds the overflow check validation uses, measuring with the same fitting
 * the renderer applies, so "too long" in the editor means exactly "would be
 * clipped in the video". Undefined where there is no canvas to measure with.
 */
export function createOverflowCheck(): OverflowCheck | undefined {
  const context = measuringContext()
  if (!context) return undefined
  return (layer) => fitText(context, layer).overflow
}
