import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'
import type { ChampHeroProps } from '~/widgets/champ/hero'
import type { ChampAboutProps } from '~/widgets/champ/about/model/ChampAbout.types.ts'

const hero: ChampHeroProps = {
  title: 'Международный чемпионат РУКОД_',
  description: ['Интеллектуальный вызов для тех, кто выбирает путь в ИТ'],
  image: '/images/champ/hero.png',
  cta: {
    to: 'https://edu.mipt.ru/member/meroprijatija/mezhdunarodnyy-chempionat-rucode',
    text: 'Зарегистрироваться',
  },
}

const about: ChampAboutProps = {
  title: 'О чемпионате',
  description:
    'Чемпионат РуКод — это международное соревнование по алгоритмическому программированию, где школьники, студенты и специалисты соревнуются в решении задач с помощью написания эффективного и оптимизированного кода. Организаторами фестиваля выступают российские вузы, научные центры и образовательные организации и ведущие ИТ-компании России',
  cards: [
    {
      id: crypto.randomUUID(),
      image: 'about-icon-1',
      title: '> 10',
      text: 'стран участниц',
    },
    {
      id: crypto.randomUUID(),
      image: 'about-icon-2',
      title: '> 40',
      text: 'площадок в России и дружественных странах',
    },
    {
      id: crypto.randomUUID(),
      image: 'about-icon-3',
      title: '> 5',
      text: 'языков программирования',
    },
    {
      id: crypto.randomUUID(),
      image: 'about-icon-4',
      title: 'Масштабный ИТ-праздник',
      text: 'на суперфинале Рукод',
    },
  ],
}

export const champPageData: ContentPage = {
  slug: '/champ',
  version: 1,
  blocks: [createFallbackBlock('hero', 10, hero), createFallbackBlock('about', 20, about)],
}
