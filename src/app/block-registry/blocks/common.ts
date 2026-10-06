import { defineBlock } from '~/shared/api'

export const commonBlocks = [
  defineBlock({
    type: 'partners',
    title: 'Партнёры',
    category: 'partners',
    component: () => import('~/widgets/partners').then((m) => m.PartnersSection),
  }),
  defineBlock({
    type: 'eventsSlider',
    title: 'Слайдер мероприятий',
    category: 'cards',
    component: () => import('~/shared/ui/events-slider').then((m) => m.EventsSlider),
    aliases: [{ page: '/ai_champ', type: 'courses' }],
  }),
  defineBlock({
    type: 'personQuote',
    title: 'Цитата человека',
    category: 'people',
    component: () => import('~/widgets/person-quote').then((m) => m.PersonQuote),
  }),
  defineBlock({
    type: 'award.hero',
    title: 'Главный экран премии',
    category: 'hero',
    component: () => import('~/widgets/award/hero').then((m) => m.AwardHero),
    aliases: [
      { page: '/award2025', type: 'hero' },
      { page: '/award2026', type: 'hero' },
    ],
  }),
  defineBlock({
    type: 'info',
    title: 'Информационный блок',
    category: 'content',
    component: () => import('~/widgets/info-block').then((m) => m.InfoBlock),
    aliases: [
      { page: '/award2025', type: 'about' },
      { page: '/award2026', type: 'about' },
      { page: '/', type: 'about' },
    ],
  }),
  defineBlock({
    type: 'award.participants',
    title: 'Участники премии',
    category: 'content',
    component: () => import('~/widgets/award/participants').then((m) => m.AwardParticipants),
    aliases: [
      { page: '/award2025', type: 'participants' },
      { page: '/award2026', type: 'participants' },
    ],
  }),
  defineBlock({
    type: 'award.stagesTimeline',
    title: 'Этапы премии',
    category: 'content',
    component: () => import('~/widgets/award/stages').then((m) => m.StagesTimeline),
    aliases: [
      { page: '/award2025', type: 'stagesTimeline' },
      { page: '/award2026', type: 'stagesTimeline' },
    ],
  }),
  defineBlock({
    type: 'peopleSlider',
    title: 'Слайдер людей',
    category: 'people',
    component: () => import('~/widgets/people-slider').then((m) => m.PeopleSlider),
    aliases: [{ page: '/capital-2024', type: 'faces' }],
  }),
  defineBlock({
    type: 'award.cta',
    title: 'Призыв к действию премии',
    category: 'cta',
    component: () => import('~/widgets/award/cta').then((m) => m.AwardCta),
    aliases: [
      { page: '/award2025', type: 'cta' },
      { page: '/award2026', type: 'cta' },
    ],
  }),
  defineBlock({
    type: 'faq',
    title: 'Вопросы и ответы',
    category: 'faq',
    component: () => import('~/widgets/faq').then((m) => m.FaqSection),
  }),
  defineBlock({
    type: 'photoGallery',
    title: 'Фотогалерея',
    category: 'media',
    component: () => import('~/widgets/home/photo-gallery').then((m) => m.PhotoGallery),
    aliases: [
      { page: '/capital-2024', type: 'photos2024' },
      { page: '/capital-2024', type: 'photos2023' },
      { page: '/', type: 'photos' },
    ],
  }),
  defineBlock({
    type: 'videoGallery',
    title: 'Видеогалерея',
    category: 'media',
    component: () => import('~/widgets/home/video-gallery').then((m) => m.VideoGallery),
    aliases: [
      { page: '/capital-2024', type: 'videos2024' },
      { page: '/capital-2024', type: 'videos2023' },
      { page: '/', type: 'videos' },
    ],
  }),
  defineBlock({
    type: 'organizers',
    title: 'Организаторы',
    category: 'partners',
    component: () => import('~/widgets/final-2024/organizers').then((m) => m.FinalOrganizers),
  }),
  defineBlock({
    type: 'telegram',
    title: 'Блок Telegram',
    category: 'cta',
    component: () => import('~/widgets/final-2024/telegram').then((m) => m.FinalTelegram),
  }),
  defineBlock({
    type: 'achievements',
    title: 'Достижения',
    category: 'cards',
    component: () => import('~/widgets/home/achievements').then((m) => m.AchievementsSection),
  }),
  defineBlock({
    type: 'directionsWork',
    title: 'Направления работы',
    category: 'cards',
    component: () => import('~/widgets/consortium/directions').then((m) => m.DirectionsWork),
    aliases: [
      { page: '/consortium', type: 'directions' },
      { page: '/practikum', type: 'about' },
    ],
  }),
  defineBlock({
    type: 'consortium.places',
    title: 'Места проведения',
    category: 'content',
    component: () => import('~/widgets/consortium-section').then((m) => m.PlacesSection),
    aliases: [
      { page: '/consortium', type: 'consortium' },
      { page: '/', type: 'consortium' },
    ],
  }),
  defineBlock({
    type: 'mws.benefits',
    title: 'Преимущества',
    category: 'cards',
    component: () => import('~/widgets/mws/benefits').then((m) => m.BenefitsSection),
    aliases: [
      { page: '/mts', type: 'benefits' },
      { page: '/mws', type: 'benefits' },
    ],
  }),
  defineBlock({
    type: 'actionSection',
    title: 'Призыв к действию',
    category: 'cta',
    component: () => import('~/widgets/mts/action-section').then((m) => m.ActionSection),
    aliases: [
      { page: '/mts', type: 'resume' },
      { page: '/mts', type: 'testskills' },
      { page: '/mts', type: 'response' },
    ],
  }),
  defineBlock({
    type: 'mws.contacts',
    title: 'Контакты',
    category: 'contacts',
    component: () => import('~/widgets/mws/contacts').then((m) => m.ContactsSection),
    aliases: [
      { page: '/mts', type: 'contacts' },
      { page: '/mws', type: 'contacts' },
    ],
  }),
]
