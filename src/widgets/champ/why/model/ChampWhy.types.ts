export interface ChampWhyProps {
  title?: string
  cards: ChampWhyCardProps[]
  cta?: {
    to?: string
    text: string
  }
}
export interface ChampWhyCardProps {
  image?: string
  title?: string
  text?: string
  isActive?: boolean
}
