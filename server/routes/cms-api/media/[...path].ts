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

  const { cmsBaseUrl } = useRuntimeConfig(event)
  const key = cmsBaseUrl ? getCmsMediaKey(event.path) : null
  if (!cmsBaseUrl || !key) throw createError({ statusCode: 404, message: 'Not Found' })

  // Происхождение API берётся из адреса публичного чтения: http://127.0.0.1:3200/public/rucode -> http://127.0.0.1:3200
  const origin = new URL(cmsBaseUrl).origin
  return proxyRequest(event, `${origin}/media/${key}`, {
    headers: { authorization: '', cookie: '' },
  })
})
