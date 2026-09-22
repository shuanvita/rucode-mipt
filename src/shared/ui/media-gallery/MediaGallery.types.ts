export interface MediaTag {
  label: string
  color?: string
}

export interface MediaCardProps {
  image: string
  videoUrl?: string
  alt?: string
  caption?: string
  tags?: {
    label: string
    color?: string
  }[]
}

export interface MediaGalleryProps {
  title?: string
  items: MediaCardProps[]
}

export type MediaAspect = 'photo' | 'video'
