export interface NavLink {
  href: string
  title: string
  titleKey?: string
}

export interface FooterEmailGroup {
  title?: string
  titleKey?: string
  email: string
}

/** Всё необязательно: виджет ничего не подставляет сам, показывается только заданное. */
export interface FooterContacts {
  email?: string
  /** Ссылка на сайт (жёлтая, над почтой). */
  site?: { label: string; href: string }
  /** Дополнительная ссылка, например Telegram-чат. */
  link?: { label: string; href: string }
  extraGroups?: FooterEmailGroup[]
  phoneTitle?: string
  phoneTitleKey?: string
  phone?: { label: string; href: string }
  workHours?: string
  workHoursKey?: string
}

/**
 * Данные футера страницы. Приходят из CMS (поле `footer` страницы, форма — `footerSchema` манифеста)
 * или из `definePageMeta({ footer })` у страниц с английской версией, где нужны переводы (`titleKey`).
 */
export interface FooterData {
  links: NavLink[]
  regulation?: NavLink
  contacts?: FooterContacts
}
