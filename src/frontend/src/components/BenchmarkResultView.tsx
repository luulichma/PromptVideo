import type { ExportBenchmarkResult } from '../core/export/exportMp4'

function formatBytes(bytes: number | null): string {
  if (bytes === null) return 'Không được browser cung cấp'
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

export function BenchmarkResultView({ result }: { result: ExportBenchmarkResult }) {
  return (
    <div className="result-panel">
      <div className="result-verdict">
        <span className={`status-light ${result.validation.isValid ? 'status-supported' : 'status-unsupported'}`} />
        <strong>{result.validation.isValid ? 'MP4 hợp lệ' : 'Cần kiểm tra'}</strong>
      </div>
      <dl className="metric-grid">
        <div><dt>Thời gian</dt><dd>{(result.elapsedMilliseconds / 1000).toFixed(1)} s</dd></div>
        <div><dt>Kích thước</dt><dd>{formatBytes(result.fileSizeBytes)}</dd></div>
        <div><dt>Peak JS heap</dt><dd>{formatBytes(result.peakJsHeapBytes)}</dd></div>
        <div><dt>Duration</dt><dd>{result.validation.durationSeconds.toFixed(3)} s</dd></div>
        <div><dt>Frames</dt><dd>{result.validation.frameCount}</dd></div>
        <div><dt>Video</dt><dd>{result.validation.width}×{result.validation.height}</dd></div>
      </dl>
      {result.validation.errors.length > 0 && (
        <ul className="error-list">
          {result.validation.errors.map((error) => <li key={error}>{error}</li>)}
        </ul>
      )}
    </div>
  )
}

