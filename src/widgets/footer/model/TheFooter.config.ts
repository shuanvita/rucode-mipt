import type {
  FooterConfig,
  FooterConfigKey,
  FooterContacts,
  NavLink,
} from '../model/TheFooter.types'

export const defaultFooterContacts: FooterContacts = {
  email: 'award@rucode.net',
  phone: { label: '+7 (495) 128-34-32', href: 'tel:+74951283432' },
  workHours: 'Режим работы: 10:00-18:00',
  workHoursKey: 'footer.workHours',
}

export const defaultFooterRegulation: NavLink = {
  href: 'https://rucode.net/wp-content/uploads/2026/08/polozhenie-rucode.premii.pdf',
  title: 'Положение о проведении Премии',
}

const awardLinks: NavLink[] = [
  { href: '#premium', title: 'О премии' },
  { href: '#nominations', title: 'Направления и номинации' },
  { href: '#stages', title: 'Этапы' },
  { href: '#committee', title: 'Орг. комитет' },
  { href: '#partners', title: 'Партнёры' },
]

export const footerConfigs: Record<FooterConfigKey, FooterConfig> = {
  home: {
    links: [
      { href: '#tracks', title: 'Треки фестиваля' },
      { href: '#calendar', title: 'Календарь' },
      { href: '#consortium', title: 'Консорциум' },
      { href: '#videos', title: 'Видео' },
      { href: 'https://edu.mipt.ru/member/?rucode=1', title: 'Хочу участвовать' },
    ],
    regulation: null,
    contacts: { email: 'info@rucode.net', phone: null, workHours: null },
  },
  award2025: {
    links: [...awardLinks.slice(0, 4), { href: '#ceremony', title: 'Церемония' }, awardLinks[4]!],
  },
  award2026: { links: awardLinks },
  ai_champ: {
    links: [
      { href: '#leagues', title: 'Лиги RuCode' },
      { href: '#stages', title: 'Этапы' },
      { href: '#tasks', title: 'Задачи' },
      { href: '#preparation', title: 'Подготовка' },
    ],
    regulation: null,
    contacts: { email: 'info@rucode.net', phone: null, workHours: null },
  },
  aitesting: {
    links: [
      { href: '#format', title: 'Формат проведения' },
      { href: '#demo', title: 'Демо-тест' },
      { href: '#calendar', title: 'Календарь' },
      { href: '#partners', title: 'Партнёры' },
    ],
    regulation: null,
    contacts: { email: 'info@rucode.net' },
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
    regulation: null,
    contacts: { email: 'info@rucode.net', phone: null, workHours: null },
  },
  mws: {
    links: [],
    regulation: null,
    contacts: { email: 'info@rucode.net', phone: null, workHours: null },
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
      href: '/files/reglament_mezhdunarodnogo_chempionata_rukod.pdf',
      title: 'Регламент чемпионата',
      titleKey: 'footer.champRegulation',
    },
    contacts: {
      email: null,
      extraGroups: [
        {
          title: 'По вопросам организации и технической поддержки',
          titleKey: 'footer.supportTitle',
          email: 'support@rucode.net',
        },
        {
          title: 'По вопросам партнёрства и для СМИ',
          titleKey: 'footer.partnershipTitle',
          email: 'partnership@rucode.net',
        },
      ],
      phoneTitle: 'Связь с организаторами',
      phoneTitleKey: 'footer.contactTitle',
      phone: { label: '+7 495 128-34-32', href: 'tel:+74951283432' },
      workHours: 'с 10:00 до 18:00 МСК',
      workHoursKey: 'footer.champWorkHours',
    },
  },
}
