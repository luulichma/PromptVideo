import { EDITOR_TEMPLATES, type EditorTemplate } from './templates'

/**
 * What the server's template catalog says may be offered to users.
 *
 * `offline` is not an error: the catalog could not be read, so the editor falls
 * back to everything it ships with rather than blocking work that never needed
 * the server in the first place.
 */
export type TemplateCatalog =
  | { status: 'loading' }
  | { status: 'offline' }
  | { status: 'online'; activeKeys: ReadonlySet<string> }

/**
 * The bundled templates a user may choose for new work.
 *
 * The catalog decides which templates are offered, the bundle decides how they
 * look: a key the server lists but the bundle lacks has nothing to render and
 * is skipped, and a bundled template the server no longer lists is withdrawn.
 */
export function selectableTemplates(
  catalog: TemplateCatalog,
): readonly EditorTemplate[] {
  if (catalog.status !== 'online') return EDITOR_TEMPLATES
  return EDITOR_TEMPLATES.filter((template) =>
    catalog.activeKeys.has(template.id),
  )
}

/**
 * True when a project uses a template the catalog has since withdrawn.
 *
 * Such a project still opens, previews and exports — the template is bundled,
 * and taking away someone's finished work because an admin retired a style
 * would be the wrong trade — but the editor says so, and the template is no
 * longer offered for anything new.
 */
export function isWithdrawn(
  templateId: string,
  catalog: TemplateCatalog,
): boolean {
  return catalog.status === 'online' && !catalog.activeKeys.has(templateId)
}
