import type { TextLayerV1 } from '../project/schema'
import type { RenderContext } from './renderer'

/**
 * Wraps text to a pixel width.
 *
 * Wrapping happens on whitespace only. Vietnamese combining marks sit on the
 * base letter, so breaking inside a word would split a syllable from its tone
 * mark and render a different word; measuring whole words and keeping them
 * intact is what keeps diacritics correct. An explicit newline always breaks.
 */
export function wrapText(
  context: RenderContext,
  text: string,
  maxWidth: number,
): string[] {
  const lines: string[] = []

  for (const paragraph of text.split('\n')) {
    const words = paragraph.split(/\s+/).filter((word) => word.length > 0)
    if (words.length === 0) {
      lines.push('')
      continue
    }

    let current = words[0]
    for (const word of words.slice(1)) {
      const candidate = `${current} ${word}`
      if (context.measureText(candidate).width <= maxWidth) {
        current = candidate
      } else {
        lines.push(current)
        current = word
      }
    }
    lines.push(current)
  }

  return lines
}

/** The one family the app ships. Every glyph Vietnamese needs is in it. */
export const BUNDLED_FONT_FAMILY = 'Noto Sans Variable'

/** Font names a document may carry, mapped to the family actually bundled. */
const FONT_REGISTRY: Readonly<Record<string, string>> = {
  'Noto Sans': BUNDLED_FONT_FAMILY,
  [BUNDLED_FONT_FAMILY]: BUNDLED_FONT_FAMILY,
}

/**
 * Resolves a layer's font name to a family the app actually ships.
 *
 * Rendering deliberately never falls through to a locally installed font. One
 * would make the same package look different on the next machine, and a font
 * without Vietnamese coverage would drop tone marks the editor promised to keep.
 * An unknown name is drawn in the bundled family instead of being trusted.
 */
export function resolveFontFamily(fontFamily: string): string {
  return FONT_REGISTRY[fontFamily] ?? BUNDLED_FONT_FAMILY
}

export function layerFont(layer: TextLayerV1): string {
  return `${layer.fontWeight} ${layer.fontSize}px "${resolveFontFamily(layer.fontFamily)}"`
}

export type FittedText = {
  fontSize: number
  lines: string[]
  /** Total height of the wrapped block at fontSize. */
  blockHeight: number
  /** True when even the smallest allowed size does not fit the box. */
  overflow: boolean
}

function layoutAt(
  context: RenderContext,
  layer: TextLayerV1,
  fontSize: number,
): FittedText {
  context.font = layerFont({ ...layer, fontSize })
  const lines = wrapText(context, layer.text, layer.width)
  const blockHeight = lines.length * fontSize * layer.lineHeight
  // A single word wider than the box cannot be wrapped away.
  const tooWide = lines.some(
    (line) => context.measureText(line).width > layer.width + 0.5,
  )
  return {
    fontSize,
    lines,
    blockHeight,
    overflow: tooWide || blockHeight > layer.height + 0.5,
  }
}

/**
 * Finds the largest size, between the layer's minimum and its template size,
 * at which the text fits its box.
 *
 * Long text shrinks instead of spilling over the rest of the composition, but
 * never below the minimum the template set: past that point it is the text, not
 * the type, that has to give, and the editor tells the user so. Leaves the
 * context's font set to the returned size.
 */
export function fitText(
  context: RenderContext,
  layer: TextLayerV1,
): FittedText {
  const largest = layoutAt(context, layer, layer.fontSize)
  const min = Math.min(layer.minFontSize ?? layer.fontSize, layer.fontSize)
  if (!largest.overflow || min >= layer.fontSize) return largest

  const smallest = layoutAt(context, layer, min)
  if (smallest.overflow) return smallest

  // Fits at the minimum, not at the maximum: binary search the whole pixels.
  let low = Math.ceil(min)
  let high = Math.floor(layer.fontSize) - 1
  let best = smallest
  while (low <= high) {
    const size = Math.floor((low + high) / 2)
    const attempt = layoutAt(context, layer, size)
    if (attempt.overflow) {
      high = size - 1
    } else {
      best = attempt
      low = size + 1
    }
  }
  context.font = layerFont({ ...layer, fontSize: best.fontSize })
  return best
}

/** Vertical draw position of the first line, given the fitted block. */
export function alignedY(layer: TextLayerV1, blockHeight: number): number {
  const spare = Math.max(0, layer.height - blockHeight)
  if (layer.verticalAlign === 'bottom') return layer.y + spare
  if (layer.verticalAlign === 'middle') return layer.y + spare / 2
  return layer.y
}

/** Horizontal draw position for an alignment within the layer box. */
export function alignedX(layer: TextLayerV1): number {
  if (layer.align === 'center') return layer.x + layer.width / 2
  if (layer.align === 'right') return layer.x + layer.width
  return layer.x
}
