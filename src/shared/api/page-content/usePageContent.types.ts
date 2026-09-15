export interface CmsBlock<T extends string = string, D = Record<string, unknown>> {
  id: string
  type: T
  order: number
  enabled: boolean
  data: D
}

export interface CmsPage {
  slug: string
  version: number
  blocks: CmsBlock[]
}
