import { describe, expect, it } from 'vitest'
import { applyCmsPageMeta } from './applyCmsPageMeta'
import { parseContentPage } from './parseContentPage'

describe('applyCmsPageMeta', () => {
  it('переносит шапку и отступ футера в route.meta', () => {
    const meta: Record<string, unknown> = {}
    const header = { links: [{ href: '#about', title: 'О нас' }] }
    applyCmsPageMeta(meta, { header, noFooterSpacing: true })
    expect(meta).toEqual({ header, noFooterSpacing: true })
  })

  it('без шапки в CMS не трогает значение из definePageMeta', () => {
    const local = { links: [{ href: '#about', title: 'О нас', titleKey: 'nav.about' }] }
    const meta: Record<string, unknown> = { header: local }
    applyCmsPageMeta(meta, { noFooterSpacing: false })
    expect(meta.header).toBe(local)
    expect(meta).not.toHaveProperty('noFooterSpacing')
  })
})

describe('parseContentPage: header', () => {
  const base = { slug: '/mts', version: 1, blocks: [] }

  it('принимает страницу с шапкой и без неё', () => {
    expect(parseContentPage({ ...base, header: { links: [] } }).header).toEqual({ links: [] })
    expect(parseContentPage(base).header).toBeUndefined()
  })

  it('отклоняет шапку не объектом', () => {
    expect(() => parseContentPage({ ...base, header: 'шапка' })).toThrow('header')
    expect(() => parseContentPage({ ...base, header: [] })).toThrow('header')
  })
})
