import Dexie, { type EntityTable } from 'dexie'
import type { ProjectDocumentV1 } from '../project/schema'

export type ProjectRecord = {
  id: string
  name: string
  templateId: string
  updatedAtMs: number
  /** The full document. Small enough to keep whole; assets live in OPFS. */
  document: ProjectDocumentV1
}

/**
 * An unsaved autosave snapshot.
 *
 * Autosave writes here first and only promotes to {@link ProjectRecord} once the
 * write settles, so a crash mid-write leaves a recoverable draft next to the
 * last known-good project rather than a half-written project.
 */
export type DraftRecord = {
  projectId: string
  savedAtMs: number
  document: ProjectDocumentV1
}

export type AssetBlobRecord = {
  id: string
  blob: Blob
}

class PromptVideoDatabase extends Dexie {
  projects!: EntityTable<ProjectRecord, 'id'>
  drafts!: EntityTable<DraftRecord, 'projectId'>
  /** Only used where OPFS is unavailable; see opfs.ts. */
  assetBlobs!: EntityTable<AssetBlobRecord, 'id'>

  constructor() {
    super('promptvideo')
    this.version(1).stores({
      projects: 'id, updatedAtMs, name',
      drafts: 'projectId, savedAtMs',
      assetBlobs: 'id',
    })
  }
}

export const database = new PromptVideoDatabase()
