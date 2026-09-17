import { useState } from 'react'
import { api, getAntiforgeryHeaders } from '../../generated/api/client'
import { assetStorageKind } from '../../core/storage/assetStore'
import { useCapabilities } from './useCapabilities'

/**
 * Sign-in lives here rather than in the editor because the editor deliberately
 * works without an account; only the export permission check needs one.
 */
export function AccountPage() {
  const capabilities = useCapabilities()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function submit(mode: 'login' | 'register') {
    setBusy(true)
    setMessage(null)
    try {
      const headers = await getAntiforgeryHeaders()
      const path = mode === 'login' ? '/api/auth/login' : '/api/auth/register'
      const { error } = await api.POST(path, {
        headers,
        params: mode === 'login' ? { query: { useCookies: true } } : undefined,
        body: { email, password },
      } as never)

      setMessage(
        error
          ? 'Không thành công. Kiểm tra lại email và mật khẩu.'
          : 'Thành công. Tải lại trang để cập nhật quyền.',
      )
    } catch {
      setMessage('Không kết nối được máy chủ.')
    } finally {
      setBusy(false)
    }
  }

  async function signOut() {
    setBusy(true)
    try {
      const headers = await getAntiforgeryHeaders()
      await api.POST('/api/auth/logout', { headers } as never)
      setMessage('Đã đăng xuất. Tải lại trang để cập nhật quyền.')
    } catch {
      setMessage('Không kết nối được máy chủ.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-xl font-semibold">Tài khoản</h1>

      <section className="space-y-2 rounded-lg border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-semibold">Quyền hiện tại</h2>
        {capabilities.status === 'ready' ? (
          <dl className="grid grid-cols-2 gap-1 text-sm">
            <dt className="text-slate-600">Gói</dt>
            <dd>{capabilities.capabilities.planName}</dd>
            <dt className="text-slate-600">Độ phân giải tối đa</dt>
            <dd>{capabilities.capabilities.maxExportHeight}p</dd>
            <dt className="text-slate-600">Watermark</dt>
            <dd>
              {capabilities.capabilities.watermarkRequired ? 'Có' : 'Không'}
            </dd>
            <dt className="text-slate-600">Lượt xuất còn lại</dt>
            <dd>
              {capabilities.capabilities.hasUnlimitedExports
                ? 'Không giới hạn'
                : capabilities.capabilities.exportsRemaining}
            </dd>
          </dl>
        ) : (
          <p className="text-sm text-slate-600">
            {capabilities.status === 'anonymous'
              ? 'Chưa đăng nhập.'
              : 'Chưa lấy được thông tin quyền.'}
          </p>
        )}
      </section>

      <form
        className="space-y-3 rounded-lg border border-slate-200 bg-white p-4"
        onSubmit={(event) => {
          event.preventDefault()
          void submit('login')
        }}
      >
        <h2 className="text-sm font-semibold">Đăng nhập hoặc tạo tài khoản</h2>
        <label className="flex flex-col gap-1 text-sm">
          <span>Email</span>
          <input
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span>Mật khẩu</span>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            type="submit"
            disabled={busy}
            className="rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
          >
            Đăng nhập
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={() => void submit('register')}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm"
          >
            Tạo tài khoản
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={() => void signOut()}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm"
          >
            Đăng xuất
          </button>
        </div>
        {message && (
          <p role="status" className="text-sm">
            {message}
          </p>
        )}
      </form>

      <p className="text-xs text-slate-600">
        Ảnh và nội dung project được lưu trên thiết bị này (
        {assetStorageKind() === 'opfs' ? 'OPFS' : 'IndexedDB'}), không gửi lên
        máy chủ.
      </p>
    </div>
  )
}
