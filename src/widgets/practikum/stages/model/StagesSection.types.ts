export interface StagesSectionProps {
  title: string
  steps: StageItem[]
}

export interface StageItem {
  title: string
  image: string
  note?: string
  to?: string
}
