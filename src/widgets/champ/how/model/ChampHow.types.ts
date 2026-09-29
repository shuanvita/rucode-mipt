export interface ChampHowProps {
  title?: string
  stages: ChampHowStage[]
}

export interface ChampHowStage {
  title: string
  date?: string
  text?: string
  list?: string[]
  note?: string
  cta?: {
    to?: string
    text: string
  }
}
