import { expect, test, type Page } from '@playwright/test'

/**
 * Export runs in a worker against a real encoder, so these tests drive the real
 * browser rather than a stub. The projects are shortened to a few seconds: the
 * properties under test are about the pipeline, not about duration, and a full
 * sixty second encode belongs in the benchmark run.
 */

/** Stands in for the backend so the entitlement handshake can be exercised. */
async function mockEntitlement(
  page: Page,
  options: { grantedHeight?: number; watermark?: boolean } = {},
): Promise<{ settled: string[] }> {
  const settled: string[] = []

  await page.route(
    (url) => url.pathname === '/api/security/csrf',
    (route) =>
      route.fulfill({
        json: { headerName: 'X-CSRF-TOKEN', token: 'test-token' },
      }),
  )

  await page.route(
    (url) => url.pathname === '/api/me/capabilities',
    (route) =>
      route.fulfill({
        json: {
          planCode: 'free',
          planName: 'Free',
          maxExportHeight: options.grantedHeight ?? 720,
          watermarkRequired: options.watermark ?? true,
          seats: 1,
          exportsPerMonth: 3,
          exportsUsed: 0,
          exportsRemaining: 3,
          hasUnlimitedExports: false,
          periodStartUtc: '2026-01-01T00:00:00Z',
          periodEndUtc: '2026-02-01T00:00:00Z',
          expiresAtUtc: null,
        },
      }),
  )

  await page.route(
    (url) => url.pathname === '/api/exports/reservations',
    (route) =>
      route.fulfill({
        json: {
          reservationId: '11111111-1111-1111-1111-111111111111',
          status: 'reserved',
          grantedHeight: options.grantedHeight ?? 720,
          watermarkRequired: options.watermark ?? true,
          expiresAtUtc: '2030-01-01T00:00:00Z',
          exportsRemaining: 2,
          exportsPerMonth: 3,
        },
      }),
  )

  await page.route(
    (url) =>
      /\/api\/exports\/reservations\/[^/]+\/(complete|cancel)$/.test(
        url.pathname,
      ),
    (route) => {
      settled.push(route.request().url().split('/').pop()!)
      return route.fulfill({ status: 204, body: '' })
    },
  )

  return { settled }
}

async function createShortProject(page: Page, name: string): Promise<void> {
  await page.goto('/')
  await page.getByLabel('Tên project').fill(name)
  await page.getByRole('button', { name: 'Tạo project' }).click()
  await expect(page.getByTestId('preview-canvas')).toBeVisible()

  // One second per scene keeps the encode short without changing the pipeline.
  const durations = page.getByLabel('Thời lượng (giây)')
  for (let index = 0; index < 5; index += 1) {
    await durations.nth(index).fill('1')
  }
}

test('the worker turns a project into a playable H.264 MP4', async ({
  page,
}) => {
  await page.goto('/spike')
  await page.evaluate(() => document.fonts.ready)

  const result = await page.evaluate(async () => {
    const [{ createProject }, { runExport }, { validateMp4 }] =
      await Promise.all([
        import('/src/core/project/createProject.ts'),
        import('/src/core/export/exportClient.ts'),
        import('/src/core/export/validateMp4.ts'),
      ])

    const base = createProject('Xuất thử', { id: 'export-e2e' })
    const project = {
      ...base,
      scenes: base.scenes.map((scene) => ({ ...scene, durationSeconds: 1 })),
    }

    const progress: number[] = []
    const outcome = await runExport({
      project,
      assets: new Map(),
      resolution: '720p',
      watermark: true,
      path: 'buffer',
      filename: 'export-e2e.mp4',
      onProgress: (value) => progress.push(value.completedFrames),
    })

    if (outcome.status !== 'done') {
      return { failed: outcome.status, progress }
    }

    const validation = await validateMp4(outcome.blob, 5, project.fps)
    return { validation, size: outcome.blob.size, progress }
  })

  expect(result.failed).toBeUndefined()
  expect(result.validation?.isValid).toBe(true)
  expect(result.validation?.width).toBe(1280)
  expect(result.validation?.height).toBe(720)
  expect(result.validation?.codec).toContain('avc')
  expect(result.validation?.firstFrameBlack).toBe(false)
  expect(result.size).toBeGreaterThan(1000)
  // Progress must actually advance, not arrive once at the end.
  expect(result.progress.length).toBeGreaterThan(1)
})

test('the editor stays responsive while an export runs', async ({ page }) => {
  await mockEntitlement(page)
  await createShortProject(page, 'Phản hồi')

  await page.getByTestId('export-start').click()
  await expect(page.getByTestId('export-progress')).toBeVisible()

  // The main thread must still answer while the worker encodes.
  const sceneName = page.getByLabel('Tên cảnh').first()
  await sceneName.fill('Vẫn gõ được')
  await expect(sceneName).toHaveValue('Vẫn gõ được')

  await expect(page.getByTestId('export-done')).toBeVisible({
    timeout: 120_000,
  })
})

test('a finished export completes its reservation', async ({ page }) => {
  const entitlement = await mockEntitlement(page)
  await createShortProject(page, 'Hoàn tất')

  await page.getByTestId('export-start').click()
  await expect(page.getByTestId('export-done')).toBeVisible({
    timeout: 120_000,
  })

  expect(entitlement.settled).toEqual(['complete'])
})

test('cancelling returns the slot and leaves no worker behind', async ({
  page,
}) => {
  const entitlement = await mockEntitlement(page)
  await createShortProject(page, 'Hủy nhiều lần')

  for (let attempt = 0; attempt < 3; attempt += 1) {
    await page.getByTestId('export-start').click()
    await expect(page.getByTestId('export-progress')).toBeVisible()
    await page.getByTestId('export-cancel').click()
    await expect(page.getByTestId('export-cancelled')).toBeVisible({
      timeout: 60_000,
    })
  }

  // Every cancelled attempt gave its slot back.
  expect(entitlement.settled).toEqual(['cancel', 'cancel', 'cancel'])

  // And nothing is still running: three start-cancel cycles must not accumulate
  // workers, which is how an encoder and a file handle would leak.
  const workers = await page.evaluate(async () => {
    const { getActiveExportWorkerCount } =
      await import('/src/core/export/exportClient.ts')
    return getActiveExportWorkerCount()
  })
  expect(workers).toBe(0)
})

test('the server decides the resolution, not the browser', async ({ page }) => {
  // The plan offers 1080p, but the reservation grants only 720p.
  await mockEntitlement(page, { grantedHeight: 1080, watermark: false })
  await page.route(
    (url) => url.pathname === '/api/exports/reservations',
    (route) =>
      route.fulfill({
        json: {
          reservationId: '22222222-2222-2222-2222-222222222222',
          status: 'reserved',
          grantedHeight: 720,
          watermarkRequired: true,
          expiresAtUtc: '2030-01-01T00:00:00Z',
          exportsRemaining: 1,
          exportsPerMonth: 3,
        },
      }),
  )

  await createShortProject(page, 'Hạ độ phân giải')
  await page.getByLabel('Độ phân giải').selectOption('1080p')
  await page.getByTestId('export-start').click()

  const done = page.getByTestId('export-done')
  await expect(done).toBeVisible({ timeout: 120_000 })
  // Granted 720p with a watermark, so that is what was encoded.
  await expect(done).toContainText('watermark')
})
