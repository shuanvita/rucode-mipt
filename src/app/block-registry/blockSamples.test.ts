import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { describe, expect, it } from 'vitest'

import { registerBlocks, resetBlockRegistry, resolveBlockType } from '~/shared/api'
import type { ContentPage } from '~/shared/api'
import { blockDefinitions } from './index'

const modules = import.meta.glob<Record<string, unknown>>('../../pages/*/model/*.data.ts', {
  eager: true,
})

/** Первый встретившийся на реальных страницах блок каждого вида: образец данных для скриншота. */
function collectSamples() {
  resetBlockRegistry()
  registerBlocks(blockDefinitions)
  const samples: Record<string, unknown> = {}
  for (const mod of Object.values(modules)) {
    for (const value of Object.values(mod)) {
      const page = value as ContentPage
      if (typeof page !== 'object' || page === null || !('blocks' in page)) continue
      for (const block of page.blocks) {
        const type = resolveBlockType(block.type, page.slug)
        if (type && !(type in samples)) samples[type] = { ...block, type }
      }
    }
  }
  return samples
}

describe('образцы блоков для скриншотов', () => {
  it('находятся для большинства блоков реестра', () => {
    const samples = collectSamples()
    expect(Object.keys(samples).length).toBeGreaterThan(blockDefinitions.length / 2)
  })

  // `npm run block-shots` -> .output/block-samples.json
  it.runIf(process.env.BLOCK_SAMPLES_OUT)('записывает образцы в файл', () => {
    const out = process.env.BLOCK_SAMPLES_OUT!
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, JSON.stringify(collectSamples(), null, 2))
  })
})
