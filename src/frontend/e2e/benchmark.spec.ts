import { expect, test } from '@playwright/test'

test('exports three OPFS runs and one Buffer fallback run', async ({
  page,
}) => {
  await page.goto('/')
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
