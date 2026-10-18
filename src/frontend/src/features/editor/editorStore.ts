import { create } from 'zustand'
import type { ProjectCommand } from '../../core/project/commands'
import {
  canRedo,
  canUndo,
  createHistory,
  redo,
  runCommand,
  undo,
  type ProjectHistory,
} from '../../core/project/history'
import type { ProjectDocumentV1 } from '../../core/project/schema'
import {
  validateProject,
  type OverflowCheck,
  type ValidationIssue,
} from '../../core/project/validation'
import { ensurePageFontsReady } from '../../core/rendering/fonts'
import { createOverflowCheck } from '../../core/rendering/measure'
import { saveDraft, saveProject } from '../../core/storage/projectStore'

export const AUTOSAVE_DELAY_MS = 800

export type SaveState = 'idle' | 'pending' | 'saving' | 'saved' | 'error'

type EditorState = {
  history: ProjectHistory | null
  selectedSceneId: string | null
  saveState: SaveState
  lastSavedAtMs: number | null
  issues: ValidationIssue[]

  open: (document: ProjectDocumentV1) => void
  close: () => void
  run: (command: ProjectCommand) => void
  undoEdit: () => void
  redoEdit: () => void
  selectScene: (sceneId: string) => void
  saveNow: () => Promise<void>
}

let autosaveTimer: ReturnType<typeof setTimeout> | null = null

let overflowCheck: OverflowCheck | undefined | null = null

/**
 * Measures text the way the renderer will draw it, so a field turns red exactly
 * when its text would be clipped in the video. Created on first use: it needs a
 * canvas, which only exists once the page does.
 */
export function getOverflowCheck(): OverflowCheck | undefined {
  if (overflowCheck === null) overflowCheck = createOverflowCheck()
  return overflowCheck
}

function validate(document: ProjectDocumentV1): ValidationIssue[] {
  return validateProject(document, { isOverflowing: getOverflowCheck() })
}

export const useEditorStore = create<EditorState>((set, get) => {
  /**
   * Autosave writes a draft immediately and the durable record after a pause.
   *
   * The draft is what survives a crash between keystrokes; the debounce keeps
   * IndexedDB from being hammered on every character while still guaranteeing a
   * recent copy exists at all times.
   */
  function scheduleAutosave(): void {
    const document = get().history?.present
    if (!document) return

    set({ saveState: 'pending' })
    void saveDraft(document).catch(() => set({ saveState: 'error' }))

    if (autosaveTimer) clearTimeout(autosaveTimer)
    autosaveTimer = setTimeout(() => {
      void get().saveNow()
    }, AUTOSAVE_DELAY_MS)
  }

  function applyHistory(next: ProjectHistory): void {
    set({ history: next, issues: validate(next.present) })
    scheduleAutosave()
  }

  return {
    history: null,
    selectedSceneId: null,
    saveState: 'idle',
    lastSavedAtMs: null,
    issues: [],

    open: (document) => {
      set({
        history: createHistory(document),
        selectedSceneId: document.scenes[0]?.id ?? null,
        saveState: 'idle',
        lastSavedAtMs: null,
        issues: validate(document),
      })
      // Text measured before the font arrived was measured in a fallback; once
      // it is here, measure again so 'too long' is judged in the real font.
      void ensurePageFontsReady().then(() => {
        const present = get().history?.present
        if (present) set({ issues: validate(present) })
      })
    },

    close: () => {
      if (autosaveTimer) clearTimeout(autosaveTimer)
      autosaveTimer = null
      set({
        history: null,
        selectedSceneId: null,
        saveState: 'idle',
        lastSavedAtMs: null,
        issues: [],
      })
    },

    run: (command) => {
      const history = get().history
      if (!history) return
      const next = runCommand(history, command)
      // A no-op command must not mark the document dirty.
      if (next === history) return
      applyHistory(next)
    },

    undoEdit: () => {
      const history = get().history
      if (!history || !canUndo(history)) return
      applyHistory(undo(history))
    },

    redoEdit: () => {
      const history = get().history
      if (!history || !canRedo(history)) return
      applyHistory(redo(history))
    },

    selectScene: (sceneId) => set({ selectedSceneId: sceneId }),

    saveNow: async () => {
      const document = get().history?.present
      if (!document) return

      set({ saveState: 'saving' })
      try {
        await saveProject(document)
        set({ saveState: 'saved', lastSavedAtMs: Date.now() })
      } catch {
        set({ saveState: 'error' })
      }
    },
  }
})

export function useCurrentProject(): ProjectDocumentV1 | null {
  return useEditorStore((state) => state.history?.present ?? null)
}

export function useSelectedScene() {
  return useEditorStore((state) => {
    const project = state.history?.present
    if (!project) return null
    return (
      project.scenes.find((scene) => scene.id === state.selectedSceneId) ??
      project.scenes[0] ??
      null
    )
  })
}

export function useHistoryFlags() {
  const history = useEditorStore((state) => state.history)
  return {
    canUndo: history ? canUndo(history) : false,
    canRedo: history ? canRedo(history) : false,
  }
}
