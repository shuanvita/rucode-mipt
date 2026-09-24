import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'
import type { AiChampBenefitsProps } from '~/widgets/ai_champ/benefits'

const hero = {
  title:
    '<span class="text-yellow-primary text-[40px] tracking-[0.04px]">Чемпионат</span><br /><span class="text-[60px]">RuCode_</span><br /><span class="text-[30px] lowercase text-yellow-primary tracking-normal font-semibold">по искусственному интеллекту</span>',
  description: [
    'Чемпионат RuCode по ИИ — твой шанс побороться за ценные призы, прокачать навыки на реальных задачах, пообщаться с экспертами и сделать шаг к карьере в ИТ.',
    'Прими вызов, решай задачи, побеждай и попади в сообщество, где развивают искусственный интеллект в России!',
  ],
  image: '/images/ai_champ/hero.png',
}

const benefits: AiChampBenefitsProps = {
  title: 'Участников ждут',
  items: [
    {
      id: crypto.randomUUID(),
      image: '/images/ai_champ/benefit-1.png',
      text: 'реальные ML/DS-задачи от компаний-партнёров',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/ai_champ/benefit-2.png',
      text: 'тренировочный и соревновательный треки',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/ai_champ/benefit-3.png',
      text: 'задачи разных уровней сложности',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/ai_champ/benefit-4.png',
      text: 'возможность получить призы, сертификаты и карьерные возможности',
    },
  ],
  quote:
    'Решайте задачи, улучшайте модели, защищайте решения перед экспертами индустрии и становитесь частью сообщества RuCode.',
}

export const aiChampData: ContentPage = {
  slug: '/ai_champ',
  version: 1,
  blocks: [createFallbackBlock('hero', 10, hero), createFallbackBlock('benefits', 20, benefits)],
}
