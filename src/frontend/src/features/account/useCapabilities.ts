import { useEffect, useState } from 'react'
import { api } from '../../generated/api/client'

export type Capabilities = {
  planCode: string
  planName: string
  maxExportHeight: number
  watermarkRequired: boolean
  exportsPerMonth: number | null
  exportsRemaining: number | null
  hasUnlimitedExports: boolean
}

export type CapabilityState =
  | { status: 'loading' }
  | { status: 'anonymous' }
  | { status: 'offline' }
  | { status: 'ready'; capabilities: Capabilities }

/**
 * Reads the account's export entitlement.
 *
 * The editor must keep working when this fails: everything except the export
 * permission check is local, so an offline or signed-out result is a normal
 * state to render, not an error to throw.
 */
export function useCapabilities(): CapabilityState {
  const [state, setState] = useState<CapabilityState>({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()

    void api
      .GET('/api/me/capabilities', { signal: controller.signal })
      .then((result) => {
        if (controller.signal.aborted) return
        if (result.error || !result.data) {
          // 401 means "sign in to export", anything else means the server could
          // not be reached or answered badly; the editor treats them differently.
          setState(
            result.response.status === 401
              ? { status: 'anonymous' }
              : { status: 'offline' },
          )
          return
        }
        setState({ status: 'ready', capabilities: result.data as Capabilities })
      })
      .catch(() => {
        if (!controller.signal.aborted) setState({ status: 'offline' })
      })

    return () => controller.abort()
  }, [])

  return state
}
