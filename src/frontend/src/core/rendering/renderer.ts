import type {
  Entrance,
  ImageLayerV1,
  ProjectDocumentV1,
  SceneV1,
  ShapeLayerV1,
  TextLayerV1,
} from '../project/schema'
import { getTimelineFrame, getTimelineFrameAt } from '../project/timeline'
import { BUNDLED_FONT_FAMILY, alignedX, alignedY, fitText } from './text'

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

/** How long text takes to arrive at the start of a scene. */
export const ENTRANCE_SECONDS = 0.6

/** Ease-out so the motion settles rather than stops. */
function easeOut(progress: number): number {
  return 1 - (1 - progress) ** 3
}

type Motion = { alpha: number; offsetY: number }

function entranceMotion(
  entrance: Entrance,
  sceneTimeSeconds: number,
  frameHeight: number,
): Motion {
  if (entrance === 'none' || sceneTimeSeconds >= ENTRANCE_SECONDS) {
    return { alpha: 1, offsetY: 0 }
  }
  const eased = easeOut(Math.max(0, sceneTimeSeconds) / ENTRANCE_SECONDS)
  return {
    alpha: eased,
    offsetY: entrance === 'rise' ? (1 - eased) * frameHeight * 0.04 : 0,
  }
}

function renderTextLayer(
  context: RenderContext,
  layer: TextLayerV1,
  motion: Motion,
): void {
  if (!layer.text.trim()) return
  context.globalAlpha *= layer.opacity * motion.alpha
  context.fillStyle = layer.color
  context.textAlign = layer.align
  context.textBaseline = 'top'

  // Sets the font to the fitted size as a side effect.
  const fitted = fitText(context, layer)
  const lineHeight = fitted.fontSize * layer.lineHeight
  const x = alignedX(layer)
  const top = alignedY(layer, fitted.blockHeight) + motion.offsetY

  // Text that will not fit even at its smallest size is clipped to its box
  // rather than spilling over the rest of the composition; the editor refuses
  // to export it and asks the user to shorten it.
  context.beginPath()
  context.rect(layer.x, layer.y, layer.width, layer.height + lineHeight * 0.25)
  context.clip()
  fitted.lines.forEach((line, index) => {
    context.fillText(line, x, top + index * lineHeight)
  })
}

function renderShapeLayer(context: RenderContext, layer: ShapeLayerV1): void {
  context.globalAlpha *= layer.opacity
  context.fillStyle = layer.color
  context.beginPath()
  if (layer.radius > 0 && 'roundRect' in context) {
    context.roundRect(layer.x, layer.y, layer.width, layer.height, layer.radius)
  } else {
    context.rect(layer.x, layer.y, layer.width, layer.height)
  }
  context.fill()
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
  sceneTimeSeconds: number,
): void {
  context.save()
  context.globalAlpha = alpha
  context.fillStyle = scene.background
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)

  const motion = entranceMotion(
    scene.entrance,
    sceneTimeSeconds,
    context.canvas.height,
  )

  for (const layer of scene.layers) {
    context.save()
    context.globalAlpha = alpha
    if (layer.type === 'text') renderTextLayer(context, layer, motion)
    else if (layer.type === 'shape') renderShapeLayer(context, layer)
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
  renderScene(context, frame.scene, assets, 1, frame.sceneTimeSeconds)
  if (frame.nextScene && frame.transitionProgress > 0) {
    // The incoming scene's text waits for the cut, then makes its entrance.
    renderScene(context, frame.nextScene, assets, frame.transitionProgress, 0)
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
