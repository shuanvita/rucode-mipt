import { defineBlock } from '~/shared/api'

export const award2026Blocks = [
  defineBlock({
    type: 'award2026.whyParticipate',
    title: 'Почему участвовать (Премия 2026)',
    category: 'content',
    component: () => import('~/widgets/award2026/why-participate').then((m) => m.WhyParticipate),
    aliases: [{ page: '/award2026', type: 'whyParticipate' }],
  }),
  defineBlock({
    type: 'award2026.nominationsTabs',
    title: 'Номинации (Премия 2026)',
    category: 'content',
    component: () => import('~/widgets/award2026/nominations-tabs').then((m) => m.NominationsTabs),
    aliases: [{ page: '/award2026', type: 'nominationsTabs' }],
  }),
]
