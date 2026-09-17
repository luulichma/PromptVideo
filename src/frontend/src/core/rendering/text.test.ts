import { describe, expect, it } from 'vitest'
import type { RenderContext } from './renderer'
import {
  BUNDLED_FONT_FAMILY,
  layerFont,
  resolveFontFamily,
  wrapText,
} from './text'
import type { TextLayerV1 } from '../project/schema'

/**
 * A stand-in for canvas text measurement: every code point counts as ten pixels
 * after Unicode normalisation. Combining marks therefore add no width, which is
 * exactly how a real font behaves for Vietnamese tone marks and is the property
 * the wrapping logic must not get wrong.
 */
function measuringContext(pixelsPerCharacter = 10): RenderContext {
  return {
    measureText: (text: string) => ({
      width: [...text.normalize('NFC')].length * pixelsPerCharacter,
    }),
  } as unknown as RenderContext
}

describe('font resolution', () => {
  it('maps the name a document carries to the family that is bundled', () => {
    expect(resolveFontFamily('Noto Sans')).toBe(BUNDLED_FONT_FAMILY)
    expect(resolveFontFamily(BUNDLED_FONT_FAMILY)).toBe(BUNDLED_FONT_FAMILY)
  })

  it('never falls through to a locally installed font', () => {
    // A machine that happens to have Helvetica must not render differently.
    expect(resolveFontFamily('Helvetica')).toBe(BUNDLED_FONT_FAMILY)
    expect(resolveFontFamily('')).toBe(BUNDLED_FONT_FAMILY)
  })

  it('builds a canvas font string from the layer', () => {
    const layer = {
      fontWeight: 700,
      fontSize: 42,
      fontFamily: 'Noto Sans',
    } as TextLayerV1

    expect(layerFont(layer)).toBe(`700 42px "${BUNDLED_FONT_FAMILY}"`)
  })
})

describe('wrapText', () => {
  it('keeps Vietnamese words whole so tone marks stay on their letters', () => {
    const context = measuringContext()
    const lines = wrapText(context, 'Tiếng Việt trọn vẹn từng dấu', 120)

    expect(lines.length).toBeGreaterThan(1)
    for (const line of lines) {
      // No line may begin or end mid-word.
      expect(line).not.toMatch(/^\p{Mark}/u)
      expect(line.trim()).toBe(line)
    }
    expect(lines.join(' ')).toBe('Tiếng Việt trọn vẹn từng dấu')
  })

  it('preserves every combining mark through a wrap', () => {
    const source = 'Nghiêng ngả wǒ Đường phố Hà Nội mùa thu'
    const lines = wrapText(measuringContext(), source, 90)

    expect(lines.join(' ').normalize('NFC')).toBe(source.normalize('NFC'))
  })

  it('breaks on explicit newlines regardless of width', () => {
    const lines = wrapText(measuringContext(), 'Dòng một\nDòng hai', 10_000)

    expect(lines).toEqual(['Dòng một', 'Dòng hai'])
  })

  it('emits a single line when everything fits', () => {
    expect(wrapText(measuringContext(), 'Ngắn gọn', 10_000)).toEqual([
      'Ngắn gọn',
    ])
  })

  it('keeps a word that cannot fit rather than dropping it', () => {
    const lines = wrapText(
      measuringContext(),
      'Một Nghiêngngảkhôngthểngắt hai',
      60,
    )

    expect(lines).toContain('Nghiêngngảkhôngthểngắt')
  })

  it('represents a blank paragraph as an empty line', () => {
    expect(wrapText(measuringContext(), 'A\n\nB', 1000)).toEqual(['A', '', 'B'])
  })
})
