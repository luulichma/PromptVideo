import { useEffect } from 'react'
import { create } from 'zustand'
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

type CapabilityStore = {
  state: CapabilityState
  /** True once a first read has been started, so mounting twice reads once. */
  started: boolean
  refresh: () => Promise<void>
}

/**
 * The account's export entitlement, shared by every part of the page.
 *
 * One store rather than one request per component: the banner, the export
 * panel and the account page must agree, and after signing in or exporting a
 * single refresh has to update all of them at once.
 */
const useCapabilityStore = create<CapabilityStore>((set) => ({
  state: { status: 'loading' },
  started: false,
  refresh: async () => {
    set({ started: true })
    try {
      const result = await api.GET('/api/me/capabilities')
      if (result.error || !result.data) {
        // 401 means "sign in to export", anything else means the server could
        // not be reached or answered badly; the editor treats them differently.
        set({
          state:
            result.response.status === 401
              ? { status: 'anonymous' }
              : { status: 'offline' },
        })
        return
      }
      set({
        state: {
          status: 'ready',
          capabilities: result.data as Capabilities,
        },
      })
    } catch {
      set({ state: { status: 'offline' } })
    }
  },
}))

/**
 * Reads the account's export entitlement.
 *
 * The editor must keep working when this fails: everything except the export
 * permission check is local, so an offline or signed-out result is a normal
 * state to render, not an error to throw.
 */
export function useCapabilities(): CapabilityState {
  const state = useCapabilityStore((store) => store.state)
  const started = useCapabilityStore((store) => store.started)
  const refresh = useCapabilityStore((store) => store.refresh)

  useEffect(() => {
    if (!started) void refresh()
  }, [started, refresh])

  return state
}

/** Reads the entitlement again, e.g. after signing in or finishing an export. */
export function refreshCapabilities(): Promise<void> {
  return useCapabilityStore.getState().refresh()
}
