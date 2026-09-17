import type {
  CapabilityReport,
  CapabilityResult,
} from '../core/capabilities/probe'

const LABELS: Record<keyof CapabilityReport['capabilities'], string> = {
  webCodecs: 'WebCodecs',
  h264720p: 'H.264 · 720p',
  h2641080p: 'H.264 · 1080p',
  aac: 'AAC audio',
  offscreenCanvas: 'OffscreenCanvas',
  opfs: 'OPFS',
  fileSystemAccess: 'File access',
}

function CapabilityCard({
  label,
  result,
}: {
  label: string
  result: CapabilityResult
}) {
  return (
    <article className="capability-card">
      <span
        className={`status-light status-${result.state}`}
        aria-hidden="true"
      />
      <div>
        <strong>{label}</strong>
        <p>{result.detail}</p>
      </div>
      <span className="state-label">{result.state}</span>
    </article>
  )
}

export function CapabilityGrid({
  report,
}: {
  report: CapabilityReport | null
}) {
  if (!report)
    return <p className="empty-state">Đang đọc khả năng của trình duyệt…</p>

  return (
    <div className="capability-grid">
      {Object.entries(report.capabilities).map(([key, result]) => (
        <CapabilityCard
          key={key}
          label={LABELS[key as keyof CapabilityReport['capabilities']]}
          result={result}
        />
      ))}
    </div>
  )
}
