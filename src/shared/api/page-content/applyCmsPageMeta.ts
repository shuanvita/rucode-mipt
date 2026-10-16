import type { ContentPage } from './usePageContent.types'

/**
 * Переносит настройки страницы из CMS в `route.meta`: лейаут читает шапку и отступ футера до рендера страницы.
 * Если у страницы нет шапки, значение из `definePageMeta` (у `champ.vue` — шапка с переводами) остаётся.
 */
export function applyCmsPageMeta(
  meta: Record<string | symbol, unknown>,
  page: Pick<ContentPage, 'header' | 'noFooterSpacing'>,
) {
  if (page.header) meta.header = page.header
  if (page.noFooterSpacing) meta.noFooterSpacing = true
}
