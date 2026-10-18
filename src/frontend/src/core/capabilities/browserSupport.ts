export type BrowserSupport =
  { ok: true } | { ok: false; missing: string[]; message: string }

export const UNSUPPORTED_BROWSER_MESSAGE =
  'Trình duyệt này chưa xuất được video. Hãy dùng Chrome hoặc Edge bản mới.'

/**
 * The quick check made the moment the page opens, before anyone types into a
 * scene: it only asks whether the pieces exist. Whether this machine's encoder
 * takes the exact settings is asked again, precisely, when an export starts.
 */
export function checkBrowserSupport(
  scope: typeof globalThis = globalThis,
): BrowserSupport {
  const missing: string[] = []
  if (!scope.isSecureContext) missing.push('kết nối an toàn (https)')
  if (typeof scope.VideoEncoder === 'undefined') missing.push('WebCodecs')
  if (typeof scope.OffscreenCanvas === 'undefined')
    missing.push('OffscreenCanvas')
  if (typeof scope.Worker === 'undefined') missing.push('Web Worker')
  if (typeof scope.indexedDB === 'undefined') missing.push('IndexedDB')

  return missing.length === 0
    ? { ok: true }
    : { ok: false, missing, message: UNSUPPORTED_BROWSER_MESSAGE }
}
