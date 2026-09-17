import { z } from 'zod'
import { sha256Hex } from '../images/importImage'
import {
  assetRefV1Schema,
  parseProjectDocument,
  projectDocumentV1Schema,
  type ProjectDocumentV1,
} from '../project/schema'
import { getAssetBlob, putAssetBlob } from '../storage/assetStore'

export const PACKAGE_FORMAT = 'promptvideo.project'
export const PACKAGE_VERSION = 1
export const PACKAGE_EXTENSION = '.promptvideo.json'

const packagedAssetSchema = z.object({
  ref: assetRefV1Schema,
  /** Standard base64 of the asset bytes. */
  base64: z.string().min(1),
})

const packageSchema = z.object({
  format: z.literal(PACKAGE_FORMAT, {
    error: 'Tệp không phải gói project PromptVideo',
  }),
  packageVersion: z.number().int().positive(),
  exportedAtMs: z.number().int().nonnegative(),
  document: projectDocumentV1Schema,
  assets: z.array(packagedAssetSchema),
})

export type ProjectPackage = z.infer<typeof packageSchema>

export type PackageImportError = {
  code:
    | 'not-a-package'
    | 'unsupported-version'
    | 'checksum-mismatch'
    | 'missing-asset'
    | 'invalid-document'
  message: string
}

export type PackageImportResult =
  | { ok: true; document: ProjectDocumentV1 }
  | { ok: false; error: PackageImportError }

function toBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  // Chunked to stay clear of the argument-count limit on large images.
  const chunkSize = 0x8000
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize))
  }
  return btoa(binary)
}

function fromBase64(base64: string): ArrayBuffer {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index)
  }
  return bytes.buffer
}

/**
 * Builds a single self-contained file carrying the document and every image it
 * references, so a project can move between machines without a server.
 */
export async function exportProjectPackage(
  document: ProjectDocumentV1,
): Promise<Blob> {
  const assets = []
  for (const ref of document.assets) {
    const blob = await getAssetBlob(ref.id)
    if (!blob) {
      throw new Error(`Thiếu dữ liệu ảnh cho "${ref.fileName}"`)
    }
    assets.push({ ref, base64: toBase64(await blob.arrayBuffer()) })
  }

  const packaged: ProjectPackage = {
    format: PACKAGE_FORMAT,
    packageVersion: PACKAGE_VERSION,
    exportedAtMs: Date.now(),
    document,
    assets,
  }

  return new Blob([JSON.stringify(packaged)], { type: 'application/json' })
}

/**
 * Migrates a package body to the current version.
 *
 * There is only one version today, so this is a pass-through — but the hook
 * exists and is tested, because the alternative is discovering on the day of a
 * format change that every previously exported file is unreadable.
 */
function migrate(raw: unknown): unknown {
  if (typeof raw !== 'object' || raw === null) return raw
  const body = raw as Record<string, unknown>
  if (body.packageVersion === PACKAGE_VERSION) return body
  return body
}

/**
 * Reads a package, verifying each asset's checksum before writing anything.
 *
 * A file that has been edited or truncated is refused rather than partially
 * imported: importing half a project and silently dropping a corrupted image
 * would be worse than refusing the file outright.
 */
export async function importProjectPackage(
  text: string,
): Promise<PackageImportResult> {
  let raw: unknown
  try {
    raw = JSON.parse(text)
  } catch {
    return {
      ok: false,
      error: { code: 'not-a-package', message: 'Tệp không phải JSON hợp lệ.' },
    }
  }

  const candidate = raw as Record<string, unknown> | null
  if (
    typeof candidate?.packageVersion === 'number' &&
    candidate.packageVersion > PACKAGE_VERSION
  ) {
    return {
      ok: false,
      error: {
        code: 'unsupported-version',
        message: `Gói project version ${candidate.packageVersion} mới hơn phiên bản ứng dụng hỗ trợ (${PACKAGE_VERSION}). Hãy cập nhật ứng dụng.`,
      },
    }
  }

  // The format marker decides which failure this is. Without it the file is
  // simply not ours, and blaming its project contents would be misleading;
  // only once it claims to be a package is a bad document worth reporting.
  if (candidate?.format !== PACKAGE_FORMAT) {
    return {
      ok: false,
      error: {
        code: 'not-a-package',
        message: 'Tệp không phải gói project PromptVideo.',
      },
    }
  }

  const parsed = packageSchema.safeParse(migrate(raw))
  if (!parsed.success) {
    const isDocumentProblem = parsed.error.issues.some((issue) =>
      issue.path.includes('document'),
    )
    return {
      ok: false,
      error: {
        code: isDocumentProblem ? 'invalid-document' : 'not-a-package',
        message: isDocumentProblem
          ? 'Nội dung project trong gói không hợp lệ.'
          : 'Tệp không phải gói project PromptVideo.',
      },
    }
  }

  const body = parsed.data
  const packagedById = new Map(
    body.assets.map((asset) => [asset.ref.id, asset]),
  )

  // Verify everything before storing anything.
  const verified: { id: string; blob: Blob; mimeType: string }[] = []
  for (const ref of body.document.assets) {
    const packaged = packagedById.get(ref.id)
    if (!packaged) {
      return {
        ok: false,
        error: {
          code: 'missing-asset',
          message: `Gói thiếu dữ liệu ảnh cho "${ref.fileName}".`,
        },
      }
    }

    const buffer = fromBase64(packaged.base64)
    const digest = await sha256Hex(buffer)
    if (digest !== ref.sha256) {
      return {
        ok: false,
        error: {
          code: 'checksum-mismatch',
          message: `Ảnh "${ref.fileName}" không khớp checksum; gói có thể đã bị sửa đổi.`,
        },
      }
    }

    verified.push({
      id: ref.id,
      blob: new Blob([buffer], { type: ref.mimeType }),
      mimeType: ref.mimeType,
    })
  }

  for (const asset of verified) {
    await putAssetBlob(asset.id, asset.blob)
  }

  return { ok: true, document: parseProjectDocument(body.document) }
}

export function packageFileName(document: ProjectDocumentV1): string {
  const safeName = document.name
    .normalize('NFC')
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
  return `${safeName || 'project'}${PACKAGE_EXTENSION}`
}
