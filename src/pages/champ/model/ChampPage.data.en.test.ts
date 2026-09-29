import { describe, expect, it } from 'vitest'

import { champPageData } from './ChampPage.data'
import { champPageDataEn } from './ChampPage.data.en'

function collectStrings(value: unknown, path = ''): { path: string; text: string }[] {
  if (typeof value === 'string') return [{ path, text: value }]
  if (Array.isArray(value)) return value.flatMap((item, i) => collectStrings(item, `${path}[${i}]`))
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, item]) => collectStrings(item, `${path}.${key}`))
  }
  return []
}

describe('champPageDataEn', () => {
  it('сохраняет набор и порядок блоков русской версии', () => {
    expect(champPageDataEn.blocks.map(({ type, order }) => [type, order])).toEqual(
      champPageData.blocks.map(({ type, order }) => [type, order]),
    )
  })

  it('сохраняет бренд RUCODE_ в заголовке hero', () => {
    const hero = champPageDataEn.blocks.find((block) => block.type === 'hero')?.data as {
      title: string
    }
    expect(hero.title).toBe('International Contest RUCODE_')
  })

  it('не оставляет <br> в текстах', () => {
    const withBr = collectStrings(champPageDataEn).filter(({ text }) => /<br/i.test(text))
    expect(withBr).toEqual([])
  })

  it('не оставляет русских текстов, кроме служебных полей', () => {
    const cyrillic = collectStrings(champPageDataEn).filter(({ text }) => /[а-яё]/i.test(text))
    expect(cyrillic).toEqual([])
  })

  it('собирает этапы «Как проходит» из content0..content4', () => {
    const how = champPageDataEn.blocks.find((block) => block.type === 'how')?.data as {
      stages: { title: string; note?: string; list?: string[] }[]
    }
    expect(how.stages).toHaveLength(5)
    expect(how.stages[3]?.list).toHaveLength(3)
    expect(how.stages[1]?.note).toBeUndefined()
  })

  it('делает ссылки в FAQ открывающимися в новой вкладке и без стилей старого сайта', () => {
    const faq = champPageDataEn.blocks.find((block) => block.type === 'faq')?.data as {
      items: { answer?: string }[]
    }
    const withLinks = faq.items.filter((item) => item.answer?.includes('<a '))
    expect(withLinks.length).toBeGreaterThan(0)
    for (const { answer } of withLinks) {
      expect(answer).toContain('target="_blank" rel="noopener noreferrer"')
      expect(answer).not.toContain('class=')
    }
  })

  it('переводит alt партнёров', () => {
    const partners = champPageDataEn.blocks.find((block) => block.type === 'partners')?.data as {
      items: { images: { alt: string }[] }[]
    }
    expect(partners.items.flatMap((item) => item.images.map((image) => image.alt))).toEqual([
      'MTS',
      'Sber',
    ])
  })
})
