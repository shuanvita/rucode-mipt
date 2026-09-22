import type { HomeHeroProps } from '~/widgets/home/hero'
import type { InfoBlockProps } from '~/widgets/info-block'
import type { PartnersSectionProps } from '~/widgets/partners'

import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'
import type { CalendarSectionProps } from '~/widgets/home/calendar'
import type { ConsortiumSectionProps } from '~/widgets/home/consortium'
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
  descriptionClass: 'max-w-180',
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
      tagClass: 'text-blue-400 border-blue-400',
      text: 'Рассказываем простым языком и доступно объясняем о возможностях применения искусственного интеллекта и достижениях российских исследователей в этой области.',
      links: [
        {
          id: crypto.randomUUID(),
          text: 'Всероссийское тестирование RuCode по искусственному интеллекту',
          to: 'https://aitesting.rucode.net',
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
      tagClass: 'text-emerald-300 border-emerald-300',
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
      tagClass: 'text-amber-400 border-amber-400',
      text: 'Участники могут посоревноваться на разных уровнях чемпионата по искусственному интеллекту, проверить себя в тестировании и побороться за престижную премию Rucode.',
      links: [
        {
          id: crypto.randomUUID(),
          text: 'Всероссийское тестирование RuCode по искусственному интеллекту',
          to: 'https://aitesting.rucode.net',
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
      tagClass: 'text-rose-500 border-rose-500',
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
          link: 'https://aitesting.rucode.net',
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

const consortium: ConsortiumSectionProps = {
  title: 'Консорциум организаторов RuCode',
  description:
    'Консорциум — это сеть научно-образовательных организаций с множеством возможностей для развития тесного сотрудничества и совместного проведения крупных мероприятий, проектной деятельности и программ в ИТ-образовательном пространстве.',
  hint: 'Нажмите на точку на карте, чтобы узнать подробнее',
  imageMap: '/images/home/map.webp',
  cards: [
    {
      id: crypto.randomUUID(),
      city: 'Долгопрудный',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГАОУ ВО «Московский физико-технический институт»',
          image: '/images/organizers/organizer-1.png',
          description: 'Самая массовая площадка RuCode 2023',
        },
      ],
      coordinates: { x: '19.6%', y: '38.0%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Москва',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГАОУ ВО «Национальный исследовательский технологический университет «МИСИС»',
          image: '/images/organizers/organizer-2.svg',
          description: 'Новый соорганизатор RuCode',
        },
      ],
      coordinates: { x: '19.6%', y: '41.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Иннополис',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'АНО ВО «Университет Иннополис»',
          image: '/images/organizers/organizer-3.png',
          description:
            'Важнейшая точка Иннополиса — университет, в котором обучаются порядка 900 студентов. Все занятия проходят на английском языке, все специальности здесь связаны с информационными технологиями',
        },
      ],
      coordinates: { x: '25.6%', y: '52.7%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Пермь',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'МинЦифры Пермского края',
          image: '/images/organizers/organizer-4.png',
          description:
            'Самые красивые фотографии чемпионата RuCode, координирует взаимодействие органов государственной власти Пермского края, осуществляет создание, развитие информационных систем, а также обеспечение их эксплуатации',
        },
        {
          id: crypto.randomUUID(),
          title: 'ФГАОУ ВО «Пермский государственный национальный исследовательский университет»',
          image: '/images/organizers/organizer-4.png',
          description:
            'ПГНИУ вошел в рейтинг 38 лучших вузов России — кроме Москвы и Петербурга, По итогам 2018 года ПГНИУ вошёл в список лучших университетов Евразийского региона',
        },
      ],
      coordinates: { x: '30.9%', y: '53.2%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Калининград',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГАОУ ВО «Балтийский федеральный университет имени Иммануила Канта»',
          image: '/images/organizers/organizer-5.png',
          description:
            'Самая западная площадка RuCode, крупнейший образовательный, научный, культурный, просветительский центр самого западного региона России. Вуз удерживает за собой лидирующую позицию в области образования и науки в Северо-Западном федеральном округе, является одним из 10 федеральных университетов России',
        },
      ],
      coordinates: { x: '12.4%', y: '19.8%' },
    },
    {
      id: crypto.randomUUID(),
      side: 'left',
      city: 'Владивосток',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГАОУ ВО «Дальневосточный федеральный университет»',
          image: '/images/organizers/organizer-6.png',
          description:
            'Самая восточная площадка RuCode, ДВФУ является единственным представителем России в Ассоциации университетов Азиатско-Тихоокеанского региона (APRU)',
        },
      ],
      coordinates: { x: '85.6%', y: '94.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Владикавказ',
      items: [
        {
          id: crypto.randomUUID(),
          title:
            'ФГБОУ ВО «Северо-Кавказский горно-металлургический институт (государственный технологический университет)»',
          image: '/images/organizers/organizer-7.webp',
          description: 'Новый соорганизатор RuCode',
        },
        {
          id: crypto.randomUUID(),
          title: 'АНО дополнительного образования «Учебный центр Стартап»',
          image: '/images/organizers/organizer-8.png',
          description: 'Новый соорганизатор RuCode',
        },
      ],
      coordinates: { x: '10.6%', y: '66.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Волжский',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГАОУ ВО «Волгоградский государственный университет» Волжский филиал',
          image: '/images/organizers/organizer-9.png',
          description:
            'ВолГУ – самый молодой классический университет в России и последний вуз, построенный в СССР, за 40 лет существования диплом ВолГУ получили почти 50 тысяч выпускников',
        },
      ],
      coordinates: { x: '16.6%', y: '57.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Нижний Новгород',
      items: [
        {
          id: crypto.randomUUID(),
          title:
            'ФГАОУ ВО «Национальный исследовательский Нижегородский государственный университет им. Н.И. Лобачевского»',
          image: '/images/organizers/organizer-10.png',
          description:
            'Первое высшее учебное заведение в Нижнем Новгороде. В официальных рейтингах университет стабильно находится среди десяти лучших университетов России',
        },
      ],
      coordinates: { x: '23%', y: '47%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Томск',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГАОУ ВО «Национальный исследовательский Томский государственный университет»',
          image: '/images/organizers/organizer-11.png',
          description:
            'ТГУ занял 4 позицию в российской части международного рейтинга Round University Ranking-2023',
        },
      ],
      coordinates: { x: '45%', y: '67%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Ставрополь',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГАОУ ВО «Северо - Кавказский федеральный университет»',
          image: '/images/organizers/organizer-12.png',
          description:
            'Площадка Столицы RuCode 2024, СКФУ – уникальный научный и образовательный центр подготовки конкурентоспособных кадров, отличающихся высокой общей личностной культурой и креативным мышлением, способностью к непрерывному росту',
        },
      ],
      coordinates: { x: '11.6%', y: '63.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Красноярск',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГАОУ ВО «Сибирский федеральный университет»',
          image: '/images/organizers/organizer-13.png',
          description:
            'Самый большой вуз за Уралом. Университет делает ставку на уникальные практико-ориентированные программы подготовки специалистов совместно с работодателями и на их базе',
        },
      ],
      coordinates: { x: '52%', y: '67%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Екатеринбург',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГАОУ ВО «УрФУ имени первого Президента России Б.Н. Ельцина',
          image: '/images/organizers/organizer-14.png',
          description:
            'Первая Столица RuCode, УрФУ является федеральной инновационной площадкой, объединяющей фундаментальное образование и инновационный подход, и постоянно укрепляет свои позиции в мировом образовательном пространстве: 11 место в рейтинге лучших вузов России «RAEX-100»,  в 2022 году',
        },
      ],
      coordinates: { x: '34%', y: '59.5%' },
    },
    {
      id: crypto.randomUUID(),
      side: 'left',
      city: 'Чита',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГБОУ ВО «Забайкальский государственный университет»',
          image: '/images/organizers/organizer-15.png',
          description:
            'ЗабГу входит в топ-10 в рейтинге вузов Дальневосточного федерального округа (2025 г.)',
        },
      ],
      coordinates: { x: '70.6%', y: '84.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Ижевск',
      items: [
        {
          id: crypto.randomUUID(),
          title:
            'ФГБОУ ВО «Ижевский государственный технический университет имени М.Т. Калашникова»',
          image: '/images/organizers/organizer-16.png',
          description: 'Лидер среди вузов Удмуртии в Национальном рейтинге университетов-2024',
        },
      ],
      coordinates: { x: '28.5%', y: '52.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Курск',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГБОУ ВО «Курский государственный университет»',
          image: '/images/organizers/organizer-17.png',
          description:
            'КГУ – первый вуз Курской области не только исторически, но и по количеству бюджетных мест. Ежегодно более тысячи абитуриентов становятся студентами КГУ',
        },
      ],
      coordinates: { x: '14.8%', y: '43%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Петрозаводск',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГБОУ ВО «Петрозаводский государственный университет»',
          image: '/images/organizers/organizer-18.png',
          description:
            'ПетрГУ – один из победителей конкурса по созданию опорных университетов и одна из самых массовых площадок RuCode 2024',
        },
      ],
      coordinates: { x: '27%', y: '22.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Саратов',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГБОУ ВО «Саратовский государственный университет имени Н.Г. Чернышевского»',
          image: '/images/organizers/organizer-19.png',
          description:
            'За более чем вековую историю университета в нём работали учёные с мировым именем, в их числе - Н.Н. Семёнов - единственный советский лауреат Нобелевской премии по химии',
        },
      ],
      coordinates: { x: '20.6%', y: '57.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Тюмень',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГБОУ ВО «Тюменский индустриальный университет»',
          image: '/images/organizers/organizer-20.png',
          description:
            'Один из региональных опорных университетов. Готовит специалистов для нефтегазовой и строительной отраслей, По итогам 2021—2022 гг. ТИУ вошел в рейтинг «Лучших вузов России» по версии hh.ru',
        },
      ],
      coordinates: { x: '37%', y: '63.5%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Уфа',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГБОУ ВО «Уфимский университет науки и технологий»',
          image: '/images/organizers/organizer-21.png',
          description:
            'Самый молодой вуз страны, Уникальная особенность  – наличие собственного парка авиационной техники,  а также университет располагает собственным суперкомпьютером – самым мощным в Башкирии, входящим в пятерку суперкомпьютеров ПФО',
        },
      ],
      coordinates: { x: '27.6%', y: '59.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Сириус',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'АНО ВО «Университет «Сириус»',
          image: '/images/organizers/organizer-22.png',
          description:
            'В нем нет привычных факультетов и кафедр, ядро университета составляют Научные центры по приоритетным для России направлениям, которые возглавляют ученые с мировым именем. Благодаря этому университет быстро готовит востребованных специалистов с актуальными компетенциями',
        },
      ],
      coordinates: { x: '9%', y: '57.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Мурманск',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГАОУ ВО «Мурманский арктический университет»',
          image: '/images/organizers/organizer-23.png',
          description:
            'Самая северная площадка RuCode, был создан путем слияния двух старейших университетов Северо-запада России. В университете обучаются около 7500 студентов по более 100 программам',
        },
      ],
      coordinates: { x: '30.6%', y: '14.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Ульяновск',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'АНО ДО «Агентство технологического развития Ульяновской области»',
          image: '/images/organizers/organizer-24.png',
          description:
            'АТР - институт развития передовых технологий региона. Занимаются поддержкой научных инициатив и программ, а также развивают технологические сообщества, цифровое образование, беспилотные технологии, электротранспорт',
        },
      ],
      coordinates: { x: '23.6%', y: '53.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Новосибирск',
      items: [
        {
          id: crypto.randomUUID(),
          title:
            'ФГАОУ ВО «Новосибирский национальный исследовательский государственный университет»',
          image: '/images/organizers/organizer-25.png',
          description:
            'НГУ на 6-м месте среди вузов России по уровню зарплат молодых специалистов, занятых в IT-отрасли, Новосибирск занимает 107 место в списке лучших студенческих городов мира',
        },
      ],
      coordinates: { x: '39.6%', y: '73.5%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Иркутск',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'Деловая Россия',
          image: '/images/organizers/organizer-26.png',
          description:
            'Общероссийская общественная организация, представляющая интересы лидеров частных несырьевых компаний, ставит задачу формирование позитивного отношения российских граждан к бизнесу',
        },
      ],
      coordinates: { x: '60%', y: '76%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Воронеж',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГБОУ ВО «Воронежский государственный университет»',
          image: '/images/organizers/organizer-27.jpg',
          description: 'Новый соорганизатор RuCode',
        },
      ],
      coordinates: { x: '16.6%', y: '50%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Астрахань',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'Общество с ограниченной ответственностью Центр подготовки персонала «ЗоргоСфера»',
          image: '/images/organizers/organizer-28.png',
          description: 'Новый соорганизатор RuCode',
        },
      ],
      coordinates: { x: '16.5%', y: '67.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Челябинск',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГБОУ ВО «Челябинский государственный университет»',
          image: '/images/organizers/organizer-29.png',
          description: 'Новый соорганизатор RuCode',
        },
      ],
      coordinates: { x: '31%', y: '64.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Самара',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГБОУ ВО "Поволжский государственный университет телекоммуникаций и информатики"',
          image: '/images/organizers/organizer-30.png',
          description: 'Новый соорганизатор RuCode',
        },
      ],
      coordinates: { x: '23.6%', y: '57.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Ханты-Мансийск',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГБОУ ВО «Югорский государственный университет»',
          image: '/images/organizers/organizer-31.png',
          description: 'Новый соорганизатор RuCode',
        },
      ],
      coordinates: { x: '41%', y: '57%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Кострома',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГБОУ ВО «Костромской государственный университет»',
          image: '/images/organizers/organizer-32.png',
          description: 'Новый соорганизатор RuCode',
        },
      ],
      coordinates: { x: '25%', y: '40.8%' },
    },
    {
      id: crypto.randomUUID(),
      city: 'Алчевск',
      items: [
        {
          id: crypto.randomUUID(),
          title: 'ФГБОУ ВО «Донбасский государственный технический университет»',
          image: '/images/organizers/organizer-33.png',
          description: 'Новый соорганизатор RuCode',
        },
      ],
      coordinates: { x: '12.8%', y: '38%' },
    },
  ],
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
  blocks: [
    createFallbackBlock('hero', 10, hero),
    createFallbackBlock('about', 20, about),
    createFallbackBlock('achievements', 30, achievements),
    createFallbackBlock('tracks', 40, tracks),
    createFallbackBlock('calendar', 50, calendar),
    createFallbackBlock('consortium', 60, consortium),
    createFallbackBlock('partners', 80, partners),
    createFallbackBlock('photos', 90, photos),
    createFallbackBlock('videos', 100, videos),
  ],
}
