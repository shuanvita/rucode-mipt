import { defineBlock } from '~/shared/api'

export const practikumBlocks = [
  defineBlock({
    type: 'practikum.hero',
    title: 'Главный экран (Практикум)',
    category: 'hero',
    component: () => import('~/widgets/practikum/hero').then((m) => m.HeroSection),
    aliases: [{ page: '/practikum', type: 'hero' }],
  }),
  defineBlock({
    type: 'practikum.stages',
    title: 'Этапы (Практикум)',
    category: 'content',
    component: () => import('~/widgets/practikum/stages').then((m) => m.StagesSection),
    aliases: [{ page: '/practikum', type: 'stages' }],
  }),
  defineBlock({
    type: 'practikum.materials',
    title: 'Материалы (Практикум)',
    category: 'content',
    component: () => import('~/widgets/practikum/materials').then((m) => m.MaterialsSection),
    aliases: [{ page: '/practikum', type: 'materials' }],
  }),
]
