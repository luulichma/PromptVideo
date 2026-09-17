import type { ProjectDocumentV1, TextLayerV1 } from './schema'

const SCENE_COLORS = ['#0d366f', '#0f5b78', '#236b63', '#80531d', '#713249']
const SCENE_COPY = [
  ['Ý tưởng thành hình', 'Dựng video ngay trên thiết bị của bạn'],
  ['Năm cảnh · một nhịp', 'Timeline chính xác đến từng khung hình'],
  ['Tiếng Việt trọn vẹn', 'Font được đóng gói, không phụ thuộc hệ thống'],
  ['Không tải dữ liệu lên', 'Hình ảnh và nội dung luôn ở máy của bạn'],
  ['Sẵn sàng để xuất', 'MP4 720p · 30 fps · 60 giây'],
]

function createTextLayers(index: number): TextLayerV1[] {
  const [title, subtitle] = SCENE_COPY[index]
  return [
    {
      id: `title-${index + 1}`,
      type: 'text',
      role: 'title',
      text: title,
      x: 90,
      y: 350,
      width: 880,
      height: 100,
      opacity: 1,
      color: '#ffffff',
      fontFamily: 'Noto Sans',
      fontSize: 62,
      fontWeight: 800,
      lineHeight: 1.25,
      align: 'left',
    },
    {
      id: `subtitle-${index + 1}`,
      type: 'text',
      role: 'subtitle',
      text: subtitle,
      x: 94,
      y: 452,
      width: 760,
      height: 56,
      opacity: 0.86,
      color: '#ffffff',
      fontFamily: 'Noto Sans',
      fontSize: 28,
      fontWeight: 500,
      lineHeight: 1.25,
      align: 'left',
    },
  ]
}

export const benchmarkProject: ProjectDocumentV1 = {
  version: 1,
  id: 'feasibility-benchmark-v1',
  name: 'PromptVideo — Feasibility benchmark',
  width: 1280,
  height: 720,
  fps: 30,
  templateId: 'technical-benchmark',
  safeArea: { top: 0.08, bottom: 0.12, left: 0.06, right: 0.06 },
  assets: [],
  scenes: SCENE_COLORS.map((background, index) => ({
    id: `scene-${index + 1}`,
    name: `Cảnh ${index + 1}`,
    durationSeconds: 12,
    background,
    transitionSeconds: index === SCENE_COLORS.length - 1 ? 0 : 0.75,
    layers: [
      {
        id: `image-${index + 1}`,
        type: 'image',
        role: 'image',
        assetId: 'benchmark-mark',
        x: 850,
        y: 94,
        width: 330,
        height: 330,
        opacity: 0.95,
        fit: 'contain',
        offsetX: 0,
        offsetY: 0,
        scale: 1,
      },
      ...createTextLayers(index),
    ],
  })),
}

export const benchmarkTemplateManifest = {
  version: 1,
  id: 'technical-benchmark',
  name: 'Technical benchmark',
  previewAssetId: 'benchmark-mark',
  supportedProjectVersion: 1,
} as const
