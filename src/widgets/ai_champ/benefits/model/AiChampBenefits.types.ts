export interface AiChampBenefitsProps {
  title: string
  items: AiChampBenefitCardProps[]
  quote?: string
}

export interface AiChampBenefitCardProps {
  id: string
  image: string
  text: string
}
