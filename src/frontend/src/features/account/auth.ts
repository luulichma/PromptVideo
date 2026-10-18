import { api, getAntiforgeryHeaders } from '../../generated/api/client'
import { refreshCapabilities } from './useCapabilities'

export type AuthResult = { ok: true } | { ok: false; message: string }

const OFFLINE: AuthResult = {
  ok: false,
  message: 'Không kết nối được máy chủ. Hãy kiểm tra mạng rồi thử lại.',
}

async function login(email: string, password: string): Promise<boolean> {
  const headers = await getAntiforgeryHeaders()
  const { error } = await api.POST('/api/auth/login', {
    headers,
    params: { query: { useCookies: true } },
    body: { email, password },
  } as never)
  return !error
}

/**
 * Signs in, or creates the account and then signs in, and refreshes what the
 * account may export. A new account is signed in straight away: making someone
 * who just chose a password type it again would only slow the export down.
 */
export async function signIn(
  mode: 'login' | 'register',
  email: string,
  password: string,
): Promise<AuthResult> {
  try {
    if (mode === 'register') {
      const headers = await getAntiforgeryHeaders()
      const { error } = await api.POST('/api/auth/register', {
        headers,
        body: { email, password },
      } as never)
      if (error) {
        return {
          ok: false,
          message:
            'Chưa tạo được tài khoản. Email có thể đã được dùng, hoặc mật khẩu ngắn hơn 10 ký tự.',
        }
      }
    }

    if (!(await login(email, password))) {
      return { ok: false, message: 'Email hoặc mật khẩu chưa đúng.' }
    }
    await refreshCapabilities()
    return { ok: true }
  } catch {
    return OFFLINE
  }
}

export async function signOut(): Promise<AuthResult> {
  try {
    const headers = await getAntiforgeryHeaders()
    await api.POST('/api/auth/logout', { headers } as never)
    await refreshCapabilities()
    return { ok: true }
  } catch {
    return OFFLINE
  }
}

/**
 * Upgrades through the simulated payment gateway. It exists only outside
 * production and moves no money; the UI says so wherever it is offered.
 */
export async function simulateUpgrade(planCode: string): Promise<AuthResult> {
  try {
    const headers = await getAntiforgeryHeaders()
    const response = await fetch('/api/payments/fake/checkout', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ planCode }),
    })
    if (response.status === 401) {
      return { ok: false, message: 'Hãy đăng nhập trước khi nâng cấp.' }
    }
    if (response.status === 404) {
      return {
        ok: false,
        message: 'Môi trường này không bật thanh toán giả lập.',
      }
    }
    if (!response.ok && response.status !== 409) {
      return {
        ok: false,
        message: `Nâng cấp chưa thành công (mã ${response.status}).`,
      }
    }
    await refreshCapabilities()
    return { ok: true }
  } catch {
    return OFFLINE
  }
}
