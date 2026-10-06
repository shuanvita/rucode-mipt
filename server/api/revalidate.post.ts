import { timingSafeEqual } from 'node:crypto'
import { CMS_CACHE_PREFIX } from '../utils/cmsCache'

/**
 * Вебхук публикации: сбрасывает серверный кэш страниц CMS.
 * Вызывается бэкендом с заголовком `x-revalidate-secret`.
 */
export default defineEventHandler(async (event) => {
  const { revalidateSecret } = useRuntimeConfig(event)
  const received = Buffer.from(getHeader(event, 'x-revalidate-secret') ?? '')
  const expected = Buffer.from(revalidateSecret)
  if (
    !revalidateSecret ||
    received.length !== expected.length ||
    !timingSafeEqual(received, expected)
  ) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const storage = useStorage('cache')
  const keys = await storage.getKeys(CMS_CACHE_PREFIX)
  await Promise.all(keys.map((key) => storage.removeItem(key)))

  return { ok: true, cleared: keys.length }
})
