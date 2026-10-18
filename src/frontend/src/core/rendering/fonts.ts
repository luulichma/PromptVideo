import latinUrl from '@fontsource-variable/noto-sans/files/noto-sans-latin-wght-normal.woff2?url'
import latinExtUrl from '@fontsource-variable/noto-sans/files/noto-sans-latin-ext-wght-normal.woff2?url'
import vietnameseUrl from '@fontsource-variable/noto-sans/files/noto-sans-vietnamese-wght-normal.woff2?url'
import { BUNDLED_FONT_FAMILY } from './text'

/**
 * The subsets Vietnamese text needs, with the unicode ranges the stylesheet
 * declares for them. The page gets these from CSS; a worker has no stylesheet,
 * so without registering them there the export would draw in whatever fallback
 * the system has and wrap differently from the preview.
 */
const SUBSETS: readonly { url: string; unicodeRange: string }[] = [
  {
    url: vietnameseUrl,
    unicodeRange:
      'U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB',
  },
  {
    url: latinExtUrl,
    unicodeRange:
      'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF',
  },
  {
    url: latinUrl,
    unicodeRange:
      'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
  },
]

/** Registers and loads the bundled font in a worker's font set. */
export async function loadBundledFontsInto(fonts: FontFaceSet): Promise<void> {
  await Promise.all(
    SUBSETS.map(async ({ url, unicodeRange }) => {
      const face = new FontFace(BUNDLED_FONT_FAMILY, `url(${url})`, {
        weight: '100 900',
        style: 'normal',
        unicodeRange,
      })
      ;(fonts as FontFaceSet & { add(face: FontFace): void }).add(face)
      await face.load()
    }),
  )
}

/**
 * Waits until the page's copy of the font is usable, so text measured for
 * fitting is measured in the font it will be drawn in.
 */
export async function ensurePageFontsReady(): Promise<void> {
  if (typeof document === 'undefined' || !document.fonts) return
  await Promise.all(
    [400, 700, 900].map((weight) =>
      document.fonts.load(
        `${weight} 32px "${BUNDLED_FONT_FAMILY}"`,
        'Tiếng Việt',
      ),
    ),
  )
}
