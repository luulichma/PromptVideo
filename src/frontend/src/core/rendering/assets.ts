import type { RenderAssets } from './renderer'

export async function loadBenchmarkAssets(): Promise<RenderAssets> {
  const image = new Image()
  image.src = '/benchmark-mark.svg'
  await image.decode()
  return new Map([['benchmark-mark', image]])
}
