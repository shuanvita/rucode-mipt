import type { Component } from 'vue'
import type { ContentBlock } from '~/shared/api'
import { withItemIds } from './withItemIds'
import { getBlockComponent, getBlockDefinition, resolveBlockType } from '../block-registry/registry'

export interface ResolvedBlock {
  id: string
  type: string
  anchor?: string
  component: Component
  data: Record<string, unknown>
}

function migrateData(type: string, block: ContentBlock) {
  const data = (block.data ?? {}) as Record<string, unknown>
  const definition = getBlockDefinition(type)
  const from = block.schemaVersion ?? 1
  const migrated =
    definition?.migrate && from < definition.schemaVersion ? definition.migrate(data, from) : data
  return withItemIds(migrated, block.id)
}

/**
 * Оставляет включённые блоки, сортирует по `order` и подбирает компонент из реестра.
 * Блок с неизвестным `type` пропускается (в dev выводится предупреждение), страница при этом не ломается.
 */
export function useContentBlocks(getBlocks: () => ContentBlock[] | undefined, pageSlug: string) {
  return computed<ResolvedBlock[]>(() => {
    const enabledBlocks = (getBlocks() ?? []).filter((block) => block.enabled)
    const sortedBlocks = enabledBlocks.toSorted((a, b) => a.order - b.order)

    return sortedBlocks.flatMap((block) => {
      const type = resolveBlockType(block.type, pageSlug)
      const component = type ? getBlockComponent(type) : undefined

      if (!type || !component) {
        if (import.meta.dev) console.warn(`[${pageSlug}] неизвестный тип блока: ${block.type}`)
        return []
      }

      return [
        {
          id: block.id,
          type,
          anchor: block.anchor,
          component,
          data: migrateData(type, block),
        },
      ]
    })
  })
}
