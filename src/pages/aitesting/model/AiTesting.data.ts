import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'
import type { AiTestingDemoProps } from '~/widgets/ai_testing/demo'
import type { AiTestingDatesProps } from '~/widgets/ai_testing/dates'
import type { AiTestingFormatProps } from '~/widgets/ai_testing/format'
import type { AiTestingHeroProps } from '~/widgets/ai_testing/hero'
import type { AiTestingAboutProps } from '~/widgets/ai_testing/about'

const hero: AiTestingHeroProps = {
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

const format: AiTestingFormatProps = {
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

const calendar: AiTestingDatesProps = {
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

const demo: AiTestingDemoProps = {
  title: 'Демо-тестирование',
  image: '/images/ai-testing/boy.png',
  text: 'Пройди пробное тестирование и узнай кто ты!',
  cards: [
    {
      id: crypto.randomUUID(),
      image: '/images/ai-testing/demo-1.png',
      text: 'поисковик-любитель',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/ai-testing/question.png',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/ai-testing/demo-2.png',
      text: 'чайник-новичок',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/ai-testing/question.png',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/ai-testing/demo-3.png',
      text: 'гуру-энтузиаст',
    },
  ],
  footerText: 'Поделись результатом с друзьми в социальных сетях, получай призы!',
  btnText: 'Пройти',
}

const about: AiTestingAboutProps = {
  title:
    'Организуйте тестирование <span class="text-yellow-primary">RuCode</span> на базе вашей образовательной организации',
  description: [
    'Приглашаем школы, колледжи, университеты, технопарки и образовательные центры стать <span class="text-purple-primary">официальными площадками тестирования RuCode</span>',
    'Вы получите готовый формат проведения, методическую поддержку и возможность познакомить участников с современными технологиями искусственного интеллекта',
  ],
  cta: {
    to: 'https://edu.mipt.ru/member/system/opros/2263',
    text: 'Стать площадкой',
  },
}

export const aiTestingData: ContentPage = {
  slug: '/aitesting',
  version: 1,
  blocks: [
    createFallbackBlock('hero', 10, hero),
    createFallbackBlock('format', 20, format),
    createFallbackBlock('calendar', 30, calendar),
    createFallbackBlock('demo', 40, demo),
    createFallbackBlock('about', 50, about),
  ],
}
