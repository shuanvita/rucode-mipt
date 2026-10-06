import type { ContentPageMeta } from './usePageContent.types'

/**
 * Применяет SEO-метаданные страницы из CMS. Если метаданных нет, ничего не меняет,
 * и остаются значения, заданные в `src/app/routes/*.vue`.
 */
export function usePageMeta(getMeta: () => ContentPageMeta | undefined) {
  useHead(() => {
    const meta = getMeta()
    if (!meta) return {}

    const entries = [
      { name: 'description', content: meta.description },
      { property: 'og:title', content: meta.ogTitle ?? meta.title },
      { property: 'og:description', content: meta.ogDescription ?? meta.description },
      { property: 'og:image', content: meta.ogImage },
    ].filter((entry) => entry.content)

    return { title: meta.title, meta: entries }
  })
}
