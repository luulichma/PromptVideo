import type { AssetRefV1 } from '../project/schema'
import { putAssetBlob } from '../storage/assetStore'

export const MAX_IMAGE_BYTES = 12 * 1024 * 1024
export const MAX_IMAGE_EDGE = 8192

const ACCEPTED_TYPES = ['image/png', 'image/jpeg', 'image/webp'] as const
export type AcceptedImageType = (typeof ACCEPTED_TYPES)[number]

export type ImageImportError = {
  code: 'unsupported-type' | 'too-large' | 'decode-failed' | 'too-many-pixels'
  message: string
}

export type ImageImportResult =
  { ok: true; asset: AssetRefV1 } | { ok: false; error: ImageImportError }

function isAccepted(type: string): type is AcceptedImageType {
  return (ACCEPTED_TYPES as readonly string[]).includes(type)
}

export async function sha256Hex(data: ArrayBuffer): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('')
}

/**
 * Turns a user-chosen file into a stored asset.
 *
 * Every failure is returned rather than thrown: a bad file is an ordinary thing
 * for a user to pick, and the editor must be able to say why without the caller
 * wrapping each import in a try/catch and without the project being touched.
 * Nothing is written to the project until the bytes have decoded successfully.
 */
export async function importImageFile(file: File): Promise<ImageImportResult> {
  if (!isAccepted(file.type)) {
    return {
      ok: false,
      error: {
        code: 'unsupported-type',
        message: `Chỉ hỗ trợ PNG, JPEG và WebP. Tệp "${file.name}" có định dạng ${file.type || 'không xác định'}.`,
      },
    }
  }

  if (file.size > MAX_IMAGE_BYTES) {
    const megabytes = (file.size / 1024 / 1024).toFixed(1)
    return {
      ok: false,
      error: {
        code: 'too-large',
        message: `Ảnh "${file.name}" nặng ${megabytes} MB, vượt giới hạn ${MAX_IMAGE_BYTES / 1024 / 1024} MB.`,
      },
    }
  }

  let bitmap: ImageBitmap
  try {
    // 'from-image' applies the EXIF orientation tag, so a photo shot in portrait
    // is stored the way the camera intended instead of lying on its side.
    bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' })
  } catch {
    return {
      ok: false,
      error: {
        code: 'decode-failed',
        message: `Không đọc được ảnh "${file.name}". Tệp có thể đã hỏng.`,
      },
    }
  }

  try {
    if (bitmap.width > MAX_IMAGE_EDGE || bitmap.height > MAX_IMAGE_EDGE) {
      return {
        ok: false,
        error: {
          code: 'too-many-pixels',
          message: `Ảnh "${file.name}" có cạnh ${Math.max(bitmap.width, bitmap.height)} px, vượt giới hạn ${MAX_IMAGE_EDGE} px.`,
        },
      }
    }

    // Re-encode from the oriented bitmap so the stored bytes need no EXIF to be
    // displayed correctly, and so the checksum covers what is actually drawn.
    const oriented = await encodeOriented(bitmap, file.type)
    const buffer = await oriented.arrayBuffer()

    const asset: AssetRefV1 = {
      id: crypto.randomUUID(),
      fileName: file.name,
      mimeType: file.type,
      byteLength: buffer.byteLength,
      sha256: await sha256Hex(buffer),
      width: bitmap.width,
      height: bitmap.height,
    }

    await putAssetBlob(asset.id, oriented)
    return { ok: true, asset }
  } finally {
    bitmap.close()
  }
}

async function encodeOriented(
  bitmap: ImageBitmap,
  mimeType: AcceptedImageType,
): Promise<Blob> {
  const canvas = new OffscreenCanvas(bitmap.width, bitmap.height)
  const context = canvas.getContext('2d')
  if (!context) throw new Error('Không tạo được canvas để chuẩn hoá ảnh')
  context.drawImage(bitmap, 0, 0)
  // PNG stays lossless; photographic formats re-encode at high quality.
  return canvas.convertToBlob({ type: mimeType, quality: 0.92 })
}
