import type { ContentPage, PageContentFallback, PageContentSource } from '~/shared/api'
import { DEFAULT_LOCALE } from '~/shared/config'
import type { Locale } from '~/shared/config'

function isContentPage(fallback: PageContentFallback): fallback is ContentPage {
  return 'blocks' in fallback
}

async function resolveSource(source?: PageContentSource) {
  return typeof source === 'function' ? await source() : source
}

export function usePageContent(slug: string, fallback: PageContentFallback) {
  const { locale } = useI18n()

  const sources: Partial<Record<Locale, PageContentSource>> = isContentPage(fallback)
    ? { [DEFAULT_LOCALE]: fallback }
    : fallback

  // Локальный контент: язык страницы -> язык по умолчанию -> любой доступный
  const resolveLocalPage = async (currentLocale: Locale) =>
    (await resolveSource(sources[currentLocale])) ??
    (await resolveSource(sources[DEFAULT_LOCALE])) ??
    (await resolveSource(Object.values(sources)[0]))

  return useAsyncData(
    computed(() => `cms:${slug}:${locale.value}`),
    async () => {
      const currentLocale = locale.value as Locale

      // CMS отдаёт контент только на языке по умолчанию: для остальных локалей,
      // если есть локальный перевод, используем его, а не русский ответ CMS.
      if (currentLocale !== DEFAULT_LOCALE && sources[currentLocale]) {
        return { page: (await resolveLocalPage(currentLocale))!, isFallback: true }
      }

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
        const page = await resolveLocalPage(currentLocale)
        if (!page) throw error
        return { page, isFallback: true }
      }
    },
  )
}
