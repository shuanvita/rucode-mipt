export interface TracksSectionProps {
  title?: string
  cards: TrackCardProps[]
}

export interface TrackCardProps {
  id: string
  image?: string
  tag?: string
  tagColor?: 'blue' | 'emerald' | 'amber' | 'rose'
  text?: string
  links?: {
    id: string
    text: string
    to: string
  }[]
}
