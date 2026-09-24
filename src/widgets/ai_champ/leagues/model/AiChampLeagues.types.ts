export interface AiChampLeaguesProps {
  title?: string
  items?: AiChampLeaguesCardProps[]
  action?: {
    to: string
    text: string
  }
}

export interface AiChampLeaguesCardProps {
  id: string
  title: string
  description?: string[]
  image: string
  reverse?: boolean
}
