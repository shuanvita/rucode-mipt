export interface CapitalProgramItem {
  time: string
  title: string
  place: string
  /** Ссылка на видеозапись */
  video?: string
  /** HTML-описание, раскрывается в аккордеоне */
  content?: string
}

export interface CapitalProgramProps {
  title: string
  items: CapitalProgramItem[]
  note: string
  action: {
    text: string
  }
}
