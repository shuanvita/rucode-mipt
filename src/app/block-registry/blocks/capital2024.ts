import { defineBlock } from '~/shared/api'

export const capital2024Blocks = [
  defineBlock({
    type: 'capital2024.hero',
    title: 'Главный экран (Capital 2024)',
    category: 'hero',
    component: () => import('~/widgets/capital-2024/hero').then((m) => m.CapitalHero),
    aliases: [{ page: '/capital-2024', type: 'hero' }],
  }),
  defineBlock({
    type: 'capital2024.about',
    title: 'О мероприятии (Capital 2024)',
    category: 'content',
    component: () => import('~/widgets/capital-2024/about').then((m) => m.CapitalAbout),
    aliases: [{ page: '/capital-2024', type: 'about' }],
  }),
  defineBlock({
    type: 'capital2024.program',
    title: 'Программа (Capital 2024)',
    category: 'content',
    component: () => import('~/widgets/capital-2024/program').then((m) => m.CapitalProgram),
    aliases: [{ page: '/capital-2024', type: 'program' }],
  }),
]
