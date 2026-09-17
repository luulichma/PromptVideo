import type {
  ImageLayerV1,
  ProjectDocumentV1,
  SceneV1,
  TextLayerV1,
} from '../project/schema'
import { getTimelineFrame, getTimelineFrameAt } from '../project/timeline'
import { BUNDLED_FONT_FAMILY, alignedX, layerFont, wrapText } from './text'

export type RenderImageSource =
  HTMLImageElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas
export type RenderAssets = ReadonlyMap<string, RenderImageSource>

/**
 * Preview draws to a canvas on screen, export draws to an OffscreenCanvas in a
 * worker. Both satisfy this type, which is what lets one renderer serve both.
 */
export type RenderContext =
  CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D

export type RenderOptions = {
  assets?: RenderAssets
  /** Draws the free-plan mark. Whether it is required is the server's decision. */
  watermark?: boolean
}

function renderTextLayer(context: RenderContext, layer: TextLayerV1): void {
  context.globalAlpha = layer.opacity
  context.fillStyle = layer.color
  context.font = layerFont(layer)
  context.textAlign = layer.align
  context.textBaseline = 'top'

  const lineHeight = layer.fontSize * layer.lineHeight
  const x = alignedX(layer)
  const lines = wrapText(context, layer.text, layer.width)

  lines.forEach((line, index) => {
    const y = layer.y + index * lineHeight
    // Stop at the bottom of the layer box rather than spilling over whatever is
    // underneath; the editor surfaces overflow separately.
    if (y + lineHeight > layer.y + layer.height + lineHeight) return
    context.fillText(line, x, y)
  })
}

function sourceSize(image: RenderImageSource): {
  width: number
  height: number
} {
  // Deliberately not `instanceof HTMLImageElement`: the renderer also runs in
  // the export worker, where that constructor does not exist and the check
  // throws. An <img> is the only source whose size lives on naturalWidth.
  const natural = (image as HTMLImageElement).naturalWidth
  return natural
    ? { width: natural, height: (image as HTMLImageElement).naturalHeight }
    : { width: image.width, height: image.height }
}

export function getImageDestination(
  layer: ImageLayerV1,
  image: RenderImageSource,
) {
  const source = sourceSize(image)
  if (layer.fit === 'fill') {
    return {
      x: layer.x + layer.offsetX,
      y: layer.y + layer.offsetY,
      width: layer.width * layer.scale,
      height: layer.height * layer.scale,
    }
  }

  const base =
    layer.fit === 'cover'
      ? Math.max(layer.width / source.width, layer.height / source.height)
      : Math.min(layer.width / source.width, layer.height / source.height)
  const scale = base * layer.scale
  const width = source.width * scale
  const height = source.height * scale

  return {
    x: layer.x + (layer.width - width) / 2 + layer.offsetX,
    y: layer.y + (layer.height - height) / 2 + layer.offsetY,
    width,
    height,
  }
}

function renderImageLayer(
  context: RenderContext,
  layer: ImageLayerV1,
  assets: RenderAssets,
): void {
  const image = assets.get(layer.assetId)
  if (!image) throw new Error(`Thiếu asset "${layer.assetId}"`)

  const destination = getImageDestination(layer, image)
  context.save()
  context.globalAlpha = layer.opacity
  // Cover and zoom both overflow the box by design, so clip to it.
  context.beginPath()
  context.rect(layer.x, layer.y, layer.width, layer.height)
  context.clip()
  context.drawImage(
    image,
    destination.x,
    destination.y,
    destination.width,
    destination.height,
  )
  context.restore()
}

function renderScene(
  context: RenderContext,
  scene: SceneV1,
  assets: RenderAssets,
  alpha: number,
): void {
  context.save()
  context.globalAlpha = alpha
  context.fillStyle = scene.background
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)

  for (const layer of scene.layers) {
    context.save()
    context.globalAlpha = alpha
    if (layer.type === 'text') renderTextLayer(context, layer)
    else renderImageLayer(context, layer, assets)
    context.restore()
  }
  context.restore()
}

function renderWatermark(context: RenderContext): void {
  context.save()
  context.font = `700 18px "${BUNDLED_FONT_FAMILY}"`
  context.textAlign = 'right'
  context.textBaseline = 'bottom'
  context.fillStyle = 'rgba(255,255,255,.82)'
  context.fillText(
    'PROMPTVIDEO',
    context.canvas.width - 36,
    context.canvas.height - 28,
  )
  context.restore()
}

function paint(
  context: RenderContext,
  frame: ReturnType<typeof getTimelineFrame>,
  options: RenderOptions,
): void {
  const assets = options.assets ?? new Map()
  context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  renderScene(context, frame.scene, assets, 1)
  if (frame.nextScene && frame.transitionProgress > 0) {
    renderScene(context, frame.nextScene, assets, frame.transitionProgress)
  }
  if (options.watermark) renderWatermark(context)
  context.globalAlpha = 1
}

/**
 * The single drawing entry point, shared by preview and export.
 *
 * Both callers pass a timestamp rather than a frame index so that a preview
 * scrubbing in seconds and an encoder stepping in frames cannot drift apart:
 * the timestamp is quantised to a frame here, once, for everyone.
 */
export function renderFrame(
  project: ProjectDocumentV1,
  timestampSeconds: number,
  surface: RenderContext,
  options: RenderOptions = {},
): void {
  paint(surface, getTimelineFrameAt(project, timestampSeconds), options)
}

/** Frame-indexed entry point for encoders that count frames. */
export function renderProjectFrame(
  context: RenderContext,
  project: ProjectDocumentV1,
  frameIndex: number,
  assets: RenderAssets,
  watermark = false,
): void {
  paint(context, getTimelineFrame(project, frameIndex), {
    assets,
    watermark,
  })
}

export async function hashCanvas(context: RenderContext): Promise<string> {
  const pixels = context.getImageData(
    0,
    0,
    context.canvas.width,
    context.canvas.height,
  )
  const digest = await crypto.subtle.digest('SHA-256', pixels.data)
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('')
}
