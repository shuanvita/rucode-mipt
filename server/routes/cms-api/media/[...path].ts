import { getCmsApiBase } from '../../../utils/cmsApiBase'
import { getCmsMediaKey } from '../../../utils/cmsMedia'

/**
 * Публичная отдача файлов медиатеки CMS: `/cms-api/media/<project>/<sha256>.<ext>`.
 *
 * Ссылки на загруженные в админке файлы строятся от `PUBLIC_BASE_URL` CMS (`<домен>/cms-api/media/...`).
 * Пока перед CMS нет nginx, сайт сам отдаёт эти файлы, читая их у API по адресу `NUXT_CMS_BASE_URL`.
 * Файлы публичны по замыслу CMS (имя содержит SHA-256 содержимого); доступны только GET и HEAD.
 */
export default defineEventHandler((event) => {
  if (event.method !== 'GET' && event.method !== 'HEAD') {
    throw createError({ statusCode: 405, message: 'Method Not Allowed' })
  }

  const { cmsBaseUrl, cmsApiUrl } = useRuntimeConfig(event)
  const apiBase = getCmsApiBase(cmsApiUrl, cmsBaseUrl)
  const key = apiBase ? getCmsMediaKey(event.path) : null
  if (!apiBase || !key) throw createError({ statusCode: 404, message: 'Not Found' })

  return proxyRequest(event, `${apiBase}/media/${key}`, {
    headers: { authorization: '', cookie: '' },
  })
})
