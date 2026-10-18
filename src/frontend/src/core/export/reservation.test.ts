import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('../../generated/api/client', () => ({
  api: { POST: vi.fn() },
  getAntiforgeryHeaders: vi.fn().mockResolvedValue({}),
}))

const { api } = await import('../../generated/api/client')
const { cancelExport, describeStatus, reserveExport, retryPendingSettlements } =
  await import('./reservation')

/** What ExportsModule.cs sends when the Free plan has no exports left. */
const quotaProblem = {
  status: 403,
  title: 'Monthly export quota reached.',
  detail: 'The Free plan allows 3 exports per month.',
}

function respondWith(status: number, error: unknown) {
  vi.mocked(api.POST).mockResolvedValue({
    data: undefined,
    error,
    response: new Response(null, { status }),
  } as never)
}

describe('describeStatus', () => {
  it('asks an anonymous caller to sign in', () => {
    expect(describeStatus(401).code).toBe('unauthenticated')
  })

  it('reads 403 as a spent monthly quota, the only thing it means here', () => {
    const refusal = describeStatus(403)
    expect(refusal.code).toBe('quota')
    expect(refusal.message).toContain('hết lượt xuất')
  })

  it('reads 400 as a request the server will not accept', () => {
    expect(describeStatus(400).code).toBe('invalid-request')
  })

  it('does not mistake a rate limit for a spent quota', () => {
    // The export endpoints are not rate limited; a 429 here is unexpected and
    // must not tell the user they have run out of exports.
    expect(describeStatus(429).code).toBe('server')
  })

  it('falls back to a server error that names the status', () => {
    const refusal = describeStatus(500)
    expect(refusal.code).toBe('server')
    expect(refusal.message).toContain('500')
  })
})

describe('reserveExport', () => {
  beforeEach(() => vi.mocked(api.POST).mockReset())

  it('never shows the English problem text the server returns', async () => {
    respondWith(403, quotaProblem)

    const result = await reserveExport('attempt-1', 1080)

    expect(result.ok).toBe(false)
    if (result.ok) return
    expect(result.refusal.code).toBe('quota')
    expect(result.refusal.message).not.toContain(quotaProblem.title)
    expect(result.refusal.message).not.toContain(quotaProblem.detail)
  })

  it('reports a network failure as being offline', async () => {
    // openapi-fetch rejects when fetch itself fails. The rejection is raised
    // while the response is read rather than by the spy, because Vitest counts
    // an error thrown from inside a spy against the test even once it is caught.
    vi.mocked(api.POST).mockResolvedValue({
      get data(): never {
        throw new TypeError('Failed to fetch')
      },
    } as never)

    const result = await reserveExport('attempt-2', 720)

    expect(result).toMatchObject({ ok: false, refusal: { code: 'offline' } })
  })

  it('sends only the attempt key and the requested height', async () => {
    respondWith(401, {})

    await reserveExport('attempt-3', 720)

    const [, init] = vi.mocked(api.POST).mock.calls[0] as [
      string,
      { body: unknown },
    ]
    expect(init.body).toEqual({
      idempotencyKey: 'attempt-3',
      requestedHeight: 720,
    })
  })
})

describe('settling while the network is down', () => {
  const store = new Map<string, string>()

  beforeEach(() => {
    store.clear()
    vi.stubGlobal('localStorage', {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => store.set(key, value),
      removeItem: (key: string) => store.delete(key),
    })
    vi.mocked(api.POST).mockReset()
  })

  it('remembers a cancel that did not get through and sends it later', async () => {
    vi.mocked(api.POST).mockRejectedValueOnce(new TypeError('offline'))
    expect(await cancelExport('r-1')).toBe(false)
    expect(store.size).toBe(1)

    // Back online: the slot is handed back and nothing is left queued.
    vi.mocked(api.POST).mockResolvedValue({
      response: new Response(null, { status: 204 }),
    } as never)
    await retryPendingSettlements()
    expect(api.POST).toHaveBeenLastCalledWith(
      '/api/exports/reservations/{reservationId}/cancel',
      expect.objectContaining({ params: { path: { reservationId: 'r-1' } } }),
    )
    expect(store.size).toBe(0)
  })

  it('does not keep retrying what the server already answered', async () => {
    vi.mocked(api.POST).mockResolvedValue({
      response: new Response(null, { status: 409 }),
    } as never)
    expect(await cancelExport('r-2')).toBe(false)
    expect(store.size).toBe(0)
  })
})
