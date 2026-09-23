import { describe, expect, it } from 'vitest'
import {
  isWithdrawn,
  selectableTemplates,
  type TemplateCatalog,
} from './catalog'
import { EDITOR_TEMPLATES } from './templates'

const online = (...keys: string[]): TemplateCatalog => ({
  status: 'online',
  activeKeys: new Set(keys),
})

describe('selectableTemplates', () => {
  it('offers every bundled template while the catalog cannot be read', () => {
    expect(selectableTemplates({ status: 'offline' })).toEqual(EDITOR_TEMPLATES)
    expect(selectableTemplates({ status: 'loading' })).toEqual(EDITOR_TEMPLATES)
  })

  it('withdraws a template the admin retired', () => {
    const ids = selectableTemplates(
      online('classic', 'bold', 'minimal', 'story'),
    ).map((template) => template.id)

    expect(ids).toEqual(['classic', 'bold', 'minimal', 'story'])
  })

  it('ignores catalog keys the bundle has nothing to render for', () => {
    const ids = selectableTemplates(online('classic', 'not-shipped')).map(
      (template) => template.id,
    )

    expect(ids).toEqual(['classic'])
  })
})

describe('isWithdrawn', () => {
  it('flags a project whose template is no longer active', () => {
    expect(isWithdrawn('promo', online('classic'))).toBe(true)
  })

  it('never flags anything when the catalog is unknown', () => {
    expect(isWithdrawn('promo', { status: 'offline' })).toBe(false)
  })
})
