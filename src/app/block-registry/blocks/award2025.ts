import { defineBlock } from '~/shared/api'

export const award2025Blocks = [
  defineBlock({
    type: 'award2025.whyParticipate',
    title: 'Почему участвовать (Премия 2025)',
    category: 'content',
    component: () => import('~/widgets/award2025/why-participate').then((m) => m.WhyParticipate),
    aliases: [{ page: '/award2025', type: 'whyParticipate' }],
  }),
  defineBlock({
    type: 'award2025.nominationsTabs',
    title: 'Номинации (Премия 2025)',
    category: 'content',
    component: () => import('~/widgets/award2025/nominations-tabs').then((m) => m.NominationsTabs),
    aliases: [{ page: '/award2025', type: 'nominationsTabs' }],
  }),
  defineBlock({
    type: 'award2025.awardCeremony',
    title: 'Церемония награждения (Премия 2025)',
    category: 'content',
    component: () => import('~/widgets/award2025/award-ceremony').then((m) => m.AwardCeremony),
    aliases: [{ page: '/award2025', type: 'awardCeremony' }],
  }),
]
