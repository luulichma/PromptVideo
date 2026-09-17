import { describe, expect, it } from 'vitest'
import { benchmarkProject } from './benchmarkProject'
import { getProjectDuration, getTimelineFrame, getTotalFrames } from './timeline'

describe('benchmark timeline', () => {
  it('contains exactly five scenes, 60 seconds and 1,800 frames', () => {
    expect(benchmarkProject.scenes).toHaveLength(5)
    expect(getProjectDuration(benchmarkProject)).toBe(60)
    expect(getTotalFrames(benchmarkProject)).toBe(1800)
  })

  it('switches scenes exactly on the frame boundary', () => {
    expect(getTimelineFrame(benchmarkProject, 359).sceneIndex).toBe(0)
    expect(getTimelineFrame(benchmarkProject, 360)).toMatchObject({
      sceneIndex: 1,
      sceneTimeSeconds: 0,
      timestampSeconds: 12,
    })
    expect(getTimelineFrame(benchmarkProject, 720).sceneIndex).toBe(2)
    expect(getTimelineFrame(benchmarkProject, 1799).sceneIndex).toBe(4)
  })

  it('derives transition progress from frameIndex/fps', () => {
    expect(getTimelineFrame(benchmarkProject, 337).transitionProgress).toBe(0)
    expect(getTimelineFrame(benchmarkProject, 342).transitionProgress).toBeCloseTo(0.2)
    expect(getTimelineFrame(benchmarkProject, 359).transitionProgress).toBeCloseTo(0.9556, 3)
  })
})

