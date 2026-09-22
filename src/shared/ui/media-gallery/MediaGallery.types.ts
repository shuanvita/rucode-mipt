export interface MediaCardProps {
  image: string
  videoUrl?: string
  alt?: string
  caption?: string
  tags?: {
    label: string
    color?: string
  }[]
  aspect?: 'photo' | 'video'
}
