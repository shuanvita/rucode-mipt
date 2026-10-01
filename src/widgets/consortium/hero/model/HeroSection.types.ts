export interface HeroSectionProps {
  marquee: string
  title: string
  tags: string[]
  action: {
    to: string
    text: string
  }
  document: {
    to: string
    text: string
  }
  image: string
}
