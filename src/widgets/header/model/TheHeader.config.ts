import type { HeaderConfig, HeaderConfigKey } from '../model/TheHeader.types'

export const headerConfigs: Record<HeaderConfigKey, HeaderConfig> = {
  home: {
    links: [
      { href: '#tracks', title: 'Треки фестиваля' },
      { href: '#calendar', title: 'Календарь' },
      { href: '#consortium', title: 'Консорциум' },
      { href: '#video', title: 'Видео' },
      { href: '#participate', title: 'Хочу участвовать' },
    ],
    cta: {
      label: 'Мероприятия',
      hasDropdown: true,
      items: [
        { href: 'https://aitesting.rucode.net/', title: 'Тестирование' },
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
}
