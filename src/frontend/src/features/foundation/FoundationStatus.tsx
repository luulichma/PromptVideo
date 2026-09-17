import { useEffect, useState } from 'react'
import { api } from '../../generated/api/client'

export function FoundationStatus() {
  // 'checking' until the first response; then the reported readiness state, or
  // 'unavailable' when the API cannot be reached or reports itself unhealthy.
  const [readiness, setReadiness] = useState('checking')

  useEffect(() => {
    const controller = new AbortController()
    void api
      .GET('/api/foundation/health', { signal: controller.signal })
      .then(({ data, error }) => {
        if (error || !data) {
          setReadiness('unavailable')
          return
        }

        setReadiness(data.status)
      })
      .catch(() => setReadiness('unavailable'))
    return () => controller.abort()
  }, [])

  return (
    <output aria-label="Backend readiness" data-status={readiness}>
      API: {readiness}
    </output>
  )
}
