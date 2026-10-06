import { defineBlock } from '~/shared/api'

export const homeBlocks = [
  defineBlock({
    type: 'home.hero',
    title: 'Главный экран (Главная)',
    category: 'hero',
    component: () => import('~/widgets/home/hero').then((m) => m.HomeHero),
    aliases: [{ page: '/', type: 'hero' }],
  }),
  defineBlock({
    type: 'home.tracks',
    title: 'Треки (Главная)',
    category: 'content',
    component: () => import('~/widgets/home/tracks').then((m) => m.TracksSection),
    aliases: [{ page: '/', type: 'tracks' }],
  }),
  defineBlock({
    type: 'home.calendar',
    title: 'Календарь (Главная)',
    category: 'content',
    component: () => import('~/widgets/home/calendar').then((m) => m.CalendarSection),
    aliases: [{ page: '/', type: 'calendar' }],
  }),
]
