import {
  BufferTarget,
  StreamTarget,
  type StreamTargetChunk,
  type Target,
} from 'mediabunny'

export type ExportPath = 'buffer' | 'opfs' | 'file'

export type PreparedOutputTarget = {
  path: ExportPath
  target: Target
  finish: () => Promise<Blob>
}

function createStreamTarget(
  writable: FileSystemWritableFileStream,
): StreamTarget {
  return new StreamTarget(
    writable as unknown as WritableStream<StreamTargetChunk>,
    {
      chunked: true,
      chunkSize: 2 ** 20,
    },
  )
}

function prepareBufferTarget(): PreparedOutputTarget {
  const target = new BufferTarget()
  return {
    path: 'buffer',
    target,
    finish: async () => {
      if (!target.buffer) throw new Error('Mediabunny không tạo buffer đầu ra')
      return new Blob([target.buffer], { type: 'video/mp4' })
    },
  }
}

async function prepareOpfsTarget(
  filename: string,
): Promise<PreparedOutputTarget> {
  const root = await navigator.storage.getDirectory()
  const handle = await root.getFileHandle(filename, { create: true })
  const writable = await handle.createWritable()
  return {
    path: 'opfs',
    target: createStreamTarget(writable),
    finish: async () => handle.getFile(),
  }
}

/**
 * Opens the save dialog. Must run on the main thread: the picker needs the user
 * activation of the click, which does not cross into a worker.
 */
export async function pickExportFile(
  filename: string,
): Promise<FileSystemFileHandle> {
  if (!window.showSaveFilePicker)
    throw new Error('File System Access API không khả dụng')
  return window.showSaveFilePicker({
    suggestedName: filename,
    types: [{ description: 'MP4 video', accept: { 'video/mp4': ['.mp4'] } }],
  })
}

async function prepareHandleTarget(
  handle: FileSystemFileHandle,
): Promise<PreparedOutputTarget> {
  const writable = await handle.createWritable()
  return {
    path: 'file',
    target: createStreamTarget(writable),
    finish: async () => handle.getFile(),
  }
}

/**
 * @param handle - A file handle the caller already obtained from
 * {@link pickExportFile}. The worker receives one this way because it cannot
 * open the picker itself.
 */
export async function prepareOutputTarget(
  path: ExportPath,
  filename: string,
  handle?: FileSystemFileHandle,
): Promise<PreparedOutputTarget> {
  if (path === 'file') {
    return prepareHandleTarget(handle ?? (await pickExportFile(filename)))
  }
  if (path === 'opfs') return prepareOpfsTarget(filename)
  return prepareBufferTarget()
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}
