import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'
import type { ChampHeroProps } from '~/widgets/champ/hero'
import type { ChampNumbersProps } from '~/widgets/champ/numbers'
import type { ChampAboutProps } from '~/widgets/champ/about'
import type { ChampDivisionsProps } from '~/widgets/champ/divisions'
import type { ChampTracksProps } from '~/widgets/champ/tracks'
import type { ChampWhyProps } from '~/widgets/champ/why'

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

const divisions: ChampDivisionsProps = {
  title: 'О дивизионах',
  description:
    'Дивизионы — это уровни сложности чемпионата «РуКод». Участник сам выбирает, в какой дивизион подать заявку',
  cards: [
    {
      title: 'А-В',
      text: 'дивизион профессионалов для участников с опытом успешных выступлений на олимпиадных турнирах и соревнованиях по программированию национального и международного уровня',
    },
    {
      title: 'С-D',
      text: 'средний дивизион для тех, кто уже освоил основные алгоритмы и стремится развивать навыки программирования на более сложном уровне',
    },
    {
      title: 'E-F',
      text: 'младший дивизион для начинающих программистов и тех, кто делает первые шаги в мире программирования',
    },
  ],
}

const tracks: ChampTracksProps = {
  title: 'О треках',
  description:
    'Трек — это отдельное тематическое направление программы чемпионата, внутри которого участники проходят собственную образовательную и соревновательную траекторию',
  cards: [
    {
      image: '/images/champ/track-1.png',
      color: '#66C4AE',
      title: 'Образовательный',
      text: 'лекции, вебинары, банк задач, онлайн-чемпионат',
    },
    {
      image: '/images/champ/track-2.png',
      color: '#FAB417',
      title: 'Соревновательный',
      text: 'возможность проявить себя, получить опыт в портфолио, выиграть ценные призы, получить дипломы и сертификаты, мерч',
    },
    {
      image: '/images/champ/track-3.png',
      color: '#E4345B',
      title: 'Карьерные возможности',
      text: 'взаимодействие с лидерами ИТ-индустрии, партнёры-работодатели',
    },
  ],
}

const why: ChampWhyProps = {
  title: 'Зачем участвовать',
  cards: [
    {
      title: 'Практические навыки',
      text: 'Получить новые актуальные знания, отработать практические навыки и открыть новые возможности для профессионального и личного развития',
    },
    {
      image: 'champ-why-1',
      title: 'Сильное портфолио',
      text: 'Усильте своё портфолио участием в престижном ИТ-соревновании и получите дополнительный аргумент для будущих работодателей',
    },
    {
      image: 'champ-why-2',
      isActive: true,
      title: 'Подготовка к международным соревнованиям',
      text: 'Прокачайте свои алгоритмические и инженерные навыки и подготовьтесь к участию в международных соревнованиях по программированию',
    },
    {
      image: 'champ-why-3',
      title: 'Сообщество ИТ-специалистов',
      text: 'Присоединитесь к сильному профессиональному комьюнити, познакомьтесь с единомышленниками и расширьте сеть полезных контактов',
    },
    {
      title: 'Призовой фонд',
      text: 'Боритесь за призы чемпионата и получите шанс выиграть подарки от наших партнёров',
    },
  ],
  cta: {
    to: 'https://edu.mipt.ru/member/meroprijatija/mezhdunarodnyy-chempionat-rucode',
    text: 'Зарегистрироваться',
  },
}

export const champPageData: ContentPage = {
  slug: '/champ',
  version: 1,
  blocks: [
    createFallbackBlock('hero', 10, hero),
    createFallbackBlock('about', 20, about),
    createFallbackBlock('numbers', 30, numbers),
    createFallbackBlock('divisions', 40, divisions),
    createFallbackBlock('tracks', 50, tracks),
    createFallbackBlock('why', 60, why),
  ],
}
