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

/**
 * Шапка страницы из CMS (форма — `headerSchema` манифеста, см. `app/block-registry/schemas/header.ts`).
 * Структурно совпадает с `HeaderData` виджета шапки: shared не импортирует виджеты.
 */
export interface ContentPageHeader {
  links?: { href: string; title: string }[]
  logo?: { src: string }
  partnerLogo?: { src: string; alt?: string; to?: string }
  supportLogos?: { src: string; alt?: string }[]
}

/**
 * Футер страницы из CMS (форма — `footerSchema` манифеста, см. `app/block-registry/schemas/footer.ts`).
 * Структурно совпадает с `FooterData` виджета футера: shared не импортирует виджеты.
 */
export interface ContentPageFooter {
  links?: { href: string; title: string }[]
  regulation?: { href: string; title: string }
  contacts?: {
    email?: string
    site?: { label: string; href: string }
    link?: { label: string; href: string }
    phoneTitle?: string
    phone?: { label: string; href: string }
    workHours?: string
    extraGroups?: { title?: string; email: string }[]
  }
}

export interface ContentPage {
  slug: string
  version: number
  blocks: ContentBlock[]
  meta?: ContentPageMeta
  /** Шапка страницы; без неё сайт рисует шапку по умолчанию без своих ссылок. */
  header?: ContentPageHeader
  /** Футер страницы; без него сайт рисует пустой футер (только логотип и соцсети). */
  footer?: ContentPageFooter
  noFooterSpacing?: boolean
}

/** Готовая страница или лоадер (например, `() => import(...)`), чтобы не тянуть чужие языки в бандл. */
export type PageContentSource = ContentPage | (() => Promise<ContentPage>)

export type PageContentFallback = ContentPage | Partial<Record<Locale, PageContentSource>>
