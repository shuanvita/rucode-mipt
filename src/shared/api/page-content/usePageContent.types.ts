export interface ContentBlock<T = unknown> {
  id: string
  type: string
  order: number
  enabled: boolean
  data: T
}

export interface ContentPage {
  slug: string
  version: number
  blocks: ContentBlock[]
}
