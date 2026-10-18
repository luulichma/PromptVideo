import { z } from 'zod'

const normalizedNumber = z.number().finite()
const positiveNumber = normalizedNumber.positive()
const hexColor = z.string().regex(/^#[0-9a-f]{6}$/i)

/**
 * Where a layer sits in a template's composition. Templates restyle by role, so
 * switching template moves and recolours layers without touching what the user
 * typed or which image they chose. 'decor' layers belong to the template alone
 * and are replaced wholesale on every restyle.
 */
export const layerRoleSchema = z
  .enum(['title', 'subtitle', 'image', 'decor', 'free'])
  .default('free')

/**
 * The four kinds of scene every template knows how to lay out. Because all
 * templates share this set, switching template never has to ask the user what
 * to do with a scene the new template has no layout for.
 */
export const sceneKindSchema = z.enum(['intro', 'text', 'textImage', 'outro'])

/** How a scene's text arrives on screen; chosen by the template. */
export const entranceSchema = z.enum(['none', 'fade', 'rise'])

const layerBaseSchema = z.object({
  id: z.string().min(1),
  role: layerRoleSchema,
  x: normalizedNumber,
  y: normalizedNumber,
  width: positiveNumber,
  height: positiveNumber,
  opacity: z.number().min(0).max(1).default(1),
})

export const textLayerV1Schema = layerBaseSchema.extend({
  type: z.literal('text'),
  text: z.string(),
  color: hexColor,
  fontFamily: z.literal('Noto Sans'),
  fontSize: positiveNumber,
  fontWeight: z.number().int().min(100).max(900),
  align: z.enum(['left', 'center', 'right']).default('left'),
  /** Where the block of lines sits inside the box when it is not full. */
  verticalAlign: z.enum(['top', 'middle', 'bottom']).default('top'),
  /** Multiplier of font size; drives wrapped line spacing. */
  lineHeight: z.number().min(0.8).max(3).default(1.25),
  /**
   * Smallest size the renderer may shrink to when the text is too long for its
   * box. Absent means the text is drawn at fontSize and never shrunk.
   */
  minFontSize: positiveNumber.optional(),
})

export const imageLayerV1Schema = layerBaseSchema.extend({
  type: z.literal('image'),
  assetId: z.string().min(1),
  fit: z.enum(['cover', 'contain', 'fill']).default('cover'),
  /** Pan within the layer box, in project pixels. */
  offsetX: normalizedNumber.default(0),
  offsetY: normalizedNumber.default(0),
  /** Extra zoom applied on top of the fit calculation. */
  scale: z.number().min(0.1).max(8).default(1),
})

/** Template graphics: a filled rectangle that carries no user content. */
export const shapeLayerV1Schema = layerBaseSchema.extend({
  type: z.literal('shape'),
  color: hexColor,
  radius: z.number().min(0).default(0),
})

/**
 * Everything the project needs to know about an imported image. The bytes live
 * in OPFS; this is only the reference, so a project document stays small enough
 * to keep in IndexedDB and to diff by eye.
 */
export const assetRefV1Schema = z.object({
  id: z.string().min(1),
  fileName: z.string().min(1),
  mimeType: z.enum(['image/png', 'image/jpeg', 'image/webp']),
  byteLength: z.number().int().positive(),
  /** Verified on package import so a tampered asset is refused. */
  sha256: z.string().regex(/^[0-9a-f]{64}$/),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
})

const sceneShapeSchema = z.object({
  id: z.string().min(1),
  /** Absent only in documents saved before scene kinds existed. */
  kind: sceneKindSchema.optional(),
  name: z.string().min(1),
  durationSeconds: positiveNumber,
  background: hexColor,
  transitionSeconds: z.number().min(0).max(2).default(0),
  entrance: entranceSchema.default('none'),
  layers: z.array(
    z.discriminatedUnion('type', [
      textLayerV1Schema,
      imageLayerV1Schema,
      shapeLayerV1Schema,
    ]),
  ),
})

/**
 * A scene saved before kinds existed is read as the kind its content implies,
 * so an old project opens unchanged instead of being refused.
 */
export const sceneV1Schema = sceneShapeSchema.transform((scene) => ({
  ...scene,
  kind:
    scene.kind ??
    (scene.layers.some((layer) => layer.type === 'image')
      ? ('textImage' as const)
      : ('text' as const)),
}))

/** Fractions of the frame kept clear of text so nothing is clipped on export. */
export const safeAreaV1Schema = z
  .object({
    top: z.number().min(0).max(0.4).default(0.08),
    bottom: z.number().min(0).max(0.4).default(0.12),
    left: z.number().min(0).max(0.4).default(0.06),
    right: z.number().min(0).max(0.4).default(0.06),
  })
  .default({ top: 0.08, bottom: 0.12, left: 0.06, right: 0.06 })

export const projectDocumentV1Schema = z.object({
  version: z.literal(1, { error: 'Chỉ hỗ trợ project version 1' }),
  id: z.string().min(1),
  name: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  fps: z.number().int().min(1).max(60),
  templateId: z.string().min(1).default('classic'),
  /**
   * Which edition of the template laid this project out. Absent means the first
   * edition, which every project saved before versioning used, so reopening an
   * old project lays it out exactly as it was.
   */
  templateVersion: z.number().int().positive().default(1),
  safeArea: safeAreaV1Schema,
  assets: z.array(assetRefV1Schema).default([]),
  scenes: z.array(sceneV1Schema).min(1),
})

export const templateManifestV1Schema = z.object({
  version: z.literal(1, { error: 'Chỉ hỗ trợ template manifest version 1' }),
  id: z.string().min(1),
  name: z.string().min(1),
  previewAssetId: z.string().min(1),
  supportedProjectVersion: z.literal(1),
})

export type LayerRole = z.infer<typeof layerRoleSchema>
export type SceneKind = z.infer<typeof sceneKindSchema>
export type Entrance = z.infer<typeof entranceSchema>
export type TextLayerV1 = z.infer<typeof textLayerV1Schema>
export type ImageLayerV1 = z.infer<typeof imageLayerV1Schema>
export type ShapeLayerV1 = z.infer<typeof shapeLayerV1Schema>
export type LayerV1 = TextLayerV1 | ImageLayerV1 | ShapeLayerV1
export type AssetRefV1 = z.infer<typeof assetRefV1Schema>
export type SafeAreaV1 = z.infer<typeof safeAreaV1Schema>
export type SceneV1 = z.infer<typeof sceneV1Schema>
export type ProjectDocumentV1 = z.infer<typeof projectDocumentV1Schema>
export type TemplateManifestV1 = z.infer<typeof templateManifestV1Schema>

export function parseProjectDocument(input: unknown): ProjectDocumentV1 {
  return projectDocumentV1Schema.parse(input)
}
