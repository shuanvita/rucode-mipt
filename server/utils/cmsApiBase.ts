/**
 * Корневой адрес API CMS для прокси манифеста и медиатеки.
 *
 * `NUXT_CMS_API_URL` задаёт его явно (например `https://edu.mipt.ru/adm/cms-admin/cms-api`, когда API
 * стоит под префиксом). Без него берётся происхождение `NUXT_CMS_BASE_URL`: это верно, пока API
 * лежит в корне хоста (`http://127.0.0.1:3200/public/rucode` -> `http://127.0.0.1:3200`).
 * Пустой результат значит, что CMS не настроена.
 */
export function getCmsApiBase(cmsApiUrl: string | undefined, cmsBaseUrl: string | undefined) {
  const explicit = cmsApiUrl?.trim().replace(/\/+$/, '')
  if (explicit) return explicit
  if (!cmsBaseUrl) return ''
  try {
    return new URL(cmsBaseUrl).origin
  } catch {
    return ''
  }
}
