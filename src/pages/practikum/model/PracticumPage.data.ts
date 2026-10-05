import type { HeroSectionProps } from '~/widgets/practikum/hero'
import type { StagesSectionProps } from '~/widgets/practikum/stages'
import type { MaterialsSectionProps } from '~/widgets/practikum/materials'
import type { DirectionsWorkProps } from '~/widgets/consortium/directions'
import type { PartnersSectionProps } from '~/widgets/partners'
import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'

const MEMBER_URL = 'https://edu.mipt.ru/member/?rucode=1'

const hero: HeroSectionProps = {
  title: '<span class="text-yellow-primary">RuCode.</span><br>Практикум',
  subtitle: 'Вдохновляйте школьников и студентов на создание технологий будущего!',
  description:
    'Проводите современные занятия по искусственному интеллекту и машинному обучению с готовыми материалами. Бесплатные сценарии классных часов и практические задания для студентов — всё необходимое для педагога.',
  audience: {
    title: 'Для кого:',
    items: [
      'классные часы для учителей школ, колледжей и техникумов,',
      'материалы по практикуму для преподавателей ИТ направлений в вузах и СПО',
    ],
  },
  actions: [
    { text: 'Получить доступ к материалам', to: '#content' },
    { text: 'Как провести', to: '#stages' },
  ],
  image: '/images/practikum/hero.png',
}

const about: DirectionsWorkProps = {
  title: '',
  cards: [
    {
      icon: 'consortium-direction-1',
      title: 'Почему это важно?',
      description:
        'ИИ — уже часть нашей жизни. RuCode.Практикум помогает молодёжи понять, как это работает, развивать критическое мышление и цифровые навыки, а главное — увидеть себя создателями, а не просто пользователями технологий.',
    },
    {
      icon: 'consortium-direction-1',
      title: 'Что получишь ты?',
      description:
        'Опыт, признание и шанс получить премию за лучший AI-практикум. Ваш вклад оценят, а идеи могут вдохновить целое поколение!\nБудущее — в ваших руках. Делись знаниями и побеждай!',
    },
  ],
}

const stages: StagesSectionProps = {
  title: 'Этапы участия',
  steps: [
    {
      title: 'Зарегистрироваться',
      image: '/images/practikum/stages/laptop.png',
      to: MEMBER_URL,
    },
    { title: 'Провести урок', image: '/images/practikum/stages/book.png' },
    {
      title: 'Получить сертификат',
      note: '*Вы&nbsp;можете остановиться здесь, либо продолжить и&nbsp;принять участие в&nbsp;премии RUCODE 2026.',
      image: '/images/practikum/stages/certificate.png',
      to: MEMBER_URL,
    },
    {
      title: 'Подать заявку на&nbsp;участие в&nbsp;RuCode.Премии',
      image: '/images/practikum/stages/check.png',
      to: '/award2026',
    },
    {
      title: 'Принять участие в&nbsp;торжественной церемонии награждения',
      image: '/images/practikum/stages/award.png',
      to: '/award2026',
    },
  ],
}

const materials: MaterialsSectionProps = {
  title: 'Материалы для скачивания',
  emptyText: 'Материалы скоро появятся.',
  tabs: [
    {
      label: 'Для преподавателей вузов',
      items: [
        {
          title: 'Разбор задачи «Предсказание отмены бронирования»',
          content: 'Материалы доступны после регистрации.',
        },
        {
          title: 'Разбор задачи «Мастер кадра»',
          content: 'Материалы доступны после регистрации.',
        },
      ],
    },
    { label: 'Для учителей школ и СПО', items: [] },
  ],
  action: { text: 'Скачать сертификат о проведении', to: MEMBER_URL },
}

const partners: PartnersSectionProps = {
  items: [
    {
      title: 'Генеральный партнёр',
      images: [
        { src: '/images/partners/mts-white.png', alt: 'MWS', class: 'w-[101px] lg:w-[178px]' },
      ],
    },
    {
      title: 'Партнёры',
      images: [
        { src: '/images/partners/astra.png', alt: 'Астра', class: 'w-33 lg:w-[180px]' },
        { src: '/images/partners/sber.svg', alt: 'Сбер', class: 'w-33 lg:w-[180px]' },
      ],
    },
    {
      title: 'При поддержке',
      text: 'При поддержке гранта Минобрнауки России в рамках федерального проекта «Популяризация науки и технологий» №075-15-2025-505 от 27.05.2025',
      images: [
        { src: '/images/partners/minobr.png', alt: 'Минобрнауки России', class: 'w-[222px]' },
        {
          src: '/images/partners/2231.png',
          alt: 'Десятилетие науки и технологий',
          class: 'max-w-[130px] lg:max-w-[159px]',
        },
      ],
    },
  ],
}

export const practicumPageData: ContentPage = {
  slug: '/practikum',
  version: 1,
  blocks: [
    createFallbackBlock('hero', 10, hero),
    createFallbackBlock('about', 20, about),
    createFallbackBlock('stages', 30, stages),
    createFallbackBlock('materials', 40, materials),
    createFallbackBlock('partners', 50, partners),
  ],
}
