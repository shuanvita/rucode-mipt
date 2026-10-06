import { defineBlock } from '~/shared/api'

export const consortiumBlocks = [
  defineBlock({
    type: 'consortium.hero',
    title: 'Главный экран (Консорциум)',
    category: 'hero',
    component: () => import('~/widgets/consortium/hero').then((m) => m.HeroSection),
    aliases: [{ page: '/consortium', type: 'hero' }],
  }),
  defineBlock({
    type: 'consortium.festival',
    title: 'Фестиваль (Консорциум)',
    category: 'content',
    component: () => import('~/widgets/consortium/festival').then((m) => m.FestivalSection),
    aliases: [{ page: '/consortium', type: 'festival' }],
  }),
  defineBlock({
    type: 'consortium.participants',
    title: 'Участники (Консорциум)',
    category: 'content',
    component: () => import('~/widgets/consortium/participants').then((m) => m.ParticipantsSection),
    aliases: [{ page: '/consortium', type: 'participants' }],
  }),
  defineBlock({
    type: 'consortium.steps',
    title: 'Шаги (Консорциум)',
    category: 'content',
    component: () => import('~/widgets/consortium/steps').then((m) => m.StepsSection),
    aliases: [{ page: '/consortium', type: 'steps' }],
  }),
  defineBlock({
    type: 'consortium.gallery',
    title: 'Галерея (Консорциум)',
    category: 'media',
    component: () => import('~/widgets/consortium/gallery').then((m) => m.GallerySection),
    aliases: [{ page: '/consortium', type: 'gallery' }],
  }),
  defineBlock({
    type: 'consortium.benefits',
    title: 'Преимущества (Консорциум)',
    category: 'content',
    component: () => import('~/widgets/consortium/benefits').then((m) => m.BenefitsSection),
    aliases: [{ page: '/consortium', type: 'benefits' }],
  }),
]
