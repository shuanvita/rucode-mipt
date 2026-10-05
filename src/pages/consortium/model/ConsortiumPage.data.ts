import type { HeroSectionProps } from '~/widgets/consortium/hero'
import type { FestivalSectionProps } from '~/widgets/consortium/festival'
import type { DirectionsWorkProps } from '~/widgets/consortium/directions'
import type { BenefitsSectionProps } from '~/widgets/consortium/benefits'
import type { ParticipantsSectionProps } from '~/widgets/consortium/participants'
import type { GallerySectionProps } from '~/widgets/consortium/gallery'
import type { StepsSectionProps } from '~/widgets/consortium/steps'
import type { PersonQuoteProps } from '~/widgets/person-quote'
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

const benefits: BenefitsSectionProps = {
  title: '7 причин присоединиться к консорциуму',
  benefits: [
    'Усиление имиджа вуза',
    'Поиск партнёров для совместных проектов',
    'Развитие карьерных возможностей студентов',
    'Масштабные ИТ-мероприятия на ваших площадках',
    'Привлечение талантливых абитуриентов',
    'Повышение качества образовательных программ',
    'Новые возможности для обмена опытом',
  ],
}

const participants: ParticipantsSectionProps = {
  title: 'Кто может стать участником консорциума?',
  subtitle: 'Образовательные, общественные, коммерческие, государственные организации, которые:',
  items: [
    'Имеют необходимую инфраструктуру для проведения конференций, лекций, семинаров, чемпионатов по алгоритмическому программированию: оборудованные аудитории и компьютерные классы, стабильный высокоскоростный интернет и прочее;',
    'Хотят и могут заниматься научно-просветительской деятельностью и проведением соревнований по алгоритмическому программированию; готовы привлекать к участию в чемпионатах по алгоритмическому программированию не менее 50 человек.',
  ],
}

const steps: StepsSectionProps = {
  title: 'Как стать участником консорциума?<br> 5 простых шагов',
  steps: [
    {
      text: 'Ознакомиться с ',
      link: {
        to: '/files/polozhenie-o-konsorcziume-1.pdf',
        text: 'Положением о консорциуме соорганизаторов',
      },
    },
    { text: 'Подать заявку на сайте' },
    {
      text: 'Принять участие в установочной встрече с представителем координатора консорциума',
    },
    { text: 'Подписать Соглашение о сотрудничестве' },
    { text: 'Стать участником консорциума соорганизаторов RuCode' },
  ],
  action: {
    text: 'Подать заявку',
  },
}

const gallery: GallerySectionProps = {
  title: 'Галерея',
  slides: [
    {
      image: '/images/consortium/gallery/video-1.webp',
      title: 'УрФУ - Столица RuCode 2023',
      videoUrl: 'https://kinescope.io/embed/898Co76bHe2phJfar1Ez2M',
    },
    {
      image: '/images/consortium/gallery/video-2.webp',
      title: 'Консорциум соорганизаторов Всероссийского фестиваля RuCode',
      videoUrl: 'https://kinescope.io/embed/ahFe1mt3gTS2cbiHDVbQot',
    },
    {
      image: '/images/consortium/gallery/video-3.webp',
      title: 'Всероссийский Классный час RuCode',
      videoUrl: 'https://kinescope.io/embed/rXZuJW68u2H7eDaYzwHLhr',
    },
    {
      image: '/images/consortium/gallery/video-4.webp',
      title: 'Вторая Всероссийская конференция GenAI Conf RuCode',
      videoUrl: 'https://kinescope.io/embed/bQFVp2EQb2Lqhju2CrXTNh',
    },
    {
      image: '/images/consortium/gallery/video-5.webp',
      title: 'Festa RuCode',
      videoUrl: 'https://kinescope.io/embed/criWgCpjrKvZBAcrcMYYuG',
    },
    {
      image: '/images/consortium/gallery/video-6.webp',
      title: 'Столица RuCode 2024 в Cеверо-Кавказском федеральном университете',
      videoUrl: 'https://kinescope.io/embed/e2xNHqXZEvoWbmgi8AeUhR',
    },
    { image: '/images/consortium/gallery/photo-1.jpg' },
    { image: '/images/consortium/gallery/photo-2.jpg' },
    { image: '/images/consortium/gallery/photo-3.jpg' },
    { image: '/images/consortium/gallery/photo-4.jpg' },
    { image: '/images/consortium/gallery/photo-5.jpg' },
    { image: '/images/consortium/gallery/photo-6.jpg' },
    { image: '/images/consortium/gallery/photo-7.jpg' },
    { image: '/images/consortium/gallery/photo-8.jpg' },
    { image: '/images/consortium/gallery/photo-9.jpg' },
    { image: '/images/consortium/gallery/photo-10.jpg' },
    { image: '/images/consortium/gallery/photo-11.jpg' },
  ],
}

const personQuote: PersonQuoteProps = {
  title: 'От первого лица',
  image: '/images/maleev.jpg',
  name: 'Алексей Малеев',
  role: 'Руководитель программного<br> комитета Всероссийского фестиваля RuCode',
  text: 'Консорциум соорганизаторов&nbsp;— это&nbsp;основа успеха Фестиваля RuCode. Совместная работа ведущих вузов, компаний и&nbsp;экспертов позволяет создать уникальную платформу для&nbsp;развития молодых талантов в&nbsp;сфере IT. Только объединив усилия, мы&nbsp;можем достичь действительно значимых результатов и&nbsp;внести вклад в&nbsp;будущее нашей страны',
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
    createFallbackBlock('benefits', 50, benefits),
    createFallbackBlock('personQuote', 60, personQuote),
    createFallbackBlock('gallery', 70, gallery),
    createFallbackBlock('participants', 80, participants),
    createFallbackBlock('steps', 90, steps),
  ],
}
