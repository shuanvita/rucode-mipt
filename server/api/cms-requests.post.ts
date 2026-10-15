import { buildCmsRequestBody } from '../utils/cmsRequest'

/**
 * Приём заявки с формы сайта: `POST /api/cms-requests` -> `POST {NUXT_CMS_BASE_URL}/requests`.
 *
 * Адрес CMS приватный (в браузер не попадает), поэтому форма отправляет заявку на сайт, а сервер
 * пересылает её в crito-api. Пересылается только проверенное тело `{ form, fields, pageUrl }`:
 * лишние ключи и заголовки посетителя в CMS не уходят. Без `NUXT_CMS_BASE_URL` отвечает 404,
 * и форма полагается на старый обработчик.
 */
export default defineEventHandler(async (event) => {
  const { cmsBaseUrl } = useRuntimeConfig(event)
  if (!cmsBaseUrl) throw createError({ statusCode: 404, message: 'CMS не настроена' })

  const body = buildCmsRequestBody(await readBody(event))
  if (!body) throw createError({ statusCode: 400, message: 'Некорректная заявка' })

  try {
    await $fetch(`${cmsBaseUrl.replace(/\/+$/, '')}/requests`, {
      method: 'POST',
      body,
      timeout: 5000,
    })
  } catch (error) {
    const statusCode = (error as { statusCode?: number }).statusCode
    // 4xx от CMS (лимит, неверные данные, нет проекта) отдаём как есть, остальное это 502.
    if (statusCode && statusCode >= 400 && statusCode < 500) {
      throw createError({ statusCode, message: 'Заявка не принята' })
    }
    console.error('[cms] ошибка приёма заявки:', error)
    throw createError({ statusCode: 502, message: 'CMS недоступна' })
  }

  setResponseStatus(event, 201)
  return { accepted: true }
})
