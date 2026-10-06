export interface PartnersSectionProps {
  items: {
    title: string
    /** Цвет заголовка группы; по умолчанию purple. */
    titleTone?: 'purple' | 'yellow'
    text?: string
    images: {
      src: string
      alt: string
      class?: string
    }[]
  }[]
}
