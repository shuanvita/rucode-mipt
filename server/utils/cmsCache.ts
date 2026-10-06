import type { H3Event } from 'h3'

/** Имя и префикс ключей кэша `server/api/cms/[...slug].get.ts` в хранилище `cache`. */
export const CMS_CACHE_NAME = 'cms'
export const CMS_CACHE_PREFIX = `nitro:functions:${CMS_CACHE_NAME}`

/** Slug страницы из `/api/cms/<slug>`; главная (`/api/cms/`) — `index`. */
export function getCmsSlug(event: H3Event) {
  const path = (event.path ?? '').split('?')[0] ?? ''
  return path.replace(/^\/?api\/cms/, '').replace(/^\/+|\/+$/g, '') || 'index'
}
