export interface ChampFaqProps {
  title?: string
  items: ChampFaqItem[]
  cta?: {
    to?: string
    text: string
  }
}

export interface ChampFaqItem {
  question: string
  answer?: string
}
