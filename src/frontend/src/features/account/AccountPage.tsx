import { useState } from 'react'
import { assetStorageKind } from '../../core/storage/assetStore'
import { signOut, simulateUpgrade } from './auth'
import { SignInForm } from './SignInForm'
import { useCapabilities } from './useCapabilities'

/**
 * The three tiers as the product sells them. The server holds the policy that
 * is actually enforced; this is the description shown next to it.
 */
const TIERS = [
  {
    code: 'free',
    name: 'Miễn phí',
    price: '0 đồng',
    perks: ['3 video mỗi tháng', 'Có watermark', 'Tối đa 720p'],
  },
  {
    code: 'personal',
    name: 'Cá nhân',
    price: '599.000 đồng/năm',
    perks: ['Không giới hạn video', '1080p', 'Không watermark'],
  },
  {
    code: 'business',
    name: 'Doanh nghiệp',
    price: '4.900.000 đồng/năm',
    perks: ['Như gói Cá nhân', '5 tài khoản', 'Hoá đơn VAT'],
  },
] as const

/**
 * Sign-in lives here as well as in the export panel; the editor itself works
 * without an account, only the export permission check needs one.
 */
export function AccountPage() {
  const capabilities = useCapabilities()
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const current =
    capabilities.status === 'ready' ? capabilities.capabilities : null

  async function upgrade(planCode: string) {
    setBusy(true)
    setMessage(null)
    const result = await simulateUpgrade(planCode)
    setBusy(false)
    setMessage(result.ok ? 'Đã nâng cấp gói.' : result.message)
  }

  async function handleSignOut() {
    setBusy(true)
    const result = await signOut()
    setBusy(false)
    setMessage(result.ok ? 'Đã đăng xuất.' : result.message)
  }

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-xl font-semibold">Tài khoản và gói</h1>

      {current ? (
        <section className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-lg border border-slate-200 bg-white p-4 text-sm">
          <span>
            Gói hiện tại: <strong>{current.planName}</strong>
          </span>
          <span>Tối đa {current.maxExportHeight}p</span>
          <span>
            {current.watermarkRequired ? 'Có watermark' : 'Không watermark'}
          </span>
          <span>
            {current.hasUnlimitedExports
              ? 'Không giới hạn video'
              : `Tháng này còn ${current.exportsRemaining ?? 0}/${current.exportsPerMonth ?? 0} lượt`}
          </span>
          <button
            type="button"
            disabled={busy}
            onClick={() => void handleSignOut()}
            className="ml-auto rounded-md border border-slate-300 px-3 py-1.5"
          >
            Đăng xuất
          </button>
        </section>
      ) : (
        <section className="max-w-md space-y-3 rounded-lg border border-slate-200 bg-white p-4">
          <h2 className="text-sm font-semibold">Đăng nhập</h2>
          {capabilities.status === 'offline' ? (
            <p className="text-sm text-slate-600">
              Không kết nối được máy chủ. Bạn vẫn soạn và xem trước video được;
              đăng nhập khi có mạng.
            </p>
          ) : (
            <SignInForm />
          )}
        </section>
      )}

      <section id="plans" aria-labelledby="plans-heading" className="space-y-3">
        <h2 id="plans-heading" className="text-lg font-semibold">
          Ba bậc giá
        </h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {TIERS.map((tier) => {
            const isCurrent = current?.planCode === tier.code
            return (
              <li
                key={tier.code}
                data-testid={`plan-${tier.code}`}
                className={`space-y-2 rounded-lg border bg-white p-4 ${
                  isCurrent
                    ? 'border-sky-500 ring-1 ring-sky-500'
                    : 'border-slate-200'
                }`}
              >
                <p className="font-semibold">{tier.name}</p>
                <p className="text-lg">{tier.price}</p>
                <ul className="list-disc space-y-0.5 pl-5 text-sm text-slate-700">
                  {tier.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                {isCurrent ? (
                  <p className="text-sm font-medium text-sky-800">Đang dùng</p>
                ) : (
                  tier.code !== 'free' &&
                  current && (
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void upgrade(tier.code)}
                      className="rounded-md bg-sky-700 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
                    >
                      Nâng cấp
                    </button>
                  )
                )}
              </li>
            )
          })}
        </ul>
        <p className="text-xs text-slate-600">
          Bản thử nghiệm dùng thanh toán giả lập: bấm "Nâng cấp" đổi gói ngay và
          không thu tiền thật.
        </p>
        {message && (
          <p role="status" className="text-sm">
            {message}
          </p>
        )}
      </section>

      <p className="text-xs text-slate-600">
        Chữ, ảnh và file dự án chỉ nằm trên máy này (
        {assetStorageKind() === 'opfs' ? 'OPFS' : 'IndexedDB'}), không gửi lên
        máy chủ.
      </p>
    </div>
  )
}
