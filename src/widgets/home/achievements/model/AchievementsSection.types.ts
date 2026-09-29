export type AchievementsTitleColor = 'purple' | 'purple-light' | 'yellow' | 'white'
export type AchievementsTitleAlign = 'left' | 'center' | 'right'

export interface AchievementsSectionProps {
  title: string
  cards: AchievementCardProps[]
  titleColor?: AchievementsTitleColor
  titleAlign?: AchievementsTitleAlign
  cardShadow?: boolean
}

export interface AchievementCardProps {
  id: string
  image: string
  text: string
  shadow?: boolean
}
