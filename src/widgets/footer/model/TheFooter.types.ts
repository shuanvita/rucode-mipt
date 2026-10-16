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

export interface FooterContacts {
  email: string | null
  link?: { label: string; href: string }
  extraGroups?: FooterEmailGroup[]
  phoneTitle?: string
  phoneTitleKey?: string
  phone: { label: string; href: string } | null
  workHours: string | null
  workHoursKey?: string
}

export interface FooterConfig {
  links: NavLink[]
  regulation?: NavLink | null
  contacts?: Partial<FooterContacts>
}

/**
 * Данные футера страницы из CMS (поле `footer` страницы, форма — `footerSchema` манифеста).
 * В отличие от `FooterConfig` здесь только то, что редактор может задать: переводов (`titleKey`) нет.
 */
export interface FooterData {
  links: NavLink[]
  regulation?: { href: string; title: string }
  contacts?: {
    email?: string
    link?: { label: string; href: string }
    phoneTitle?: string
    phone?: { label: string; href: string }
    workHours?: string
    extraGroups?: { title?: string; email: string }[]
  }
}

export type FooterConfigKey =
  | 'home'
  | 'award2026'
  | 'award2025'
  | 'ai_champ'
  | 'aitesting'
  | 'champ'
  | 'consortium'
  | 'mws'
  | 'mts'
  | 'practikum'
  | 'final2024'
  | 'capital2024'
