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
  },
  ai_champ: {
    links: [
      { href: '#leagues', title: 'Лиги RuCode' },
      { href: '#stages', title: 'Этапы' },
      { href: '#tasks', title: 'Задачи' },
      { href: '#preparation', title: 'Подготовка' },
    ],
  },
  aitesting: {
    links: [
      { href: '#format', title: 'Формат проведения' },
      { href: '#demo', title: 'Демо-тест' },
      { href: '#calendar', title: 'Календарь' },
      { href: '#partners', title: 'Партнёры' },
    ],
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
  practikum: {
    supportLogos: [
      { src: '/images/partners/minobr.png', alt: 'При грантовой поддержке Минобрнауки России' },
      { src: '/images/partners/2231.png', alt: 'Десятилетие науки и технологий' },
    ],
    links: [
      { href: '#about', title: 'О практикуме' },
      { href: '#stages', title: 'Этапы' },
      { href: '#content', title: 'Материалы' },
      { href: '#partners', title: 'Партнёры' },
    ],
  },
  final2024: {
    links: [
      { href: '#about', title: 'О финале' },
      { href: '#comments', title: 'Зачем участвовать' },
      { href: '#program', title: 'Программа' },
      { href: '#faq', title: 'Вопросы и ответы' },
      { href: '#partners', title: 'Партнёры' },
    ],
  },
  capital2024: {
    links: [
      { href: '#about', title: 'О Столице' },
      { href: '#faces', title: 'Лица RuCode' },
      { href: '#program', title: 'Программа' },
      { href: '#gallery', title: 'Галерея' },
      { href: '#partners', title: 'Партнёры' },
    ],
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
