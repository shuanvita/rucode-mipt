import type { HeroSectionProps } from '~/widgets/mts/hero'
import type { InternshipSectionProps } from '~/widgets/mts/internship'
import type { ActionSectionProps } from '~/widgets/mts/action-section'
import type { ProductsSectionProps } from '~/widgets/mts/products'
import type { BenefitsSectionProps } from '~/widgets/mws/benefits'
import type { ContactsSectionProps } from '~/widgets/mws/contacts'
import type { FaqSectionProps } from '~/widgets/faq'
import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'

const hero: HeroSectionProps = {
  title: 'Присоединяйся <br>к МТС',
  description:
    'Знаем, как поддержать баланс между работой и жизнью, разбавить рутину и создать крутую атмосферу, которая&nbsp;вдохновляет.',
  image: '/images/mts/hero.png',
}

const benefits: BenefitsSectionProps = {
  title: 'Преимущества',
  rows: [
    [
      { text: 'Работа в&nbsp;аккредитованной IT-компании', size: 'md' },
      { image: '/images/mts/benefits/benefits-1.png' },
      { text: 'Поддерживаем в сложных ситуациях', size: 'sm' },
      { text: 'Раскрываем потенциал через коучинг', size: 'sm' },
      { image: '/images/mts/benefits/benefits-2.png' },
      {
        text: 'Кафетерий льгот (компенсация): Ипотека, Спорт, Удаленное рабочее место, Рождение ребенка, Медикаменты, Обучение детей',
        size: 'lg',
      },
    ],
    [
      { text: 'Корпоративный университет&nbsp; для любого уровня', size: 'sm' },
      { text: 'Ежедневные митапы в&nbsp;профессиональных сообществах', size: 'md' },
      { image: '/images/mts/benefits/benefits-3.png' },
      { text: 'Бесплатный доступ Строки, KION, МТС Music, PREMIUM', size: 'sm' },
      { text: 'ДМС с первого месяца работы', size: 'sm' },
      { image: '/images/mts/benefits/benefits-4.png' },
      { text: 'База бесплатных обучений разного формата', size: 'sm' },
    ],
  ],
}

const internship: InternshipSectionProps = {
  title: 'Больше, чем стажировки',
  description:
    'Выбери направление в экосистеме МТС. <br>Получи реальный опыт на оплачиваемой стажировке.',
  cards: [
    {
      title: 'Пространство возможностей',
      text: 'Мы не вписываем стажеров в шаблоны, а хотим, чтобы каждый сам смог определить, что ему по душе. Перед тобой множество актуальных направлений и команд с самыми разными людьми — выбор за тобой.',
      image: '/images/mts/internship/internship-1.png',
    },
    {
      title: 'Максимальная гибкость',
      text: 'Ты сможешь выбрать тот график, который удобен тебе — совмещать работу и учебу или с пользой провести каникулы.',
      image: '/images/mts/internship/internship-2.png',
    },
    {
      title: 'Свой среди своих',
      text: 'Наставник и крутая команда для каждого стажера. Мы поддержим тебя на профессиональном пути.',
      image: '/images/mts/internship/internship-3.png',
    },
    {
      title: 'Обучение',
      text: 'Тренинги и онлайн-курсы по личным и профессиональным навыкам в нашем Корпоративном университете, а также доступ к масштабной корпоративной библиотеке.',
      image: '/images/mts/internship/internship-4.png',
    },
  ],
  action: { text: 'Хочу на стажировку МТС', to: 'https://rucode.net/ssrz' },
}

const resume: ActionSectionProps = {
  title: 'Ждем ваши резюме',
  description:
    'МТС всегда в поисках талантливых специалистов, способных решать нетривиальные задачи',
  action: { text: 'Отправить резюме', to: 'https://edu.mipt.ru/member/profile/rezume/' },
}

const testskills: ActionSectionProps = {
  title: 'Тестскиллс',
  description:
    'Если ты только начинаешь свой карьерный путь и у тебя еще нет портфолио проектов, показать свои достижения и навыки поможет карьерный тест. Проходи тест и получай сертификат.',
  action: {
    text: 'Пройти тестирование',
    to: 'https://edu.mipt.ru/member/meroprijatija/test-rucode-hardskils/',
    variant: 'mws-outline',
  },
}

const products: ProductsSectionProps = {
  title: 'Направления и продукты',
  cards: [
    { title: 'Развлечения', image: '/images/mts/products/product-1.png' },
    { title: 'Умные устройства', image: '/images/mts/products/product-2.png' },
    { title: 'Big Data', image: '/images/mts/products/product-3.png' },
    { title: 'AI', image: '/images/mts/products/product-4.png' },
    { title: 'Финтех', image: '/images/mts/products/product-5.png' },
    { title: 'Облачные и&nbsp;цифровые решения', image: '/images/mts/products/product-6.png' },
    { title: 'Сквозные решения', image: '/images/mts/products/product-7.png' },
    { title: 'Кибер-безопасность', image: '/images/mts/products/product-8.png' },
    { title: 'Телеком', image: '/images/mts/products/product-9.png' },
  ],
}

const response: ActionSectionProps = {
  title: 'Оставить отклик',
  action: { text: 'Вакансии МТС', to: 'https://rucode.net/x7k5' },
}

const faq: FaqSectionProps = {
  title: 'Вопросы и ответы',
  items: [
    {
      heading: 'Какие программы стажировок есть в МТС?',
      content:
        'МТС предлагает три программы для твоего развития:<br><br><b>1. МТС Старт</b> — программа стажировки длительностью до 12 мес. в различных направлениях бизнеса и ИТ. Рассчитана на специалистов без опыта с небольшим опытом.<br><br><b>2. МТС ПРО</b> — годовая программа развития для аналитиков, которые планируют развиваться по экспертному треку. Рассчитана на кандидатов с опытом от 6 мес. Программа действует в трех направлениях — бизнес, продуктовая и финансовая аналитика.<br><br><b>3. МТС Лидер</b> — годовая лидерская программа для будущих менеджеров и лидеров МТС. Программа действует в 3-х направлениях телеком бизнеса МТС — проектное управление, управление продуктами b2b, управление продуктами b2c. Рассчитана на кандидатов с опытом от 12 мес. Лидерская программа отличается от других программ наличием ротаций, работой над стратегическими проектами компании и вовлечением топ-менеджмента.',
    },
    {
      heading: 'Стажировка оплачиваемая?',
      content:
        'Да, все программы оплачиваемые. Размер заработной платы зависит от нескольких факторов, среди которых направление стажировки, регион и количество рабочих часов в неделю.',
    },
    {
      heading: 'Можно ли совмещать учёбу и стажировку?',
      content:
        'Зависит от программы стажировки. На программе МТС Старт ты сможешь сам выбирать, сколько часов в неделю работать, и при согласовании с руководителем изменять график во время прохождения стажировки, чтобы сбалансировать нагрузку на работе и на учебе. На программах МТС ПРО и МТС Лидер предполагается занятость 40 часов в неделю. Если ты планируешь совмещать учебу с работой, то советуем заранее тщательно взвесить свои силы.',
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
      heading: 'Каким будет трудовой договор?',
      content:
        'На срок программы между участником и компанией заключается срочный трудовой договор.',
    },
    {
      heading: 'Что будет после завершения стажировки?',
      content:
        'Если ты хорошо себя проявишь и при наличии свободных вакансий, ты сможешь продолжить работу в МТС.',
    },
  ],
}

const contacts: ContactsSectionProps = {
  title: 'На связи с МТС',
  cards: [
    {
      title: 'Хабр',
      description: 'Пишем статьи о разработке',
      to: 'https://habr.com/ru/companies/ru_mts/profile/',
      image: '/images/mts/contacts/contacts-1.png',
    },
    {
      title: 'Код Дурова',
      description: 'Делимся экспертизой',
      to: 'https://kod.ru/author/mts',
      image: '/images/mts/contacts/contacts-2.png',
    },
    {
      title: 'vc.ru',
      description: 'Рассказываем о продуктах эко-системы',
      to: 'https://vc.ru/mts',
      image: '/images/mts/contacts/contacts-3.png',
    },
    {
      title: 'Tproger',
      description: 'Рассказываем о жизни компании',
      to: 'https://tproger.ru/company/mts',
      image: '/images/mts/contacts/contacts-4.png',
    },
    {
      title: 'Telegram',
      description: 'Публикуем свежие вакансии',
      to: 'https://t.me/job_mts',
      image: '/images/mts/contacts/contacts-5.png',
    },
  ],
}

export const mtsPageData: ContentPage = {
  slug: '/mts',
  version: 1,
  blocks: [
    createFallbackBlock('hero', 10, hero),
    createFallbackBlock('benefits', 20, benefits),
    createFallbackBlock('internship', 30, internship),
    createFallbackBlock('resume', 40, resume),
    createFallbackBlock('testskills', 50, testskills),
    createFallbackBlock('products', 60, products),
    createFallbackBlock('response', 70, response),
    createFallbackBlock('faq', 80, faq),
    createFallbackBlock('contacts', 90, contacts),
  ],
}
