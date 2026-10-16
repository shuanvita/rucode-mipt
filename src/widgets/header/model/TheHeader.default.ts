import type { HeaderData } from './TheHeader.types'

/** Шапка по умолчанию: логотип и меню как на главной, без своих ссылок. Ссылки и логотипы задаёт страница. */
export const defaultHeader: HeaderData = { links: [] }

/**
 * Приводит `header` из CMS к данным шапки. Форма в админке не умеет убирать необязательный объект целиком:
 * очищенная картинка оставляет `logo`/`partnerLogo` с пустым `src`, а недозаполненная ссылка или логотип
 * поддержки остаются в списке. Такое отбрасываем, иначе на сайте появятся сломанная картинка и пустая ссылка.
 */
export function resolveHeader(header: Partial<HeaderData> | undefined): HeaderData {
  const logo = header?.logo?.src ? header.logo : undefined
  const partnerLogo = header?.partnerLogo?.src ? header.partnerLogo : undefined
  const supportLogos = header?.supportLogos?.filter((item) => item.src)
  return {
    links: header?.links?.filter((link) => link.href && (link.title || link.titleKey)) ?? [],
    ...(logo ? { logo } : {}),
    ...(partnerLogo ? { partnerLogo } : {}),
    ...(supportLogos?.length ? { supportLogos } : {}),
  }
}
