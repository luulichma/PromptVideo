import type { ProjectDocumentV1, SafeAreaV1, TextLayerV1 } from './schema'

/** The drawable rectangle, in project pixels, once the margins are removed. */
export type SafeAreaBox = {
  left: number
  top: number
  right: number
  bottom: number
}

export type SafeAreaSide = 'top' | 'bottom' | 'left' | 'right'

/**
 * Rounding slack, in pixels.
 *
 * Slot geometry is rounded to whole pixels while the safe area is a fraction of
 * the frame, so a layer placed exactly on the boundary can land a fraction of a
 * pixel outside it. Reporting that as an overflow would be noise, not advice.
 */
const TOLERANCE_PX = 1

type Frame = Pick<ProjectDocumentV1, 'width' | 'height'> & {
  safeArea: SafeAreaV1
}

export function getSafeAreaBox(frame: Frame): SafeAreaBox {
  const { width, height, safeArea } = frame
  return {
    left: safeArea.left * width,
    top: safeArea.top * height,
    right: width - safeArea.right * width,
    bottom: height - safeArea.bottom * height,
  }
}

/**
 * Which sides of the safe area a text layer's box crosses.
 *
 * Only text is checked. The safe area exists because players, phone notches and
 * platform crops eat the edges of a frame — losing part of a background image
 * there is the point of a full-bleed image, while losing part of a sentence is
 * a defect.
 */
export function findSafeAreaOverflow(
  layer: TextLayerV1,
  box: SafeAreaBox,
): SafeAreaSide[] {
  const sides: SafeAreaSide[] = []

  if (layer.x < box.left - TOLERANCE_PX) sides.push('left')
  if (layer.y < box.top - TOLERANCE_PX) sides.push('top')
  if (layer.x + layer.width > box.right + TOLERANCE_PX) sides.push('right')
  if (layer.y + layer.height > box.bottom + TOLERANCE_PX) sides.push('bottom')

  return sides
}

const SIDE_LABELS: Record<SafeAreaSide, string> = {
  top: 'trên',
  bottom: 'dưới',
  left: 'trái',
  right: 'phải',
}

export function describeSafeAreaSides(sides: readonly SafeAreaSide[]): string {
  return sides.map((side) => SIDE_LABELS[side]).join(', ')
}
