import { describe, expect, it } from 'vitest'

import { withItemIds } from './withItemIds'

type Item = { id?: string; q?: number; links?: Item[] }

describe('withItemIds', () => {
  it('добавляет id элементам массивов-объектов и сохраняет существующие', () => {
    const data = {
      items: [{ q: 1 }, { id: 'own', q: 2 }] as Item[],
      list: ['a', 'b'],
      nested: { cards: [{ links: [{ q: 1 }] }] as Item[] },
    }
    const result = withItemIds(data, 'faq')
    expect(result.items.map((item) => item.id)).toEqual(['faq.items.0', 'own'])
    expect(result.nested.cards[0]?.id).toBe('faq.nested.cards.0')
    expect(result.nested.cards[0]?.links?.[0]?.id).toBe('faq.nested.cards.0.links.0')
    expect(result.list).toEqual(['a', 'b'])
  })

  it('сгенерированный id не перечисляется, поэтому не попадает в v-bind и spread', () => {
    const [item] = withItemIds({ items: [{ q: 1 }] as Item[] }, 'b').items
    expect(item?.id).toBe('b.items.0')
    expect(Object.keys(item!)).toEqual(['q'])
    expect({ ...item }).toEqual({ q: 1 })
  })

  it('не мутирует исходные данные и стабилен между вызовами', () => {
    const data = { items: [{ q: 1 }] as Item[] }
    const first = withItemIds(data, 'b')
    expect((data.items[0] as Item).id).toBeUndefined()
    expect(withItemIds(data, 'b').items[0]?.id).toBe(first.items[0]?.id)
  })
})
