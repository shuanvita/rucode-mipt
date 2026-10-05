import type { HeroSectionProps } from '~/widgets/mws/hero'
import type { BenefitsSectionProps } from '~/widgets/mws/benefits'
import type { ProductsSectionProps } from '~/widgets/mws/products'
import type { StackSectionProps } from '~/widgets/mws/stack'
import type { InternshipSectionProps } from '~/widgets/mws/internship'
import type { ResumeSectionProps } from '~/widgets/mws/resume'
import type { DirectionsSectionProps } from '~/widgets/mws/directions'
import type { ContactsSectionProps } from '~/widgets/mws/contacts'
import type { FaqSectionProps } from '~/widgets/faq'
import type { PartnersSectionProps } from '~/widgets/partners'
import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'

const hero: HeroSectionProps = {
  title: '<span class="text-yellow-primary">RuCode</span>.навигатор:<br>карьера',
  action: {
    text: 'Узнать больше',
  },
  subtitle: 'Присоединяйся <br>к ит-команде mws',
  description:
    'Знаем, как поддержать баланс между работой и жизнью, разбавить рутину и создать вдохновляющую атмосферу, которая вдохновляет.',
  image: '/images/mws/hero.png',
  form: {
    description:
      'Оставьте ваши контактные данные и мы будем присылать вам подборку актуальных стажировок и вакансий для начинающих специалистов.',
    roleGroup: {
      legend: 'Я —',
      options: [
        { value: '1', label: 'Школьник' },
        { value: '7', label: 'Студент бакалавриата' },
        { value: '8', label: 'Студент магистратуры' },
        { value: '3', label: 'Студент СПО' },
        { value: '5', label: 'Выпускник вуза' },
        { value: '11', label: 'Специалист (Работаю)' },
        { value: '9', label: 'Преподаватель (Школа/СПО)' },
        { value: '10', label: 'Преподаватель (Вуз)' },
      ],
    },
    eventsGroup: {
      legend: 'Мероприятия, которые планируете посетить:',
      options: [
        {
          value: '452',
          label: 'Всероссийское тестирование RuCode по искусственному интеллекту',
        },
        { value: '453', label: 'RuCode.Практикум' },
        { value: '454', label: 'Чемпионат RuCode по искусственному интеллекту' },
        { value: '456', label: 'RuCode.Навигатор: карьера' },
        { value: '457', label: 'RuCode.Навигатор: наука и технологии' },
        { value: '458', label: 'RuCode.Премия' },
      ],
    },
  },
}

const benefits: BenefitsSectionProps = {
  title: 'Преимущества',
  rows: [
    [
      { text: 'Работа в&nbsp;аккредитованной ИТ-компании', size: 'md' },
      { image: '/images/mws/benefits/benefits-1.png' },
      { text: 'Поддерживаем в сложных ситуациях', size: 'sm' },
      { text: 'Раскрываем потенциал через коучинг', size: 'sm' },
      { image: '/images/mws/benefits/benefits-2.png' },
      {
        text: 'Кафетерий льгот (компенсация): Ипотека, Спорт, Удаленное рабочее место, Рождение ребенка, Медикаменты, Обучение детей',
        size: 'lg',
      },
    ],
    [
      { text: 'Корпоративный университет&nbsp; для любого уровня', size: 'sm' },
      { text: 'Ежедневные митапы в&nbsp;профессиональных сообществах', size: 'md' },
      { image: '/images/mws/benefits/benefits-3.png' },
      { text: 'Бесплатный доступ Строки, KION, МТС Music, PREMIUM', size: 'sm' },
      { text: 'ДМС с первого месяца работы', size: 'sm' },
      { image: '/images/mws/benefits/benefits-4.png' },
      { text: 'База бесплатных обучений разного формата', size: 'sm' },
    ],
  ],
}

const products: ProductsSectionProps = {
  title: 'Направления и продукты МТС',
  cards: [
    {
      title: 'Решения',
      description:
        'Помогаем бизнесу создавать продукты и решения на базе облачных технологий, работы с данными, рекламных технологий, коммуникационных сервисов и ИИ',
      tags: [
        'ИИ',
        'Коммуникационные сервисы',
        'Рекламные технологии',
        'Данные',
        'Облачные решения',
      ],
      image: '/images/mws/products/solutions.png',
    },
    {
      title: 'Развлечения <br>и мультимедиа',
      description:
        'Экосистема развлечений, включая онлайн-кинотеатр, онлайн-пространство безграничной библиотеки и музыкальные стриминговые сервисы.',
      tags: ['книги', 'музыка', 'кинотеатр', 'мероприятия'],
      image: '/images/mws/products/entertainment.png',
    },
    {
      title: 'Финансовые <br>технологии',
      description:
        'Развиваем финансовые решения для b2b- и b2c- клиентов. Создаём технологии, с которыми пользоваться финансовыми услугами удобнее и проще.',
      tags: ['банк', 'деньги', 'инвестиции', 'страхование'],
      image: '/images/mws/products/fintech.png',
    },
    {
      title: 'Теле-<br>коммуникации',
      description:
        'Мобильная связь, домашний интернет, цифровое и спутниковое ТВ, Wi-Fi для бизнеса, облачная телефония, IoT-платформа для удаленного управления устройствами и видеонаблюдения.',
      tags: ['мобильная связь и интернет', 'умный дом', 'мембрана'],
      image: '/images/mws/products/telecom.png',
    },
    {
      title: 'Внутренние<br>сервисы',
      description:
        'Сервисы, которые направлены на организацию и автоматизацию работы внутренних сотрудников. От корпоративного портала до инструментов разработки.',
      tags: [],
      image: '/images/mws/products/internal.png',
    },
  ],
}

const stack: StackSectionProps = {
  title: 'Технологический стек',
  description:
    'На стажировке МТС Старт ты будешь работать в сильной команде, освоишь новые навыки и сможешь участвовать в создании классных цифровых продуктов',
  items: [
    'C++',
    'Spring Framework',
    'ASP.NET Core',
    'ElectronJS',
    'Java',
    'React',
    'Golang',
    'Camunda BPM',
    'Python 3',
    'Node JS',
    'Django',
    'C#',
    'Kotlin',
    'Vue.js',
    'Flowable',
    'UiPath Studio',
  ],
}

const internship: InternshipSectionProps = {
  title: 'Больше, чем стажировка',
  cards: [
    {
      title: 'Гибкий график',
      text: 'Стажировку можно совмещать с&nbsp;учёбой. Минимальная нагрузка&nbsp;— 20&nbsp;часов, но&nbsp;её&nbsp;можно пересмотреть. Например, во&nbsp;время каникул',
    },
    {
      title: 'Реальный опыт',
      text: 'Ты учишься у лучших: помимо руководителя, у тебя будет опытный ментор. Это те люди, которые создают цифровые решения прямо сейчас, и они поделятся с тобой своим опытом',
    },
    {
      title: 'Обучение',
      text: 'Корпоративный университет, обучение у внешних экспертов, внутренние мероприятия: хакатоны, олимпиады, конференции. Можно освоить новые навыки, прокачать скиллы и повысить свою ценность для работодателя',
    },
    {
      title: 'Поддержка единомышленников',
      text: 'В MWS 20+ технических гильдий по разным направлениям: Agile, Python, CTO, управение данными, ИТ-архитекторы, дизайн-комьюнити и многое другое. Участники общаются, дружат, устраивают митапы и учатся друг у друга',
    },
  ],
}

const resume: ResumeSectionProps = {
  title: 'Ждем ваши резюме',
  description:
    'MТС Web Services всегда в поисках талантливых <br>специалистов, способных решать <br>нетривиальные задачи',
  vacancies: {
    text: 'Вакансии',
    to: 'https://job.mts.ru/',
  },
  resume: {
    text: 'Отправить резюме',
    to: 'https://tabs.mts.ru/share/shr6rGLDp1Bv93qEKjQae/fomtvptGvvw6s1AzUe',
  },
}

const directions: DirectionsSectionProps = {
  title: 'Профессиональные направления',
  cards: [
    {
      image: '/images/mws/directions/direction-1.png',
      videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-44001716&id=456240135&autoplay=1',
      caption: '«О профессиональных направлениях, реализуемых в области в ИИ, Big Data МТС»',
      articleUrl:
        'https://vk.com/@rucodefestival-o-professionalnyh-napravleniyah-realizuemyh-v-oblasti-v-ii-b',
      tags: [
        { label: '#научпоп', color: 'text-blue-400' },
        { label: '#карьера', color: 'text-rose-500' },
      ],
    },
    {
      image: '/images/mws/directions/direction-2.png',
      videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-44001716&id=456240136&autoplay=1',
      caption: '«Пути развития в сфере ИИ и компьютерного зрения»',
      articleUrl: 'https://vk.com/@rucodefestival-kogda-mashiny-deistvitelno-nauchatsya-videt',
      tags: [
        { label: '#научпоп', color: 'text-blue-400' },
        { label: '#карьера', color: 'text-rose-500' },
      ],
    },
    {
      image: '/images/mws/directions/direction-3.png',
      videoUrl: 'https://vkvideo.ru/video_ext.php?oid=-44001716&id=456240137&autoplay=1',
      caption: '«ИИ по делу: технологии перемен»',
      articleUrl:
        'https://vk.com/@rucodefestival-iskusstvennyi-intellekt-v-deistvii-kogda-nauka-vstrechaetsya',
      tags: [
        { label: '#научпоп', color: 'text-blue-400' },
        { label: '#карьера', color: 'text-rose-500' },
      ],
    },
  ],
}

const contacts: ContactsSectionProps = {
  title: 'На связи с МТС Web Services',
  cards: [
    {
      title: 'Хабр',
      description: 'Пишем о разработке',
      to: 'https://habr.com/ru/companies/ru_mts/profile/',
      image: '/images/mws/contacts/contacts-1.png',
    },
    {
      title: 'Джобс Офишиал',
      description: 'Публикуем свежие вакансии',
      to: 'https://t.me/job_mts',
      image: '/images/mws/contacts/contacts-2.png',
    },
    {
      title: 'Это МТС',
      description: 'Рассказываем о карьере',
      to: 'https://vk.com/it_is_mts',
      image: '/images/mws/contacts/contacts-3.png',
    },
    {
      title: 'МТС True Tech',
      description: 'Объединяем лидеров ИТ-отрасли и начинающих специалистов',
      to: 'https://tproger.ru/company/mts',
      image: '/images/mws/contacts/contacts-4.png',
    },
  ],
}

const faq: FaqSectionProps = {
  title: 'Вопросы и ответы',
  items: [
    {
      heading: 'Стажировка оплачиваемая?',
      content:
        'Да, все программы оплачиваемые. Размер заработной платы зависит от нескольких факторов, среди которых направление стажировки, регион и количество рабочих часов в неделю.',
    },
    {
      heading: 'В каком городе проходит стажировка?',
      content:
        'Программы МТС ПРО и МТС Лидер проходят в Москве. Стажировка МТС Старт проводится по всей России.',
    },
    {
      heading: 'Можно ли проходить стажировку удалённо?',
      content:
        'На некоторых направлениях программы МТС Старт такая возможность есть при условии согласования такой опции с руководителем. На программах МТС ПРО и МТС Лидер удаленка не предполагается.',
    },
    {
      heading: 'Когда заканчивается набор на стажировку?',
      content:
        'Набор на стажировку МТС Старт открыт в течение всего года, новые вакансии публикуются каждую неделю. Следи за обновлениями.',
    },
    {
      heading: 'Какой график работы?',
      content:
        'На стажировке МТС Старт гибкий график с возможностью работать от 20 до 40 часов в неделю. Возможен как очный, так и дистанционный формат работы (при условии согласования с руководителем). На программах МТС ПРО и МТС Лидер гибридный формат – три дня в офисе и два дня удаленно. График — 40 часов в неделю.',
    },
    {
      heading: 'Что будет после завершения стажировки?',
      content:
        'Если ты хорошо себя проявишь и при наличии свободных вакансий, ты сможешь продолжить работу в МТС.',
    },
  ],
}

const partners: PartnersSectionProps = {
  items: [
    {
      title: 'При поддержке',
      text: 'Всероссийский фестиваль RuCode: искусственный интеллект в пространстве науки и технологий проходит при поддержке гранта Минобрнауки России в рамках федерального проекта «Популяризация науки и технологий»',
      images: [
        {
          src: '/images/mws/partners/partner-1.svg',
          alt: 'Минобрнауки России',
          class: 'w-62.5',
        },
        {
          src: '/images/mws/partners/partner-2.svg',
          alt: 'Популяризация науки и технологий',
          class: 'w-38 aspect-[1.43]',
        },
      ],
    },
  ],
}

export const mwsPageData: ContentPage = {
  slug: '/mws',
  version: 1,
  blocks: [
    createFallbackBlock('hero', 10, hero),
    createFallbackBlock('benefits', 20, benefits),
    createFallbackBlock('products', 30, products),
    createFallbackBlock('stack', 40, stack),
    createFallbackBlock('internship', 50, internship),
    createFallbackBlock('resume', 60, resume),
    createFallbackBlock('directions', 70, directions),
    createFallbackBlock('contacts', 80, contacts),
    createFallbackBlock('faq', 90, faq),
    createFallbackBlock('partners', 100, partners),
  ],
}
