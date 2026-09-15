import type { CmsPage } from './usePageContent.types.ts'

export function usePageContent(slug: string, fallback: CmsPage) {
  return useAsyncData(`cms:${slug}`, async () => {
    try {
      return { page: await $fetch<CmsPage>(`/api/cms${slug}`), isFallback: false }
    } catch (e) {
      if (import.meta.dev) console.error(`[cms] fetch failed for ${slug}, using fallback`, e)
      return { page: fallback, isFallback: true }
    }
  })
}
