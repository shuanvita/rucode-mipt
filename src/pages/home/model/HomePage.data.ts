import type { HomeHeroProps } from '~/widgets/home/hero'
import type { InfoBlockProps } from '~/widgets/info-block'
import type { PartnersSectionProps } from '~/widgets/partners'

import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'
import type { CalendarSectionProps } from '~/widgets/home/calendar'
import type { PlacesSectionProps } from '~/widgets/consortium-section'
import type { PhotoGalleryProps } from '~/widgets/home/photo-gallery'
import type { VideoGalleryProps } from '~/widgets/home/video-gallery'

const hero: HomeHeroProps = {
  action: {
    text: 'Хочу участвовать',
  },
  logo: '/images/home-hero-logo.svg',
  video: '/videos/hero-home.mp4',
}

const about: InfoBlockProps = {
  title: 'О фестивале',
  description:
    'Всероссийский фестиваль RuCode: искусственный интеллект в пространстве науки и технологий — объединяет всех, кто интересуется применением ИИ в научных исследованиях, образовании и технике. Программа фестиваля включает четыре направления: научпоп, образование, достижения и карьера, где участников ждут лекции и подкасты, научно-популярные тесты, а также чемпионат по искусственному интеллекту. Организаторами фестиваля, наряду с МФТИ, выступают российские вузы, научные центры и образовательные организации и ведущие ИТ-компании России. Выбирай свой трек и участвуй в фестивале RuCode! Уже открыта регистрация на <a class="text-purple-primary underline hover:text-fg hover:no-underline transition-all duration-200" href="/champ">чемпионат РуКод по алгоритмическому программированию</a>.',
  descriptionWidth: 'lg',
  isBackground: true,
}

const achievements = {
  title: 'Достижения 2025 года',
  cards: [
    {
      id: crypto.randomUUID(),
      image: '/images/home/achievements-1.png',
      text: 'Лауреат Премии Рунета в номинации «Образовательный проект в ИТ»',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/home/achievements-2.png',
      text: 'Номинация «За вклад в развитие практического образования в сфере искусственного интеллекта» первой в России национальной премией сообществ',
    },
    {
      id: crypto.randomUUID(),
      image: '/images/home/achievements-3.png',
      text: '«Самое массовое соревнование по программированию» по версии Книги Рекордов России 2025 г.',
    },
  ],
}

const tracks = {
  title: 'Треки фестиваля',
  cards: [
    {
      id: crypto.randomUUID(),
      image: '/images/home/track-1.png',
      tag: '#научпоп',
      tagColor: 'blue',
      text: 'Рассказываем простым языком и доступно объясняем о возможностях применения искусственного интеллекта и достижениях российских исследователей в этой области.',
      links: [
        {
          id: crypto.randomUUID(),
          text: 'Всероссийское тестирование RuCode по искусственному интеллекту',
          to: '/aitesting',
        },
        {
          id: crypto.randomUUID(),
          text: 'RuCode.Премия',
          to: '/award2026',
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      image: '/images/home/track-2.png',
      tag: '#образование',
      tagColor: 'emerald',
      text: 'В образовательный трек фестиваля RuCode входят онлайн-курсы по искусственному интеллекту и алгоритмическому программированию, интенсивы с лекциями от ведущих экспертов отрасли.',
      links: [
        {
          id: crypto.randomUUID(),
          text: 'RuCode.Премия',
          to: '/award2026',
        },
        {
          id: crypto.randomUUID(),
          text: 'Сборы к IOI',
          to: '#',
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      image: '/images/home/track-3.png',
      tag: '#достижения',
      tagColor: 'amber',
      text: 'Участники могут посоревноваться на разных уровнях чемпионата по искусственному интеллекту, проверить себя в тестировании и побороться за престижную премию Rucode.',
      links: [
        {
          id: crypto.randomUUID(),
          text: 'Всероссийское тестирование RuCode по искусственному интеллекту',
          to: '/aitesting',
        },
        {
          id: crypto.randomUUID(),
          text: 'Чемпионат RuCode по искусственному интеллекту',
          to: '/ai_champ',
        },
        {
          id: crypto.randomUUID(),
          text: 'Чемпионат RuCode по алгоритмическому программированию',
          to: '/champ',
        },
        {
          id: crypto.randomUUID(),
          text: 'RuCode.Премия',
          to: '/award2026',
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      image: '/images/home/track-4.png',
      tag: '#карьера',
      tagColor: 'rose',
      text: 'Участвуй в карьерных лекциях от HR экспертов и строй успешную карьеру в IT, используя навыки и достижения, полученные в образовательных программах и чемпионатах RuCode.',
      links: [
        {
          id: crypto.randomUUID(),
          text: 'RuCode.Премия',
          to: '/award2026',
        },
      ],
    },
  ],
}

const calendar: CalendarSectionProps = {
  title: 'Календарь',
  tabs: [
    {
      label: 'Всероссийский фестиваль RuCode',
      cards: [
        {
          id: crypto.randomUUID(),
          link: '/aitesting',
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
          title: 'Всероссийское тестирование RuCode по искусственному интеллекту',
          tags: [
            {
              id: crypto.randomUUID(),
              text: '#научпоп',
              color: 'text-blue-400',
            },
            {
              id: crypto.randomUUID(),
              text: '#достижения',
              color: 'text-yellow-300',
            },
          ],
          format: {
            text: 'Очно',
          },
        },
        {
          id: crypto.randomUUID(),
          link: '/award2026',
          date: {
            from: {
              day: 3,
              month: 'августа',
            },
            to: {
              day: 30,
              month: 'ноября',
            },
          },
          title: 'RuCode.Премия',
          tags: [
            {
              id: crypto.randomUUID(),
              text: '#образование',
              color: 'text-emerald-300',
            },
            {
              id: crypto.randomUUID(),
              text: '#карьера',
              color: 'text-rose-500',
            },
            {
              id: crypto.randomUUID(),
              text: '#научпоп',
              color: 'text-blue-400',
            },
            {
              id: crypto.randomUUID(),
              text: '#достижения',
              color: 'text-yellow-300',
            },
          ],
          format: {
            text: 'Очно',
          },
        },
        {
          id: crypto.randomUUID(),
          link: '/ai_champ',
          date: {
            from: {
              day: 24,
              month: 'августа',
            },
            to: {
              day: 30,
              month: 'ноября',
            },
          },
          title: 'Чемпионат RuCode по искусственному интеллекту',
          tags: [
            {
              id: crypto.randomUUID(),
              text: '#достижения',
              color: 'text-yellow-300',
            },
            {
              id: crypto.randomUUID(),
              text: '#образование',
              color: 'text-emerald-300',
            },
          ],
          format: {
            text: 'Очно',
          },
        },
      ],
    },
    {
      label: 'Международный чемпионат РуКод по алгоритмическому программированию',
      cards: [
        {
          id: crypto.randomUUID(),
          link: '/champ',
          date: {
            from: {
              day: 17,
              month: 'апреля',
            },
            to: {
              day: 5,
              month: 'октября',
            },
          },
          title: 'Регистрация',
          format: {
            text: 'Онлайн',
            color: 'bg-purple-primary',
          },
        },
        {
          id: crypto.randomUUID(),
          link: '/',
          date: {
            from: {
              day: 25,
              month: 'июня',
            },
            to: {
              day: 3,
              month: 'июля',
            },
          },
          title: 'Тренировочные сборы',
          format: {
            text: 'Очно',
          },
        },
        {
          id: crypto.randomUUID(),
          link: '/champ',
          date: {
            from: {
              day: 18,
              month: 'октября',
            },
          },
          title: 'Финал',
          format: {
            text: 'Очно',
          },
        },
        {
          id: crypto.randomUUID(),
          link: '/champ',
          date: {
            from: {
              day: 5,
              month: 'декабря',
            },
            to: {
              day: 6,
              month: 'декабря',
            },
          },
          title: 'Суперфинал',
          format: {
            text: 'Очно',
          },
        },
      ],
    },
  ],
}

const consortium: PlacesSectionProps = {
  title: 'Консорциум организаторов RuCode',
  description:
    'Консорциум — это сеть научно-образовательных организаций с множеством возможностей для развития тесного сотрудничества и совместного проведения крупных мероприятий, проектной деятельности и программ в ИТ-образовательном пространстве.',
  action: {
    text: 'Узнать подробнее',
    to: '/consortium',
  },
}

const partners: PartnersSectionProps = {
  items: [
    {
      title: 'Генеральный партнёр',
      images: [
        {
          src: '/images/partners/mts.png',
          alt: 'МТС',
          class: 'w-[101px] lg:w-[178px]',
        },
      ],
    },
    {
      title: 'Партнёры',
      images: [
        {
          src: '/images/partners/sber.svg',
          alt: 'Сбер',
          class: 'w-33 lg:w-53.25',
        },
      ],
    },
  ],
}

const photos: PhotoGalleryProps = {
  title: 'Фото',
  photos: [
    { image: '/images/home/gallery-1.png', alt: 'gallery-1' },
    { image: '/images/home/gallery-2.png', alt: 'gallery-2' },
    { image: '/images/home/gallery-3.png', alt: 'gallery-3' },
    { image: '/images/home/gallery-4.png', alt: 'gallery-4' },
    { image: '/images/home/gallery-5.png', alt: 'gallery-5' },
    { image: '/images/home/gallery-6.png', alt: 'gallery-6' },
    { image: '/images/home/gallery-7.png', alt: 'gallery-7' },
    { image: '/images/home/gallery-8.png', alt: 'gallery-8' },
  ],
}

const videos: VideoGalleryProps = {
  title: 'Видео',
  items: [
    {
      image: '/images/home/video-1.png',
      videoUrl: 'https://vk.com/video_ext.php?oid=-44001716&id=456239577&hd=2&js_api=1',
      caption: 'Всероссийский Классный час RuCode',
      tags: [
        {
          label: '#научпоп',
          color: 'text-blue-400',
        },
        {
          label: '#образование',
          color: 'text-emerald-300',
        },
      ],
    },
    {
      image: '/images/home/video-2.png',
      videoUrl: 'https://vk.com/video_ext.php?oid=-44001716&id=456239616&hd=3&js_api=1',
      caption: 'Многократные чемпионы RuCode',
      tags: [
        {
          label: '#чемпионат',
          color: 'text-amber-400',
        },
      ],
    },
    {
      image: '/images/home/video-3.png',
      videoUrl: 'https://vk.com/video_ext.php?oid=-49378&id=456239110&hd=3&js_api=1',
      caption: 'RuCode 2023: как это было?',
      tags: [
        {
          label: '#научпоп',
          color: 'text-blue-400',
        },
        {
          label: '#образование',
          color: 'text-emerald-300',
        },
        {
          label: '#чемпионат',
          color: 'text-amber-400',
        },
        {
          label: '#карьера',
          color: 'text-rose-500',
        },
      ],
    },
    {
      image: '/images/home/video-4.png',
      videoUrl: 'https://vk.com/video_ext.php?oid=-44001716&id=456239579&hd=2&js_api=1',
      caption: 'Искусственный интеллект или люди — кто победит?',
      tags: [
        {
          label: '#научпоп',
          color: 'text-blue-400',
        },
        {
          label: '#образование',
          color: 'text-emerald-300',
        },
        {
          label: '#чемпионат',
          color: 'text-amber-400',
        },
      ],
    },
    {
      image: '/images/home/video-5.png',
      videoUrl: 'https://vk.com/video_ext.php?oid=-44001716&id=456239580&hd=2&js_api=1',
      caption: 'Столица RuCode 2023',
      tags: [
        {
          label: '#научпоп',
          color: 'text-blue-400',
        },
        {
          label: '#образование',
          color: 'text-emerald-300',
        },
        {
          label: '#чемпионат',
          color: 'text-amber-400',
        },
        {
          label: '#карьера',
          color: 'text-rose-500',
        },
      ],
    },
    {
      image: '/images/home/video-6.png',
      videoUrl: 'https://vk.com/video_ext.php?oid=-44001716&id=456239570&hd=2&js_api=1',
      caption: 'Вести-Урал: интервью у руководителя Программного комитета фестиваля RuCode',
      tags: [
        {
          label: '#научпоп',
          color: 'text-blue-400',
        },
        {
          label: '#образование',
          color: 'text-emerald-300',
        },
        {
          label: '#чемпионат',
          color: 'text-amber-400',
        },
        {
          label: '#карьера',
          color: 'text-rose-500',
        },
      ],
    },
  ],
}

export const homePageData: ContentPage = {
  slug: '/',
  version: 1,
  meta: {
    title:
      'Всероссийский фестиваль по искусственному интеллекту и алгоритмическому программированию',
    description:
      'Прокачай скиллы по искусственному интеллекту и программированию, заяви о себе на чемпионате и построй свою карьеру в IT на фестивале RuCode: бесплатные курсы и интенсивы, чемпионаты, конференции, HR-лекции и IT стажировки.',
  },
  blocks: [
    createFallbackBlock('home.hero', 10, hero, { id: 'hero' }),
    createFallbackBlock('info', 20, about, { id: 'about' }),
    createFallbackBlock('achievements', 30, achievements),
    createFallbackBlock('home.tracks', 40, tracks, { id: 'tracks', anchor: 'tracks' }),
    createFallbackBlock('home.calendar', 50, calendar, { id: 'calendar', anchor: 'calendar' }),
    createFallbackBlock('consortium.places', 60, consortium, {
      id: 'consortium',
      anchor: 'consortium',
    }),
    createFallbackBlock('partners', 80, partners),
    createFallbackBlock('photoGallery', 90, photos, { id: 'photos' }),
    createFallbackBlock('videoGallery', 100, videos, { id: 'videos', anchor: 'videos' }),
  ],
}
