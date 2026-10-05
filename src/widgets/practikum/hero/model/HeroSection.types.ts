export interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  audience: {
    title: string
    items: string[]
  }
  actions: {
    text: string
    to: string
  }[]
  image: string
}
