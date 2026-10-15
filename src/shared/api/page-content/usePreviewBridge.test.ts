import { afterEach, describe, expect, it } from 'vitest'
import { highlightBlock, parseDraftMessage, parsePreviewMessage } from './usePreviewBridge'

const block = { id: 'b1', type: 'faq', order: 10, enabled: true, data: {} }

describe('parseDraftMessage', () => {
  it('принимает черновик админки и подставляет slug', () => {
    const page = parseDraftMessage(
      { source: 'crito-preview', type: 'draft', page: { blocks: [block], headerConfig: 'home' } },
      '/about',
    )
    expect(page).toMatchObject({ slug: '/about', blocks: [block], headerConfig: 'home' })
  })

  it('игнорирует чужие и неполные сообщения', () => {
    expect(parseDraftMessage(null, '/')).toBeNull()
    expect(parseDraftMessage('draft', '/')).toBeNull()
    expect(parseDraftMessage({ source: 'other', type: 'draft', page: { blocks: [] } }, '/')).toBeNull()
    expect(parseDraftMessage({ source: 'crito-preview', type: 'ready' }, '/')).toBeNull()
  })

  it('отбрасывает черновик с битым блоком', () => {
    const broken = { source: 'crito-preview', type: 'draft', page: { blocks: [{ id: 1 }] } }
    expect(parseDraftMessage(broken, '/')).toBeNull()
  })
})

describe('parsePreviewMessage: выбор блока', () => {
  it('принимает id блока и null', () => {
    expect(parsePreviewMessage({ source: 'crito-preview', type: 'select', blockId: 'b1' }, '/')).toEqual({
      type: 'select',
      blockId: 'b1',
    })
    expect(parsePreviewMessage({ source: 'crito-preview', type: 'select', blockId: null }, '/')).toEqual({
      type: 'select',
      blockId: null,
    })
  })

  it('отбрасывает мусор вместо id', () => {
    expect(parsePreviewMessage({ source: 'crito-preview', type: 'select', blockId: 5 }, '/')).toBeNull()
    expect(parsePreviewMessage({ source: 'crito-preview', type: 'select' }, '/')).toBeNull()
    expect(parsePreviewMessage({ source: 'other', type: 'select', blockId: 'b1' }, '/')).toBeNull()
  })
})

describe('highlightBlock', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('подсвечивает один блок и снимает подсветку с предыдущего', () => {
    document.body.innerHTML = '<section data-block-id="a"></section><section data-block-id="b"></section>'
    document.querySelectorAll('section').forEach((el) => (el.scrollIntoView = () => {}))

    expect(highlightBlock('a')).toBe(true)
    expect(document.querySelector('[data-block-id="a"]')?.hasAttribute('data-crito-selected')).toBe(true)

    expect(highlightBlock('b')).toBe(true)
    expect(document.querySelector('[data-block-id="a"]')?.hasAttribute('data-crito-selected')).toBe(false)
    expect(document.querySelector('[data-block-id="b"]')?.hasAttribute('data-crito-selected')).toBe(true)

    expect(highlightBlock(null)).toBe(true)
    expect(document.querySelectorAll('[data-crito-selected]')).toHaveLength(0)
  })

  it('сообщает, что блока нет на странице (например, он выключен)', () => {
    expect(highlightBlock('missing')).toBe(false)
  })
})
