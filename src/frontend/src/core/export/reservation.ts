import { api, getAntiforgeryHeaders } from '../../generated/api/client'

export type ExportReservation = {
  reservationId: string
  grantedHeight: number
  watermarkRequired: boolean
  expiresAtUtc: string
  exportsRemaining: number | null
  exportsPerMonth: number | null
}

export type ReservationRefusal = {
  code: 'unauthenticated' | 'quota' | 'forbidden' | 'offline' | 'server'
  message: string
}

export type ReservationResult =
  | { ok: true; reservation: ExportReservation }
  | { ok: false; refusal: ReservationRefusal }

/** A number the contract may deliver as a string; both mean the same thing. */
function toNumber(value: unknown): number {
  return typeof value === 'string' ? Number(value) : (value as number)
}

function toNullableNumber(value: unknown): number | null {
  if (value === null || value === undefined) return null
  return toNumber(value)
}

function describeStatus(status: number, detail?: string): ReservationRefusal {
  if (status === 401) {
    return {
      code: 'unauthenticated',
      message: 'Hãy đăng nhập để xuất video.',
    }
  }
  if (status === 402 || status === 409 || status === 429) {
    return {
      code: 'quota',
      message: detail ?? 'Bạn đã dùng hết lượt xuất của chu kỳ này.',
    }
  }
  if (status === 403) {
    return {
      code: 'forbidden',
      message: detail ?? 'Gói hiện tại không cho phép độ phân giải này.',
    }
  }
  return {
    code: 'server',
    message: detail ?? `Máy chủ trả lỗi ${status}.`,
  }
}

/**
 * Claims one export from the account's quota before any encoding starts.
 *
 * The idempotency key belongs to the attempt, not the call: retrying a reserve
 * whose response was lost must not spend a second slot, which is exactly the
 * case the server's key is there to collapse.
 */
export async function reserveExport(
  idempotencyKey: string,
  requestedHeight: number,
): Promise<ReservationResult> {
  try {
    const headers = await getAntiforgeryHeaders()
    const { data, error, response } = await api.POST(
      '/api/exports/reservations',
      {
        headers,
        body: { idempotencyKey, requestedHeight },
      },
    )

    if (error || !data) {
      const detail =
        error && typeof error === 'object' && 'detail' in error
          ? String((error as { detail?: unknown }).detail ?? '')
          : ''
      return {
        ok: false,
        refusal: describeStatus(response.status, detail || undefined),
      }
    }

    return {
      ok: true,
      reservation: {
        reservationId: String(data.reservationId),
        grantedHeight: toNumber(data.grantedHeight),
        watermarkRequired: Boolean(data.watermarkRequired),
        expiresAtUtc: String(data.expiresAtUtc),
        exportsRemaining: toNullableNumber(data.exportsRemaining),
        exportsPerMonth: toNullableNumber(data.exportsPerMonth),
      },
    }
  } catch {
    return {
      ok: false,
      refusal: {
        code: 'offline',
        message:
          'Không liên hệ được máy chủ để kiểm tra quyền xuất. Hãy kiểm tra kết nối rồi thử lại.',
      },
    }
  }
}

/**
 * Settles a reservation.
 *
 * Both outcomes are best-effort on purpose. The user already has their file, or
 * already knows the export failed; turning a failed bookkeeping call into an
 * error they must deal with would be punishing them for our network. The server
 * expires unsettled reservations on its own, which is the real safety net.
 */
export async function completeExport(reservationId: string): Promise<boolean> {
  return settle(reservationId, 'complete')
}

export async function cancelExport(reservationId: string): Promise<boolean> {
  return settle(reservationId, 'cancel')
}

async function settle(
  reservationId: string,
  action: 'complete' | 'cancel',
): Promise<boolean> {
  try {
    const headers = await getAntiforgeryHeaders()
    const path =
      action === 'complete'
        ? '/api/exports/reservations/{reservationId}/complete'
        : '/api/exports/reservations/{reservationId}/cancel'

    const { error } = await api.POST(path, {
      headers,
      params: { path: { reservationId } },
    })
    return !error
  } catch {
    return false
  }
}
