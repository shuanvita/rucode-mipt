export interface ChampNumberItem {
  id?: string
  title?: string
  text?: string
  image?: string
}

export interface ChampNumbersProps {
  title?: string
  /** Ровно четыре числа: расположение каждого задано его порядковым номером. */
  items: ChampNumberItem[]
}
