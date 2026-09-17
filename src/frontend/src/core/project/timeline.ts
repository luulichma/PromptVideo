import type { ProjectDocumentV1, SceneV1 } from './schema'

export type TimelineFrame = {
  frameIndex: number
  timestampSeconds: number
  scene: SceneV1
  sceneIndex: number
  sceneTimeSeconds: number
  nextScene: SceneV1 | null
  transitionProgress: number
}

export function getProjectDuration(project: ProjectDocumentV1): number {
  return project.scenes.reduce(
    (total, scene) => total + scene.durationSeconds,
    0,
  )
}

export function getTotalFrames(project: ProjectDocumentV1): number {
  return Math.round(getProjectDuration(project) * project.fps)
}

export function getTimelineFrame(
  project: ProjectDocumentV1,
  frameIndex: number,
): TimelineFrame {
  const totalFrames = getTotalFrames(project)
  const safeFrameIndex = Math.min(
    Math.max(0, Math.trunc(frameIndex)),
    totalFrames - 1,
  )
  const timestampSeconds = safeFrameIndex / project.fps
  let sceneStart = 0

  for (
    let sceneIndex = 0;
    sceneIndex < project.scenes.length;
    sceneIndex += 1
  ) {
    const scene = project.scenes[sceneIndex]
    const sceneEnd = sceneStart + scene.durationSeconds
    if (
      timestampSeconds < sceneEnd ||
      sceneIndex === project.scenes.length - 1
    ) {
      const sceneTimeSeconds = timestampSeconds - sceneStart
      const transitionStart = scene.durationSeconds - scene.transitionSeconds
      const transitionProgress =
        scene.transitionSeconds > 0 && sceneTimeSeconds >= transitionStart
          ? Math.min(
              1,
              (sceneTimeSeconds - transitionStart) / scene.transitionSeconds,
            )
          : 0

      return {
        frameIndex: safeFrameIndex,
        timestampSeconds,
        scene,
        sceneIndex,
        sceneTimeSeconds,
        nextScene: project.scenes[sceneIndex + 1] ?? null,
        transitionProgress,
      }
    }
    sceneStart = sceneEnd
  }

  throw new Error('Project không có cảnh để render')
}
