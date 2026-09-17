import { z } from 'zod'

const normalizedNumber = z.number().finite()
const positiveNumber = normalizedNumber.positive()
const layerBaseSchema = z.object({
  id: z.string().min(1),
  x: normalizedNumber,
  y: normalizedNumber,
  width: positiveNumber,
  height: positiveNumber,
  opacity: z.number().min(0).max(1).default(1),
})

export const textLayerV1Schema = layerBaseSchema.extend({
  type: z.literal('text'),
  text: z.string(),
  color: z.string().regex(/^#[0-9a-f]{6}$/i),
  fontFamily: z.literal('Noto Sans'),
  fontSize: positiveNumber,
  fontWeight: z.number().int().min(100).max(900),
  align: z.enum(['left', 'center', 'right']).default('left'),
})

export const imageLayerV1Schema = layerBaseSchema.extend({
  type: z.literal('image'),
  assetId: z.string().min(1),
  fit: z.enum(['cover', 'contain', 'fill']).default('cover'),
})

export const sceneV1Schema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  durationSeconds: positiveNumber,
  background: z.string().regex(/^#[0-9a-f]{6}$/i),
  transitionSeconds: z.number().min(0).max(2).default(0),
  layers: z.array(z.discriminatedUnion('type', [textLayerV1Schema, imageLayerV1Schema])),
})

export const projectDocumentV1Schema = z.object({
  version: z.literal(1, { error: 'Chỉ hỗ trợ project version 1' }),
  id: z.string().min(1),
  name: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  fps: z.number().int().min(1).max(60),
  scenes: z.array(sceneV1Schema).min(1),
})

export const templateManifestV1Schema = z.object({
  version: z.literal(1, { error: 'Chỉ hỗ trợ template manifest version 1' }),
  id: z.string().min(1),
  name: z.string().min(1),
  previewAssetId: z.string().min(1),
  supportedProjectVersion: z.literal(1),
})

export type TextLayerV1 = z.infer<typeof textLayerV1Schema>
export type ImageLayerV1 = z.infer<typeof imageLayerV1Schema>
export type SceneV1 = z.infer<typeof sceneV1Schema>
export type ProjectDocumentV1 = z.infer<typeof projectDocumentV1Schema>
export type TemplateManifestV1 = z.infer<typeof templateManifestV1Schema>

export function parseProjectDocument(input: unknown): ProjectDocumentV1 {
  return projectDocumentV1Schema.parse(input)
}

