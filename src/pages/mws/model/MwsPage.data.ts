import type { HeroSectionProps } from '~/widgets/mws/hero'
import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'

const hero: HeroSectionProps = {
  title: 'MWS',
  description: '',
}

export const mwsPageData: ContentPage = {
  slug: '/mws',
  version: 1,
  blocks: [createFallbackBlock('hero', 10, hero)],
}
