export interface DirectionsWorkProps {
  title: string
  cards: DirectionsCardProps[]
}

export interface DirectionsCardProps {
  icon: string
  title?: string
  description?: string
}
