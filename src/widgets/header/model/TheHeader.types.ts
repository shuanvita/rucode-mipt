export interface NavLink {
  href: string
  title: string
  titleKey?: string
}

/**
 * Данные шапки страницы. Приходят из CMS (поле `header` страницы, форма — `headerSchema` манифеста)
 * или из `definePageMeta({ header })` у страниц с английской версией.
 */
export interface HeaderData {
  links: NavLink[]
  /** Показывать ссылки шапки и в футере этой страницы: свои ссылки футера тогда не используются. */
  linksInFooter?: boolean
  logo?: {
    src: string
    width?: number
    height?: number
  }
  partnerLogo?: {
    src: string
    alt?: string
    to?: string
  }
  supportLogos?: {
    src: string
    alt?: string
  }[]
}
