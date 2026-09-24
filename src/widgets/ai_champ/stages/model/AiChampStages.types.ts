export interface AiChampStagesProps {
  title?: string
  items: AiChampStageCardProps[]
}

export interface AiChampStageCardProps {
  id: string
  description?: string[]
  reverse?: boolean
}
