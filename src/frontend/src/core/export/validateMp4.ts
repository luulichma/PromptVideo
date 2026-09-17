import { ALL_FORMATS, BlobSource, Input, VideoSampleSink } from 'mediabunny'

export type Mp4Validation = {
  durationSeconds: number
  durationDeltaFrames: number
  frameCount: number
  width: number
  height: number
  codec: string | null
  firstFrameBlack: boolean
  lastFrameBlack: boolean
  isValid: boolean
  errors: string[]
}

function isBlackFrame(
  sample: Awaited<ReturnType<VideoSampleSink['getSample']>>,
): boolean {
  if (!sample) return true
  const canvas = new OffscreenCanvas(64, 36)
  const context = canvas.getContext('2d', { willReadFrequently: true })
  if (!context) return true
  sample.draw(context, 0, 0, canvas.width, canvas.height)
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data
  let luminance = 0
  for (let index = 0; index < pixels.length; index += 4) {
    luminance +=
      pixels[index] * 0.2126 +
      pixels[index + 1] * 0.7152 +
      pixels[index + 2] * 0.0722
  }
  return luminance / (pixels.length / 4) < 4
}

export async function validateMp4(
  blob: Blob,
  expectedDuration: number,
  fps: number,
): Promise<Mp4Validation> {
  const input = new Input({
    source: new BlobSource(blob),
    formats: ALL_FORMATS,
  })
  const errors: string[] = []

  try {
    const track = await input.getPrimaryVideoTrack()
    if (!track) throw new Error('MP4 không có video track')
    const durationSeconds = await input.computeDuration()
    const stats = await track.computePacketStats()
    const sink = new VideoSampleSink(track)
    const firstSample = await sink.getSample(0)
    const lastSample = await sink.getSample(
      Math.max(0, durationSeconds - 1 / fps),
    )
    const firstFrameBlack = isBlackFrame(firstSample)
    const lastFrameBlack = isBlackFrame(lastSample)
    firstSample?.close()
    lastSample?.close()

    const durationDeltaFrames =
      Math.abs(durationSeconds - expectedDuration) * fps
    if (durationDeltaFrames > 1.01)
      errors.push(`Duration lệch ${durationDeltaFrames.toFixed(2)} frame`)
    if (firstFrameBlack) errors.push('Frame đầu màu đen')
    if (lastFrameBlack) errors.push('Frame cuối màu đen')

    return {
      durationSeconds,
      durationDeltaFrames,
      frameCount: stats.packetCount,
      width: await track.getDisplayWidth(),
      height: await track.getDisplayHeight(),
      codec: await track.getCodec(),
      firstFrameBlack,
      lastFrameBlack,
      isValid: errors.length === 0,
      errors,
    }
  } finally {
    input.dispose()
  }
}
