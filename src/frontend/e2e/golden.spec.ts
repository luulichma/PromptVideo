import { expect, test } from '@playwright/test'

/**
 * Golden images for the five templates.
 *
 * Each template gets one contact sheet holding the start, middle and end of
 * every scene — fifteen frames, laid out scenes across and positions down. A
 * sheet rather than seventy-five files because the thing being guarded is the
 * composition as a whole: if a slot moves, a colour changes or a transition
 * stops firing, it shows here and the diff points straight at the frame.
 *
 * The comparison allows a small pixel ratio: text is antialiased and the same
 * glyph is not rasterised identically everywhere, so demanding an exact match
 * would fail for reasons that have nothing to do with the layout.
 */

const TEMPLATE_IDS = ['classic', 'bold', 'minimal', 'story', 'promo'] as const

const CELL_WIDTH = 256
const CELL_HEIGHT = 144

async function drawContactSheet(
  page: import('@playwright/test').Page,
  templateId: string,
): Promise<void> {
  await page.evaluate(
    async ({ templateId, cellWidth, cellHeight }) => {
      const [{ createProject }, { renderFrame }, { applyTemplate }] =
        await Promise.all([
          import('/src/core/project/createProject.ts'),
          import('/src/core/rendering/renderer.ts'),
          import('/src/core/templates/templates.ts'),
        ])

      const project = applyTemplate(
        createProject('Golden', { id: `golden-${templateId}` }),
        templateId,
      )

      document.getElementById('golden')?.remove()
      const sheet = document.createElement('canvas')
      sheet.id = 'golden'
      sheet.width = cellWidth * project.scenes.length
      sheet.height = cellHeight * 3
      // Keep it off the page flow but rendered, so the screenshot is exact.
      sheet.style.position = 'fixed'
      sheet.style.left = '0'
      sheet.style.top = '0'
      sheet.style.zIndex = '9999'
      document.body.append(sheet)
      const sheetContext = sheet.getContext('2d')!

      const frame = document.createElement('canvas')
      frame.width = project.width
      frame.height = project.height
      const frameContext = frame.getContext('2d')!

      let sceneStart = 0
      for (const [sceneIndex, scene] of project.scenes.entries()) {
        const last = scene.durationSeconds - 1 / project.fps
        // Start, middle, and the final frame — the last one lands inside the
        // transition, which is the only place a transition can be seen.
        const offsets = [0, scene.durationSeconds / 2, last]

        for (const [row, offset] of offsets.entries()) {
          renderFrame(project, sceneStart + offset, frameContext, {
            assets: new Map(),
          })
          sheetContext.drawImage(
            frame,
            sceneIndex * cellWidth,
            row * cellHeight,
            cellWidth,
            cellHeight,
          )
        }
        sceneStart += scene.durationSeconds
      }
    },
    { templateId, cellWidth: CELL_WIDTH, cellHeight: CELL_HEIGHT },
  )
}

for (const templateId of TEMPLATE_IDS) {
  test(`template ${templateId} matches its golden frames`, async ({ page }) => {
    await page.goto('/spike')
    // The bundled font must be loaded or the text is measured against a
    // fallback and every cell shifts for a reason that is not a regression.
    await page.evaluate(() => document.fonts.ready)

    await drawContactSheet(page, templateId)

    await expect(page.locator('#golden')).toHaveScreenshot(
      `template-${templateId}.png`,
      { maxDiffPixelRatio: 0.02, threshold: 0.25 },
    )
  })
}
