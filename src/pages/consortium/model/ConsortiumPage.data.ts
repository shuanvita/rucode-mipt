import type { HeroSectionProps } from '~/widgets/consortium/hero'
import type { FestivalSectionProps } from '~/widgets/consortium/festival'
import type { DirectionsWorkProps } from '~/widgets/consortium/directions'
import type { PlacesSectionProps } from './PlacesSection.types'
import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'

const hero: HeroSectionProps = {
  marquee: 'Университет «Сириус» - столица RuCode!',
  title:
    'Консорциум соорганизаторов Всероссийского фестиваля <span class="text-yellow-primary">RuCode</span>',
  tags: [
    'Поддерживаем инновации',
    'Помогаем молодым талантам',
    'Создаём среду для развития науки и технологий',
  ],
  action: {
    text: 'Присоединиться',
  },
  document: {
    to: '/files/polozhenie-o-konsorcziume-1.pdf',
    text: 'Положение о консорциуме соорганизаторов',
  },
  image: '/images/consortium/hero.webp',
}

const festival: FestivalSectionProps = {
  title: 'Фестиваль RuCode: главное',
  cards: [
    {
      title: '30+',
      description: 'ведущих вузов-соорганизаторов',
      icon: '/images/consortium/festival-1.svg',
    },
    {
      title: '5 лет',
      description: 'успешной работы',
      icon: '/images/consortium/festival-2.svg',
    },
    {
      title: '1 000 000',
      description: 'участников фестиваля за 5 лет',
      icon: '/images/consortium/festival-3.svg',
    },
    {
      title: 'а ещё…',
      description: 'поддержка государства и бизнеса',
      icon: '/images/consortium/festival-4.svg',
    },
  ],
}

const directions: DirectionsWorkProps = {
  title: 'Направления работы',
  cards: [
    {
      icon: 'consortium-direction-1',
      title: 'Мероприятия по популяризации науки и технологий',
      description:
        '100+ лекций, конференций, семинаров, курсов прошли за время проведения фестиваля очно в различных городах страны и в онлайн-формате',
    },
    {
      icon: 'consortium-direction-2',
      title: 'Чемпионаты по алгоритмическому программированию и искусственному интеллекту',
      description:
        'Всего проведено более 30 соревнований, а чемпионат RuCode. Final вошёл в 2024 году в Книгу рекордов России как самый массовый',
    },
    {
      icon: 'consortium-direction-3',
      title: 'Работа со студентами и молодыми специалистами',
      description:
        'Более 25 000 человек стали участниками карьерного трека и смогли получить рекомендации от экспертов ИТ-отрасли и ведущих HR-специалистов',
    },
    {
      icon: 'consortium-direction-4',
      title: 'Информационная поддержка фестиваля и вузов-соорганизаторов',
      description:
        'В 2024 году охваты материалов фестиваля в СМИ составили 37,4 млн, просмотры в социальных сетях — более 7 млн',
    },
  ],
}

const consortium: PlacesSectionProps = {
  title: 'Площадки проведения',
}

export const consortiumPageData: ContentPage = {
  slug: '/consortium',
  version: 1,
  blocks: [
    createFallbackBlock('hero', 10, hero),
    createFallbackBlock('festival', 20, festival),
    createFallbackBlock('directions', 30, directions),
    createFallbackBlock('consortium', 40, consortium),
  ],
}
