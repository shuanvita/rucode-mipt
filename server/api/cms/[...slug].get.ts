import { CMS_CACHE_NAME, getCmsSlug } from '../../utils/cmsCache'

async function requestPage(cmsBaseUrl: string, slug: string) {
  // Slug уходит в URL бэкенда: запрещаем выход из пути и экранируем сегменты
  if (slug.split('/').some((part) => part === '..' || part === '.')) {
    throw createError({ statusCode: 404, message: 'Страница не найдена' })
  }
  const encodedSlug = slug.split('/').map(encodeURIComponent).join('/')

  try {
    return await $fetch(`${cmsBaseUrl.replace(/\/+$/, '')}/pages/${encodedSlug}`, {
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

const getPublishedPage = defineCachedFunction(
  (cmsBaseUrl: string, slug: string) => requestPage(cmsBaseUrl, slug),
  {
    name: CMS_CACHE_NAME,
    getKey: (_cmsBaseUrl: string, slug: string) => encodeURIComponent(slug),
    maxAge: Number(process.env.NUXT_CMS_CACHE_TTL ?? 60),
    swr: false,
  },
)

export default defineEventHandler(async (event) => {
  const { cmsBaseUrl } = useRuntimeConfig(event)
  if (!cmsBaseUrl) {
    throw createError({ statusCode: 404, message: 'CMS не настроена' })
  }

  return getPublishedPage(cmsBaseUrl, getCmsSlug(event))
})
