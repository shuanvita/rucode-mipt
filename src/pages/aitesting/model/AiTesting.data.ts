import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'

const hero = {
  title: 'Всероссийское тестирование RuCode по искусственному интеллекту',
  description: [
    'Прими участие во Всероссийском тестировании и узнай, насколько хорошо ты разбираешься в технологиях искусственного интеллекта!',
    'Прокачивай свои знания и выигрывай призы!',
  ],
  image: '/images/ai-testing/hero.png',
  cta: {
    to: 'https://edu.mipt.ru/member/meroprijatija/vserossiyskoe-testirovanie-rucode-po-iskusstvennomu-intellektu-2026',
    text: 'Принять участие',
  },
}

export const aiTestingData: ContentPage = {
  slug: '/aitesting',
  version: 1,
  blocks: [createFallbackBlock('hero', 10, hero)],
}
