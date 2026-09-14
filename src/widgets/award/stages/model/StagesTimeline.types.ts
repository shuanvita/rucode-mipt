export interface StagesTimelineProps {
  title?: string
  stages: StageCardProps[]
}

export interface StageCardProps {
  number?: number
  title?: string
  description?: string
  variant?: 'active' | 'secret'
  span?: 'full' | 'double'
}
