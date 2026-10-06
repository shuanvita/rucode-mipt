import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { describe, expect, it } from 'vitest'

import { buildManifest } from './buildManifest'
import { blockDefinitionsWithSchemas } from './withSchemas'

const manifest = buildManifest(blockDefinitionsWithSchemas, {
  project: 'rucode',
  version: process.env.MANIFEST_VERSION ?? new Date().toISOString().slice(0, 10),
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

  // `npm run manifest` -> .output/manifest.json (в CI отправляется бэкенду)
  it.runIf(process.env.MANIFEST_OUT)('записывает манифест в файл', () => {
    const out = process.env.MANIFEST_OUT!
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, JSON.stringify(manifest, null, 2))
  })
})
