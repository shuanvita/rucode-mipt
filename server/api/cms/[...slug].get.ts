import { CMS_CACHE_NAME, getCmsSlug } from '../../utils/cmsCache'

interface CmsRuntimeConfig {
  cmsBaseUrl: string
  cmsToken: string
}

async function requestPage(config: CmsRuntimeConfig, slug: string, preview?: string) {
  // Slug уходит в URL бэкенда: запрещаем выход из пути и экранируем сегменты
  if (slug.split('/').some((part) => part === '..' || part === '.')) {
    throw createError({ statusCode: 404, message: 'Страница не найдена' })
  }
  const encodedSlug = slug.split('/').map(encodeURIComponent).join('/')

  try {
    return await $fetch(`${config.cmsBaseUrl.replace(/\/+$/, '')}/pages/${encodedSlug}`, {
      headers: config.cmsToken ? { Authorization: `Bearer ${config.cmsToken}` } : undefined,
      query: preview ? { preview } : undefined,
      timeout: 5000,
    })
  } catch (error) {
    const statusCode = (error as { statusCode?: number }).statusCode
    if (statusCode === 404) {
      throw createError({ statusCode: 404, message: 'Страница не найдена' })
    }
    console.error(`[cms] ошибка получения страницы ${slug}:`, error)
    throw createError({ statusCode: 502, message: 'CMS недоступна' })
  }
}

// Кэшируются только опубликованные страницы. Черновики (`?preview=`) идут мимо этой функции:
// `shouldBypassCache` в Nitro пропускает чтение кэша, но результат всё равно записывает,
// и черновик попал бы в кэш опубликованной страницы.
const getPublishedPage = defineCachedFunction(
  (config: CmsRuntimeConfig, slug: string) => requestPage(config, slug),
  {
    name: CMS_CACHE_NAME,
    getKey: (_config: CmsRuntimeConfig, slug: string) => encodeURIComponent(slug),
    maxAge: Number(process.env.NUXT_CMS_CACHE_TTL ?? 60),
    swr: false,
  },
)

/**
 * Прокси страниц из бэкенда CMS: `GET {cmsBaseUrl}/pages/{slug}`.
 * Токен чтения хранится только на сервере. Если CMS не настроена или страницы нет,
 * отвечаем 404, а сайт использует локальные данные.
 */
export default defineEventHandler(async (event) => {
  const { cmsBaseUrl, cmsToken } = useRuntimeConfig(event)
  if (!cmsBaseUrl) {
    throw createError({ statusCode: 404, message: 'CMS не настроена' })
  }

  const config = { cmsBaseUrl, cmsToken }
  const slug = getCmsSlug(event)
  const { preview } = getQuery(event)

  if (typeof preview === 'string' && preview) {
    setHeader(event, 'cache-control', 'no-store')
    return requestPage(config, slug, preview)
  }
  return getPublishedPage(config, slug)
})
