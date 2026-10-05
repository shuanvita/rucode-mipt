export type BenefitSize = 'sm' | 'md' | 'lg'

export interface BenefitTextCard {
  text: string
  size?: BenefitSize
}

export interface BenefitImageCard {
  image: string
}

export type BenefitItem = BenefitTextCard | BenefitImageCard

export interface BenefitsSectionProps {
  title: string
  rows: BenefitItem[][]
}
