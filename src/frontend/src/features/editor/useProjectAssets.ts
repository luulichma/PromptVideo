import { useCallback, useEffect, useState } from 'react'
import type { ProjectDocumentV1 } from '../../core/project/schema'
import type { RenderAssets } from '../../core/rendering/renderer'
import { getAssetBlob } from '../../core/storage/assetStore'

/**
 * Decodes the project's images once and keeps them as ImageBitmaps for the
 * renderer. Bitmaps are closed when they fall out of use so a long editing
 * session does not accumulate decoded copies of every image ever imported.
 *
 * Decoding is keyed on the set of asset ids, not on the document: typing a
 * letter makes a new document but changes no image, and re-decoding on every
 * keystroke would both waste work and close bitmaps the preview is drawing.
 */
export function useProjectAssets(project: ProjectDocumentV1 | null) {
  const [assets, setAssets] = useState<RenderAssets>(new Map())
  const [reloadToken, setReloadToken] = useState(0)

  const reload = useCallback(() => setReloadToken((value) => value + 1), [])

  const assetKey = project?.assets.map((asset) => asset.id).join(',') ?? ''

  useEffect(() => {
    let cancelled = false
    const ids = assetKey ? assetKey.split(',') : []

    async function load() {
      const entries = new Map<string, ImageBitmap>()

      for (const id of ids) {
        const blob = await getAssetBlob(id)
        if (!blob) continue
        try {
          entries.set(id, await createImageBitmap(blob))
        } catch {
          // A blob that will not decode is reported by validation, not here.
        }
      }

      if (cancelled) {
        // Superseded before it was shown: nobody else holds these.
        for (const bitmap of entries.values()) bitmap.close()
        return
      }
      setAssets(entries)
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [assetKey, reloadToken])

  // A map is released only once a newer one has replaced it, or the editor
  // closes. React runs this cleanup before the preview's next draw, which by
  // then is drawing from the new map.
  useEffect(
    () => () => {
      for (const bitmap of assets.values()) (bitmap as ImageBitmap).close()
    },
    [assets],
  )

  return { assets, reload }
}
