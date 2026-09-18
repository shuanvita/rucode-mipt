import type { HomeHeroProps } from '~/widgets/home/hero'
import type { InfoBlockProps } from '~/widgets/info-block'
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

const about: InfoBlockProps = {
  title: 'О фестивале',
  description:
    'Всероссийский фестиваль RuCode: искусственный интеллект в пространстве науки и технологий — объединяет всех, кто интересуется применением ИИ в научных исследованиях, образовании и технике. Программа фестиваля включает четыре направления: научпоп, образование, достижения и карьера, где участников ждут лекции и подкасты, научно-популярные тесты, а также чемпионат по искусственному интеллекту. Организаторами фестиваля, наряду с МФТИ, выступают российские вузы, научные центры и образовательные организации и ведущие ИТ-компании России. Выбирай свой трек и участвуй в фестивале RuCode! Уже открыта регистрация на <a class="text-purple-primary underline hover:text-fg hover:no-underline transition-all duration-200" href="/champ">чемпионат РуКод по алгоритмическому программированию</a>.',
  descriptionClass: 'max-w-180',
  isBackground: true,
}

const achievements = {
  title: 'Достижения 2025 года',
  cards: [
    {
      id: crypto.randomUUID(),
      image: '/images/home/achievements-1.png',
      text: 'Лауреат Премии Рунета в номинации «Образовательный проект в ИТ»',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/home/achievements-2.png',
      text: 'Номинация «За вклад в развитие практического образования в сфере искусственного интеллекта» первой в России национальной премией сообществ',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/home/achievements-3.png',
      text: '«Самое массовое соревнование по программированию» по версии Книги Рекордов России 2025 г.',
    },
  ],
}

const tracks = {
  title: 'Треки фестиваля',
  cards: [
    {
      id: crypto.randomUUID(),
      image: '/images/home/track-1.png',
      tag: '#научпоп',
      tagClass: 'text-blue-400 border-blue-400',
      text: 'Рассказываем простым языком и доступно объясняем о возможностях применения искусственного интеллекта и достижениях российских исследователей в этой области.',
      links: [
        {
          id: crypto.randomUUID(),
          text: 'Всероссийское тестирование RuCode по искусственному интеллекту',
          to: 'https://aitesting.rucode.net',
        },
        {
          id: crypto.randomUUID(),
          text: 'RuCode.Премия',
          to: '/award2026',
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      image: '/images/home/track-2.png',
      tag: '#образование',
      tagClass: 'text-emerald-300 border-emerald-300',
      text: 'В образовательный трек фестиваля RuCode входят онлайн-курсы по искусственному интеллекту и алгоритмическому программированию, интенсивы с лекциями от ведущих экспертов отрасли.',
      links: [
        {
          id: crypto.randomUUID(),
          text: 'RuCode.Премия',
          to: '/award2026',
        },
        {
          id: crypto.randomUUID(),
          text: 'Сборы к IOI',
          to: '#',
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      image: '/images/home/track-3.png',
      tag: '#достижения',
      tagClass: 'text-amber-400 border-amber-400',
      text: 'Участники могут посоревноваться на разных уровнях чемпионата по искусственному интеллекту, проверить себя в тестировании и побороться за престижную премию Rucode.',
      links: [
        {
          id: crypto.randomUUID(),
          text: 'Всероссийское тестирование RuCode по искусственному интеллекту',
          to: 'https://aitesting.rucode.net',
        },
        {
          id: crypto.randomUUID(),
          text: 'Чемпионат RuCode по искусственному интеллекту',
          to: '/ai_champ',
        },
        {
          id: crypto.randomUUID(),
          text: 'Чемпионат RuCode по алгоритмическому программированию',
          to: '/champ',
        },
        {
          id: crypto.randomUUID(),
          text: 'RuCode.Премия',
          to: '/award2026',
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      image: '/images/home/track-4.png',
      tag: '#карьера',
      tagClass: 'text-rose-500 border-rose-500',
      text: 'Участвуй в карьерных лекциях от HR экспертов и строй успешную карьеру в IT, используя навыки и достижения, полученные в образовательных программах и чемпионатах RuCode.',
      links: [
        {
          id: crypto.randomUUID(),
          text: 'RuCode.Премия',
          to: '/award2026',
        },
      ],
    },
  ],
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
  blocks: [
    createFallbackBlock('hero', 10, hero),
    createFallbackBlock('about', 20, about),
    createFallbackBlock('achievements', 30, achievements),
    createFallbackBlock('tracks', 40, tracks),
    createFallbackBlock('partners', 80, partners),
  ],
}
