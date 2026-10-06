import { describe, expect, it } from 'vitest'

import { parseContentPage } from '~/shared/api'
import type { ContentPage } from '~/shared/api'
import { blockDefinitions } from './index'
import { blockDefinitionsWithSchemas } from './withSchemas'

const modules = import.meta.glob<Record<string, unknown>>('../../pages/*/model/*.data{,.en}.ts', {
  eager: true,
})

const pages = Object.entries(modules).flatMap(([file, mod]) =>
  Object.values(mod)
    .filter(
      (value): value is ContentPage =>
        typeof value === 'object' && value !== null && 'blocks' in value && 'slug' in value,
    )
    .map((page) => ({ file, page })),
)

const definitions = new Map(
  blockDefinitionsWithSchemas.map((definition) => [definition.type, definition]),
)

describe('локальные данные страниц и реестр блоков', () => {
  it('находит данные всех страниц', () => {
    // 12 страниц + английская версия champ
    expect(pages.length).toBeGreaterThanOrEqual(13)
  })

  it.each(pages)('$file: соответствует контракту ContentPage', ({ page }) => {
    expect(() => parseContentPage(page)).not.toThrow()
  })

  it.each(pages)('$file: все type есть в реестре, id и anchor уникальны', ({ page }) => {
    const unknown = page.blocks.filter((block) => !definitions.has(block.type))
    expect(unknown.map((block) => block.type)).toEqual([])

    const ids = page.blocks.map((block) => block.id)
    expect(new Set(ids).size).toBe(ids.length)

    const anchors = page.blocks.flatMap((block) => (block.anchor ? [block.anchor] : []))
    expect(new Set(anchors).size).toBe(anchors.length)
  })

  it.each(pages)('$file: data блоков со схемой проходит валидацию', ({ page }) => {
    for (const block of page.blocks) {
      const schema = definitions.get(block.type)?.schema
      if (!schema) continue
      const result = schema.safeParse(block.data)
      expect(
        result.success,
        `${page.slug} / ${block.id}: ${JSON.stringify(result.error?.issues)}`,
      ).toBe(true)
    }
  })

  it('старые type разрешаются алиасами на своих страницах', async () => {
    const { resolveBlockType, registerBlocks, resetBlockRegistry } = await import('~/shared/api')
    resetBlockRegistry()
    registerBlocks(blockDefinitions)
    expect(resolveBlockType('hero', '/champ')).toBe('champ.hero')
    expect(resolveBlockType('hero', '/mws')).toBe('mws.hero')
    expect(resolveBlockType('about', '/')).toBe('info')
    expect(resolveBlockType('photos2023', '/capital-2024')).toBe('photoGallery')
    expect(resolveBlockType('champ.hero', '/anything')).toBe('champ.hero')
    expect(resolveBlockType('no-such-block', '/champ')).toBeUndefined()
  })

  it('в каждой странице блоки старых type соответствуют новым (по id)', () => {
    // id блока совпадает со старым type: по нему CMS сопоставит старые данные
    for (const { page } of pages) {
      for (const block of page.blocks) {
        const definition = definitions.get(block.type)!
        const alias = definition.aliases?.find((a) => a.page === page.slug && a.type === block.id)
        const isOwnType = block.id === block.type
        expect(isOwnType || alias, `${page.slug}: ${block.id} -> ${block.type}`).toBeTruthy()
      }
    }
  })
})

describe('данные страниц пригодны для CMS', () => {
  it.each(pages)('$file: сериализуются в JSON без потерь', ({ page }) => {
    // функции, undefined в массивах, Date и циклы не переживают передачу через API
    expect(JSON.parse(JSON.stringify(page))).toEqual(page)
  })
})
