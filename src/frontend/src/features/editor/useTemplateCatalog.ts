import { useEffect, useState } from 'react'
import type { TemplateCatalog } from '../../core/templates/catalog'
import { api } from '../../generated/api/client'

/**
 * Reads which templates the admin has made available.
 *
 * The endpoint is anonymous and returns only active entries, so the keys it
 * lists are exactly the ones that may be offered. Any failure degrades to
 * `offline` and the bundled list, the same way the rest of the editor keeps
 * working without a server.
 */
export function useTemplateCatalog(): TemplateCatalog {
  const [catalog, setCatalog] = useState<TemplateCatalog>({
    status: 'loading',
  })

  useEffect(() => {
    const controller = new AbortController()

    void api
      .GET('/api/templates', { signal: controller.signal })
      .then((result) => {
        if (controller.signal.aborted) return
        if (result.error || !Array.isArray(result.data)) {
          setCatalog({ status: 'offline' })
          return
        }
        setCatalog({
          status: 'online',
          activeKeys: new Set(result.data.map((entry) => entry.templateKey)),
        })
      })
      .catch(() => {
        if (!controller.signal.aborted) setCatalog({ status: 'offline' })
      })

    return () => controller.abort()
  }, [])

  return catalog
}
