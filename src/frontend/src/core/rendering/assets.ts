import type { RenderAssets } from './renderer'

/** The benchmark mark is vector art; this is the size it is rasterised at. */
const MARK_SIZE = 512

/**
 * Loads the benchmark project's single image as an ImageBitmap.
 *
 * It is rasterised here rather than handed over as an `<img>` because an SVG
 * with no intrinsic size cannot be turned into an ImageBitmap later, and the
 * export worker needs one to transfer. Producing the same type the editor's own
 * assets have also keeps the benchmark on the real code path.
 */
export async function loadBenchmarkAssets(): Promise<RenderAssets> {
  const image = new Image()
  image.src = '/benchmark-mark.svg'
  await image.decode()

  const canvas = document.createElement('canvas')
  canvas.width = image.naturalWidth || MARK_SIZE
  canvas.height = image.naturalHeight || MARK_SIZE
  const context = canvas.getContext('2d')
  if (!context) throw new Error('Không tạo được canvas cho ảnh benchmark')
  context.drawImage(image, 0, 0, canvas.width, canvas.height)

  return new Map([['benchmark-mark', await createImageBitmap(canvas)]])
}
