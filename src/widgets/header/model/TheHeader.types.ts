export interface NavLink {
  href: string
  title: string
  titleKey?: string
}

export interface HeaderConfig {
  links: NavLink[]
  partnerLogo?: {
    src: string
    alt: string
    to?: string
  }
  cta?: {
    label: string
    labelKey?: string
    to?: string
    variant?: 'primary' | 'secondary' | 'custom'
    class?: string
    hasDropdown?: boolean
    items?: NavLink[]
  }
}

export type HeaderConfigKey =
  'home' | 'award2026' | 'award2025' | 'ai_champ' | 'aitesting' | 'champ' | 'consortium' | 'mws'
