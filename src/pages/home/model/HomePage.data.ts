import type { HomeHeroProps } from '~/widgets/home/hero'
import type { PartnersSectionProps } from '~/widgets/partners'
import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'

const hero: HomeHeroProps = {
  action: {
    text: 'Хочу участвовать',
  },
  logo: '/images/home-hero-logo.svg',
  video: '/videos/hero-home.mp4',
}

const partners: PartnersSectionProps = {
  items: [
    {
      title: 'Генеральный партнёр',
      images: [
        {
          src: '/images/partners/mts.png',
          alt: 'МТС',
          class: 'w-[101px] lg:w-[178px]',
        },
      ],
    },
    {
      title: 'Партнёры',
      images: [
        {
          src: '/images/partners/sber.svg',
          alt: 'Сбер',
          class: 'w-33 lg:w-53.25',
        },
      ],
    },
  ],
}

export const homePageData: ContentPage = {
  slug: '/',
  version: 1,
  blocks: [createFallbackBlock('hero', 10, hero), createFallbackBlock('partners', 80, partners)],
}
