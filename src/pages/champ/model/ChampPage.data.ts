import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'
import type { ChampHeroProps } from '~/widgets/champ/hero'

const hero: ChampHeroProps = {
  title: 'Международный чемпионат РУКОД_',
  description: ['Интеллектуальный вызов для тех, кто выбирает путь в ИТ'],
  image: '/images/champ/hero.png',
  cta: {
    to: 'https://edu.mipt.ru/member/meroprijatija/mezhdunarodnyy-chempionat-rucode',
    text: 'Зарегистрироваться',
  },
}

export const champPageData: ContentPage = {
  slug: '/champ',
  version: 1,
  blocks: [createFallbackBlock('hero', 10, hero)],
}
