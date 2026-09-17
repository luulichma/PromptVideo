import { writeFileSync } from 'node:fs'
import { expect, test } from '@playwright/test'

test('exports three OPFS runs and one Buffer fallback run', async ({
  page,
}) => {
  await page.goto('/spike')
  await expect(page.getByText(/secure context/)).toBeVisible()
  await page.getByRole('button', { name: 'Render snapshot × 3' }).click()
  await expect(page.getByText('Ổn định qua 3 lần render')).toBeVisible()

  const opfsOption = page.locator('option[value="opfs"]')
  const opfsDisabled = await opfsOption.isDisabled()
  const exportButton = page.locator('button.button-primary')

  if (!opfsDisabled) {
    await page.getByLabel('Đường ghi').selectOption('opfs')
    for (let run = 0; run < 3; run += 1) {
      await exportButton.click()
      await expect(exportButton).toBeDisabled()
      await expect(exportButton).toBeEnabled({ timeout: 300_000 })
      await expect(page.getByText('MP4 hợp lệ')).toBeVisible()
    }
  }

  await page.getByLabel('Đường ghi').selectOption('buffer')
  await exportButton.click()
  await expect(exportButton).toBeDisabled()
  await expect(exportButton).toBeEnabled({ timeout: 300_000 })
  await expect(page.getByText('MP4 hợp lệ')).toBeVisible()

  const videoDownload = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Tải MP4 vừa tạo' }).click()
  await (await videoDownload).saveAs('artifacts/sample-720p-watermarked.mp4')

  const reportDownload = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Tải báo cáo JSON' }).click()
  await (await reportDownload).saveAs('artifacts/benchmark-report.json')
})

/**
 * The same sixty second project, encoded through the path the editor actually
 * ships: a worker, an OffscreenCanvas and a streamed output. The spike run
 * above measures the main-thread path it grew from; this one measures what a
 * user gets, and the evidence pack should carry both.
 */
test('benchmarks a 60 second export through the worker path', async ({
  page,
}) => {
  await page.goto('/spike')
  await page.evaluate(() => document.fonts.ready)

  const report = await page.evaluate(async () => {
    const [{ benchmarkProject }, { runExport }, { loadBenchmarkAssets }] =
      await Promise.all([
        import('/src/core/project/benchmarkProject.ts'),
        import('/src/core/export/exportClient.ts'),
        import('/src/core/rendering/assets.ts'),
      ])

    // The benchmark project carries an image layer; without its bitmap the
    // renderer refuses the frame rather than drawing a hole.
    const assets = await loadBenchmarkAssets()

    const usesOpfs = typeof navigator?.storage?.getDirectory === 'function'

    const startedAt = performance.now()
    const outcome = await runExport({
      project: benchmarkProject,
      assets,
      resolution: '720p',
      watermark: true,
      path: usesOpfs ? 'opfs' : 'buffer',
      filename: 'benchmark-worker.mp4',
    })

    if (outcome.status !== 'done')
      return {
        failed: outcome.status,
        message: 'message' in outcome ? outcome.message : '',
      }

    return {
      wallClockMs: Math.round(performance.now() - startedAt),
      result: outcome.result,
    }
  })

  expect(report.failed, report.message).toBeUndefined()
  expect(report.result?.validation.isValid).toBe(true)
  expect(report.result?.validation.height).toBe(720)
  expect(report.result?.validation.durationDeltaFrames).toBeLessThan(1.01)

  // Written next to the other evidence rather than only into the test report,
  // so the pack is one directory a reviewer can open.
  writeFileSync(
    'artifacts/worker-benchmark.json',
    JSON.stringify(report, null, 2),
  )
})
