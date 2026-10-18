import { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { checkBrowserSupport } from '../core/capabilities/browserSupport'
import { retryPendingSettlements } from '../core/export/reservation'
import { CapabilityBanner } from '../features/account/CapabilityBanner'
import { AccountPage } from '../features/account/AccountPage'
import { AdminPage } from '../features/admin/AdminPage'
import { useIsAdmin } from '../features/admin/adminApi'
import { DashboardPage } from '../features/dashboard/DashboardPage'
import { EditorPage } from '../features/editor/EditorPage'
import SpikePage from '../features/spike/SpikePage'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-md px-3 py-2 text-sm font-medium',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600',
    isActive ? 'bg-sky-100 text-sky-900' : 'text-slate-700 hover:bg-slate-100',
  ].join(' ')

/**
 * Settlements that could not reach the server — an export cancelled while the
 * network was down — are sent again when the app opens and when it comes back
 * online, so a slot owed back is not lost to a bad connection.
 */
function useSettlementRetry(): void {
  useEffect(() => {
    const retry = () => void retryPendingSettlements()
    retry()
    window.addEventListener('online', retry)
    return () => window.removeEventListener('online', retry)
  }, [])
}

export default function App() {
  useSettlementRetry()
  // Checked once on open, before anyone spends time filling scenes in.
  const [support] = useState(() => checkBrowserSupport())
  const isAdmin = useIsAdmin()

  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900">
      {/* First tab stop, so keyboard users can jump past the chrome. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Bỏ qua điều hướng
      </a>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3">
          <span className="text-base font-semibold tracking-tight">
            PromptVideo
          </span>
          <nav aria-label="Chính" className="flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Video của tôi
            </NavLink>
            <NavLink to="/account" className={navLinkClass}>
              Tài khoản và gói
            </NavLink>
            <NavLink to="/spike" className={navLinkClass}>
              Kiểm tra trình duyệt
            </NavLink>
            {isAdmin && (
              <NavLink to="/admin" className={navLinkClass}>
                Quản trị
              </NavLink>
            )}
          </nav>
          <div className="ml-auto min-w-0">
            <CapabilityBanner />
          </div>
        </div>
      </header>

      {!support.ok && (
        <div
          role="alert"
          data-testid="browser-unsupported"
          className="border-b border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-900"
        >
          {support.message} Bạn vẫn xem được trang, nhưng chưa xuất được video
          trên trình duyệt này.
        </div>
      )}

      <main id="main" className="mx-auto max-w-7xl px-4 py-6">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/editor/:projectId" element={<EditorPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route
            path="/spike"
            element={
              <div className="spike-lab">
                <SpikePage />
              </div>
            }
          />
          <Route
            path="*"
            element={<p className="text-sm">Không tìm thấy trang.</p>}
          />
        </Routes>
      </main>
    </div>
  )
}
