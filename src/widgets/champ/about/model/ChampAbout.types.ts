export interface ChampAboutProps {
  title?: string
  description?: string
  cards: ChampAboutCardProps[]
}

export interface ChampAboutCardProps {
  id: string
  image?: string
  title?: string
  text?: string
}
