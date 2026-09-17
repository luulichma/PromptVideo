import { describe, expect, it } from 'vitest'
import {
  attachImage,
  renameScene,
  reorderScene,
  setSceneDuration,
  switchTemplate,
  updateTextLayer,
} from './commands'
import { createProject } from './createProject'
import {
  canRedo,
  canUndo,
  createHistory,
  redo,
  runCommand,
  undo,
} from './history'
import type { ProjectCommand } from './commands'
import type { AssetRefV1 } from './schema'

const asset: AssetRefV1 = {
  id: 'asset-1',
  fileName: 'anh.png',
  mimeType: 'image/png',
  byteLength: 2048,
  sha256: 'a'.repeat(64),
  width: 1600,
  height: 900,
}

/** Twenty edits of every kind the editor offers. */
function twentyCommands(): ProjectCommand[] {
  const commands: ProjectCommand[] = []
  for (let index = 0; index < 5; index += 1) {
    const sceneId = `scene-${index + 1}`
    commands.push(renameScene(sceneId, `Cảnh đổi tên ${index}`))
    // Never 12: that is the default duration, so it would be a no-op and the
    // history would correctly decline to record it.
    commands.push(setSceneDuration(sceneId, 6 + index))
    commands.push(
      updateTextLayer(sceneId, `${sceneId}-title`, {
        text: `Tiêu đề ${index}`,
      }),
    )
    commands.push(
      updateTextLayer(sceneId, `${sceneId}-subtitle`, { fontSize: 24 + index }),
    )
  }
  return commands
}

describe('project history', () => {
  it('returns to the original document after twenty undos and back again', () => {
    const original = createProject('Dự án mẫu', { id: 'p1' })
    let history = createHistory(original)

    const commands = twentyCommands()
    expect(commands).toHaveLength(20)
    for (const command of commands) history = runCommand(history, command)

    const final = history.present
    expect(final).not.toEqual(original)
    expect(history.past).toHaveLength(20)

    for (let index = 0; index < 20; index += 1) history = undo(history)
    expect(history.present).toEqual(original)
    expect(canUndo(history)).toBe(false)

    for (let index = 0; index < 20; index += 1) history = redo(history)
    expect(history.present).toEqual(final)
    expect(canRedo(history)).toBe(false)
  })

  it('does not record a command that changes nothing', () => {
    const project = createProject('Dự án', { id: 'p2', templateId: 'classic' })
    const history = runCommand(
      createHistory(project),
      switchTemplate('classic'),
    )

    expect(history.past).toHaveLength(0)
    expect(canUndo(history)).toBe(false)
  })

  it('drops the redo branch once a new edit is made', () => {
    let history = createHistory(createProject('Dự án', { id: 'p3' }))
    history = runCommand(history, renameScene('scene-1', 'A'))
    history = runCommand(history, renameScene('scene-1', 'B'))
    history = undo(history)
    expect(canRedo(history)).toBe(true)

    history = runCommand(history, renameScene('scene-1', 'C'))
    expect(canRedo(history)).toBe(false)
    expect(history.present.scenes[0].name).toBe('C')
  })

  it('undoes an image attachment including the asset it added', () => {
    const project = createProject('Dự án', { id: 'p4' })
    let history = createHistory(project)
    history = runCommand(history, attachImage('scene-1', asset))

    expect(history.present.assets).toHaveLength(1)
    expect(
      history.present.scenes[0].layers.some((layer) => layer.type === 'image'),
    ).toBe(true)

    history = undo(history)
    expect(history.present.assets).toHaveLength(0)
    expect(
      history.present.scenes[0].layers.some((layer) => layer.type === 'image'),
    ).toBe(false)
  })

  it('reorders scenes and restores the original order on undo', () => {
    const project = createProject('Dự án', { id: 'p5' })
    const originalOrder = project.scenes.map((scene) => scene.id)
    let history = createHistory(project)

    history = runCommand(history, reorderScene('scene-1', 4))
    expect(history.present.scenes.map((scene) => scene.id)).toEqual([
      'scene-2',
      'scene-3',
      'scene-4',
      'scene-5',
      'scene-1',
    ])

    history = undo(history)
    expect(history.present.scenes.map((scene) => scene.id)).toEqual(
      originalOrder,
    )
  })

  it('clamps an out of range reorder target instead of dropping the scene', () => {
    const history = runCommand(
      createHistory(createProject('Dự án', { id: 'p6' })),
      reorderScene('scene-3', 99),
    )

    expect(history.present.scenes).toHaveLength(5)
    expect(history.present.scenes.at(-1)?.id).toBe('scene-3')
  })
})
