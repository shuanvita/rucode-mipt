export interface PartnersSectionProps {
  items: {
    title: string
    titleClass?: string
    text?: string
    textClass?: string
    images: {
      src: string
      alt: string
      class?: string
    }[]
  }[]
}
