export interface ChampTracksProps {
  title?: string
  description?: string
  cards: ChampTrackCard[]
}

export interface ChampTrackCard {
  image: string
  title: string
  text: string
  color: string
}
