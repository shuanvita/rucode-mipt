import { defineBlock } from '~/shared/api'

export const mwsBlocks = [
  defineBlock({
    type: 'mws.hero',
    title: 'Главный экран (MWS)',
    category: 'hero',
    component: () => import('~/widgets/mws/hero').then((m) => m.HeroSection),
    aliases: [{ page: '/mws', type: 'hero' }],
  }),
  defineBlock({
    type: 'mws.products',
    title: 'Продукты (MWS)',
    category: 'content',
    component: () => import('~/widgets/mws/products').then((m) => m.ProductsSection),
    aliases: [{ page: '/mws', type: 'products' }],
  }),
  defineBlock({
    type: 'mws.stack',
    title: 'Стек (MWS)',
    category: 'content',
    component: () => import('~/widgets/mws/stack').then((m) => m.StackSection),
    aliases: [{ page: '/mws', type: 'stack' }],
  }),
  defineBlock({
    type: 'mws.internship',
    title: 'Стажировка (MWS)',
    category: 'content',
    component: () => import('~/widgets/mws/internship').then((m) => m.InternshipSection),
    aliases: [{ page: '/mws', type: 'internship' }],
  }),
  defineBlock({
    type: 'mws.resume',
    title: 'Резюме (MWS)',
    category: 'content',
    component: () => import('~/widgets/mws/resume').then((m) => m.ResumeSection),
    aliases: [{ page: '/mws', type: 'resume' }],
  }),
  defineBlock({
    type: 'mws.directions',
    title: 'Направления (MWS)',
    category: 'content',
    component: () => import('~/widgets/mws/directions').then((m) => m.DirectionsSection),
    aliases: [{ page: '/mws', type: 'directions' }],
  }),
]
