import { defineBlock } from '~/shared/api'

export const aiChampBlocks = [
  defineBlock({
    type: 'aiChamp.hero',
    title: 'Главный экран (AI Champ)',
    category: 'hero',
    component: () => import('~/widgets/ai_champ/hero').then((m) => m.AiChampHero),
    aliases: [{ page: '/ai_champ', type: 'hero' }],
  }),
  defineBlock({
    type: 'aiChamp.benefits',
    title: 'Преимущества (AI Champ)',
    category: 'content',
    component: () => import('~/widgets/ai_champ/benefits').then((m) => m.AiChampBenefits),
    aliases: [{ page: '/ai_champ', type: 'benefits' }],
  }),
  defineBlock({
    type: 'aiChamp.leagues',
    title: 'Лиги (AI Champ)',
    category: 'content',
    component: () => import('~/widgets/ai_champ/leagues').then((m) => m.AiChampLeagues),
    aliases: [{ page: '/ai_champ', type: 'leagues' }],
  }),
  defineBlock({
    type: 'aiChamp.stages',
    title: 'Этапы (AI Champ)',
    category: 'content',
    component: () => import('~/widgets/ai_champ/stages').then((m) => m.AiChampStages),
    aliases: [{ page: '/ai_champ', type: 'stages' }],
  }),
  defineBlock({
    type: 'aiChamp.tasks',
    title: 'Задачи (AI Champ)',
    category: 'content',
    component: () => import('~/widgets/ai_champ/tasks').then((m) => m.AiChampTasks),
    aliases: [{ page: '/ai_champ', type: 'tasks' }],
  }),
  defineBlock({
    type: 'aiChamp.preparation',
    title: 'Подготовка (AI Champ)',
    category: 'content',
    component: () => import('~/widgets/ai_champ/preparation').then((m) => m.AiChampPreparation),
    aliases: [{ page: '/ai_champ', type: 'preparation' }],
  }),
  defineBlock({
    type: 'aiChamp.materials',
    title: 'Материалы (AI Champ)',
    category: 'content',
    component: () => import('~/widgets/ai_champ/materials').then((m) => m.AiChampMaterials),
    aliases: [{ page: '/ai_champ', type: 'materials' }],
  }),
]
