import type { FinalHeroProps } from '~/widgets/final-2024/hero'
import type { FinalAboutProps } from '~/widgets/final-2024/about'
import type { FinalVideoProps } from '~/widgets/final-2024/video'
import type { FinalQuotesProps } from '~/widgets/final-2024/quotes'
import type { PrizesSectionProps } from '~/widgets/final-2024/prizes'
import type { FinalProgramProps } from '~/widgets/final-2024/program'
import type { FinalLinksProps } from '~/widgets/final-2024/links'
import type { FinalScheduleProps } from '~/widgets/final-2024/schedule'
import type { FaqSectionProps } from '~/widgets/faq'
import type { FinalGalleryProps } from '~/widgets/final-2024/gallery'
import type { FinalOrganizersProps } from '~/widgets/final-2024/organizers'
import type { FinalTelegramProps } from '~/widgets/final-2024/telegram'
import type { PartnersSectionProps } from '~/widgets/partners'
import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'

const IMAGES = '/images/final-2024'

const hero: FinalHeroProps = {
  titleImage: `${IMAGES}/title.svg`,
  titleAlt: 'RuCode Festival Final',
  subtitle: 'Ты не должен это пропустить!',
  tags: [
    'Онлайн-курсы',
    'Интенсивы',
    'Отборочные туры',
    'Чемпионат по алгоритмическому программированию',
    'Чемпионат по искусственному интеллекту',
  ],
  image: `${IMAGES}/hero.svg`,
  imageAlt: 'Главное изображение',
}

const about: FinalAboutProps = {
  facts: [
    { label: 'Даты проведения', value: '19.08 — 20.10.2024' },
    { label: 'Как участвовать', value: 'очно в 20+ городах страны и онлайн' },
    { label: 'Стоимость', value: 'бесплатно, по предварительной регистрации' },
  ],
  audience: {
    title: 'Для кого:',
    text: 'для всех, кто интересуется темой алгоритмического (спортивного) программирования и искусственного интеллекта: студентов, школьников, специалистов IT, высокотехнологичных компаний и других сфер бизнеса',
  },
  action: { text: 'Регистрация завершена' },
  title: 'RuCode_ Финал',
  description:
    'Финал — это учебно-популярное мероприятие, в рамках которого все интересующиеся темами искусственного интеллекта и алгоритмического программирования найдут для себя пользу: смогут пройти обучение на онлайн-курсах, а также принять участие в интенсивах и соревнованиях. Финальный этап чемпионата будет проводиться очно в кампусе СКФУ в городе Ставрополь и на 20+ площадках в других городах страны, а также онлайн.',
  crystal: `${IMAGES}/crystal.png`,
  cat: `${IMAGES}/cat.png`,
}

const video: FinalVideoProps = {
  src: 'https://rucode.net/rucode.mp4',
  poster: `${IMAGES}/gallery/1.png`,
}

const quotes: FinalQuotesProps = {
  title: 'Зачем участвовать',
  items: [
    {
      name: 'Алексей Малеев',
      photo: '/images/maleev.jpg',
      role: 'Руководитель программного комитета Всероссийского фестиваля по искусственному интеллекту и алгоритмическому программированию RuCode, директор Высшей школы программной инженерии МФТИ',
      text: 'Мы убеждены, что активное привлечение школьников и студентов к компьютерным наукам в целом, и к изучению технологий искусственного интеллекта в частности — важнейшая задача для нашей страны. Ребята, которые сейчас делают свои первые шаги в науке, завтра станут высококлассными специалистами, способными решать сложнейшие задачи цифровой экономики. Фестиваль RuCode — площадка, где все интересующиеся современными технологиями могут получить новые знания, практические навыки и возможности для самореализации.',
    },
    {
      name: 'Александра Дунаева',
      photo: `${IMAGES}/people/dunaeva.png`,
      role: 'Главный методист фестиваля RuCode',
      text: 'Участие в RuCode Финале будет интересно всем — от школьников до выпускников вузов. Начинающие могут пройти онлайн-курсы и посетить лекции, а затем решить свои первые задачи по алгоритмическому программированию и машинному обучению. Продвинутые могут принять участие в соревнованиях за призы и места на стажировку в ведущих ИТ-компаниях России.',
    },
    {
      name: 'Олег Христенко',
      photo: `${IMAGES}/people/khristenko.png`,
      role: 'Главный методист фестиваля RuCode, Главный судья Чемпионата RuCode\nТрек Алгоритмическое программирование',
      text: 'Участвовать в RuCode имеет смысл для того, чтобы улучшить свои знания алгоритмов и умение их применять как для решения олимпиадных задач, так и в «реальном» программировании. Схема «интенсивы + чемпионат» помогает и закрыть пробелы в теории, и попрактиковаться в решении задач, участвуя в соревновании. Большое количество дивизионов даст возможность каждому выбрать посильный уровень чемпионата (не слишком простой, но и не слишком сложный). А тем, кому темы интенсивов хорошо знакомы, и кто собирается участвовать в соревнованиях самого высокого уровня, есть дивизион A/B.',
    },
    {
      name: 'Иван Савкин',
      photo: `${IMAGES}/people/savkin.png`,
      role: 'Победитель чемпионатов RuCode\nТрек Искусственный интеллект',
      text: 'Узнал о RuCode в 2021 году, когда учился по программе МФТИ «Python для анализа данных». С тех пор участвую и даже смог несколько раз победить в чемпионатах RuCode.\nЧего ждать?\nОтличной организации соревнований.\nВозможности нереально прокачать навыки в питоне, DS, МL, тензорной алгебре, матане, матстате и тервере.\nМного интересных вебинаров о современном ML и АІ.\nНовых контактов с людьми из сфер ML и AI, общения с представителями серьёзных работодателей и профильных вузов.\nПрокачки софтскиллов, в том числе, навыков публичных выступлений и работы в команде.\nНу и, если выиграешь, получишь крутые призы и мерч.',
    },
    {
      name: 'Евгений Колодин',
      photo: `${IMAGES}/people/kolodin.png`,
      role: 'Победитель чемпионатов RuCode\nТрек Алгоритмическое программирование',
      text: 'Я считаю, что RuCode подходят и новичкам, и опытным участникам соревнований. Новичкам RuCode поможет погрузиться в атмосферу настоящего соревнования с разморозкой и правилами ICPC. Участвовать могут все желающие - и для начинающих это отличный шанс получить соревновательный опыт.\nТе, кто уже не первый день в спортивном программировании, тоже могут проявить себя и принять участие в чемпионатах старших дивизионов (A/B).',
    },
  ],
}

const prizes: PrizesSectionProps = {
  title: 'Призы победителям и призёрам',
  items: [
    { image: `${IMAGES}/prizes/playstation.png`, title: 'игровая консоль' },
    { image: `${IMAGES}/prizes/speaker.png`, title: 'умная колонка' },
    { image: `${IMAGES}/prizes/watch.png`, title: 'смарт-часы' },
  ],
}

const program: FinalProgramProps = {
  title: 'Программа',
  tracks: [
    {
      title: 'Трек\nИскусственный интеллект',
      rows: [
        {
          date: '19.08 — 31.10',
          title: 'Онлайн-курсы',
          link: { text: 'Программа', to: 'https://rucode.net/iskusstvennyj-intellekt/#online' },
        },
        {
          date: '19.08 — 16.09',
          title: 'Решение задач базового уровня',
          hint: '2 задачи уровня junior — middle от партнёров RuCode',
        },
        {
          date: '02.09 — 28.09',
          title: 'Решение задач продвинутого уровня',
          hint: '2 задачи уровня middle+ — senior от партнёров RuCode',
        },
        {
          date: '19.08 — 19.10',
          title: 'Обучающие лекции по темам задач трека ИИ',
        },
        {
          date: '19.10',
          title: 'Защита лучших решений трека ИИ, награждение победителей',
          hint: 'онлайн или на кампусе СКФУ',
        },
      ],
      action: {
        text: 'Посмотреть задачи',
        to: 'https://rucode.net/wp-content/uploads/2024/09/66ec3b711ea19_zadachi_prodvinutogo_urovnya_dlya_treka.pdf',
      },
    },
    {
      title: 'Трек\nАлгоритмическое программирование',
      rows: [
        {
          date: '19.08 — 31.10',
          title: 'Онлайн-курсы',
          link: {
            text: 'Программа',
            to: 'https://rucode.net/algoritmicheskoe-programmirovanie/#online',
          },
        },
        { date: '02.09 — 07.10', title: 'Отборочный тур в дивизион A-B' },
        {
          date: '14.10 — 18.10',
          title: 'Интенсивы по алгоритмическому программированию',
          hint: 'на 4 площадках вузов-соорганизаторов и онлайн',
        },
        {
          date: '16.10 15:00',
          title: 'Завершение регистрации команд на очные площадки проведения чемпионата',
        },
        {
          date: '19.10 23:59',
          title: 'Завершение регистрации команд на онлайн участие в чемпионате',
        },
        {
          date: '20.10',
          title: 'Чемпионат по алгоритмическому программированию',
          hint: 'Проводится очно на 20+ площадках вузов-соорганизаторов и онлайн.\n\nДивизионы:\nA-B — очно, онлайн\nC-D — очно (взрослые, школьники), онлайн\nE-F — очно (взрослые, школьники), онлайн',
        },
      ],
      action: { text: 'Регистрация завершена' },
    },
  ],
}

const links: FinalLinksProps = {
  items: [
    {
      text: 'Протокол чемпионата RuCode.Финал по АП 2024',
      to: 'https://disk.yandex.ru/i/PO2owxSNGvAjrQ',
    },
    {
      text: 'Разбор задач дивизиона A-B чемпионата по АП',
      to: 'https://cloud.it-edu.com/s/PR8WSxokrqRY4Tm',
    },
    {
      text: 'Разбор задач дивизиона C-D чемпионата по АП',
      to: 'https://cloud.it-edu.com/s/qFQJTrJZqLrwTCf',
    },
    {
      text: 'Разбор задач дивизиона E-F чемпионата по АП',
      to: 'https://cloud.it-edu.com/s/mYXTJj86iybpDTq',
    },
  ],
}

const schedule: FinalScheduleProps = {
  title: 'Программа Финала на региональных площадках',
  day: '20 октября',
  group: {
    text: 'Площадки вузов-соорганизаторов RuCode',
    to: 'https://disk.yandex.ru/i/c2cP_MKChIuTlg',
    note: 'Время по МСК',
  },
  rows: [
    { time: '09:00 – 10:00', text: 'Регистрация участников' },
    { time: '09:30 – 10:00', text: 'Пробный тур' },
    { time: '10:00 – 15:00', text: 'Контест по алгоритмическому программированию' },
    {
      time: '12:00 – 15:00',
      text: 'Комментирование контеста экспертами RuCode (Олег Христенко aka Snark, Иван Дубинин, Владимир Куренков)',
    },
    { time: '15:00 – 16:00', text: 'Перерыв' },
    {
      time: '16:00 – 17:15',
      text: 'Разбор задач контеста от Александра Балабанова, ассистент НОК ИВТ БФУ им. Канта, преподаватель олимпиадной подготовки ЦРСКД БФУ им. Канта, автор задач Технокубка-2024, турнира для петрозаводских сборов',
    },
    { time: '17:15 – 18:30', text: 'Приветственное слово и разморозка' },
    { time: '18:30 – 18:45', text: 'Награждение' },
  ],
}

const faq: FaqSectionProps = {
  title: 'Вопросы и ответы',
  items: [
    {
      heading: 'Могу ли я выбирать этапы, в которых буду принимать участие?',
      content:
        'Да, ты можешь выбирать то, что интересно именно тебе. Единственное ограничение: для участия в чемпионате дивизиона А-В трека Алгоритмическое программирование тебе нужно пройти отбор. Для трека Искусственный интеллект никаких ограничений нет.',
    },
    {
      heading: 'Могу ли я участвовать только в чемпионате?',
      content:
        'Да. При этом лекции, интенсивы и курсы мы рекомендуем в качестве дополнительной подготовки к участию в чемпионатах.',
    },
    {
      heading: 'Могу ли участвовать в нескольких направлениях?',
      content:
        'Конечно! Учиться можно в любом из направлений, соревноваться — тоже. Только имей в виду, что даты этапов Финала могут пересекаться, и какие-то события могут проходить в одно и то же время.',
    },
    {
      heading: 'Обязательно ли мне создавать команду?',
      content:
        'Всё зависит от этапа. Для интенсивов создавать команду не нужно: все участники обучаются индивидуально, результаты в турнирной таблице показываются соответствующим образом.<br>А вот чемпионат — командное состязание. В команде может быть 1, 2 или 3 человека. Важно, что регистрировать команду необходимо, даже если ты планируешь участвовать один — иначе ты просто не сможешь получить логин и пароль от контеста чемпионата.',
    },
    {
      heading: 'Где найти логины и пароли для контеста?',
      content: 'В личном кабинете.',
    },
    {
      heading: 'Можно ли участвовать в нескольких дивизионах чемпионатов по ИИ и АП?',
      content: 'Нет, необходимо выбрать дивизион заранее и участвовать именно в нём.',
    },
    {
      heading: 'Как мне принять очное участие в треке Алгоритмическое программирование?',
      content: 'Информация об очных точках и контактах организаторов будет размещена на сайте.',
    },
    {
      heading: 'Что такое ДО и ДПО?',
      content:
        'ДО — дополнительное образование. С помощью сертификата ДО студенты по согласованию со своим университетом смогут получить запись «интенсивные алгоритмы» в дипломе.<br>ДПО — дополнительное профессиональное образование. Это удостоверение установленного образца, которое выдаёт МФТИ. Такое удостоверение могут получить только те участники, у которых есть высшее или среднее профессиональное образование. Студенты могут получить справку о повышении квалификации, которую после завершения обучения в университете можно будет обменять на удостоверение.',
    },
  ],
}

const gallery: FinalGalleryProps = {
  title: 'Вспоминаем столицу RuCode_ ‘2023',
  images: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `${IMAGES}/gallery/${n}.png`),
}

const organizers: FinalOrganizersProps = {
  title: 'Организаторы',
  items: [
    { name: 'МФТИ', city: 'г. Долгопрудный', logo: '01.png', to: 'https://mipt.ru/' },
    { name: 'СКФУ', city: 'г. Ставрополь', logo: '02.svg', to: 'https://ncfu.ru/' },
    { name: 'НГУ', city: 'г. Новосибирск', logo: '03.svg', to: 'https://www.nsu.ru/' },
    { name: 'БФУ им. Канта', city: 'г. Калининград', logo: '04.svg', to: 'https://kantiana.ru/' },
    {
      name: 'Правительство',
      city: 'Пермского края',
      logo: '05.svg',
      to: 'https://admin.permkrai.ru/contacts/',
    },
    { name: 'ДВФУ', city: 'г. Владивосток', logo: '06.png', to: 'https://www.dvfu.ru/' },
    { name: 'ЗабГУ', city: 'г. Чита', logo: '07.svg', to: 'https://zabgu.ru/php/index.php' },
    { name: 'СФУ', city: 'г. Красноярск', logo: '08.svg', to: 'https://www.sfu-kras.ru/' },
    { name: 'УрФУ', city: 'г. Екатеринбург', logo: '09.svg', to: 'https://urfu.ru/ru/' },
    { name: 'ТГУ', city: 'г. Томск', logo: '10.svg', to: 'https://www.tsu.ru/' },
    { name: 'ННГУ', city: 'г. Нижний Новгород', logo: '11.svg', to: 'http://www.unn.ru/' },
    { name: 'ИЖГТУ', city: 'г. Ижевск', logo: '12.png', to: 'https://istu.ru/' },
    { name: 'ПЕТРГУ', city: 'г. Петрозаводск', logo: '13.svg', to: 'https://petrsu.ru/' },
    {
      name: 'Иннополис',
      city: 'Республика Татарстан',
      logo: '14.png',
      to: 'https://innopolis.university/',
    },
    { name: 'КГУ', city: 'г. Курск', logo: '15.svg', to: 'https://kursksu.ru/' },
    { name: 'ТИУ', city: 'г. Тюмень', logo: '16.svg', to: 'https://www.tyuiu.ru/' },
    { name: 'ВолГУ', city: 'г. Волгоград', logo: '17.png', to: 'https://volsu.ru/' },
    { name: 'УУНиТ', city: 'г. Уфа', logo: '18.svg', to: 'https://uust.ru/' },
    { name: 'МАУ', city: 'г. Мурманск', logo: '19.svg', to: 'https://mauniver.ru/' },
    { name: 'КРСУ', city: 'г. Бишкек', logo: '20.svg', to: 'https://krsu.edu.kg/' },
    {
      name: 'Университет «Сириус»',
      city: 'Краснодарский край',
      logo: '21.svg',
      to: 'https://siriusuniversity.ru/',
    },
    { name: 'АНО ДО АТР', city: 'г. Ульяновск', logo: '22.svg', to: 'https://atr73.ru/' },
    { name: 'ПГНИУ', city: 'г. Пермь', logo: '23.svg', to: 'http://www.psu.ru/' },
    { name: 'СГУ', city: 'г. Саратов', logo: '25.svg', to: 'https://www.sgu.ru/' },
    { name: 'Деловая Россия', city: 'г. Иркутск', logo: '24.svg', to: 'https://deloros.ru/' },
    {
      name: 'Центральный университет',
      city: 'г. Москва',
      logo: '26.svg',
      to: 'https://centraluniversity.ru/',
    },
    { name: 'ВГУ', city: 'г. Воронеж', logo: '27.png', to: 'https://vsu.ru' },
    { name: 'МИСИС', city: 'г. Москва', logo: '28.svg', to: 'https://misis.ru/' },
    {
      name: 'Донбасский государственный технический университет',
      city: 'г. Алчевск',
      logo: '29.png',
      to: 'https://dontu.ru',
    },
    {
      name: 'Зоргосфера',
      city: 'г. Астрахань',
      logo: '30.png',
      to: 'https://zorgospheraonline.ru',
    },
  ].map((item) => ({ ...item, logo: `${IMAGES}/organizers/${item.logo}` })),
}

const partners: PartnersSectionProps = {
  items: [
    {
      title: 'Генеральный партнёр',
      images: [
        { src: '/images/partners/mts-final.png', alt: 'МТС', class: 'w-[101px] lg:w-[135px]' },
      ],
    },
    {
      title: 'Партнёры',
      images: [
        { src: '/images/partners/sber.svg', alt: 'Сбер', class: 'w-33 lg:w-[134px]' },
        { src: '/images/partners/yandex.svg', alt: 'Яндекс', class: 'w-33 lg:w-32' },
      ],
    },
    {
      title: 'Научные партнёры',
      images: [
        {
          src: '/images/partners/ai-center.png',
          alt: 'Исследовательский центр ИИ',
          class: 'w-[383px] max-w-full',
        },
      ],
    },
    {
      title: 'При поддержке',
      text: 'Всероссийский фестиваль RuCode по искусственному интеллекту и алгоритмическому программированию проходит при поддержке гранта Минобрнауки России в рамках федерального проекта «Популяризация науки и технологий»',
      images: [
        { src: '/images/partners/support-1.svg', alt: '', class: 'w-24' },
        { src: '/images/partners/support-2.svg', alt: '', class: 'w-34' },
      ],
    },
  ],
}

const telegram: FinalTelegramProps = {
  text: 'Свежие новости IT-индустрии и фестиваля RuCode в нашем Telegram-канале!',
  action: { text: 'Подписаться', to: 'https://t.me/rucodefestival' },
  image: `${IMAGES}/telegram.png`,
  imageAlt: 'Изображение почтового ящика',
}

export const final2024PageData: ContentPage = {
  slug: '/final-2024',
  version: 2,
  blocks: [
    createFallbackBlock('hero', 10, hero),
    createFallbackBlock('about', 20, about),
    createFallbackBlock('video', 30, video),
    createFallbackBlock('quotes', 40, quotes),
    createFallbackBlock('prizes', 50, prizes),
    createFallbackBlock('program', 60, program),
    createFallbackBlock('links', 70, links),
    createFallbackBlock('schedule', 80, schedule),
    createFallbackBlock('faq', 90, faq),
    createFallbackBlock('gallery', 100, gallery),
    createFallbackBlock('organizers', 110, organizers),
    createFallbackBlock('partners', 120, partners),
    createFallbackBlock('telegram', 130, telegram),
  ],
}
