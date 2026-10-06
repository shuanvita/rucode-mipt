import { defineBlock } from '~/shared/api'

export const mtsBlocks = [
  defineBlock({
    type: 'mts.hero',
    title: 'Главный экран (МТС)',
    category: 'hero',
    component: () => import('~/widgets/mts/hero').then((m) => m.HeroSection),
    aliases: [{ page: '/mts', type: 'hero' }],
  }),
  defineBlock({
    type: 'mts.internship',
    title: 'Стажировка (МТС)',
    category: 'content',
    component: () => import('~/widgets/mts/internship').then((m) => m.InternshipSection),
    aliases: [{ page: '/mts', type: 'internship' }],
  }),
  defineBlock({
    type: 'mts.products',
    title: 'Продукты (МТС)',
    category: 'content',
    component: () => import('~/widgets/mts/products').then((m) => m.ProductsSection),
    aliases: [{ page: '/mts', type: 'products' }],
  }),
]
