import { describe, expect, it } from 'vitest'
import { benchmarkProject, benchmarkTemplateManifest } from './benchmarkProject'
import { parseProjectDocument, templateManifestV1Schema } from './schema'

describe('ProjectDocumentV1 schema', () => {
  it('round-trips valid JSON without losing data', () => {
    const json = JSON.stringify(benchmarkProject)
    expect(parseProjectDocument(JSON.parse(json))).toEqual(benchmarkProject)
  })

  it('rejects an unsupported version with a clear path and message', () => {
    const result = parseProjectDocument.bind(null, { ...benchmarkProject, version: 2 })
    expect(result).toThrow(/Chỉ hỗ trợ project version 1/)
    expect(result).toThrow(/version/)
  })

  it('accepts the benchmark template manifest', () => {
    expect(templateManifestV1Schema.parse(benchmarkTemplateManifest)).toEqual(benchmarkTemplateManifest)
  })
})

