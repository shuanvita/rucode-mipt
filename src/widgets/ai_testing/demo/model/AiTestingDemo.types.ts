export interface AiTestingDemoProps {
  title?: string
  image?: string
  text?: string
  cards: {
    id: string
    image: string
    text?: string
  }[]
  footerText: string
  btnText: string
}
