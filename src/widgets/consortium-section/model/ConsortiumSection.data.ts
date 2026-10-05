import type { ConsortiumCardProps } from './ConsortiumSection.types'

export const CONSORTIUM_MAP_HINT = 'Нажмите на точку на карте, чтобы узнать подробнее'
export const CONSORTIUM_MAP_IMAGE = '/images/home/map.webp'

export const consortiumCards: ConsortiumCardProps[] = [
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
        title: 'ФГБОУ ВО «Ижевский государственный технический университет имени М.Т. Калашникова»',
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
]
