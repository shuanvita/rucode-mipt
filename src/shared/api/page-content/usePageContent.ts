import type { ContentPage, PageContentFallback, PageContentSource } from '~/shared/api'
import { DEFAULT_LOCALE } from '~/shared/config'
import type { Locale } from '~/shared/config'
import { parseContentPage } from './parseContentPage'
import { usePageMeta } from './usePageMeta'

function isContentPage(fallback: PageContentFallback): fallback is ContentPage {
  return 'blocks' in fallback
}

async function resolveSource(source?: PageContentSource) {
  return typeof source === 'function' ? await source() : source
}

export async function fetchCmsPage(slug: string, preview?: string) {
  const response = await $fetch<unknown>(`/api/cms${slug === '/' ? '/index' : slug}`, {
    query: preview ? { preview } : undefined,
  })
  try {
    return parseContentPage(response)
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error)
    throw new Error(`невалидный ответ CMS: ${reason}`, { cause: error })
  }
}

/**
 * Загружает страницу из CMS (`/api/cms<slug>`); если запрос не удался или ответ невалиден,
 * использует локальные данные. Черновик доступен по `?preview=<token>`.
 */
export function usePageContent(slug: string, fallback: PageContentFallback) {
  const { locale } = useI18n()
  const route = useRoute()

  const sources: Partial<Record<Locale, PageContentSource>> = isContentPage(fallback)
    ? { [DEFAULT_LOCALE]: fallback }
    : fallback

  // Локальный контент: язык страницы -> язык по умолчанию -> любой доступный
  const resolveLocalPage = async (currentLocale: Locale) =>
    (await resolveSource(sources[currentLocale])) ??
    (await resolveSource(sources[DEFAULT_LOCALE])) ??
    (await resolveSource(Object.values(sources)[0]))

  const getPreview = () =>
    typeof route.query.preview === 'string' ? route.query.preview : undefined

  const result = useAsyncData(
    computed(() => `cms:${slug}:${locale.value}:${getPreview() ?? ''}`),
    async () => {
      const currentLocale = locale.value as Locale

      // CMS отдаёт контент только на языке по умолчанию: для остальных локалей,
      // если есть локальный перевод, используем его, а не русский ответ CMS.
      if (currentLocale !== DEFAULT_LOCALE && sources[currentLocale]) {
        return { page: (await resolveLocalPage(currentLocale))!, isFallback: true }
      }

      try {
        const page = await fetchCmsPage(slug, getPreview())
        // Если CMS не прислала метаданные, берём локальные, чтобы у страницы не пропал title
        if (!page.meta) {
          const localMeta = (await resolveLocalPage(currentLocale))?.meta
          if (localMeta) page.meta = localMeta
        }
        return { page, isFallback: false }
      } catch (error) {
        // 404 — ожидаемо (страницы нет в CMS или CMS не подключена): шумим только в dev.
        // Остальные ошибки (недоступность, невалидный ответ) нужны в логах и на проде.
        const statusCode = (error as { statusCode?: number }).statusCode
        if (import.meta.dev || statusCode !== 404) {
          const message = error instanceof Error ? error.message : String(error)
          console.error(
            `[api] ошибка получения контента ${slug}, используются локальные данные:`,
            message,
          )
        }

        const page = await resolveLocalPage(currentLocale)
        if (!page) throw error
        return { page, isFallback: true }
      }
    },
  )

  usePageMeta(() => result.data.value?.page.meta)

  return result
}
