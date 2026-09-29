import type { Locale } from '~/shared/config'

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

/** Готовая страница или лоадер (например, `() => import(...)`), чтобы не тянуть чужие языки в бандл. */
export type PageContentSource = ContentPage | (() => Promise<ContentPage>)

export type PageContentFallback = ContentPage | Partial<Record<Locale, PageContentSource>>
