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

const format = {
  title: 'Формат проведения',
  online: {
    title: 'Онлайн',
    image: '/images/ai-testing/format-1.png',
  },
  offline: {
    title: 'Очно',
    image: '/images/ai-testing/format-2.png',
  },
  text: 'Выбирай удобный формат: очно на площадках партнёров фестиваля RuCode или онлайн — на платформе МФТИ. Тестирование можно провести в любой школе — подай заявку и становись частью фестиваля! Тестирование RuCode ждет всех: школьников, студентов, преподавателей и специалистов. Самые быстрые и эрудированные получат ценные призы! Успей зарегистрироваться!',
}

const calendar = {
  cards: [
    {
      id: crypto.randomUUID(),
      link: 'https://aitesting.rucode.net/#Award2026',
      date: {
        from: {
          day: 1,
          month: 'сентября',
        },
        to: {
          day: 1,
          month: 'ноября',
        },
      },
      title: 'Успей подать заявку на проведение в своей школе',
      tags: [
        {
          id: crypto.randomUUID(),
          text: '#для школ и учителей',
          color: 'text-yellow-300',
        },
      ],
      format: {
        text: 'Очно',
      },
    },
    {
      id: crypto.randomUUID(),
      link: 'https://edu.mipt.ru/member/meroprijatija/vserossiyskoe-testirovanie-rucode-po-iskusstvennomu-intellektu-2026',
      date: {
        from: {
          day: 17,
          month: 'августа',
        },
        to: {
          day: 30,
          month: 'ноября',
        },
      },
      title: 'На онлайн-платформе МФТИ',
      tags: [
        {
          id: crypto.randomUUID(),
          text: '#для всех желающих',
          color: 'text-yellow-300',
        },
      ],
      format: {
        text: 'Онлайн',
        color: 'bg-purple-primary',
      },
    },
  ],
}

export const aiTestingData: ContentPage = {
  slug: '/aitesting',
  version: 1,
  blocks: [
    createFallbackBlock('hero', 10, hero),
    createFallbackBlock('format', 20, format),
    createFallbackBlock('calendar', 30, calendar),
  ],
}
