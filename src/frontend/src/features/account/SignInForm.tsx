import { useId, useState } from 'react'
import { signIn } from './auth'

type SignInFormProps = {
  /** Called after a successful sign-in, once capabilities are refreshed. */
  onSignedIn?: () => void
  compact?: boolean
}

/**
 * Email and password, with sign-in and create-account side by side. Used on the
 * account page and inside the export panel, which is where a new user first
 * meets it: nothing before the export needs an account.
 */
export function SignInForm({ onSignedIn, compact = false }: SignInFormProps) {
  const id = useId()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function submit(mode: 'login' | 'register') {
    setBusy(true)
    setMessage(null)
    const result = await signIn(mode, email.trim(), password)
    setBusy(false)
    if (!result.ok) {
      setMessage(result.message)
      return
    }
    setPassword('')
    onSignedIn?.()
  }

  const input = 'rounded-md border border-slate-300 px-3 py-2 text-sm'

  return (
    <form
      className={compact ? 'space-y-2' : 'space-y-3'}
      onSubmit={(event) => {
        event.preventDefault()
        void submit('login')
      }}
    >
      <label className="flex flex-col gap-1 text-sm" htmlFor={`${id}-email`}>
        <span>Email</span>
        <input
          id={`${id}-email`}
          type="email"
          required
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={input}
        />
      </label>
      <label className="flex flex-col gap-1 text-sm" htmlFor={`${id}-password`}>
        <span>Mật khẩu</span>
        <input
          id={`${id}-password`}
          type="password"
          required
          minLength={10}
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className={input}
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
          onClick={(event) => {
            if (event.currentTarget.form?.reportValidity()) {
              void submit('register')
            }
          }}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm"
        >
          Tạo tài khoản mới
        </button>
      </div>
      {message && (
        <p role="alert" className="text-sm text-red-700">
          {message}
        </p>
      )}
    </form>
  )
}
