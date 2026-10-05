export interface CapitalAboutProps {
  audienceTitle: string
  audience: {
    icon: string
    text: string
  }[]
  invitation: {
    label: string
    /** HTML-подсказка, показывается по наведению/фокусу */
    hint: string
  }
  title: string
  photos: string[]
  /** HTML-абзацы, логотип вставляется после первого */
  paragraphs: string[]
  logo: {
    src: string
    alt: string
  }
}
