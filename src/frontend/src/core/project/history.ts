import type { ProjectDocumentV1 } from './schema'
import type { ProjectCommand } from './commands'

export type HistoryEntry = {
  label: string
  document: ProjectDocumentV1
}

export type ProjectHistory = {
  past: HistoryEntry[]
  present: ProjectDocumentV1
  future: HistoryEntry[]
}

/** Deep enough for a long editing session, bounded so memory cannot creep. */
export const HISTORY_LIMIT = 100

export function createHistory(document: ProjectDocumentV1): ProjectHistory {
  return { past: [], present: document, future: [] }
}

/**
 * Structural comparison of two project documents.
 *
 * Reference equality is not enough: commands rebuild the document, so
 * re-applying the template already in use produces an equal but distinct
 * object. Documents are plain JSON, so a plain recursive walk is exact here.
 */
function isSameDocument(left: unknown, right: unknown): boolean {
  if (left === right) return true
  if (typeof left !== typeof right) return false
  if (left === null || right === null) return false
  if (typeof left !== 'object') return false

  if (Array.isArray(left) || Array.isArray(right)) {
    if (!Array.isArray(left) || !Array.isArray(right)) return false
    return (
      left.length === right.length &&
      left.every((item, index) => isSameDocument(item, right[index]))
    )
  }

  const leftKeys = Object.keys(left as object)
  const rightKeys = Object.keys(right as object)
  if (leftKeys.length !== rightKeys.length) return false

  return leftKeys.every(
    (key) =>
      Object.hasOwn(right as object, key) &&
      isSameDocument(
        (left as Record<string, unknown>)[key],
        (right as Record<string, unknown>)[key],
      ),
  )
}

/**
 * Runs a command and records the previous document so it can be restored.
 *
 * A command that changes nothing is not recorded: otherwise a no-op edit — say
 * re-selecting the template already in use — would silently consume an undo
 * step and make Ctrl+Z appear broken.
 */
export function runCommand(
  history: ProjectHistory,
  command: ProjectCommand,
): ProjectHistory {
  const next = command.apply(history.present)
  if (isSameDocument(next, history.present)) return history

  const past = [
    ...history.past,
    { label: command.label, document: history.present },
  ]
  return {
    past: past.slice(-HISTORY_LIMIT),
    present: next,
    // Any new edit abandons the redo branch, as every editor does.
    future: [],
  }
}

export function undo(history: ProjectHistory): ProjectHistory {
  const previous = history.past.at(-1)
  if (!previous) return history

  return {
    past: history.past.slice(0, -1),
    present: previous.document,
    future: [
      { label: previous.label, document: history.present },
      ...history.future,
    ],
  }
}

export function redo(history: ProjectHistory): ProjectHistory {
  const [next, ...rest] = history.future
  if (!next) return history

  return {
    past: [...history.past, { label: next.label, document: history.present }],
    present: next.document,
    future: rest,
  }
}

export function canUndo(history: ProjectHistory): boolean {
  return history.past.length > 0
}

export function canRedo(history: ProjectHistory): boolean {
  return history.future.length > 0
}
