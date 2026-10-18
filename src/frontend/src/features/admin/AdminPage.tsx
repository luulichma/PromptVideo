import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  loadAdminData,
  setTemplateStatus,
  type AdminFailure,
  type AdminMetrics,
  type AdminTemplate,
  type TemplateStatus,
} from './adminApi'

const STATUS_LABELS: Record<TemplateStatus, string> = {
  Draft: 'Nháp',
  Active: 'Đang dùng',
  Retired: 'Đã gỡ',
}

const PLAN_NAMES: Record<string, string> = {
  free: 'Miễn phí',
  personal: 'Cá nhân',
  business: 'Doanh nghiệp',
}

const FAILURE_MESSAGES: Record<AdminFailure, string> = {
  anonymous: 'Trang này dành cho quản trị viên. Hãy đăng nhập trước.',
  forbidden: 'Tài khoản này không có quyền quản trị.',
  offline: 'Không kết nối được máy chủ. Hãy thử lại sau.',
}

type PageState =
  | { status: 'loading' }
  | { status: 'failed'; reason: AdminFailure }
  | { status: 'ready'; templates: AdminTemplate[]; metrics: AdminMetrics }

function toPageState(
  result: Awaited<ReturnType<typeof loadAdminData>>,
): PageState {
  return result.ok
    ? { status: 'ready', ...result.data }
    : { status: 'failed', reason: result.reason }
}

/**
 * The operator's side of the demo: the template catalog and aggregate usage.
 * The server enforces who may see it; this page only explains a refusal.
 * Metrics are counts only, so nothing here shows a customer's content.
 */
export function AdminPage() {
  const [state, setState] = useState<PageState>({ status: 'loading' })
  const [savingKey, setSavingKey] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  async function reload() {
    setState(toPageState(await loadAdminData()))
  }

  useEffect(() => {
    let cancelled = false
    void loadAdminData().then((result) => {
      if (!cancelled) setState(toPageState(result))
    })
    return () => {
      cancelled = true
    }
  }, [])

  async function changeStatus(template: AdminTemplate, status: TemplateStatus) {
    setSavingKey(template.templateKey)
    setMessage(null)
    const result = await setTemplateStatus(template.templateKey, status)
    setSavingKey(null)
    if (!result.ok) {
      setMessage(`Chưa đổi được trạng thái. ${FAILURE_MESSAGES[result.reason]}`)
      return
    }
    // The metrics count active templates, so read both again before saying so.
    await reload()
    setMessage(`Đã chuyển "${template.name}" sang ${STATUS_LABELS[status]}.`)
  }

  if (state.status === 'loading') {
    return <p className="text-sm">Đang tải…</p>
  }

  if (state.status === 'failed') {
    return (
      <div
        role="alert"
        data-testid="admin-denied"
        className="max-w-xl space-y-2 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950"
      >
        <p>{FAILURE_MESSAGES[state.reason]}</p>
        {state.reason !== 'offline' && (
          <Link to="/account" className="font-medium underline">
            Đến trang đăng nhập
          </Link>
        )}
      </div>
    )
  }

  const { templates, metrics } = state

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-xl font-semibold">Quản trị</h1>

      <section aria-labelledby="templates-heading" className="space-y-3">
        <h2 id="templates-heading" className="text-lg font-semibold">
          Mẫu video
        </h2>
        <p className="text-sm text-slate-600">
          Mẫu "Đã gỡ" không còn hiện khi tạo video mới. Video cũ vẫn mở được,
          kèm cảnh báo.
        </p>
        <table className="w-full rounded-lg border border-slate-200 bg-white text-sm">
          <thead className="text-left text-slate-600">
            <tr>
              <th className="px-4 py-2 font-medium">Tên mẫu</th>
              <th className="px-4 py-2 font-medium">Phiên bản</th>
              <th className="px-4 py-2 font-medium">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {templates.map((template) => (
              <tr
                key={template.templateKey}
                data-testid={`admin-template-${template.templateKey}`}
                className="border-t border-slate-200"
              >
                <td className="px-4 py-2">{template.name}</td>
                <td className="px-4 py-2">{template.version}</td>
                <td className="px-4 py-2">
                  <select
                    aria-label={`Trạng thái mẫu ${template.name}`}
                    value={template.status}
                    disabled={savingKey !== null}
                    onChange={(event) =>
                      void changeStatus(
                        template,
                        event.target.value as TemplateStatus,
                      )
                    }
                    className="rounded-md border border-slate-300 bg-white px-2 py-1"
                  >
                    {Object.entries(STATUS_LABELS).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {message && (
          <p role="status" className="text-sm">
            {message}
          </p>
        )}
      </section>

      <section aria-labelledby="metrics-heading" className="space-y-3">
        <h2 id="metrics-heading" className="text-lg font-semibold">
          Số liệu sử dụng
        </h2>
        <dl
          data-testid="admin-metrics"
          className="grid gap-3 text-sm sm:grid-cols-3"
        >
          <Metric label="Tài khoản" value={metrics.userCount} />
          <Metric
            label="Lượt xuất tháng này"
            value={metrics.exportsConsumedThisPeriod}
          />
          <Metric label="Mẫu đang dùng" value={metrics.activeTemplateCount} />
          <Metric
            label="Lượt xuất hoàn tất"
            value={metrics.reservationsCompleted}
          />
          <Metric
            label="Lượt xuất đang chờ"
            value={metrics.reservationsOutstanding}
          />
          <Metric
            label="Lượt xuất đã huỷ"
            value={metrics.reservationsCanceled}
          />
          {metrics.activeSubscriptionsByPlan.map((plan) => (
            <Metric
              key={plan.planCode}
              label={`Gói ${PLAN_NAMES[plan.planCode] ?? plan.planCode}`}
              value={plan.count}
            />
          ))}
        </dl>
        <p className="text-xs text-slate-500">
          Chỉ có số đếm, không có nội dung video của khách. Cập nhật lúc{' '}
          {new Date(metrics.generatedAtUtc).toLocaleString('vi-VN')}.
        </p>
      </section>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <dt className="text-slate-600">{label}</dt>
      <dd className="text-2xl font-semibold">{value}</dd>
    </div>
  )
}
