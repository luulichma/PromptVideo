import type { ProjectDocumentV1 } from '../project/schema'
import { parseProjectDocument } from '../project/schema'
import { collectGarbage, deleteAssetBlob } from './assetStore'
import { database, type DraftRecord, type ProjectRecord } from './database'

export type ProjectSummary = Pick<
  ProjectRecord,
  'id' | 'name' | 'templateId' | 'updatedAtMs'
>

export async function listProjects(): Promise<ProjectSummary[]> {
  const records = await database.projects
    .orderBy('updatedAtMs')
    .reverse()
    .toArray()
  return records.map(({ id, name, templateId, updatedAtMs }) => ({
    id,
    name,
    templateId,
    updatedAtMs,
  }))
}

export async function loadProject(
  id: string,
): Promise<ProjectDocumentV1 | null> {
  const record = await database.projects.get(id)
  if (!record) return null
  // Parse on the way out: a record written by an older build must still be
  // validated before the editor trusts it.
  return parseProjectDocument(record.document)
}

export async function saveProject(document: ProjectDocumentV1): Promise<void> {
  await database.projects.put({
    id: document.id,
    name: document.name,
    templateId: document.templateId,
    updatedAtMs: Date.now(),
    document,
  })
  // The draft has been promoted; nothing left to recover.
  await database.drafts.delete(document.id)
}

export async function deleteProject(id: string): Promise<void> {
  const record = await database.projects.get(id)
  await database.projects.delete(id)
  await database.drafts.delete(id)

  for (const asset of record?.document.assets ?? []) {
    await deleteAssetBlob(asset.id)
  }
}

export async function saveDraft(document: ProjectDocumentV1): Promise<void> {
  await database.drafts.put({
    projectId: document.id,
    savedAtMs: Date.now(),
    document,
  })
}

/**
 * Returns a draft newer than the saved project, which is what a crash or a
 * closed tab leaves behind. Returns null when the saved copy is already current.
 */
export async function findRecoverableDraft(
  projectId: string,
): Promise<DraftRecord | null> {
  const [draft, record] = await Promise.all([
    database.drafts.get(projectId),
    database.projects.get(projectId),
  ])
  if (!draft) return null
  if (record && record.updatedAtMs >= draft.savedAtMs) return null
  return draft
}

export async function discardDraft(projectId: string): Promise<void> {
  await database.drafts.delete(projectId)
}

/** Deletes asset blobs no surviving project references. */
export async function pruneOrphanAssets(): Promise<number> {
  const records = await database.projects.toArray()
  const live = new Set(
    records.flatMap((record) =>
      record.document.assets.map((asset) => asset.id),
    ),
  )
  return collectGarbage(live)
}
