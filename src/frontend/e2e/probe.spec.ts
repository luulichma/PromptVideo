import { expect, test } from '@playwright/test'

test('probes capabilities and produces three identical snapshots', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Capability probe')).toBeVisible()
  await expect(page.getByText(/secure context/)).toBeVisible()
  await page.getByRole('button', { name: 'Render snapshot × 3' }).click()
  await expect(page.getByText('Ổn định qua 3 lần render')).toBeVisible()
  await page.screenshot({ path: 'artifacts/probe-page.png', fullPage: true })
})
