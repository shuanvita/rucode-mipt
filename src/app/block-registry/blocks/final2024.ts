import { defineBlock } from '~/shared/api'

export const final2024Blocks = [
  defineBlock({
    type: 'final2024.hero',
    title: 'Главный экран (Финал 2024)',
    category: 'hero',
    component: () => import('~/widgets/final-2024/hero').then((m) => m.FinalHero),
    aliases: [{ page: '/final-2024', type: 'hero' }],
  }),
  defineBlock({
    type: 'final2024.about',
    title: 'О мероприятии (Финал 2024)',
    category: 'content',
    component: () => import('~/widgets/final-2024/about').then((m) => m.FinalAbout),
    aliases: [{ page: '/final-2024', type: 'about' }],
  }),
  defineBlock({
    type: 'final2024.video',
    title: 'Видео (Финал 2024)',
    category: 'media',
    component: () => import('~/widgets/final-2024/video').then((m) => m.FinalVideo),
    aliases: [{ page: '/final-2024', type: 'video' }],
  }),
  defineBlock({
    type: 'final2024.quotes',
    title: 'Цитаты (Финал 2024)',
    category: 'content',
    component: () => import('~/widgets/final-2024/quotes').then((m) => m.FinalQuotes),
    aliases: [{ page: '/final-2024', type: 'quotes' }],
  }),
  defineBlock({
    type: 'final2024.prizes',
    title: 'Призы (Финал 2024)',
    category: 'content',
    component: () => import('~/widgets/final-2024/prizes').then((m) => m.PrizesSection),
    aliases: [{ page: '/final-2024', type: 'prizes' }],
  }),
  defineBlock({
    type: 'final2024.program',
    title: 'Программа (Финал 2024)',
    category: 'content',
    component: () => import('~/widgets/final-2024/program').then((m) => m.FinalProgram),
    aliases: [{ page: '/final-2024', type: 'program' }],
  }),
  defineBlock({
    type: 'final2024.links',
    title: 'Ссылки (Финал 2024)',
    category: 'content',
    component: () => import('~/widgets/final-2024/links').then((m) => m.FinalLinks),
    aliases: [{ page: '/final-2024', type: 'links' }],
  }),
  defineBlock({
    type: 'final2024.schedule',
    title: 'Расписание (Финал 2024)',
    category: 'content',
    component: () => import('~/widgets/final-2024/schedule').then((m) => m.FinalSchedule),
    aliases: [{ page: '/final-2024', type: 'schedule' }],
  }),
  defineBlock({
    type: 'final2024.gallery',
    title: 'Галерея (Финал 2024)',
    category: 'media',
    component: () => import('~/widgets/final-2024/gallery').then((m) => m.FinalGallery),
    aliases: [{ page: '/final-2024', type: 'gallery' }],
  }),
]
