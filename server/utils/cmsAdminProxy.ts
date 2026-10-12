import { isCmsAdminAuthorized } from './cmsAdminAuth'

/**
 * Прокси админки CMS: `/cms-admin/**` -> `NUXT_CMS_ADMIN_UPSTREAM` (по умолчанию http://127.0.0.1:3100).
 *
 * Временное решение для демонстрации, пока CMS не вынесена на свой сервер с nginx. У админки нет
 * собственного входа (её серверная часть подставляет служебный токен API), поэтому единственная защита
 * это basic auth ниже. Проверка стоит в самом обработчике, а не в отдельном middleware: любой запрос,
 * дошедший до прокси, уже проверен, и разница в разборе адреса не позволит её обойти.
 *
 * Админку нужно собирать и запускать с `NUXT_APP_BASE_URL=/cms-admin/`.
 */
export const cmsAdminProxy = defineEventHandler((event) => {
  const { cmsAdminUser, cmsAdminPassword, cmsAdminUpstream } = useRuntimeConfig(event)

  // Не настроено: админки на сайте нет вовсе (404, а не 401, чтобы не выдавать её существование).
  if (!cmsAdminUser || !cmsAdminPassword || !cmsAdminUpstream) {
    throw createError({ statusCode: 404, message: 'Not Found' })
  }

  setResponseHeader(event, 'x-robots-tag', 'noindex, nofollow')

  if (!isCmsAdminAuthorized(getHeader(event, 'authorization'), cmsAdminUser, cmsAdminPassword)) {
    setResponseHeaders(event, {
      'cache-control': 'no-store',
      'www-authenticate': 'Basic realm="CMS", charset="UTF-8"',
    })
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const url = event.path ?? ''
  const [pathname = ''] = url.split('?')
  // Адрес админки с префиксом всегда оканчивается слэшем: без него относительные ссылки ломаются.
  if (pathname === '/cms-admin') {
    return sendRedirect(event, `/cms-admin/${url.slice(pathname.length)}`, 301)
  }

  return proxyRequest(event, `${cmsAdminUpstream.replace(/\/+$/, '')}${url}`, {
    // Заголовок браузера (basic auth сайта) на админку не пересылается: токен API подставляет сама админка.
    headers: { authorization: '' },
  })
})
