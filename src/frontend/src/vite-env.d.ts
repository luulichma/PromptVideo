/// <reference types="vite/client" />

interface NavigatorUAData {
  readonly platform: string
}

interface Navigator {
  readonly userAgentData?: NavigatorUAData
}

interface Window {
  showSaveFilePicker?: (options?: {
    suggestedName?: string
    types?: Array<{ description: string; accept: Record<string, string[]> }>
  }) => Promise<FileSystemFileHandle>
}

interface FileSystemFileHandle {
  createWritable(): Promise<FileSystemWritableFileStream>
}

interface FileSystemWritableFileStream extends WritableStream {
  write(data: unknown): Promise<void>
}
