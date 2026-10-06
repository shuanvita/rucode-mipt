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
          description:
            'Научим решать задачи как по имеющимся данным о бронировании номера в отеле предсказать: будет ли отменено бронирование или нет',
          presentationTo: 'https://disk.yandex.ru/d/mIegfy3fNIpmfg',
          allMaterialsTo: '#',
        },
        {
          title: 'Разбор задачи «Мастер кадра»',
          description:
            'Научим решению задач классификации изображений, а также познакомим с архитектурой Vision Transformer',
          presentationTo: 'https://disk.yandex.ru/d/0aqMLFyYK03f7Q',
          allMaterialsTo: '#',
        },
      ],
    },
    {
      label: 'Для учителей школ и СПО',
      items: [
        {
          title: 'Искусственный интеллект и нейротворчество',
          description:
            'Узнайте, как нейросети создают изображения, и научитесь использовать их для собственного цифрового творчества.',
          presentationTo: 'https://disk.yandex.ru/i/dt9msyL4JV1W1A',
          allMaterialsTo: '#',
        },
        {
          title: 'Кибербезопасность',
          description:
            'Погрузитесь в мир цифровой защиты: познакомьтесь с профессией эксперта по кибербезопасности и узнайте, как ИИ помогает бороться с киберугрозами.',
          presentationTo: 'https://disk.yandex.ru/i/Foc2VbnaEOy9wg',
          allMaterialsTo: '#',
        },
        {
          title: 'Есть ли у языковых моделей сознание',
          description:
            'Разберитесь, как работают современные языковые модели и как использовать их для создания осмысленных и качественных текстов.',
          presentationTo: 'https://disk.yandex.ru/i/lDvn_AricboWvw',
          allMaterialsTo: '#',
        },
        {
          title: 'Что нужно знать, чтобы стать специалистом по искусственному интеллекту?',
          description:
            'Познакомьтесь с основами ИИ — от математики до нейросетей — и узнайте, с чего начать путь к профессии будущего.',
          presentationTo: 'https://disk.yandex.ru/i/clt4Vz422Ooujg',
          allMaterialsTo: '#',
        },
        {
          title: 'Нейросети и музыка',
          description:
            'Узнайте, как ИИ создаёт музыку, и попробуйте сами сгенерировать мелодии с помощью нейросетей.',
          presentationTo: 'https://disk.yandex.ru/i/t9LGFsLWKczv6g',
          allMaterialsTo: '#',
        },
        {
          title: 'Искусственный интеллект — помощник современного школьника',
          description:
            'Исследуйте, как ИИ может помогать в учёбе: от генерации ответов до творческих задач, и научитесь правильно с ним взаимодействовать.',
          presentationTo: 'https://disk.yandex.ru/i/gWLxJ3QVAI4eBg',
          allMaterialsTo: '#',
        },
        {
          title: 'Открывая планету заново: роль ИИ',
          description:
            'Увидьте, как ИИ меняет географию: от карт и спутниковых данных до анализа природных процессов.',
          presentationTo: 'https://disk.yandex.ru/i/vpCtl2INRyW7ow',
          allMaterialsTo: '#',
        },
        {
          title: 'Новые горизонты в науках о земле с ИИ',
          description:
            'Узнайте, как ИИ помогает сельскому хозяйству: анализирует почвы, предсказывает урожайность и отслеживает изменения климата.',
          presentationTo: 'https://disk.yandex.ru/i/pkzQk9nFDetPjA',
          allMaterialsTo: '#',
        },
      ],
    },
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
