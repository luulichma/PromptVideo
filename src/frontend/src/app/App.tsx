import { NavLink, Route, Routes } from 'react-router-dom'
import { CapabilityBanner } from '../features/account/CapabilityBanner'
import { AccountPage } from '../features/account/AccountPage'
import { DashboardPage } from '../features/dashboard/DashboardPage'
import { EditorPage } from '../features/editor/EditorPage'
import SpikePage from '../features/spike/SpikePage'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-md px-3 py-2 text-sm font-medium',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600',
    isActive ? 'bg-sky-100 text-sky-900' : 'text-slate-700 hover:bg-slate-100',
  ].join(' ')

export default function App() {
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
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3">
          <span className="text-base font-semibold tracking-tight">
            PromptVideo
          </span>
          <nav aria-label="Chính" className="flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Dự án
            </NavLink>
            <NavLink to="/account" className={navLinkClass}>
              Tài khoản
            </NavLink>
            <NavLink to="/spike" className={navLinkClass}>
              Capability probe
            </NavLink>
          </nav>
          <div className="ml-auto min-w-0">
            <CapabilityBanner />
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-6xl px-4 py-6">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/editor/:projectId" element={<EditorPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/spike" element={<SpikePage />} />
          <Route
            path="*"
            element={<p className="text-sm">Không tìm thấy trang.</p>}
          />
        </Routes>
      </main>
    </div>
  )
}
