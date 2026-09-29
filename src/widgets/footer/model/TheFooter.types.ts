export interface NavLink {
  href: string
  title: string
  titleKey?: string
}

export interface FooterConfig {
  links: NavLink[]
  regulation?: NavLink
}

export type FooterConfigKey = 'home' | 'award'
