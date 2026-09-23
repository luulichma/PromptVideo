import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('../../generated/api/client', () => ({
  api: { POST: vi.fn() },
  getAntiforgeryHeaders: vi.fn().mockResolvedValue({}),
}))

const { api } = await import('../../generated/api/client')
const { describeStatus, reserveExport } = await import('./reservation')

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
