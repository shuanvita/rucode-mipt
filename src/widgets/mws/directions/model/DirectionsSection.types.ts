import type { MediaCardProps } from '~/shared/ui/media-gallery'

export interface DirectionCardProps extends MediaCardProps {
  videoUrl: string
  caption: string
  articleUrl: string
}

export interface DirectionsSectionProps {
  title: string
  cards: DirectionCardProps[]
}
