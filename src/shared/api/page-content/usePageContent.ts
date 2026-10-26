import type { ContentPage, PageContentFallback, PageContentSource } from '~/shared/api'
import { DEFAULT_LOCALE } from '~/shared/config'
import type { Locale } from '~/shared/config'
import { parseContentPage } from './parseContentPage'
import { usePageMeta } from './usePageMeta'
import { usePreviewBridge } from './usePreviewBridge'

function isContentPage(fallback: PageContentFallback): fallback is ContentPage {
  return 'blocks' in fallback
}

async function resolveSource(source?: PageContentSource) {
  return typeof source === 'function' ? await source() : source
}

async function requestCmsPage(slug: string) {
  const response = await $fetch<unknown>(`/api/cms${slug === '/' ? '/index' : slug}`)
  try {
    return parseContentPage(response)
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error)
    throw new Error(`невалидный ответ CMS: ${reason}`, { cause: error })
  }
}

/** Сколько живёт общий запрос: за это время middleware и страница получают один и тот же ответ. */
const CMS_REQUEST_TTL_MS = 3000

// Запросы живут в рамках nuxtApp (на сервере это один HTTP-запрос посетителя), чтобы не смешивать посетителей.
const cmsRequests = new WeakMap<object, Map<string, Promise<ContentPage>>>()

/**
 * Страницу читают и глобальный middleware (шапка и футер для `route.meta`), и сама страница (блоки):
 * без общего запроса при каждом переходе в сеть уходят два одинаковых запроса.
 * Ошибки не запоминаем: следующий вызов повторит запрос.
 */
export function fetchCmsPage(slug: string): Promise<ContentPage> {
  const nuxtApp = useNuxtApp()
  let requests = cmsRequests.get(nuxtApp)
  if (!requests) {
    requests = new Map()
    cmsRequests.set(nuxtApp, requests)
  }

  const cached = requests.get(slug)
  if (cached) return cached

  const request = requestCmsPage(slug)
  requests.set(slug, request)
  const forget = () => {
    if (requests.get(slug) === request) requests.delete(slug)
  }
  request.then(() => setTimeout(forget, CMS_REQUEST_TTL_MS), forget)
  return request
}

/**
 * Загружает страницу из CMS (`/api/cms<slug>`); если запрос не удался или ответ невалиден,
 * использует локальные данные.
 */
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

  const result = useAsyncData(
    computed(() => `cms:${slug}:${locale.value}`),
    async () => {
      const currentLocale = locale.value as Locale

      // CMS отдаёт контент только на языке по умолчанию: для остальных локалей,
      // если есть локальный перевод, используем его, а не русский ответ CMS.
      if (currentLocale !== DEFAULT_LOCALE && sources[currentLocale]) {
        return { page: (await resolveLocalPage(currentLocale))!, isFallback: true }
      }

      try {
        const page = await fetchCmsPage(slug)
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

  usePreviewBridge(result.data, slug)
  usePageMeta(() => result.data.value?.page.meta)

  return result
}
