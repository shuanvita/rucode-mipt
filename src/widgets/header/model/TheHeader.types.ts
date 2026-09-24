export interface NavLink {
  href: string
  title: string
}

export interface HeaderConfig {
  links: NavLink[]
  cta?: {
    label: string
    to?: string
    variant?: 'primary' | 'secondary' | 'custom'
    class?: string
    hasDropdown?: boolean
    items?: NavLink[]
  }
}

export type HeaderConfigKey = 'home' | 'award2026' | 'award2025' | 'ai_champ'
