export interface NavLink {
  href: string
  title: string
  titleKey?: string
}

export interface HeaderConfig {
  links: NavLink[]
  logo?: {
    src: string
    width: number
    height: number
  }
  partnerLogo?: {
    src: string
    alt: string
    to?: string
  }
  supportLogos?: {
    src: string
    alt: string
  }[]
}

export type HeaderConfigKey =
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
