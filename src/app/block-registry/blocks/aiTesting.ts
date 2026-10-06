import { defineBlock } from '~/shared/api'

export const aiTestingBlocks = [
  defineBlock({
    type: 'aiTesting.hero',
    title: 'Главный экран (AI Testing)',
    category: 'hero',
    component: () => import('~/widgets/ai_testing/hero').then((m) => m.AiTestingHero),
    aliases: [{ page: '/aitesting', type: 'hero' }],
  }),
  defineBlock({
    type: 'aiTesting.format',
    title: 'Формат (AI Testing)',
    category: 'content',
    component: () => import('~/widgets/ai_testing/format').then((m) => m.AiTestingFormat),
    aliases: [{ page: '/aitesting', type: 'format' }],
  }),
  defineBlock({
    type: 'aiTesting.calendar',
    title: 'Календарь (AI Testing)',
    category: 'content',
    component: () => import('~/widgets/ai_testing/dates').then((m) => m.AiTestingDates),
    aliases: [{ page: '/aitesting', type: 'calendar' }],
  }),
  defineBlock({
    type: 'aiTesting.championships',
    title: 'Чемпионаты (AI Testing)',
    category: 'content',
    component: () => import('~/widgets/ai_testing/calendar').then((m) => m.AiTestingCalendar),
    aliases: [{ page: '/aitesting', type: 'championships' }],
  }),
  defineBlock({
    type: 'aiTesting.demo',
    title: 'Демо (AI Testing)',
    category: 'content',
    component: () => import('~/widgets/ai_testing/demo').then((m) => m.AiTestingDemo),
    aliases: [{ page: '/aitesting', type: 'demo' }],
  }),
  defineBlock({
    type: 'aiTesting.about',
    title: 'О мероприятии (AI Testing)',
    category: 'content',
    component: () => import('~/widgets/ai_testing/about').then((m) => m.AiTestingAbout),
    aliases: [{ page: '/aitesting', type: 'about' }],
  }),
]
