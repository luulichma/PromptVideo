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
  await page.getByLabel('Tên video').fill(name)
  await page.getByRole('button', { name: 'Tạo video' }).click()
  await expect(page.getByTestId('preview-canvas')).toBeVisible()

  // One second per scene keeps the encode short without changing the pipeline,
  // and text-only scenes need no picture before they may be exported.
  for (let index = 1; index <= 5; index += 1) {
    await page.getByTestId(`scene-select-${index}`).click()
    if ((await page.getByTestId('scene-kind').inputValue()) === 'textImage') {
      await page.getByTestId('scene-kind').selectOption('text')
    }
    await page.getByTestId('scene-duration').fill('1')
  }
  await expect(page.getByTestId('validation-issues')).toHaveCount(0)
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
  const title = page.getByTestId('scene-title')
  await title.fill('Vẫn gõ được')
  await expect(title).toHaveValue('Vẫn gõ được')

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

test('the export can be paused and resumed', async ({ page }) => {
  const entitlement = await mockEntitlement(page)
  await createShortProject(page, 'Tạm dừng')

  await page.getByTestId('export-start').click()
  await expect(page.getByTestId('export-progress')).toBeVisible()
  await page.getByTestId('export-pause').click()
  await expect(page.getByTestId('export-progress')).toContainText('tạm dừng')

  // Paused means paused: a while later it is still not done.
  await page.waitForTimeout(1500)
  await expect(page.getByTestId('export-done')).toHaveCount(0)

  await page.getByTestId('export-pause').click()
  await expect(page.getByTestId('export-done')).toBeVisible({
    timeout: 120_000,
  })
  expect(entitlement.settled).toEqual(['complete'])
})

test('a free plan is told what it gets before exporting', async ({ page }) => {
  await mockEntitlement(page)
  await createShortProject(page, 'Thông báo gói')

  await expect(page.getByTestId('export-notice')).toContainText(
    'Bản này có watermark, tối đa 720p. Tháng này còn 3/3 lượt.',
  )
  await expect(page.getByRole('link', { name: /Nâng cấp/ })).toHaveAttribute(
    'href',
    '/account#plans',
  )
})

test('the fourth free export is blocked with a reason', async ({ page }) => {
  await mockEntitlement(page)
  await page.route(
    (url) => url.pathname === '/api/me/capabilities',
    (route) =>
      route.fulfill({
        json: {
          planCode: 'free',
          planName: 'Miễn phí',
          maxExportHeight: 720,
          watermarkRequired: true,
          exportsPerMonth: 3,
          exportsRemaining: 0,
          hasUnlimitedExports: false,
        },
      }),
  )
  await createShortProject(page, 'Hết lượt')

  await expect(page.getByTestId('export-quota-blocked')).toContainText(
    'dùng hết 3 lượt',
  )
  await expect(page.getByTestId('export-start')).toBeDisabled()
})

test('signing in is asked for at export, not before', async ({ page }) => {
  let signedIn = false
  await mockEntitlement(page)
  // Until the login call succeeds, the server says "not signed in".
  await page.route(
    (url) => url.pathname === '/api/me/capabilities',
    (route) =>
      signedIn
        ? route.fallback()
        : route.fulfill({ status: 401, json: { title: 'Unauthorized' } }),
  )
  await page.route(
    (url) => url.pathname === '/api/auth/login',
    (route) => {
      signedIn = true
      return route.fulfill({ status: 200, json: {} })
    },
  )

  await createShortProject(page, 'Đăng nhập lúc xuất')
  await page.getByTestId('export-start').click()

  const form = page.getByTestId('export-sign-in')
  await expect(form).toBeVisible()
  await form.getByLabel('Email').fill('khach@promptvideo.test')
  await form.getByLabel('Mật khẩu').fill('mat-khau-thu-nghiem')
  await form.getByRole('button', { name: 'Đăng nhập' }).click()

  await expect(form).toBeHidden()
  await expect(page.getByTestId('export-notice')).toContainText('3/3 lượt')
  await page.getByTestId('export-start').click()
  await expect(page.getByTestId('export-done')).toBeVisible({
    timeout: 120_000,
  })
})
