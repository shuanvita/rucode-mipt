import type { ContentPage } from './usePageContent.types'

/**
 * Переносит настройки страницы из CMS в `route.meta`: лейаут читает шапку, футер и отступ футера до рендера страницы.
 * Если у страницы нет шапки или футера, значения из `definePageMeta` (у `champ.vue` — шапка с переводами,
 * ключ `footerConfig` у статических страниц) остаются.
 */
export function applyCmsPageMeta(
  meta: Record<string | symbol, unknown>,
  page: Pick<ContentPage, 'header' | 'footer' | 'noFooterSpacing'>,
) {
  if (page.header) meta.header = page.header
  if (page.footer) meta.footer = page.footer
  if (page.noFooterSpacing) meta.noFooterSpacing = true
}
