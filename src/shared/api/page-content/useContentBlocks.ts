import type { ContentBlock } from '~/shared/api'

export function useContentBlocks(
  getBlocks: () => ContentBlock[] | undefined,
  blockComponents: Record<string, Component>,
  pageSlug: string,
) {
  return computed(() => {
    const enabledBlocks = (getBlocks() ?? []).filter((block) => block.enabled)
    const sortedBlocks = enabledBlocks.toSorted((a, b) => a.order - b.order)

    if (import.meta.dev) {
      sortedBlocks
        .filter((block) => !blockComponents[block.type])
        .forEach((block) => console.warn(`[${pageSlug}] неизвестный тип блока: ${block.type}`))
    }

    return sortedBlocks.map((block) => ({
      ...block,
      data: block.data as Record<string, unknown>,
    }))
  })
}
