import { useCapabilities } from './useCapabilities'

/**
 * Tells the user what their plan allows before they invest time in an export
 * they are not entitled to. Every non-ready state still renders something
 * useful, because the editor itself does not depend on this call.
 */
export function CapabilityBanner() {
  const state = useCapabilities()

  const tone =
    state.status === 'ready'
      ? 'border-sky-300 bg-sky-50 text-sky-950'
      : 'border-amber-300 bg-amber-50 text-amber-950'

  return (
    <aside
      aria-label="Quyền xuất video"
      data-status={state.status}
      className={`flex flex-wrap items-center gap-x-4 gap-y-1 rounded-lg border px-4 py-2 text-sm ${tone}`}
    >
      {state.status === 'loading' && <span>Đang kiểm tra quyền xuất…</span>}

      {state.status === 'anonymous' && (
        <span>
          Chưa đăng nhập. Bạn vẫn dựng và lưu project cục bộ được; đăng nhập khi
          cần xuất video.
        </span>
      )}

      {state.status === 'offline' && (
        <span>
          Không kết nối được máy chủ. Trình biên tập vẫn hoạt động; quyền xuất
          sẽ được kiểm lại khi có mạng.
        </span>
      )}

      {state.status === 'ready' && (
        <>
          <strong className="font-semibold">
            {state.capabilities.planName}
          </strong>
          <span>Tối đa {state.capabilities.maxExportHeight}p</span>
          <span>
            {state.capabilities.watermarkRequired
              ? 'Có watermark'
              : 'Không watermark'}
          </span>
          <span>
            {state.capabilities.hasUnlimitedExports
              ? 'Không giới hạn lượt xuất'
              : `Còn ${state.capabilities.exportsRemaining}/${state.capabilities.exportsPerMonth} lượt tháng này`}
          </span>
        </>
      )}
    </aside>
  )
}
