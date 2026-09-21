export interface ConsortiumSectionProps {
  title: string
  description: string
  cards: ConsortiumCardProps[]
  hint?: string
  imageMap: string
  action?: {
    text: string
    to: string
  }
}

export interface ConsortiumCardProps {
  id: string
  side?: 'left' | 'right'
  city: string
  items: {
    id: string
    title: string
    image: string
    description?: string
  }[]
  coordinates: {
    x: `${number}%`
    y: `${number}%`
  }
}
