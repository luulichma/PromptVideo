import { useEffect, useState } from 'react'
import { api, getAntiforgeryHeaders } from '../../generated/api/client'
import type { components } from '../../generated/api/schema'
import { useCapabilities } from '../account/useCapabilities'

export type AdminTemplate = components['schemas']['TemplateResponse']
export type AdminMetrics = components['schemas']['AdminMetricsResponse']
export type TemplateStatus = 'Draft' | 'Active' | 'Retired'

/** Why the admin data could not be read; each gets its own message. */
export type AdminFailure = 'anonymous' | 'forbidden' | 'offline'

export type AdminResult<T> =
  { ok: true; data: T } | { ok: false; reason: AdminFailure }

function failure(status: number | undefined): AdminResult<never> {
  if (status === 401) return { ok: false, reason: 'anonymous' }
  if (status === 403) return { ok: false, reason: 'forbidden' }
  return { ok: false, reason: 'offline' }
}

export async function loadAdminData(): Promise<
  AdminResult<{ templates: AdminTemplate[]; metrics: AdminMetrics }>
> {
  try {
    const [templates, metrics] = await Promise.all([
      api.GET('/api/admin/templates'),
      api.GET('/api/admin/metrics'),
    ])
    if (!templates.data) return failure(templates.response.status)
    if (!metrics.data) return failure(metrics.response.status)
    return {
      ok: true,
      data: { templates: templates.data, metrics: metrics.data },
    }
  } catch {
    return failure(undefined)
  }
}

export async function setTemplateStatus(
  templateKey: string,
  status: TemplateStatus,
): Promise<AdminResult<AdminTemplate>> {
  try {
    const headers = await getAntiforgeryHeaders()
    const { data, response } = await api.POST(
      '/api/admin/templates/{templateKey}/status',
      { headers, params: { path: { templateKey } }, body: { status } },
    )
    return data ? { ok: true, data } : failure(response.status)
  } catch {
    return failure(undefined)
  }
}

/**
 * Whether the signed-in account is an administrator, asked of the server
 * itself: the nav link only appears when an admin call actually succeeds, so
 * nothing on the client decides who is an admin. Asked again whenever the
 * account changes (sign in, sign out).
 */
export function useIsAdmin(): boolean {
  const capabilities = useCapabilities()
  const signedIn = capabilities.status === 'ready'
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (!signedIn) return
    let cancelled = false
    api
      .GET('/api/admin/metrics')
      .then((result) => {
        if (!cancelled) setIsAdmin(Boolean(result.data))
      })
      .catch(() => {
        if (!cancelled) setIsAdmin(false)
      })
    return () => {
      cancelled = true
    }
  }, [signedIn, capabilities])

  return signedIn && isAdmin
}
