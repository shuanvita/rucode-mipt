import type { ContentPage } from '~/shared/api'

export function usePageContent(slug: string, fallback: ContentPage) {
  return useAsyncData(`cms:${slug}`, async () => {
    try {
      return { page: await $fetch<ContentPage>(`/api/cms${slug}`), isFallback: false }
    } catch (error) {
      if (import.meta.dev) {
        const message = error instanceof Error ? error.message : String(error)
        console.error(
          `[api] ошибка получения контента ${slug}, используются локальные данные из проекта:`,
          message,
        )
      }
      return { page: fallback, isFallback: true }
    }
  })
}
