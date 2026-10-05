export interface ProductCardProps {
  title: string
  description: string
  tags: string[]
  image: string
}

export interface ProductsSectionProps {
  title: string
  cards: ProductCardProps[]
}
