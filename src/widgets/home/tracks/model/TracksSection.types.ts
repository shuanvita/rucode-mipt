export interface TracksSectionProps {
  title?: string
  cards: TrackCardProps[]
}

export interface TrackCardProps {
  id: string
  image?: string
  tag?: string
  tagClass?: string
  text?: string
  links?: {
    id: string
    text: string
    to: string
  }[]
}
