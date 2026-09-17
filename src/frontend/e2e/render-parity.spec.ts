import { expect, test } from '@playwright/test'

/**
 * Preview and export must be the same picture, not merely similar ones.
 *
 * The check runs inside the page so it uses the real Canvas2D and the real
 * bundled font. It renders the same timestamps through the on-screen canvas
 * path and the OffscreenCanvas path the exporter uses, then compares SHA-256 of
 * the pixels. Identical hashes mean the two paths cannot have drifted.
 */
test('preview and export surfaces produce identical pixels', async ({
  page,
}) => {
  await page.goto('/spike')
  // The bundled variable font must be ready or the two surfaces could measure
  // text differently purely because of load timing.
  await page.evaluate(() => document.fonts.ready)

  const result = await page.evaluate(async () => {
    const [{ createProject }, { renderFrame, hashCanvas }] = await Promise.all([
      import('/src/core/project/createProject.ts'),
      import('/src/core/rendering/renderer.ts'),
    ])

    const project = createProject('Parity', { id: 'parity-1' })
    // Scene starts, mid-scene, and inside a transition.
    const timestamps = [0, 6, 11.75, 12, 24.5, 47.9, 59]

    const preview: string[] = []
    const exported: string[] = []

    for (const timestamp of timestamps) {
      const onscreen = document.createElement('canvas')
      onscreen.width = project.width
      onscreen.height = project.height
      const previewContext = onscreen.getContext('2d')!
      renderFrame(project, timestamp, previewContext, { watermark: true })
      preview.push(await hashCanvas(previewContext))

      const offscreen = new OffscreenCanvas(project.width, project.height)
      const exportContext = offscreen.getContext('2d')!
      renderFrame(project, timestamp, exportContext, { watermark: true })
      exported.push(await hashCanvas(exportContext))
    }

    return { timestamps, preview, exported }
  })

  expect(result.preview).toEqual(result.exported)
  // A frame that rendered nothing would also match, so prove they differ from
  // each other across the timeline.
  expect(new Set(result.preview).size).toBeGreaterThan(1)
})

test('a timestamp resolves to one frame regardless of how it is expressed', async ({
  page,
}) => {
  await page.goto('/spike')
  await page.evaluate(() => document.fonts.ready)

  const result = await page.evaluate(async () => {
    const [{ createProject }, { renderFrame, hashCanvas }] = await Promise.all([
      import('/src/core/project/createProject.ts'),
      import('/src/core/rendering/renderer.ts'),
    ])

    const project = createProject('Quantise', { id: 'q-1' })
    async function hashAt(seconds: number) {
      const canvas = new OffscreenCanvas(project.width, project.height)
      const context = canvas.getContext('2d')!
      renderFrame(project, seconds, context, {})
      return hashCanvas(context)
    }

    // 30 fps: these all land on frame 180.
    // The neighbouring-frame check uses a moment inside a transition, because
    // scenes are static — two frames in the middle of one scene are identical
    // by design, so they could not tell quantisation from a stuck renderer.
    const inTransition = 11.6

    return {
      exact: await hashAt(6),
      justUnder: await hashAt(6 + 1 / 30 / 4),
      justOver: await hashAt(6 - 1 / 30 / 4),
      transition: await hashAt(inTransition),
      transitionNextFrame: await hashAt(inTransition + 1 / 30),
    }
  })

  expect(result.justUnder).toBe(result.exact)
  expect(result.justOver).toBe(result.exact)
  expect(result.transitionNextFrame).not.toBe(result.transition)
})

test('Vietnamese diacritics survive wrapping in a real font', async ({
  page,
}) => {
  await page.goto('/spike')
  await page.evaluate(() => document.fonts.ready)

  const result = await page.evaluate(async () => {
    const [{ wrapText }] = await Promise.all([
      import('/src/core/rendering/text.ts'),
    ])

    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!
    context.font = '600 40px "Noto Sans Variable"'

    const source =
      'Ngày mai trời lại sáng, người Việt gìn giữ tiếng nói của mình từ ngàn xưa'
    const lines = wrapText(context, source, 420)

    // Measure a representative marked glyph: a missing glyph collapses to zero
    // width or to the .notdef box, either of which changes this number.
    const markedWidth = context.measureText('ỹ').width
    const plainWidth = context.measureText('y').width

    return {
      rejoined: lines.join(' ').normalize('NFC'),
      source: source.normalize('NFC'),
      lineCount: lines.length,
      markedWidth,
      plainWidth,
    }
  })

  expect(result.rejoined).toBe(result.source)
  expect(result.lineCount).toBeGreaterThan(1)
  expect(result.markedWidth).toBeGreaterThan(0)
  // A tone mark sits above the letter, so the advance width stays close to the
  // bare letter; a fallback box would be conspicuously wider.
  expect(result.markedWidth).toBeLessThan(result.plainWidth * 1.6)
})
