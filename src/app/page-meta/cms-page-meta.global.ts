import { applyCmsPageMeta, fetchCmsPage } from '~/shared/api'
import { DEFAULT_LOCALE, LOCALES } from '~/shared/config'

/**
 * Шапка и отступ футера статических страниц (`index.vue`, `mts.vue` и др.) живут в CMS, а лейаут читает их
 * из `route.meta` до рендера страницы, поэтому подставляем их здесь. Страницы из CMS (`[...slug].vue`)
 * делают то же в своём middleware и отвечают 404, если страницы нет.
 * Ошибка CMS не мешает странице: она рисуется с шапкой по умолчанию и локальными блоками.
 */
export default defineNuxtRouteMiddleware(async (to) => {
  if (to.meta.layout === false || to.params.slug !== undefined) return

  // CMS отдаёт только язык по умолчанию: у остальных языков шапка задана в `definePageMeta` страницы.
  const foreignLocale = LOCALES.some(
    (locale) =>
      locale !== DEFAULT_LOCALE && (to.path === `/${locale}` || to.path.startsWith(`/${locale}/`)),
  )
  if (foreignLocale) return

  try {
    applyCmsPageMeta(to.meta, await fetchCmsPage(to.path.replace(/(.)\/+$/, '$1')))
  } catch {
    // Нет CMS или страницы в ней: остаются значения из definePageMeta.
  }
})
