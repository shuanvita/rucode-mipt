export interface AiChampTasksProps {
  title?: string
  description?: string
  subtitle?: string
  btnText?: string
  visibleCards?: AiChampTaskCardProps[]
  hiddenCards?: AiChampTaskCardProps[]
  hiddenContent?: string
  hideText?: string
  action?: {
    to: string
    text: string
  }
}

export interface AiChampTaskCardProps {
  id: string
  badge?: {
    text: string
    variant: 'base' | 'pro'
  }
  title?: string
  subtitle?: string
  logo?: string
  description?: string
  footer?: string
}
