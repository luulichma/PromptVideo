import createClient from 'openapi-fetch'
import type { paths } from './schema'

export const api = createClient<paths>({
  baseUrl: '/',
  credentials: 'include',
})

export async function getAntiforgeryHeaders(): Promise<Record<string, string>> {
  const { data, error } = await api.GET('/api/security/csrf')
  if (error || !data) {
    throw new Error('Unable to obtain an antiforgery token.')
  }

  return { [data.headerName]: data.token }
}
