export interface InternshipSectionProps {
  title: string
  description: string
  cards: {
    title: string
    text: string
    image: string
  }[]
  action: {
    text: string
    to: string
  }
}
