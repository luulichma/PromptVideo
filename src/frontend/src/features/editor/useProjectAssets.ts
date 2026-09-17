import { useCallback, useEffect, useState } from 'react'
import type { ProjectDocumentV1 } from '../../core/project/schema'
import type { RenderAssets } from '../../core/rendering/renderer'
import { getAssetBlob } from '../../core/storage/assetStore'

/**
 * Decodes the project's images once and keeps them as ImageBitmaps for the
 * renderer. Bitmaps are closed when they fall out of use so a long editing
 * session does not accumulate decoded copies of every image ever imported.
 */
export function useProjectAssets(project: ProjectDocumentV1 | null) {
  const [assets, setAssets] = useState<RenderAssets>(new Map())
  const [reloadToken, setReloadToken] = useState(0)

  const reload = useCallback(() => setReloadToken((value) => value + 1), [])

  const assetKey = project?.assets.map((asset) => asset.id).join(',') ?? ''

  useEffect(() => {
    let cancelled = false
    const decoded: ImageBitmap[] = []

    async function load() {
      if (!project) return
      const entries = new Map<string, ImageBitmap>()

      for (const ref of project.assets) {
        const blob = await getAssetBlob(ref.id)
        if (!blob) continue
        try {
          const bitmap = await createImageBitmap(blob)
          decoded.push(bitmap)
          entries.set(ref.id, bitmap)
        } catch {
          // A blob that will not decode is reported by validation, not here.
        }
      }

      if (cancelled) {
        for (const bitmap of decoded) bitmap.close()
        return
      }
      setAssets(entries)
    }

    void load()
    return () => {
      cancelled = true
      for (const bitmap of decoded) bitmap.close()
    }
  }, [project, assetKey, reloadToken])

  return { assets, reload }
}
