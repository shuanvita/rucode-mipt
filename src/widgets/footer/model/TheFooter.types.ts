export interface NavLink {
  href: string
  title: string
  titleKey?: string
}

export interface FooterEmailGroup {
  /** Заголовок группы; если не задан — показывается только email */
  title?: string
  titleKey?: string
  email: string
}

export interface FooterContacts {
  /** Основной email в центральной колонке; null — не показывать */
  email: string | null
  /** Дополнительная информация: отдельная колонка слева от основных контактов */
  extraGroups?: FooterEmailGroup[]
  /** Заголовок над телефоном (например, «Связь с организаторами») */
  phoneTitle?: string
  phoneTitleKey?: string
  /** Телефон для отображения и для tel:-ссылки */
  phone: { label: string; href: string }
  workHours: string
  workHoursKey?: string
}

export interface FooterConfig {
  links: NavLink[]
  regulation?: NavLink
  /** Переопределяет контакты по умолчанию (см. defaultFooterContacts) */
  contacts?: Partial<FooterContacts>
}

export type FooterConfigKey =
  'home' | 'award2026' | 'award2025' | 'ai_champ' | 'aitesting' | 'champ'
