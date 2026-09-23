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
  code: 'unauthenticated' | 'quota' | 'invalid-request' | 'offline' | 'server'
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

/**
 * Turns a refused reserve into what the user is told.
 *
 * The messages are ours, never the server's: the API speaks English problem
 * titles meant for developers, and echoing them would leave a Vietnamese UI
 * explaining itself in a language the user did not choose. The status alone is
 * the contract. On this endpoint 403 means only one thing — the monthly quota
 * is spent — because an unauthenticated caller gets 401 and the plan's height
 * ceiling is applied by clamping, not by refusing.
 */
export function describeStatus(status: number): ReservationRefusal {
  if (status === 401) {
    return {
      code: 'unauthenticated',
      message: 'Hãy đăng nhập để xuất video.',
    }
  }
  if (status === 403) {
    return {
      code: 'quota',
      message:
        'Bạn đã dùng hết lượt xuất của tháng này. Nâng cấp gói để xuất không giới hạn, hoặc chờ sang tháng mới.',
    }
  }
  if (status === 400) {
    return {
      code: 'invalid-request',
      message:
        'Yêu cầu xuất không hợp lệ (độ phân giải không được hỗ trợ). Hãy chọn lại độ phân giải rồi thử lại.',
    }
  }
  return {
    code: 'server',
    message: `Máy chủ chưa xử lý được yêu cầu xuất (mã ${status}). Hãy thử lại sau ít phút.`,
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
      return { ok: false, refusal: describeStatus(response.status) }
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
