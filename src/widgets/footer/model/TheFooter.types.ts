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

export type FooterConfigKey =
  'home' | 'award2026' | 'award2025' | 'ai_champ' | 'aitesting' | 'champ' | 'consortium' | 'mws'
