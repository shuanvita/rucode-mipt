import type { PeopleSliderProps } from '~/widgets/people-slider'
import type { PartnersSectionProps } from '~/widgets/partners'

export const peopleSlider: PeopleSliderProps = {
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

export const partners: PartnersSectionProps = {
  items: [
    {
      title: 'Генеральный партнёр',
      images: [
        {
          src: '/images/award2026/mts.png',
          alt: 'МТС',
          class: 'w-[101px] lg:w-[178px]',
        },
      ],
    },
    {
      title: 'Партнёры',
      images: [
        {
          src: '/images/award2026/sber.svg',
          alt: 'Сбер',
          class: 'w-33 lg:w-53.25',
        },
      ],
    },
  ],
}
