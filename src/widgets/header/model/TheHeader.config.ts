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
  champ: {
    links: [
      { href: '#about', title: 'О чемпионате', titleKey: 'nav.champ.about' },
      { href: '#how', title: 'Этапы', titleKey: 'nav.champ.stages' },
      { href: '#why', title: 'Зачем участвовать', titleKey: 'nav.champ.why' },
      { href: '#achievements', title: 'Достижения', titleKey: 'nav.champ.achievements' },
      { href: '#gallery', title: 'Фотогалерея', titleKey: 'nav.champ.gallery' },
    ],
    regulation: {
      href: 'https://rucode.net/wp-content/uploads/2026/04/reglament_mezhdunarodnogo_chempionata_rukod.pdf',
      title: 'Регламент чемпионата',
      titleKey: 'footer.champRegulation',
    },
    cta: {
      label: 'Войти',
      labelKey: 'header.login',
      to: 'https://edu.mipt.ru/member',
      variant: 'primary',
      class: 'px-4 py-2 text-[11px]',
    },
  },
}
