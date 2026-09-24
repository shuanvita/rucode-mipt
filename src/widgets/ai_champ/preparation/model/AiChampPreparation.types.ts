export interface AiChampPreparationProps {
  title?: string
  subtitle?: string
  caption?: string
  slides?: {
    title?: string
    description?: string[]
  }[]
  action?: {
    to: string
    text: string
  }
}
