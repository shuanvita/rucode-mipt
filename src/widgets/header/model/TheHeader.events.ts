import type { NavLink } from './TheHeader.types'

// Кнопка «Мероприятия» одинакова на всех страницах, поэтому живёт не в конфигах страниц
export const eventsMenu: { label: string; items: NavLink[] } = {
  label: 'Мероприятия',
  items: [
    { href: '/aitesting', title: 'Тестирование' },
    { href: '/ai_champ', title: 'Чемпионат по ИИ' },
    { href: '/award2026', title: 'RUCODE.Премия' },
    { href: '/champ', title: 'Алгоритмическое программирование' },
  ],
}
