import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'
import type { ChampHeroProps } from '~/widgets/champ/hero'
import type { ChampNumbersProps } from '~/widgets/champ/numbers'
import type { ChampAboutProps } from '~/widgets/champ/about'

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

const numbers: ChampNumbersProps = {
  title: 'Рукод 2025 в цифрах',
  numbersOne: {
    title: '7',
    text: 'лет существования\nЧемпионата\n«РуКод»',
    image: '/images/champ/numbers-1.svg',
  },
  numbersTwo: {
    title: '99',
    text: 'участников\nСуперфинала',
    image: '/images/champ/numbers-4.svg',
  },
  numbersThree: {
    title: '44',
    text: 'площадки\nв России\nи зарубежом',
    image: '/images/champ/numbers-1.png',
  },
  numbersFour: {
    title: '9800',
    text: 'заявок на участие',
    image: '/images/champ/numbers-2.png',
  },
}

export const champPageData: ContentPage = {
  slug: '/champ',
  version: 1,
  blocks: [
    createFallbackBlock('hero', 10, hero),
    createFallbackBlock('about', 20, about),
    createFallbackBlock('numbers', 30, numbers),
  ],
}
