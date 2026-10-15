import { describe, expect, it } from 'vitest'
import { parseDraftMessage } from './usePreviewBridge'

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
