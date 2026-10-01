export interface HeroSectionProps {
  marquee: string
  title: string
  tags: string[]
  action: {
    text: string
  }
  document: {
    to: string
    text: string
  }
  image: string
}
