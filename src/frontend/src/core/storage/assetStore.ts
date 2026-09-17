import { database } from './database'

const ASSET_DIRECTORY = 'assets'

/**
 * Image bytes live in the Origin Private File System, which is built for large
 * binary data and keeps blobs out of the IndexedDB records the editor reads on
 * every keystroke. Where OPFS is missing — Tier 2 browsers, or a hardened
 * profile — the same API falls back to IndexedDB so the editor still works.
 */
function supportsOpfs(): boolean {
  return (
    typeof navigator !== 'undefined' &&
    'storage' in navigator &&
    typeof navigator.storage?.getDirectory === 'function'
  )
}

async function assetDirectory(): Promise<FileSystemDirectoryHandle> {
  const root = await navigator.storage.getDirectory()
  return root.getDirectoryHandle(ASSET_DIRECTORY, { create: true })
}

export async function putAssetBlob(id: string, blob: Blob): Promise<void> {
  if (!supportsOpfs()) {
    await database.assetBlobs.put({ id, blob })
    return
  }

  const directory = await assetDirectory()
  const handle = await directory.getFileHandle(id, { create: true })
  const writable = await handle.createWritable()
  try {
    await writable.write(blob)
  } finally {
    await writable.close()
  }
}

export async function getAssetBlob(id: string): Promise<Blob | null> {
  if (!supportsOpfs()) {
    return (await database.assetBlobs.get(id))?.blob ?? null
  }

  try {
    const directory = await assetDirectory()
    const handle = await directory.getFileHandle(id)
    return await handle.getFile()
  } catch {
    // A missing handle is a normal outcome, not an error worth surfacing.
    return null
  }
}

export async function deleteAssetBlob(id: string): Promise<void> {
  if (!supportsOpfs()) {
    await database.assetBlobs.delete(id)
    return
  }

  try {
    const directory = await assetDirectory()
    await directory.removeEntry(id)
  } catch {
    // Already gone.
  }
}

/**
 * Removes blobs no project references any more. Called after delete and on
 * startup so abandoned imports cannot accumulate silently.
 */
export async function collectGarbage(
  liveAssetIds: ReadonlySet<string>,
): Promise<number> {
  let removed = 0

  if (!supportsOpfs()) {
    const all = await database.assetBlobs.toArray()
    for (const record of all) {
      if (!liveAssetIds.has(record.id)) {
        await database.assetBlobs.delete(record.id)
        removed += 1
      }
    }
    return removed
  }

  const directory = await assetDirectory()
  const names: string[] = []
  // keys() is part of the OPFS spec but missing from the bundled DOM typings.
  const iterable = directory as unknown as {
    keys(): AsyncIterableIterator<string>
  }
  for await (const name of iterable.keys()) names.push(name)
  for (const name of names) {
    if (!liveAssetIds.has(name)) {
      await directory.removeEntry(name).catch(() => undefined)
      removed += 1
    }
  }
  return removed
}

export const assetStorageKind = (): 'opfs' | 'indexeddb' =>
  supportsOpfs() ? 'opfs' : 'indexeddb'
