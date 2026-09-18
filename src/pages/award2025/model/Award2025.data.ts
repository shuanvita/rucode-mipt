import type { PeopleSliderProps } from '~/widgets/people-slider'
import type { PartnersSectionProps } from '~/widgets/partners'
import type { AwardCtaProps } from '~/widgets/award/cta'
import type { StagesTimelineProps } from '~/widgets/award/stages'
import type { AwardParticipantsProps } from '~/widgets/award/participants'
import type { InfoBlockProps } from '~/widgets/info-block'
import type { AwardHeroProps } from '~/widgets/award/hero'
import type { WhyParticipateProps } from '~/widgets/award2025/why-participate'
import type { NominationsTabsProps } from '~/widgets/award2025/nominations-tabs'
import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'
import type { AwardCeremonyProps } from '~/widgets/award2025/award-ceremony'

const hero: AwardHeroProps = {
  title:
    'Премия <span class="text-yellow-primary">RuCode:</span> искусственный интеллект в пространстве науки и технологий',
  action: {
    to: '/award2026',
    text: 'Подать заявку на 2026',
  },
  image: '/images/award/hero.png',
  imageMobile: '/images/award/hero-mob.png',
}

const about: InfoBlockProps = {
  title: 'О премии',
  description:
    'RuCode.Премия — кульминационное событие для подведения итогов фестиваля RuCode, награждения инициативных и вовлечённых участников фестиваля и выделения заслуг в области популяризации технологий искусственного интеллекта',
  descriptionClass: 'max-w-171',
}

const participants: AwardParticipantsProps = {
  title: 'Кто может участвовать?',
  cards: [
    'Образовательные и научные организации и ИТ‑компании',
    'Преподаватели школ, СПО и вузов',
    'Учащиеся школ, СПО и студенты вузов',
    'Разработчики и исследователи',
    'Популяризаторы науки',
  ],
}

const whyParticipate: WhyParticipateProps = {
  title: 'Зачем участвовать?',
  cards: [
    {
      title:
        'Информационная поддержка и продвижение в СМИ и на ресурсах фестиваль <span class="text-yellow-primary">RuCode</span>',
    },
    { title: 'Взаимодействие с МФТИ и вузами консорциума Фестиваля' },
    { title: 'звание, диплом и Знак Премии для лауреатов' },
    {
      title:
        'Участие в мероприятиях Премии и Фестиваля <span class="text-yellow-primary">RuCode</span>',
    },
    { title: 'Возможность размещения уникального логотипа на своих ресурсах' },
    { title: 'Индивидуальный план проекта' },
  ],
}

const nominationsTabs: NominationsTabsProps = {
  title: 'Направления и номинации',
  description:
    'Подача заявки и участие в Премии бесплатны.<br> Участвовать в Премии могут граждане России и образовательные и общественные организации, зарегистрированные в Российской Федерации.',
  tabs: [
    {
      label: 'Организации',
      nominations: [
        {
          title: 'ИИ Альма-Матер',
          description:
            'Номинация присуждается организации, которая внесла значительный вклад в популяризацию технологий искусственного интеллекта, создав и реализовав собственную научно-популярную инициативу.',
          tag: '#научпоп',
        },
        {
          title: 'ИТ-Мануфактура',
          description:
            'Номинация присуждается образовательной организации за создание ИТ-факультета и/или ИТ-кафедры, использующей передовые методы обучения для подготовки ИТ-специалистов.',
          tag: '#образование #карьера',
        },
        {
          title: 'Кузница ИИ талантов',
          description:
            'Номинацией отмечается проект, в рамках которого реализуется программа повышения квалификации и/или профессиональной переподготовки специалистов в области ИИ, которые умеют грамотно использовать искусственный интеллект для решения задач в современных условиях.',
          tag: '#образование #карьера',
        },
        {
          title: 'ИИ Пространство',
          description:
            'Номинацией отмечается образовательная организация, которая успешно внедрила технологии искусственного интеллекта в свои операционные процессы.',
          tag: '#научпоп',
        },
      ],
    },
    {
      label: 'Персоны',
      subTabs: [
        {
          label: 'Студентам',
          nominations: [
            {
              title: 'Братство ИТ',
              description:
                'Номинацией отмечается студент или группа студентов, на общественных началах возглавляющих студенческое объединение, показывающее значительные достижения в сфере программирования и искусственного интеллекта.',
              tag: '#достижение',
            },
            {
              title: 'ИИ гуру',
              description:
                'Номинация присуждается выдающемуся автору (блогеру, создателю онлайн-контента), внёсшему значительный вклад в популяризацию технологий искусственного интеллекта через Интернет.',
              tag: '#научпоп #образование',
            },
            {
              title: 'Мастер генераций',
              description:
                'Номинация присуждается автору (-ам), создавшему увлекательный просветительский контент с помощью искусственного интеллекта.',
              tag: '#научпоп',
            },
          ],
        },
        {
          label: 'Популяризаторам',
          nominations: [
            {
              title: 'ИИ гуру',
              description:
                'Номинация присуждается выдающемуся автору (блогеру, создателю онлайн-контента), внёсшему значительный вклад в популяризацию технологий искусственного интеллекта через Интернет.',
              tag: '#научпоп #образование',
            },
            {
              title: 'Мастер генераций',
              description:
                'Номинация присуждается автору (-ам), создавшему увлекательный просветительский контент с помощью искусственного интеллекта.',
              tag: '#научпоп',
            },
            {
              title: 'ИИ Инноватор',
              description:
                'Номинацией отмечается учитель образовательной организации за эффективное внедрение технологий искусственного интеллекта в учебный процесс.',
              tag: '#образование',
            },
            {
              title: 'RuCode проводник',
              description:
                'Номинацией отмечаются преподаватели школ, СПО и вузов, продемонстрировавшие оригинальный подход при проведении RuCode.Практикума — в организации мероприятия или в работе с аудиторией.',
              tag: '#научпоп #образование',
            },
          ],
        },
        {
          label: 'Учителям и преподавателям',
          nominations: [
            {
              title: 'ИИ гуру',
              description:
                'Номинация присуждается выдающемуся автору (блогеру, создателю онлайн-контента), внёсшему значительный вклад в популяризацию технологий искусственного интеллекта через Интернет.',
              tag: '#научпоп #образование',
            },
            {
              title: 'Мастер генераций',
              description:
                'Номинация присуждается автору (-ам), создавшему увлекательный просветительский контент с помощью искусственного интеллекта.',
              tag: '#научпоп',
            },
            {
              title: 'ИИ Инноватор',
              description:
                'Номинацией отмечается учитель образовательной организации за эффективное внедрение технологий искусственного интеллекта в учебный процесс.',
              tag: '#образование',
            },
            {
              title: 'RuCode проводник',
              description:
                'Номинацией отмечаются преподаватели школ, СПО и вузов, продемонстрировавшие оригинальный подход при проведении RuCode.Практикума — в организации мероприятия или в работе с аудиторией.',
              tag: '#научпоп #образование',
            },
          ],
        },
        {
          label: 'Школьникам 5-11 классов',
          nominations: [
            {
              title: 'Проект будущего',
              description:
                'Номинация присуждается школьникам за результаты проектной работы, в реализации которой большую роль сыграло использование технологий искусственного интеллекта.',
              tag: '#образование',
            },
          ],
        },
      ],
    },
  ],
  action: {
    to: '/award2026',
    text: 'Подать заявку на 2026',
  },
}

const stagesTimeline: StagesTimelineProps = {
  title: 'Этапы проведения',
  stages: [
    {
      number: 1,
      title: '23 июня — 30 сентября',
      description: 'Сбор заявок',
    },
    {
      number: 2,
      title: '1-10 октября',
      description: 'Отборочный тур<br>Первичная проверка и формирования шорт-листа',
    },
    {
      number: 3,
      title: '11-20 октября',
      description: 'Народное голосование в номинациях: «ИИ Гуру» и «Мастер генераций»',
    },
    {
      number: 4,
      title: '21-30 октября',
      description: 'Финальный тур<br>Оценка экспертным советом',
    },
    {
      number: 5,
      title: '14 ноября',
      span: 'double',
      description: 'Торжественная церемония<br>награждения Премией',
      variant: 'secret',
    },
  ],
}

const awardCeremony: AwardCeremonyProps = {
  title: 'Церемония награждения',
  description: [
    'Объявление лауреатов Премии пройдет в торжественной обстановке в городе Москва.',
    'Для всех иногородних номинантов Премии будет предоставлено проживание.',
  ],
  image: '/images/award2025/ceremony.png',
}

const peopleSlider: PeopleSliderProps = {
  title: 'Организационный комитет',
  description:
    'Определяет номинантов Премии по итогам отборочного тура. Оказывает содействие в привлечении партнеров и спонсоров. Утверждает состава Экспертного совета. Оказывает содействие в организации Церемонии награждения.',
  people: [
    {
      name: 'Дмитрий Ливанов',
      text: 'Ректор МФТИ. Председатель Оргкомитета',
      photo: '/images/livanov.jpg',
    },
    {
      name: 'Алексей Малеев',
      text: 'Директор Высшей школы программной инженерии МФТИ',
      photo: '/images/maleev.jpg',
    },
    {
      name: 'Андрей Созыкин',
      text: 'Специалист по учебно-методической работе, Высшая школа программной инженерии МФТИ',
      photo: '/images/sozykin.jpg',
    },
    {
      name: 'Екатерина Титова',
      text: 'Заместитель директора, Центр развития ИТ-образования',
      photo: '/images/titova.jpg',
    },
    {
      name: 'Игорь Красиков',
      text: 'Начальник, Управление информационной политики МФТИ',
      photo: '/images/krasikov.jpeg',
    },
    {
      name: 'Егор Быковский',
      text: 'Директор, Центр научной коммуникации МФТИ',
      photo: '/images/bykovskiy.png',
    },
  ],
}

const partners: PartnersSectionProps = {
  items: [
    {
      title: 'Генеральный партнёр',
      images: [
        {
          src: '/images/partners/mts-white.png',
          alt: 'МТС',
          class: 'w-[101px] lg:w-[178px]',
        },
      ],
    },
    {
      title: 'Партнёры',
      images: [
        {
          src: '/images/partners/astra.png',
          alt: 'Астра',
          class: 'w-33 lg:w-[180px]',
        },
        {
          src: '/images/partners/sber.svg',
          alt: 'Сбер',
          class: 'w-33 lg:w-[180px]',
        },
      ],
    },
    {
      title: 'При поддержке',
      text: 'Всероссийский фестиваль RuCode: искусственный интеллект в пространстве науки и технологий проходит при поддержке гранта Минобрнауки России в рамках федерального проекта «Популяризация науки и технологий»',
      images: [
        {
          src: '/images/partners/minobr.png',
          alt: 'Астра',
          class: 'w-[222px]',
        },
        {
          src: '/images/partners/2231.png',
          alt: 'Сбер',
          class: 'max-w-[130px] lg:max-w-[159px]',
        },
      ],
    },
  ],
}

const cta: AwardCtaProps = {
  title: 'Станьте лауреатом RuCode Премии',
  action: {
    to: 'https://edu.mipt.ru/member/meroprijatija/rucode-premiya-2026',
    text: 'Подать заявку',
  },
}

export const award2025Data: ContentPage = {
  slug: '/award2025',
  version: 1,
  blocks: [
    createFallbackBlock('hero', 10, hero),
    createFallbackBlock('about', 20, about),
    createFallbackBlock('participants', 30, participants),
    createFallbackBlock('whyParticipate', 40, whyParticipate),
    createFallbackBlock('nominationsTabs', 50, nominationsTabs),
    createFallbackBlock('stagesTimeline', 60, stagesTimeline),
    createFallbackBlock('awardCeremony', 70, awardCeremony),
    createFallbackBlock('peopleSlider', 80, peopleSlider),
    createFallbackBlock('partners', 90, partners),
    createFallbackBlock('cta', 100, cta),
  ],
}
