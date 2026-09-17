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

/** Horizontal draw position for an alignment within the layer box. */
export function alignedX(layer: TextLayerV1): number {
  if (layer.align === 'center') return layer.x + layer.width / 2
  if (layer.align === 'right') return layer.x + layer.width
  return layer.x
}
