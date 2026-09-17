import { useCallback, useEffect, useRef, useState } from 'react'
import { BenchmarkResultView } from './components/BenchmarkResultView'
import { CapabilityGrid } from './components/CapabilityGrid'
import { downloadJson, runCapabilityProbe, type CapabilityReport } from './core/capabilities/probe'
import type { ExportBenchmarkResult, ExportResolution } from './core/export/exportMp4'
import { downloadBlob, type ExportPath } from './core/export/outputTarget'
import { benchmarkProject } from './core/project/benchmarkProject'
import { getTimelineFrame, getTotalFrames } from './core/project/timeline'
import { loadBenchmarkAssets } from './core/rendering/assets'
import { hashCanvas, renderProjectFrame, type RenderAssets } from './core/rendering/renderer'

const TOTAL_FRAMES = getTotalFrames(benchmarkProject)

function makeFilename(resolution: ExportResolution): string {
  const timestamp = new Date().toISOString().replaceAll(':', '-').replace(/\..+/, '')
  return `promptvideo-spike-${resolution}-${timestamp}.mp4`
}

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const assetsRef = useRef<RenderAssets>(new Map())
  const abortRef = useRef<AbortController | null>(null)
  const [capabilities, setCapabilities] = useState<CapabilityReport | null>(null)
  const [frameIndex, setFrameIndex] = useState(0)
  const [assetsReady, setAssetsReady] = useState(false)
  const [snapshotHashes, setSnapshotHashes] = useState<string[]>([])
  const [resolution, setResolution] = useState<ExportResolution>('720p')
  const [outputPath, setOutputPath] = useState<ExportPath>('buffer')
  const [watermark, setWatermark] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isExporting, setIsExporting] = useState(false)
  const [exportError, setExportError] = useState<string | null>(null)
  const [latestBlob, setLatestBlob] = useState<Blob | null>(null)
  const [results, setResults] = useState<ExportBenchmarkResult[]>([])

  const drawFrame = useCallback((nextFrame: number) => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { willReadFrequently: true })
    if (!context || !assetsReady) return
    renderProjectFrame(context, benchmarkProject, nextFrame, assetsRef.current, watermark)
  }, [assetsReady, watermark])

  useEffect(() => {
    void Promise.all([runCapabilityProbe(), document.fonts.load('800 62px "Noto Sans Variable"'), loadBenchmarkAssets()])
      .then(([report, , assets]) => {
        setCapabilities(report)
        assetsRef.current = assets
        setAssetsReady(true)
      })
  }, [])

  useEffect(() => drawFrame(frameIndex), [drawFrame, frameIndex])

  async function testSnapshotStability() {
    const context = canvasRef.current?.getContext('2d', { willReadFrequently: true })
    if (!context) return
    const hashes: string[] = []
    for (let run = 0; run < 3; run += 1) {
      renderProjectFrame(context, benchmarkProject, 720, assetsRef.current, true)
      hashes.push(await hashCanvas(context))
    }
    setSnapshotHashes(hashes)
    drawFrame(frameIndex)
  }

  async function startExport() {
    if (!capabilities || !canvasRef.current || isExporting) return
    const controller = new AbortController()
    abortRef.current = controller
    setExportError(null)
    setLatestBlob(null)
    setProgress(0)
    setIsExporting(true)

    try {
      const { exportProjectMp4 } = await import('./core/export/exportMp4')
      const filename = makeFilename(resolution)
      const { blob, result } = await exportProjectMp4(
        canvasRef.current,
        benchmarkProject,
        assetsRef.current,
        capabilities.browser,
        {
          path: outputPath,
          resolution,
          watermark,
          filename,
          signal: controller.signal,
          onProgress: (completed, total) => setProgress(completed / total),
        },
      )
      setLatestBlob(blob)
      setResults((current) => [result, ...current])
    } catch (error) {
      setExportError(error instanceof Error ? error.message : String(error))
    } finally {
      abortRef.current = null
      setIsExporting(false)
      drawFrame(frameIndex)
    }
  }

  function saveReport() {
    downloadJson(
      {
        plan: '01-feasibility-spike',
        project: benchmarkProject,
        capabilities,
        snapshot: {
          hashes: snapshotHashes,
          stable: snapshotHashes.length === 3 && new Set(snapshotHashes).size === 1,
        },
        exports: results,
      },
      'promptvideo-feasibility-report.json',
    )
  }

  const timeline = getTimelineFrame(benchmarkProject, frameIndex)
  const snapshotsStable = snapshotHashes.length === 3 && new Set(snapshotHashes).size === 1

  return (
    <main>
      <header className="masthead">
        <div>
          <p className="eyebrow">PromptVideo / Plan 01 / Client-side lab</p>
          <h1>60 giây để quyết định<br />một kiến trúc.</h1>
        </div>
        <div className="run-stamp" aria-label="Thông số benchmark">
          <span>5 cảnh</span><span>1.800 frames</span><span>30 fps</span><span>0 byte upload</span>
        </div>
      </header>

      <section className="lab-section" aria-labelledby="capability-heading">
        <div className="section-heading">
          <div><span className="section-number">A</span><h2 id="capability-heading">Capability probe</h2></div>
          <div className="button-row">
            <button className="button-secondary" onClick={() => void runCapabilityProbe().then(setCapabilities)}>Chạy lại probe</button>
            <button onClick={saveReport}>Tải báo cáo JSON</button>
          </div>
        </div>
        <CapabilityGrid report={capabilities} />
        {capabilities && (
          <p className="environment-line">
            {capabilities.browser.platform} · {capabilities.browser.hardwareConcurrency ?? '?'} luồng CPU ·
            {capabilities.browser.deviceMemoryGiB ? ` ${capabilities.browser.deviceMemoryGiB} GiB RAM ước lượng ·` : ''}
            {' '}{capabilities.secureContext ? 'secure context' : 'không phải secure context'}
          </p>
        )}
      </section>

      <section className="lab-section studio" aria-labelledby="renderer-heading">
        <div className="section-heading">
          <div><span className="section-number">B</span><h2 id="renderer-heading">Deterministic renderer</h2></div>
          <button className="button-secondary" disabled={!assetsReady} onClick={() => void testSnapshotStability()}>
            Render snapshot × 3
          </button>
        </div>
        <div className="canvas-shell">
          <canvas ref={canvasRef} width="1280" height="720" aria-label="Khung hình benchmark" />
          <div className="frame-readout">F{String(frameIndex).padStart(4, '0')} · {timeline.timestampSeconds.toFixed(3)}s</div>
        </div>
        <div className="timeline-control">
          <input
            aria-label="Frame hiện tại"
            type="range"
            min="0"
            max={TOTAL_FRAMES - 1}
            value={frameIndex}
            onChange={(event) => setFrameIndex(Number(event.target.value))}
          />
          <div className="scene-track" aria-hidden="true">
            {benchmarkProject.scenes.map((scene) => <span key={scene.id}>{scene.name}</span>)}
          </div>
        </div>
        {snapshotHashes.length > 0 && (
          <div className={`snapshot-result ${snapshotsStable ? 'is-pass' : 'is-fail'}`}>
            <strong>{snapshotsStable ? 'Ổn định qua 3 lần render' : 'Snapshot không ổn định'}</strong>
            <code>{snapshotHashes[0]}</code>
          </div>
        )}
      </section>

      <section className="lab-section" aria-labelledby="export-heading">
        <div className="section-heading">
          <div><span className="section-number">C</span><h2 id="export-heading">MP4 export bench</h2></div>
          <span className="target-note">Ngưỡng Go: 720p &lt; 5 phút · peak &lt; 1.5 GB</span>
        </div>
        <div className="export-layout">
          <div className="controls-panel">
            <label>Độ phân giải
              <select value={resolution} disabled={isExporting} onChange={(event) => setResolution(event.target.value as ExportResolution)}>
                <option value="720p">1280 × 720</option>
                <option value="1080p" disabled={capabilities?.capabilities.h2641080p.state !== 'supported'}>
                  1920 × 1080
                </option>
              </select>
            </label>
            <label>Đường ghi
              <select value={outputPath} disabled={isExporting} onChange={(event) => setOutputPath(event.target.value as ExportPath)}>
                <option value="buffer">Buffer → Blob</option>
                <option value="opfs" disabled={capabilities?.capabilities.opfs.state !== 'supported'}>Stream → OPFS</option>
                <option value="file" disabled={capabilities?.capabilities.fileSystemAccess.state !== 'supported'}>Stream → File handle</option>
              </select>
            </label>
            <label className="check-control">
              <input type="checkbox" checked={watermark} disabled={isExporting} onChange={(event) => setWatermark(event.target.checked)} />
              Watermark
            </label>
            <button className="button-primary" disabled={!capabilities || !assetsReady || isExporting} onClick={() => void startExport()}>
              {isExporting ? `Đang xuất ${Math.round(progress * 100)}%` : 'Xuất benchmark 60 giây'}
            </button>
            {isExporting && <button className="button-danger" onClick={() => abortRef.current?.abort()}>Hủy export</button>}
            <div className="progress-track"><span style={{ width: `${progress * 100}%` }} /></div>
            {exportError && <p className="inline-error" role="alert">{exportError}</p>}
          </div>
          <div>
            {results[0]
              ? <BenchmarkResultView result={results[0]} />
              : <p className="empty-state result-empty">Chưa có phép đo. Export chạy theo frameIndex/fps, không phụ thuộc đồng hồ thực.</p>}
            {latestBlob && outputPath !== 'file' && (
              <button className="download-video" onClick={() => downloadBlob(latestBlob, makeFilename(resolution))}>Tải MP4 vừa tạo</button>
            )}
          </div>
        </div>
      </section>

      <footer>
        <span>Không request media · Không telemetry · Không server render</span>
        <span>PromptVideo feasibility rig / v1</span>
      </footer>
    </main>
  )
}

export default App
