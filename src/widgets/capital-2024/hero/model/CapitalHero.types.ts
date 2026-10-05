export interface CapitalHeroProps {
  titleImage: string
  titleAlt: string
  badge: string
  lead: string
  description: string
  programLink: {
    text: string
    href: string
  }
  action: {
    text: string
  }
  facts: {
    label: string
    value: string
  }[]
  image: string
  imageAlt: string
}
