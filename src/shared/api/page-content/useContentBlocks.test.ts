import { beforeEach, describe, expect, it, vi } from 'vitest'

import { useContentBlocks } from './useContentBlocks'
import { createFallbackBlock } from './createFallbackBlock'
import { registerBlocks, resetBlockRegistry } from '../block-registry/registry'
import { defineBlock } from '../block-registry/defineBlock'

const Dummy = defineComponent({ render: () => h('div') })

beforeEach(() => {
  resetBlockRegistry()
  registerBlocks([
    defineBlock({
      type: 'faq',
      title: 'FAQ',
      category: 'faq',
      component: Dummy,
      aliases: [{ type: 'questions' }],
    }),
    defineBlock({
      type: 'champ.hero',
      title: 'Hero',
      category: 'hero',
      schemaVersion: 2,
      component: Dummy,
      aliases: [{ page: '/champ', type: 'hero' }],
      migrate: (data, from) => (from < 2 ? { ...data, migrated: true } : data),
    }),
  ])
})

describe('useContentBlocks', () => {
  it('отбрасывает выключенные блоки и сортирует по order', () => {
    const blocks = useContentBlocks(
      () => [
        createFallbackBlock('faq', 20, {}, { id: 'b' }),
        createFallbackBlock('faq', 10, {}, { id: 'a' }),
        createFallbackBlock('faq', 5, {}, { id: 'off', enabled: false }),
      ],
      '/p',
    )
    expect(blocks.value.map((block) => block.id)).toEqual(['a', 'b'])
  })

  it('молча пропускает неизвестные type (в dev — с предупреждением)', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const blocks = useContentBlocks(
      () => [createFallbackBlock('nope', 10, {}), createFallbackBlock('faq', 20, {})],
      '/p',
    )
    expect(blocks.value.map((block) => block.type)).toEqual(['faq'])
    warn.mockRestore()
  })

  it('разрешает старые type через алиасы и передаёт anchor', () => {
    const blocks = useContentBlocks(
      () => [
        createFallbackBlock('hero', 10, {}, { anchor: 'top' }),
        createFallbackBlock('questions', 20, {}),
      ],
      '/champ',
    )
    expect(blocks.value.map((block) => block.type)).toEqual(['champ.hero', 'faq'])
    expect(blocks.value[0]?.anchor).toBe('top')
  })

  it('мигрирует данные старой версии схемы', () => {
    const blocks = useContentBlocks(
      () => [
        createFallbackBlock('champ.hero', 10, { a: 1 }),
        createFallbackBlock('champ.hero', 20, { a: 2 }, { id: 'new', schemaVersion: 2 }),
      ],
      '/champ',
    )
    expect(blocks.value[0]?.data).toEqual({ a: 1, migrated: true })
    expect(blocks.value[1]?.data).toEqual({ a: 2 })
  })
})
