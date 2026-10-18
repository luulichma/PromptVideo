import type {
  Entrance,
  ImageLayerV1,
  LayerV1,
  ProjectDocumentV1,
  SceneKind,
  SceneV1,
  ShapeLayerV1,
  TextLayerV1,
} from '../project/schema'

/**
 * Geometry and typography for one slot of a composition, expressed as fractions
 * of the frame so a template works at any output resolution.
 */
export type SlotStyle = {
  x: number
  y: number
  width: number
  height: number
  fontSizeRatio?: number
  fontWeight?: number
  align?: TextLayerV1['align']
  verticalAlign?: TextLayerV1['verticalAlign']
  lineHeight?: number
  color?: string
  opacity?: number
}

/** A template-owned rectangle: accent bars, cards, bands. */
export type DecorStyle = {
  x: number
  y: number
  width: number
  height: number
  color: string
  opacity?: number
  /** Corner radius as a fraction of the frame height. */
  radiusRatio?: number
  /** Drawn over the image rather than under it, e.g. a band behind text. */
  front?: boolean
}

/** Where everything goes in one kind of scene. */
export type SceneLayout = {
  title: SlotStyle
  subtitle: SlotStyle
  /** Present only for kinds that carry a picture. */
  image?: SlotStyle
  decor?: readonly DecorStyle[]
  /** Overrides the palette for this kind, e.g. a dark closing card. */
  background?: string
}

/**
 * A template is pure presentation: palette, layouts, typography, motion. It
 * holds no business logic and never carries user content, which is what lets a
 * project move between templates without losing anything the user entered.
 *
 * Templates are versioned. A new edition is added next to the old one rather
 * than replacing it, and a project records the edition it was laid out with, so
 * an old project reopened after a template changed still produces the video it
 * produced before.
 *
 * Every text slot sits inside the default safe area; templates.test.ts holds that
 * so a restyle can never be the thing that pushes a subtitle off a phone screen.
 */
export type EditorTemplate = {
  id: string
  version: number
  name: string
  description: string
  /** One background per scene index, cycled if a project has more scenes. */
  palette: readonly string[]
  transitionSeconds: number
  entrance: Entrance
  /**
   * How far long text may shrink, as a fraction of the slot's font size.
   * Absent means never shrink, which is how the first editions behaved.
   */
  minFontScale?: number
  layouts: Record<SceneKind, SceneLayout>
}

/** Kinds whose layout has a picture; the others never carry one. */
export function kindUsesImage(kind: SceneKind): boolean {
  return kind === 'textImage'
}

export const SCENE_KIND_LABELS: Record<SceneKind, string> = {
  intro: 'Mở đầu',
  text: 'Chỉ có chữ',
  textImage: 'Chữ kèm ảnh',
  outro: 'Kết thúc',
}

/** What the two text fields mean in each kind, in the user's words. */
export const SCENE_KIND_FIELDS: Record<
  SceneKind,
  { title: string; subtitle: string }
> = {
  intro: { title: 'Tiêu đề', subtitle: 'Dòng phụ' },
  text: { title: 'Tiêu đề', subtitle: 'Nội dung' },
  textImage: { title: 'Tiêu đề', subtitle: 'Nội dung' },
  outro: { title: 'Lời kết', subtitle: 'Thông tin liên hệ' },
}

type LegacySlots = Pick<SceneLayout, 'title' | 'subtitle' | 'image'>

/** The first editions had one composition for every scene. */
function legacyTemplate(
  definition: Omit<
    EditorTemplate,
    'version' | 'layouts' | 'entrance' | 'minFontScale'
  > & { slots: LegacySlots },
): EditorTemplate {
  const { slots, ...rest } = definition
  return {
    ...rest,
    version: 1,
    entrance: 'none',
    layouts: { intro: slots, text: slots, textImage: slots, outro: slots },
  }
}

/** First editions, kept so projects laid out with them reopen unchanged. */
const FIRST_EDITIONS: readonly EditorTemplate[] = [
  legacyTemplate({
    id: 'classic',
    name: 'Cổ điển',
    description: 'Tiêu đề căn trái, ảnh nền phủ toàn khung.',
    palette: ['#0d366f', '#0f5b78', '#236b63', '#80531d', '#713249'],
    transitionSeconds: 0.5,
    slots: {
      image: { x: 0, y: 0, width: 1, height: 1, opacity: 0.55 },
      title: {
        x: 0.08,
        y: 0.56,
        width: 0.84,
        height: 0.16,
        fontSizeRatio: 0.058,
        fontWeight: 800,
        align: 'left',
        color: '#ffffff',
      },
      subtitle: {
        x: 0.08,
        y: 0.74,
        width: 0.74,
        height: 0.1,
        fontSizeRatio: 0.032,
        fontWeight: 400,
        align: 'left',
        color: '#e8eef8',
        opacity: 0.88,
      },
    },
  }),
  legacyTemplate({
    id: 'bold',
    name: 'Nổi bật',
    description: 'Chữ lớn căn giữa, nền tương phản cao.',
    palette: ['#11071f', '#2a0944', '#3b185f', '#12343b', '#451952'],
    transitionSeconds: 0.35,
    slots: {
      image: { x: 0, y: 0, width: 1, height: 1, opacity: 0.4 },
      title: {
        x: 0.06,
        y: 0.34,
        width: 0.88,
        height: 0.24,
        fontSizeRatio: 0.082,
        fontWeight: 900,
        align: 'center',
        color: '#ffffff',
      },
      subtitle: {
        x: 0.12,
        y: 0.62,
        width: 0.76,
        height: 0.1,
        fontSizeRatio: 0.034,
        fontWeight: 500,
        align: 'center',
        color: '#ffd7f5',
        opacity: 0.92,
      },
    },
  }),
  legacyTemplate({
    id: 'minimal',
    name: 'Tối giản',
    description: 'Nền sáng, chữ nhỏ gọn, nhiều khoảng trắng.',
    palette: ['#f5f3ee', '#eef1f4', '#f2efe9', '#edf1ee', '#f4f0f4'],
    transitionSeconds: 0.25,
    slots: {
      image: { x: 0.5, y: 0.1, width: 0.42, height: 0.8, opacity: 1 },
      title: {
        x: 0.07,
        y: 0.34,
        width: 0.38,
        height: 0.18,
        fontSizeRatio: 0.046,
        fontWeight: 700,
        align: 'left',
        color: '#161a1d',
      },
      subtitle: {
        x: 0.07,
        y: 0.55,
        width: 0.36,
        height: 0.16,
        fontSizeRatio: 0.026,
        fontWeight: 400,
        align: 'left',
        color: '#454b52',
      },
    },
  }),
  legacyTemplate({
    id: 'story',
    name: 'Kể chuyện',
    description: 'Ảnh nửa trên, chữ nửa dưới như trang sách.',
    palette: ['#1b2a41', '#324a5f', '#2d4654', '#3b3b58', '#243b53'],
    transitionSeconds: 0.6,
    slots: {
      image: { x: 0, y: 0, width: 1, height: 0.58, opacity: 1 },
      title: {
        x: 0.08,
        y: 0.62,
        width: 0.84,
        height: 0.13,
        fontSizeRatio: 0.05,
        fontWeight: 700,
        align: 'left',
        color: '#ffffff',
      },
      subtitle: {
        x: 0.08,
        y: 0.76,
        width: 0.8,
        height: 0.11,
        fontSizeRatio: 0.028,
        fontWeight: 400,
        align: 'left',
        color: '#cfdcea',
      },
    },
  }),
  legacyTemplate({
    id: 'promo',
    name: 'Khuyến mãi',
    description: 'Khối chữ góc dưới, màu nóng, chuyển cảnh nhanh.',
    palette: ['#7f1d1d', '#9a3412', '#a16207', '#166534', '#1e3a8a'],
    transitionSeconds: 0.2,
    slots: {
      image: { x: 0, y: 0, width: 1, height: 1, opacity: 0.65 },
      title: {
        x: 0.06,
        y: 0.62,
        width: 0.6,
        height: 0.15,
        fontSizeRatio: 0.062,
        fontWeight: 900,
        align: 'left',
        color: '#fff7ed',
      },
      subtitle: {
        x: 0.06,
        y: 0.79,
        width: 0.56,
        height: 0.08,
        fontSizeRatio: 0.03,
        fontWeight: 600,
        align: 'left',
        color: '#fed7aa',
      },
    },
  }),
]

/** Current editions: one layout per scene kind. */
export const EDITOR_TEMPLATES: readonly EditorTemplate[] = [
  {
    id: 'classic',
    version: 2,
    name: 'Cổ điển',
    description: 'Nền xanh đậm, chữ căn trái, vạch nhấn màu vàng.',
    palette: ['#0d2a4f', '#0f3d5c', '#173f4f', '#2b3550', '#0d2a4f'],
    transitionSeconds: 0.5,
    entrance: 'fade',
    minFontScale: 0.6,
    layouts: {
      intro: {
        decor: [
          { x: 0.08, y: 0.6, width: 0.07, height: 0.01, color: '#f2c14e' },
        ],
        title: {
          x: 0.08,
          y: 0.24,
          width: 0.84,
          height: 0.34,
          fontSizeRatio: 0.085,
          fontWeight: 800,
          align: 'left',
          verticalAlign: 'bottom',
          lineHeight: 1.15,
          color: '#ffffff',
        },
        subtitle: {
          x: 0.08,
          y: 0.64,
          width: 0.74,
          height: 0.16,
          fontSizeRatio: 0.036,
          fontWeight: 400,
          align: 'left',
          color: '#c9d6ea',
        },
      },
      text: {
        decor: [
          { x: 0.08, y: 0.36, width: 0.06, height: 0.008, color: '#f2c14e' },
        ],
        title: {
          x: 0.08,
          y: 0.12,
          width: 0.84,
          height: 0.22,
          fontSizeRatio: 0.06,
          fontWeight: 800,
          align: 'left',
          verticalAlign: 'bottom',
          lineHeight: 1.15,
          color: '#ffffff',
        },
        subtitle: {
          x: 0.08,
          y: 0.41,
          width: 0.8,
          height: 0.44,
          fontSizeRatio: 0.04,
          fontWeight: 400,
          align: 'left',
          lineHeight: 1.45,
          color: '#dbe5f3',
        },
      },
      textImage: {
        decor: [
          { x: 0.08, y: 0.45, width: 0.06, height: 0.008, color: '#f2c14e' },
        ],
        image: { x: 0.52, y: 0.1, width: 0.42, height: 0.78 },
        title: {
          x: 0.08,
          y: 0.12,
          width: 0.4,
          height: 0.31,
          fontSizeRatio: 0.054,
          fontWeight: 800,
          align: 'left',
          verticalAlign: 'bottom',
          lineHeight: 1.15,
          color: '#ffffff',
        },
        subtitle: {
          x: 0.08,
          y: 0.5,
          width: 0.4,
          height: 0.36,
          fontSizeRatio: 0.034,
          fontWeight: 400,
          align: 'left',
          lineHeight: 1.45,
          color: '#dbe5f3',
        },
      },
      outro: {
        background: '#0a1f3a',
        decor: [
          { x: 0.465, y: 0.555, width: 0.07, height: 0.008, color: '#f2c14e' },
        ],
        title: {
          x: 0.1,
          y: 0.2,
          width: 0.8,
          height: 0.33,
          fontSizeRatio: 0.07,
          fontWeight: 800,
          align: 'center',
          verticalAlign: 'bottom',
          lineHeight: 1.15,
          color: '#ffffff',
        },
        subtitle: {
          x: 0.1,
          y: 0.6,
          width: 0.8,
          height: 0.22,
          fontSizeRatio: 0.038,
          fontWeight: 500,
          align: 'center',
          lineHeight: 1.4,
          color: '#f2c14e',
        },
      },
    },
  },
  {
    id: 'bold',
    version: 2,
    name: 'Nổi bật',
    description: 'Chữ rất lớn căn giữa, nền tím tương phản cao.',
    palette: ['#11071f', '#2a0944', '#3b185f', '#2a0944', '#11071f'],
    transitionSeconds: 0.35,
    entrance: 'rise',
    minFontScale: 0.55,
    layouts: {
      intro: {
        title: {
          x: 0.06,
          y: 0.14,
          width: 0.88,
          height: 0.44,
          fontSizeRatio: 0.11,
          fontWeight: 900,
          align: 'center',
          verticalAlign: 'bottom',
          lineHeight: 1.1,
          color: '#ffffff',
        },
        subtitle: {
          x: 0.12,
          y: 0.63,
          width: 0.76,
          height: 0.16,
          fontSizeRatio: 0.04,
          fontWeight: 500,
          align: 'center',
          color: '#ffb8ec',
        },
      },
      text: {
        title: {
          x: 0.08,
          y: 0.1,
          width: 0.84,
          height: 0.27,
          fontSizeRatio: 0.07,
          fontWeight: 900,
          align: 'center',
          verticalAlign: 'bottom',
          lineHeight: 1.1,
          color: '#ffffff',
        },
        subtitle: {
          x: 0.1,
          y: 0.42,
          width: 0.8,
          height: 0.42,
          fontSizeRatio: 0.045,
          fontWeight: 500,
          align: 'center',
          lineHeight: 1.4,
          color: '#ffd7f5',
        },
      },
      textImage: {
        image: { x: 0, y: 0, width: 1, height: 1, opacity: 0.42 },
        decor: [
          {
            x: 0,
            y: 0.22,
            width: 1,
            height: 0.6,
            color: '#11071f',
            opacity: 0.45,
            front: true,
          },
        ],
        title: {
          x: 0.06,
          y: 0.24,
          width: 0.88,
          height: 0.3,
          fontSizeRatio: 0.08,
          fontWeight: 900,
          align: 'center',
          verticalAlign: 'bottom',
          lineHeight: 1.1,
          color: '#ffffff',
        },
        subtitle: {
          x: 0.12,
          y: 0.58,
          width: 0.76,
          height: 0.22,
          fontSizeRatio: 0.04,
          fontWeight: 500,
          align: 'center',
          lineHeight: 1.35,
          color: '#ffd7f5',
        },
      },
      outro: {
        background: '#ff3d9a',
        title: {
          x: 0.06,
          y: 0.16,
          width: 0.88,
          height: 0.4,
          fontSizeRatio: 0.09,
          fontWeight: 900,
          align: 'center',
          verticalAlign: 'bottom',
          lineHeight: 1.1,
          color: '#ffffff',
        },
        subtitle: {
          x: 0.12,
          y: 0.62,
          width: 0.76,
          height: 0.2,
          fontSizeRatio: 0.042,
          fontWeight: 700,
          align: 'center',
          lineHeight: 1.35,
          color: '#2a0944',
        },
      },
    },
  },
  {
    id: 'minimal',
    version: 2,
    name: 'Tối giản',
    description: 'Nền sáng, chữ gọn, nhiều khoảng trắng.',
    palette: ['#f5f3ee', '#eef1f4', '#f2efe9', '#edf1ee', '#f5f3ee'],
    transitionSeconds: 0.3,
    entrance: 'fade',
    minFontScale: 0.6,
    layouts: {
      intro: {
        decor: [
          { x: 0.1, y: 0.6, width: 0.16, height: 0.004, color: '#161a1d' },
        ],
        title: {
          x: 0.1,
          y: 0.24,
          width: 0.8,
          height: 0.33,
          fontSizeRatio: 0.075,
          fontWeight: 700,
          align: 'left',
          verticalAlign: 'bottom',
          lineHeight: 1.15,
          color: '#161a1d',
        },
        subtitle: {
          x: 0.1,
          y: 0.64,
          width: 0.7,
          height: 0.16,
          fontSizeRatio: 0.034,
          fontWeight: 400,
          align: 'left',
          color: '#5a6169',
        },
      },
      text: {
        title: {
          x: 0.1,
          y: 0.12,
          width: 0.8,
          height: 0.22,
          fontSizeRatio: 0.055,
          fontWeight: 700,
          align: 'left',
          verticalAlign: 'bottom',
          lineHeight: 1.15,
          color: '#161a1d',
        },
        subtitle: {
          x: 0.1,
          y: 0.4,
          width: 0.72,
          height: 0.44,
          fontSizeRatio: 0.038,
          fontWeight: 400,
          align: 'left',
          lineHeight: 1.5,
          color: '#454b52',
        },
      },
      textImage: {
        image: { x: 0.5, y: 0.1, width: 0.42, height: 0.78 },
        title: {
          x: 0.07,
          y: 0.12,
          width: 0.38,
          height: 0.34,
          fontSizeRatio: 0.05,
          fontWeight: 700,
          align: 'left',
          verticalAlign: 'bottom',
          lineHeight: 1.15,
          color: '#161a1d',
        },
        subtitle: {
          x: 0.07,
          y: 0.5,
          width: 0.38,
          height: 0.36,
          fontSizeRatio: 0.032,
          fontWeight: 400,
          align: 'left',
          lineHeight: 1.5,
          color: '#454b52',
        },
      },
      outro: {
        title: {
          x: 0.1,
          y: 0.2,
          width: 0.8,
          height: 0.34,
          fontSizeRatio: 0.065,
          fontWeight: 700,
          align: 'center',
          verticalAlign: 'bottom',
          lineHeight: 1.15,
          color: '#161a1d',
        },
        decor: [
          { x: 0.47, y: 0.575, width: 0.06, height: 0.004, color: '#161a1d' },
        ],
        subtitle: {
          x: 0.1,
          y: 0.62,
          width: 0.8,
          height: 0.2,
          fontSizeRatio: 0.034,
          fontWeight: 400,
          align: 'center',
          lineHeight: 1.4,
          color: '#5a6169',
        },
      },
    },
  },
  {
    id: 'story',
    version: 2,
    name: 'Kể chuyện',
    description: 'Ảnh nửa trên, chữ nửa dưới như trang sách.',
    palette: ['#1b2a41', '#243b53', '#2d4654', '#324a5f', '#1b2a41'],
    transitionSeconds: 0.6,
    entrance: 'rise',
    minFontScale: 0.6,
    layouts: {
      intro: {
        decor: [
          { x: 0.08, y: 0.2, width: 0.006, height: 0.6, color: '#f2c14e' },
        ],
        title: {
          x: 0.11,
          y: 0.2,
          width: 0.8,
          height: 0.38,
          fontSizeRatio: 0.08,
          fontWeight: 700,
          align: 'left',
          verticalAlign: 'bottom',
          lineHeight: 1.15,
          color: '#ffffff',
        },
        subtitle: {
          x: 0.11,
          y: 0.62,
          width: 0.76,
          height: 0.18,
          fontSizeRatio: 0.036,
          fontWeight: 400,
          align: 'left',
          lineHeight: 1.4,
          color: '#cfdcea',
        },
      },
      text: {
        decor: [
          { x: 0.08, y: 0.14, width: 0.006, height: 0.7, color: '#f2c14e' },
        ],
        title: {
          x: 0.11,
          y: 0.14,
          width: 0.8,
          height: 0.2,
          fontSizeRatio: 0.055,
          fontWeight: 700,
          align: 'left',
          lineHeight: 1.15,
          color: '#ffffff',
        },
        subtitle: {
          x: 0.11,
          y: 0.38,
          width: 0.78,
          height: 0.46,
          fontSizeRatio: 0.038,
          fontWeight: 400,
          align: 'left',
          lineHeight: 1.5,
          color: '#cfdcea',
        },
      },
      textImage: {
        image: { x: 0, y: 0, width: 1, height: 0.54 },
        title: {
          x: 0.08,
          y: 0.58,
          width: 0.84,
          height: 0.13,
          fontSizeRatio: 0.05,
          fontWeight: 700,
          align: 'left',
          lineHeight: 1.15,
          color: '#ffffff',
        },
        subtitle: {
          x: 0.08,
          y: 0.72,
          width: 0.84,
          height: 0.15,
          fontSizeRatio: 0.03,
          fontWeight: 400,
          align: 'left',
          lineHeight: 1.4,
          color: '#cfdcea',
        },
      },
      outro: {
        background: '#0f1b2d',
        title: {
          x: 0.1,
          y: 0.2,
          width: 0.8,
          height: 0.34,
          fontSizeRatio: 0.065,
          fontWeight: 700,
          align: 'center',
          verticalAlign: 'bottom',
          lineHeight: 1.15,
          color: '#ffffff',
        },
        decor: [
          { x: 0.47, y: 0.575, width: 0.06, height: 0.006, color: '#f2c14e' },
        ],
        subtitle: {
          x: 0.1,
          y: 0.62,
          width: 0.8,
          height: 0.2,
          fontSizeRatio: 0.036,
          fontWeight: 400,
          align: 'center',
          lineHeight: 1.4,
          color: '#cfdcea',
        },
      },
    },
  },
  {
    // The key stays 'promo' so the server catalog and earlier projects still
    // find it; the second edition is the bright style the product now offers.
    id: 'promo',
    version: 2,
    name: 'Tươi sáng',
    description: 'Nền sáng màu kem, nhấn cam, chuyển cảnh nhanh.',
    palette: ['#fff4e6', '#fff7ed', '#fef3e2', '#fff4e6', '#fff7ed'],
    transitionSeconds: 0.3,
    entrance: 'rise',
    minFontScale: 0.55,
    layouts: {
      intro: {
        decor: [
          { x: 0, y: 0, width: 1, height: 0.03, color: '#f97316' },
          {
            x: 0.08,
            y: 0.62,
            width: 0.1,
            height: 0.014,
            color: '#f97316',
            radiusRatio: 0.007,
          },
        ],
        title: {
          x: 0.08,
          y: 0.2,
          width: 0.84,
          height: 0.39,
          fontSizeRatio: 0.095,
          fontWeight: 900,
          align: 'left',
          verticalAlign: 'bottom',
          lineHeight: 1.1,
          color: '#7c2d12',
        },
        subtitle: {
          x: 0.08,
          y: 0.66,
          width: 0.74,
          height: 0.16,
          fontSizeRatio: 0.04,
          fontWeight: 600,
          align: 'left',
          color: '#c2410c',
        },
      },
      text: {
        decor: [{ x: 0, y: 0, width: 1, height: 0.03, color: '#f97316' }],
        title: {
          x: 0.08,
          y: 0.1,
          width: 0.84,
          height: 0.24,
          fontSizeRatio: 0.064,
          fontWeight: 900,
          align: 'left',
          verticalAlign: 'bottom',
          lineHeight: 1.1,
          color: '#7c2d12',
        },
        subtitle: {
          x: 0.08,
          y: 0.4,
          width: 0.8,
          height: 0.44,
          fontSizeRatio: 0.042,
          fontWeight: 500,
          align: 'left',
          lineHeight: 1.45,
          color: '#431407',
        },
      },
      textImage: {
        decor: [
          {
            x: 0.5,
            y: 0.08,
            width: 0.44,
            height: 0.82,
            color: '#fdba74',
            radiusRatio: 0.03,
          },
        ],
        image: { x: 0.52, y: 0.115, width: 0.4, height: 0.75 },
        title: {
          x: 0.07,
          y: 0.1,
          width: 0.4,
          height: 0.34,
          fontSizeRatio: 0.058,
          fontWeight: 900,
          align: 'left',
          verticalAlign: 'bottom',
          lineHeight: 1.1,
          color: '#7c2d12',
        },
        subtitle: {
          x: 0.07,
          y: 0.48,
          width: 0.4,
          height: 0.38,
          fontSizeRatio: 0.034,
          fontWeight: 500,
          align: 'left',
          lineHeight: 1.45,
          color: '#431407',
        },
      },
      outro: {
        background: '#f97316',
        title: {
          x: 0.08,
          y: 0.18,
          width: 0.84,
          height: 0.38,
          fontSizeRatio: 0.08,
          fontWeight: 900,
          align: 'center',
          verticalAlign: 'bottom',
          lineHeight: 1.1,
          color: '#ffffff',
        },
        subtitle: {
          x: 0.1,
          y: 0.62,
          width: 0.8,
          height: 0.2,
          fontSizeRatio: 0.042,
          fontWeight: 700,
          align: 'center',
          lineHeight: 1.35,
          color: '#fff7ed',
        },
      },
    },
  },
]

const ALL_EDITIONS: readonly EditorTemplate[] = [
  ...FIRST_EDITIONS,
  ...EDITOR_TEMPLATES,
]

/**
 * Finds a template edition.
 *
 * With a version, the exact edition is returned when the bundle still has it,
 * which is what keeps an old project's layout stable. Without one, or when the
 * edition is unknown, the current edition of that template is used, and an
 * unknown id falls back to the first current template.
 */
export function findTemplate(
  templateId: string,
  version?: number,
): EditorTemplate {
  if (version !== undefined) {
    const exact = ALL_EDITIONS.find(
      (template) => template.id === templateId && template.version === version,
    )
    if (exact) return exact
  }
  return (
    EDITOR_TEMPLATES.find((template) => template.id === templateId) ??
    EDITOR_TEMPLATES[0]
  )
}

type Frame = Pick<ProjectDocumentV1, 'width' | 'height'>

function slotGeometry(slot: SlotStyle | DecorStyle, frame: Frame) {
  return {
    x: Math.round(slot.x * frame.width),
    y: Math.round(slot.y * frame.height),
    width: Math.max(1, Math.round(slot.width * frame.width)),
    height: Math.max(1, Math.round(slot.height * frame.height)),
  }
}

function styleText(
  layer: TextLayerV1,
  slot: SlotStyle,
  template: EditorTemplate,
  frame: Frame,
): TextLayerV1 {
  const fontSize = Math.max(
    12,
    Math.round((slot.fontSizeRatio ?? 0.04) * frame.height),
  )
  return {
    ...layer,
    ...slotGeometry(slot, frame),
    opacity: slot.opacity ?? 1,
    fontSize,
    minFontSize:
      template.minFontScale === undefined
        ? undefined
        : Math.max(12, Math.round(fontSize * template.minFontScale)),
    fontWeight: slot.fontWeight ?? layer.fontWeight,
    align: slot.align ?? layer.align,
    verticalAlign: slot.verticalAlign ?? 'top',
    lineHeight: slot.lineHeight ?? layer.lineHeight,
    color: slot.color ?? layer.color,
  }
}

function emptyText(sceneId: string, role: 'title' | 'subtitle'): TextLayerV1 {
  return {
    id: `${sceneId}-${role}`,
    type: 'text',
    role,
    text: '',
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    opacity: 1,
    color: '#ffffff',
    fontFamily: 'Noto Sans',
    fontSize: 32,
    fontWeight: 400,
    align: 'left',
    verticalAlign: 'top',
    lineHeight: 1.25,
  }
}

function decorLayer(
  sceneId: string,
  index: number,
  decor: DecorStyle,
  frame: Frame,
): ShapeLayerV1 {
  return {
    id: `${sceneId}-decor-${index + 1}`,
    type: 'shape',
    role: 'decor',
    ...slotGeometry(decor, frame),
    opacity: decor.opacity ?? 1,
    color: decor.color,
    radius: Math.round((decor.radiusRatio ?? 0) * frame.height),
  }
}

/**
 * Stands in for the picture a "text with image" scene still needs, so the
 * preview shows where it will go. Validation refuses to export while it is
 * there, so it never reaches a video.
 */
function placeholderLayer(
  sceneId: string,
  slot: SlotStyle,
  background: string,
  frame: Frame,
): ShapeLayerV1 {
  const light = isLight(background)
  return {
    id: `${sceneId}-placeholder`,
    type: 'shape',
    role: 'decor',
    ...slotGeometry(slot, frame),
    opacity: 1,
    color: light ? '#d9d4ca' : '#3a4a60',
    radius: 0,
  }
}

function isLight(hex: string): boolean {
  const value = Number.parseInt(hex.slice(1), 16)
  const r = (value >> 16) & 0xff
  const g = (value >> 8) & 0xff
  const b = value & 0xff
  return 0.299 * r + 0.587 * g + 0.114 * b > 150
}

function layoutScene(
  scene: SceneV1,
  sceneIndex: number,
  template: EditorTemplate,
  frame: Frame,
): SceneV1 {
  const layout = template.layouts[scene.kind]
  const background =
    layout.background ?? template.palette[sceneIndex % template.palette.length]

  const textOf = (role: 'title' | 'subtitle') =>
    scene.layers.find(
      (layer): layer is TextLayerV1 =>
        layer.type === 'text' && layer.role === role,
    ) ?? emptyText(scene.id, role)

  const image = scene.layers.find(
    (layer): layer is ImageLayerV1 =>
      layer.type === 'image' && layer.role === 'image',
  )
  const free = scene.layers.filter((layer) => layer.role === 'free')

  const back: LayerV1[] = []
  const front: LayerV1[] = []
  ;(layout.decor ?? []).forEach((decor, index) =>
    (decor.front ? front : back).push(
      decorLayer(scene.id, index, decor, frame),
    ),
  )

  const picture: LayerV1[] = []
  if (layout.image) {
    if (image) {
      // assetId, fit, offset and scale are the user's; only the box moves.
      picture.push({
        ...image,
        ...slotGeometry(layout.image, frame),
        opacity: layout.image.opacity ?? 1,
      })
    } else if (kindUsesImage(scene.kind)) {
      picture.push(placeholderLayer(scene.id, layout.image, background, frame))
    }
  }

  return {
    ...scene,
    background,
    transitionSeconds: template.transitionSeconds,
    entrance: template.entrance,
    layers: [
      ...back,
      ...picture,
      ...front,
      styleText(textOf('title'), layout.title, template, frame),
      styleText(textOf('subtitle'), layout.subtitle, template, frame),
      ...free,
    ],
  }
}

/**
 * Lays a project out with a template edition.
 *
 * Text content, image assignments, scene kinds, names and durations are all
 * carried over untouched; only presentation is replaced. Layers with the 'free'
 * role are left exactly as they are. Without a version the current edition is
 * used, which is what choosing a template in the editor means.
 */
export function applyTemplate(
  project: ProjectDocumentV1,
  templateId: string,
  version?: number,
): ProjectDocumentV1 {
  const template = findTemplate(templateId, version)

  return {
    ...project,
    templateId: template.id,
    templateVersion: template.version,
    scenes: project.scenes.map((scene, sceneIndex) =>
      layoutScene(scene, sceneIndex, template, project),
    ),
  }
}

/**
 * Lays the project out again with the edition it already uses. Every edit that
 * changes structure — a new scene, a new image, a different kind — goes through
 * this, so an old project keeps its old look while it is being edited.
 */
export function relayout(project: ProjectDocumentV1): ProjectDocumentV1 {
  return applyTemplate(project, project.templateId, project.templateVersion)
}
