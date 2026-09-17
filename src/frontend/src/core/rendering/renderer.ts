import type {
  ImageLayerV1,
  ProjectDocumentV1,
  SceneV1,
  TextLayerV1,
} from '../project/schema'
import { getTimelineFrame } from '../project/timeline'

export type RenderImageSource =
  HTMLImageElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas
export type RenderAssets = ReadonlyMap<string, RenderImageSource>

const BUNDLED_FONT_FAMILY = 'Noto Sans Variable'

function renderTextLayer(
  context: CanvasRenderingContext2D,
  layer: TextLayerV1,
): void {
  context.globalAlpha = layer.opacity
  context.fillStyle = layer.color
  context.font = `${layer.fontWeight} ${layer.fontSize}px "${BUNDLED_FONT_FAMILY}"`
  context.textAlign = layer.align
  context.textBaseline = 'top'
  const x =
    layer.align === 'center'
      ? layer.x + layer.width / 2
      : layer.align === 'right'
        ? layer.x + layer.width
        : layer.x
  context.fillText(layer.text, x, layer.y, layer.width)
}

function getImageDestination(layer: ImageLayerV1, image: RenderImageSource) {
  const sourceWidth =
    image instanceof HTMLImageElement ? image.naturalWidth : image.width
  const sourceHeight =
    image instanceof HTMLImageElement ? image.naturalHeight : image.height
  if (layer.fit === 'fill')
    return { x: layer.x, y: layer.y, width: layer.width, height: layer.height }

  const scale =
    layer.fit === 'cover'
      ? Math.max(layer.width / sourceWidth, layer.height / sourceHeight)
      : Math.min(layer.width / sourceWidth, layer.height / sourceHeight)
  const width = sourceWidth * scale
  const height = sourceHeight * scale
  return {
    x: layer.x + (layer.width - width) / 2,
    y: layer.y + (layer.height - height) / 2,
    width,
    height,
  }
}

function renderImageLayer(
  context: CanvasRenderingContext2D,
  layer: ImageLayerV1,
  assets: RenderAssets,
): void {
  const image = assets.get(layer.assetId)
  if (!image) throw new Error(`Thiếu asset "${layer.assetId}"`)
  const destination = getImageDestination(layer, image)
  context.globalAlpha = layer.opacity
  context.drawImage(
    image,
    destination.x,
    destination.y,
    destination.width,
    destination.height,
  )
}

function renderScene(
  context: CanvasRenderingContext2D,
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

function renderWatermark(context: CanvasRenderingContext2D): void {
  const label = 'PROMPTVIDEO · FEASIBILITY SPIKE'
  context.save()
  context.font = `700 18px "${BUNDLED_FONT_FAMILY}"`
  context.textAlign = 'right'
  context.textBaseline = 'bottom'
  context.fillStyle = 'rgba(255,255,255,.82)'
  context.fillText(label, context.canvas.width - 36, context.canvas.height - 28)
  context.restore()
}

export function renderProjectFrame(
  context: CanvasRenderingContext2D,
  project: ProjectDocumentV1,
  frameIndex: number,
  assets: RenderAssets,
  watermark = false,
): void {
  const frame = getTimelineFrame(project, frameIndex)
  context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  renderScene(context, frame.scene, assets, 1)
  if (frame.nextScene && frame.transitionProgress > 0) {
    renderScene(context, frame.nextScene, assets, frame.transitionProgress)
  }
  if (watermark) renderWatermark(context)
  context.globalAlpha = 1
}

export async function hashCanvas(
  context: CanvasRenderingContext2D,
): Promise<string> {
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
