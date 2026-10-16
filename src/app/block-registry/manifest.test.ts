import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

import { buildManifest } from './buildManifest'
import { blockDefinitionsWithSchemas } from './withSchemas'

const manifest = buildManifest(blockDefinitionsWithSchemas, {
  project: 'rucode',
  version: process.env.MANIFEST_VERSION ?? new Date().toISOString().slice(0, 10),
  // Скриншоты делает `npm run block-shots` (public/previews/<type>.png, в git не входят).
  hasPreview: (type) => existsSync(resolve(process.cwd(), 'public/previews', `${type}.png`)),
})

describe('манифест блоков', () => {
  it('содержит все блоки реестра с уникальными type', () => {
    const types = manifest.blocks.map((block) => block.type)
    expect(types.length).toBe(blockDefinitionsWithSchemas.length)
    expect(new Set(types).size).toBe(types.length)
  })

  it('у блоков со схемой есть JSON Schema, у остальных — флаг readonly', () => {
    for (const block of manifest.blocks) {
      expect(block.readonly).toBe(!block.schema)
    }
    expect(manifest.blocks.find((block) => block.type === 'faq')?.schema).toMatchObject({
      type: 'object',
    })
  })

  it('отдаёт подсказки редактора полей через x-field', () => {
    const json = JSON.stringify(manifest.blocks.find((block) => block.type === 'faq'))
    expect(json).toContain('"x-field":"richtext"')
  })

  it('описывает форму шапки страницы: ссылки, логотип, партнёр, логотипы поддержки', () => {
    const schema = manifest.headerSchema as {
      properties: Record<
        string,
        { title?: string; properties?: Record<string, { 'x-field'?: string }> }
      >
    }
    expect(Object.keys(schema.properties)).toEqual(['links', 'logo', 'partnerLogo', 'supportLogos'])
    expect(schema.properties.links?.title).toBe('Ссылки в шапке')
    const json = JSON.stringify(manifest.headerSchema)
    expect(json).toContain('"x-field":"link"')
    expect(json).toContain('"x-field":"image"')
    expect(schema.properties.logo?.properties?.src?.['x-field']).toBe('image')
  })

  it('описывает форму футера страницы: ссылки, регламент, контакты', () => {
    const schema = manifest.footerSchema as {
      properties: Record<string, { title?: string; properties?: Record<string, unknown> }>
    }
    expect(Object.keys(schema.properties)).toEqual(['links', 'regulation', 'contacts'])
    expect(schema.properties.links?.title).toBe('Ссылки в футере')
    expect(Object.keys(schema.properties.contacts?.properties ?? {})).toEqual([
      'site',
      'email',
      'link',
      'phoneTitle',
      'phone',
      'workHours',
      'extraGroups',
    ])
    expect(JSON.stringify(manifest.footerSchema)).toContain('"x-field":"link"')
  })

  // `npm run manifest` -> .output/manifest.json (в CI отправляется бэкенду)
  it.runIf(process.env.MANIFEST_OUT)('записывает манифест в файл', () => {
    const out = process.env.MANIFEST_OUT!
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, JSON.stringify(manifest, null, 2))
  })
})
