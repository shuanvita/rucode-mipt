export interface GallerySlide {
  image: string
  title?: string
  videoUrl?: string
}

export interface GallerySectionProps {
  title: string
  slides: GallerySlide[]
}
