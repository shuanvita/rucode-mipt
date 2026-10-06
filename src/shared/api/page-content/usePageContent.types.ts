import type { Locale } from '~/shared/config'

export interface ContentBlock<T = unknown> {
  id: string
  type: string
  order: number
  enabled: boolean
  data: T
  /** Якорь для ссылок вида `/#anchor`: попадает в `id` корневого элемента блока. */
  anchor?: string
  /** Версия схемы `data`: нужна для миграций данных, сохранённых по старой схеме блока. */
  schemaVersion?: number
}

/** SEO-метаданные страницы. Если заданы, перекрывают значения из `src/app/routes/*.vue`. */
export interface ContentPageMeta {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

export interface ContentPage {
  slug: string
  version: number
  blocks: ContentBlock[]
  meta?: ContentPageMeta
  /** Ключ конфигурации шапки и футера (`HeaderConfigKey`), используется страницами из CMS. */
  headerConfig?: string
  noFooterSpacing?: boolean
}

/** Готовая страница или лоадер (например, `() => import(...)`), чтобы не тянуть чужие языки в бандл. */
export type PageContentSource = ContentPage | (() => Promise<ContentPage>)

export type PageContentFallback = ContentPage | Partial<Record<Locale, PageContentSource>>
