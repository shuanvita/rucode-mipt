import type { HeaderConfig, HeaderConfigKey } from '../model/TheHeader.types'

export const headerConfigs: Record<HeaderConfigKey, HeaderConfig> = {
  home: {
    links: [
      { href: '#tracks', title: 'Треки фестиваля' },
      { href: '#calendar', title: 'Календарь' },
      { href: '#consortium', title: 'Консорциум' },
      { href: '#videos', title: 'Видео' },
      { href: 'https://edu.mipt.ru/member/?rucode=1', title: 'Хочу участвовать' },
    ],
    cta: {
      label: 'Мероприятия',
      hasDropdown: true,
      items: [
        { href: '/aitesting', title: 'Тестирование' },
        { href: '/ai_champ', title: 'Чемпионат по ИИ' },
        { href: '/award2026', title: 'RUCODE.Премия' },
        { href: '/champ', title: 'Алгоритмическое программирование' },
      ],
    },
  },
  award2025: {
    links: [
      { href: '#premium', title: 'О премии' },
      { href: '#nominations', title: 'Направления и номинации' },
      { href: '#stages', title: 'Этапы' },
      { href: '#committee', title: 'Орг. комитет' },
      { href: '#ceremony', title: 'Церемония' },
      { href: '#partners', title: 'Партнёры' },
    ],
  },
  award2026: {
    links: [
      { href: '#premium', title: 'О премии' },
      { href: '#nominations', title: 'Направления и номинации' },
      { href: '#stages', title: 'Этапы' },
      { href: '#committee', title: 'Орг. комитет' },
      { href: '#partners', title: 'Партнёры' },
    ],
    cta: {
      label: 'Войти',
      to: 'https://edu.mipt.ru/member/meroprijatija/rucode-premiya-2026',
      variant: 'primary',
      class: 'px-4 py-2 text-[11px]',
    },
  },
  ai_champ: {
    links: [
      { href: '#leagues', title: 'Лиги RuCode' },
      { href: '#stages', title: 'Этапы' },
      { href: '#tasks', title: 'Задачи' },
      { href: '#preparation', title: 'Подготовка' },
    ],
    cta: {
      label: 'Войти',
      to: 'https://edu.mipt.ru/member/meroprijatija/chempionat-rucode-po-iskusstvennomu-intellektu-2026',
      variant: 'primary',
      class: 'px-4 py-2 text-[11px]',
    },
  },
  aitesting: {
    links: [
      { href: '#format', title: 'Формат проведения' },
      { href: '#demo', title: 'Демо-тест' },
      { href: '#calendar', title: 'Календарь' },
      { href: '#partners', title: 'Партнёры' },
    ],
    cta: {
      label: 'Войти',
      to: 'https://edu.mipt.ru/member/?rucode=1',
      variant: 'primary',
      class: 'px-4 py-2 text-[11px]',
    },
  },
  consortium: {
    links: [
      { href: '#main', title: 'Главное' },
      { href: '#directions', title: 'Направления' },
      { href: '#geography', title: 'География' },
      { href: '#benefits', title: 'Преимущества' },
      { href: '#gallery', title: 'Галерея' },
      { href: '#forwho', title: 'Кого мы ждем?' },
      { href: '#stages', title: 'Этапы' },
    ],
  },
  mws: {
    links: [],
    partnerLogo: { src: '/images/partners/mts-white.png', alt: 'MWS', to: 'https://job.mts.ru/' },
  },
  mts: {
    logo: { src: '/rucode-logo-mts.svg', width: 122, height: 107 },
    links: [
      { href: '#benefits', title: 'Преимущества' },
      { href: '#internship', title: 'Стажировки' },
      { href: '#skills', title: 'Тестскиллс' },
      { href: '#products', title: 'Направления и продукты' },
      { href: '#faq', title: 'Вопросы и ответы' },
      { href: '#contacts', title: 'Контакты' },
    ],
    partnerLogo: { src: '/images/partners/mts.png', alt: 'МТС', to: 'https://job.mts.ru/' },
  },
  champ: {
    links: [
      { href: '#about', title: 'О чемпионате', titleKey: 'nav.champ.about' },
      { href: '#how', title: 'Этапы', titleKey: 'nav.champ.stages' },
      { href: '#why', title: 'Зачем участвовать', titleKey: 'nav.champ.why' },
      { href: '#achievements', title: 'Достижения', titleKey: 'nav.champ.achievements' },
      { href: '#gallery', title: 'Фотогалерея', titleKey: 'nav.champ.gallery' },
    ],
  },
}
