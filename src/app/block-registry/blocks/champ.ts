import { defineBlock } from '~/shared/api'

export const champBlocks = [
  defineBlock({
    type: 'champ.hero',
    title: 'Главный экран (Чемпионат)',
    category: 'hero',
    component: () => import('~/widgets/champ/hero').then((m) => m.ChampHero),
    aliases: [{ page: '/champ', type: 'hero' }],
  }),
  defineBlock({
    type: 'champ.about',
    title: 'О мероприятии (Чемпионат)',
    category: 'content',
    component: () => import('~/widgets/champ/about').then((m) => m.ChampAbout),
    aliases: [{ page: '/champ', type: 'about' }],
  }),
  defineBlock({
    type: 'champ.numbers',
    title: 'Цифры (Чемпионат)',
    category: 'content',
    component: () => import('~/widgets/champ/numbers').then((m) => m.ChampNumbers),
    aliases: [{ page: '/champ', type: 'numbers' }],
  }),
  defineBlock({
    type: 'champ.divisions',
    title: 'Дивизионы (Чемпионат)',
    category: 'content',
    component: () => import('~/widgets/champ/divisions').then((m) => m.ChampDivisions),
    aliases: [{ page: '/champ', type: 'divisions' }],
  }),
  defineBlock({
    type: 'champ.tracks',
    title: 'Треки (Чемпионат)',
    category: 'content',
    component: () => import('~/widgets/champ/tracks').then((m) => m.ChampTracks),
    aliases: [{ page: '/champ', type: 'tracks' }],
  }),
  defineBlock({
    type: 'champ.why',
    title: 'Почему участвовать (Чемпионат)',
    category: 'content',
    component: () => import('~/widgets/champ/why').then((m) => m.ChampWhy),
    aliases: [{ page: '/champ', type: 'why' }],
  }),
  defineBlock({
    type: 'champ.how',
    title: 'Как участвовать (Чемпионат)',
    category: 'content',
    component: () => import('~/widgets/champ/how').then((m) => m.ChampHow),
    aliases: [{ page: '/champ', type: 'how' }],
  }),
  defineBlock({
    type: 'champ.venues',
    title: 'Площадки (Чемпионат)',
    category: 'content',
    component: () => import('~/widgets/champ/venues').then((m) => m.ChampVenues),
    aliases: [{ page: '/champ', type: 'venues' }],
  }),
  defineBlock({
    type: 'champ.gallery',
    title: 'Галерея (Чемпионат)',
    category: 'media',
    component: () => import('~/widgets/champ/gallery').then((m) => m.ChampGallery),
    aliases: [{ page: '/champ', type: 'gallery' }],
  }),
  defineBlock({
    type: 'champ.faq',
    title: 'faq (Чемпионат)',
    category: 'faq',
    component: () => import('~/widgets/champ/faq').then((m) => m.ChampFaq),
    aliases: [{ page: '/champ', type: 'faq' }],
  }),
]
