import { expect, test, type Page } from '@playwright/test'

/**
 * The editor must work with the backend absent, so every test here fails any
 * request that would carry project content to a server. The allowed calls are
 * the page's own assets and the read-only capability check.
 */
async function blockContentUploads(page: Page): Promise<string[]> {
  const uploads: string[] = []

  // Matched by predicate, not by glob: '**/api/**' also catches the app's own
  // module at /src/generated/api/client.ts, which stops the page from booting.
  await page.route(
    (url) => url.pathname.startsWith('/api/'),
    async (route) => {
      const request = route.request()
      const method = request.method()
      if (method !== 'GET' && method !== 'HEAD') {
        uploads.push(`${method} ${new URL(request.url()).pathname}`)
      }
      // Simulate a backend that is simply not there.
      await route.abort('connectionrefused')
    },
  )

  return uploads
}

async function createProject(page: Page, name: string): Promise<void> {
  await page.goto('/')
  await page.getByLabel('Tên video').fill(name)
  await page.getByRole('button', { name: 'Tạo video' }).click()
  await expect(page.getByTestId('preview-canvas')).toBeVisible()
}

test('builds a project end to end with the backend unreachable', async ({
  page,
}) => {
  const uploads = await blockContentUploads(page)
  await createProject(page, 'Dự án kiểm thử')

  // Five scenes and a sixty second timeline out of the box.
  await expect(page.getByRole('heading', { name: /Cảnh \(5\)/ })).toBeVisible()
  await expect(page.locator('output', { hasText: '/ 60s' })).toBeVisible()

  // Editing the title updates the document and autosaves locally.
  const title = page.getByTestId('scene-title')
  await title.fill('Tiếng Việt đủ dấu: ăn, ổn, ừ, ỹ')
  await expect(page.getByTestId('save-state')).toHaveAttribute(
    'data-state',
    'saved',
    { timeout: 10_000 },
  )

  // Nothing the user typed left the browser.
  expect(uploads).toEqual([])
})

test('undo and redo restore the document exactly', async ({ page }) => {
  await blockContentUploads(page)
  await createProject(page, 'Hoàn tác')

  const title = page.getByTestId('scene-title')
  const original = await title.inputValue()

  await title.fill('Đã đổi')
  await expect(title).toHaveValue('Đã đổi')

  await page.getByRole('button', { name: 'Hoàn tác' }).click()
  await expect(title).toHaveValue(original)

  await page.getByRole('button', { name: 'Làm lại' }).click()
  await expect(title).toHaveValue('Đã đổi')
})

test('keyboard alone reaches navigation, scenes, preview and save', async ({
  page,
}) => {
  await blockContentUploads(page)
  await createProject(page, 'Bàn phím')

  // Walk the tab order from the top of the document and collect what is reachable.
  await page.keyboard.press('Home')
  const reached = new Set<string>()
  for (let step = 0; step < 60; step += 1) {
    await page.keyboard.press('Tab')
    const description = await page.evaluate(() => {
      const active = document.activeElement
      if (!active) return ''
      return [
        active.tagName.toLowerCase(),
        active.getAttribute('aria-label') ?? '',
        active.textContent?.trim().slice(0, 30) ?? '',
      ].join('|')
    })
    reached.add(description)
  }

  const joined = [...reached].join('\n')
  expect(joined).toContain('Bỏ qua điều hướng')
  expect(joined).toContain('Vị trí trên timeline')
  expect(joined).toContain('Lưu file dự án')
  expect(joined).toMatch(/Đưa .* lên trên|Đưa .* xuống dưới/)

  // And the documented shortcut saves without a pointer.
  await page.keyboard.press('Control+s')
  await expect(page.getByTestId('save-state')).toHaveAttribute(
    'data-state',
    'saved',
    { timeout: 10_000 },
  )
})

test('project and its scenes survive a reload', async ({ page }) => {
  await blockContentUploads(page)
  await createProject(page, 'Bền vững')

  await page.getByTestId('scene-title').fill('Nội dung sau khi tải lại')
  await expect(page.getByTestId('save-state')).toHaveAttribute(
    'data-state',
    'saved',
    { timeout: 10_000 },
  )

  const editorUrl = page.url()
  await page.reload()
  await expect(page).toHaveURL(editorUrl)
  await expect(page.getByTestId('scene-title')).toHaveValue(
    'Nội dung sau khi tải lại',
  )

  // And it is listed on the dashboard from IndexedDB, with no server involved.
  await page.goto('/')
  await expect(page.getByText('Bền vững')).toBeVisible()
})

test('the safe area guide is an editing aid, never part of the frame', async ({
  page,
}) => {
  await blockContentUploads(page)
  await createProject(page, 'Vùng an toàn')

  const guide = page.getByTestId('safe-area-guide')
  await expect(guide).toBeHidden()

  await page.getByLabel('Vùng an toàn').check()
  await expect(guide).toBeVisible()

  // It is an overlay, not pixels: the canvas is byte-identical either way.
  const hashWithGuide = await page.evaluate(async () => {
    const { hashCanvas } = await import('/src/core/rendering/renderer.ts')
    const canvas = document.querySelector('canvas')!
    return hashCanvas(canvas.getContext('2d')!)
  })

  await page.getByLabel('Vùng an toàn').uncheck()
  await expect(guide).toBeHidden()

  const hashWithout = await page.evaluate(async () => {
    const { hashCanvas } = await import('/src/core/rendering/renderer.ts')
    const canvas = document.querySelector('canvas')!
    return hashCanvas(canvas.getContext('2d')!)
  })

  expect(hashWithGuide).toBe(hashWithout)
})

test('switching through all five templates keeps the text', async ({
  page,
}) => {
  await blockContentUploads(page)
  await createProject(page, 'Đổi template')

  await page.getByTestId('scene-title').fill('Giữ nguyên nội dung này')

  await page.getByRole('button', { name: 'Đổi mẫu' }).click()
  for (const id of ['bold', 'minimal', 'story', 'promo', 'classic']) {
    await page.getByTestId(`template-${id}`).click()
    await expect(page.getByTestId(`template-${id}`)).toHaveAttribute(
      'aria-checked',
      'true',
    )
    await expect(page.getByTestId('scene-title')).toHaveValue(
      'Giữ nguyên nội dung này',
    )
  }
})

/** Serves the admin's template catalog; every other API call stays refused. */
async function serveCatalog(page: Page, activeKeys: string[]): Promise<void> {
  await page.route(
    (url) => url.pathname.startsWith('/api/'),
    (route) =>
      new URL(route.request().url()).pathname === '/api/templates'
        ? route.fulfill({
            json: activeKeys.map((templateKey) => ({
              templateKey,
              name: templateKey,
              version: 1,
              status: 'Active',
              manifestJson: '{}',
            })),
          })
        : route.abort('connectionrefused'),
  )
}

test('a template the admin retired is no longer offered but old work still opens', async ({
  page,
}) => {
  await serveCatalog(page, ['classic', 'bold', 'minimal', 'story', 'promo'])
  await page.goto('/')
  await page.getByLabel('Tên video').fill('Dùng mẫu sắp bị gỡ')
  await page.getByTestId('template-promo').click()
  await page.getByRole('button', { name: 'Tạo video' }).click()
  await expect(page.getByTestId('preview-canvas')).toBeVisible()
  await expect(page.getByTestId('template-withdrawn')).toHaveCount(0)

  // The admin retires "promo"; the next load sees the shorter catalog.
  await page.unroute((url) => url.pathname.startsWith('/api/'))
  await serveCatalog(page, ['classic', 'bold', 'minimal', 'story'])
  await page.reload()

  await expect(page.getByTestId('preview-canvas')).toBeVisible()
  await expect(page.getByTestId('template-withdrawn')).toBeVisible()
  await expect(page.getByText('Mẫu: Tươi sáng')).toBeVisible()

  // Leaving it is one way: new work cannot pick it.
  await page.goto('/')
  // The bundled list shows until the catalog answers; wait for the answer.
  const picker = page.getByRole('radiogroup', { name: 'Mẫu video' })
  await expect(picker.getByRole('radio')).toHaveCount(4)
  const offered = await picker
    .getByRole('radio')
    .evaluateAll((radios) =>
      radios.map((radio) => radio.getAttribute('data-testid')),
    )
  expect(offered).toEqual([
    'template-classic',
    'template-bold',
    'template-minimal',
    'template-story',
  ])
})
