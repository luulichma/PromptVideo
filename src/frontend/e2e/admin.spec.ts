import { expect, test, type Page } from '@playwright/test'

const CAPABILITIES = {
  planCode: 'free',
  planName: 'Miễn phí',
  maxExportHeight: 720,
  watermarkRequired: true,
  seats: 1,
  exportsPerMonth: 3,
  exportsUsed: 0,
  exportsRemaining: 3,
  periodStartUtc: '2026-10-01T00:00:00Z',
  periodEndUtc: '2026-11-01T00:00:00Z',
  expiresAtUtc: '2026-10-18T01:00:00Z',
  hasUnlimitedExports: false,
}

const TEMPLATE_NAMES: Record<string, string> = {
  bold: 'Nổi bật',
  classic: 'Cổ điển',
  minimal: 'Tối giản',
  promo: 'Tươi sáng',
  story: 'Kể chuyện',
}

/**
 * A signed-in account against a mocked API. As an admin the catalog can be
 * changed and every status change is recorded; anyone else gets 403 from the
 * admin endpoints, exactly as the server answers.
 */
async function serveApi(
  page: Page,
  isAdmin: boolean,
): Promise<{ changes: string[] }> {
  const changes: string[] = []
  const status: Record<string, string> = Object.fromEntries(
    Object.keys(TEMPLATE_NAMES).map((key) => [key, 'Active']),
  )
  const template = (templateKey: string) => ({
    templateKey,
    name: TEMPLATE_NAMES[templateKey],
    version: 1,
    status: status[templateKey],
    manifestJson: '{}',
  })

  await page.route(
    (url) => url.pathname.startsWith('/api/'),
    async (route) => {
      const request = route.request()
      const path = new URL(request.url()).pathname
      if (path === '/api/me/capabilities') {
        return route.fulfill({ json: CAPABILITIES })
      }
      if (path === '/api/security/csrf') {
        return route.fulfill({
          json: { headerName: 'X-CSRF-TOKEN', token: 'test' },
        })
      }
      if (path.startsWith('/api/admin/')) {
        if (!isAdmin) return route.fulfill({ status: 403, json: {} })
        if (path === '/api/admin/templates') {
          return route.fulfill({
            json: Object.keys(TEMPLATE_NAMES).sort().map(template),
          })
        }
        if (path === '/api/admin/metrics') {
          return route.fulfill({
            json: {
              generatedAtUtc: '2026-10-18T09:00:00Z',
              userCount: 12,
              reservationsTotal: 9,
              reservationsCompleted: 7,
              reservationsOutstanding: 1,
              reservationsCanceled: 1,
              exportsConsumedThisPeriod: 7,
              activeTemplateCount: Object.values(status).filter(
                (value) => value === 'Active',
              ).length,
              activeSubscriptionsByPlan: [
                { planCode: 'free', count: 10 },
                { planCode: 'personal', count: 2 },
              ],
            },
          })
        }
        const match = /^\/api\/admin\/templates\/([^/]+)\/status$/.exec(path)
        if (match && request.method() === 'POST') {
          const next = (request.postDataJSON() as { status: string }).status
          status[match[1]] = next
          changes.push(`${match[1]}=${next}`)
          return route.fulfill({ json: template(match[1]) })
        }
      }
      return route.abort('connectionrefused')
    },
  )

  return { changes }
}

test('an admin sees the catalog and usage counts and retires a template', async ({
  page,
}) => {
  const { changes } = await serveApi(page, true)
  await page.goto('/')
  await page.getByRole('link', { name: 'Quản trị' }).click()

  await expect(page.getByRole('heading', { name: 'Quản trị' })).toBeVisible()
  await expect(page.locator('[data-testid^="admin-template-"]')).toHaveCount(5)
  const metrics = page.getByTestId('admin-metrics')
  await expect(metrics).toContainText('Tài khoản12')
  await expect(metrics).toContainText('Mẫu đang dùng5')
  await expect(metrics).toContainText('Gói Cá nhân2')

  await page.getByLabel('Trạng thái mẫu Tươi sáng').selectOption('Retired')
  await expect(page.getByRole('status')).toHaveText(
    'Đã chuyển "Tươi sáng" sang Đã gỡ.',
  )
  await expect(page.getByLabel('Trạng thái mẫu Tươi sáng')).toHaveValue(
    'Retired',
  )
  await expect(metrics).toContainText('Mẫu đang dùng4')
  expect(changes).toEqual(['promo=Retired'])
})

test('a signed-in customer has no admin link and is told the page is not theirs', async ({
  page,
}) => {
  await serveApi(page, false)
  await page.goto('/')
  await expect(
    page.getByRole('link', { name: 'Tài khoản và gói' }),
  ).toBeVisible()
  await expect(page.locator('aside[data-status="ready"]')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Quản trị' })).toHaveCount(0)

  await page.goto('/admin')
  await expect(page.getByTestId('admin-denied')).toHaveText(
    /Tài khoản này không có quyền quản trị\./,
  )
  await expect(page.getByTestId('admin-template-promo')).toHaveCount(0)
})
