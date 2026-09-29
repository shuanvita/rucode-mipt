import { champBlockData as ru, champPageData } from './ChampPage.data'
import en from './ChampPage.en.json'

import type { ContentPage } from '~/shared/api'

const toLines = (text: string) => text.replace(/\s*<br\s*\/?>\s*/gi, '\n')
const toPlain = (text: string) => text.replace(/\s*<br\s*\/?>\s*/gi, ' ')

function translateEach<T, U>(
  label: string,
  source: readonly T[],
  translations: readonly U[],
  merge: (item: T, translation: U, index: number) => T,
): T[] {
  if (source.length !== translations.length) {
    throw new Error(
      `[champ/en] «${label}»: в русских данных ${source.length} элементов, в переводе ${translations.length}`,
    )
  }
  return source.map((item, i) => merge(item, translations[i]!, i))
}

const partnerAlt: Record<string, string> = { МТС: 'MTS', Сбер: 'Sber' }

const normalizeLinks = (html: string) =>
  html.replace(
    /<a\s+([^>]*)>/gi,
    (_, attrs: string) =>
      `<a ${attrs.replace(/\s*(class|target|rel)=(['"]).*?\2/gi, '').trim()} target="_blank" rel="noopener noreferrer">`,
  )

const stageContents: { text1: string; text2: string; list: string[]; button?: string }[] = [
  en.howItsGoing.content0,
  en.howItsGoing.content1,
  en.howItsGoing.content2,
  en.howItsGoing.content3,
  en.howItsGoing.content4,
]

const { years, participants, venues, applications } = en.stats2025.items
const whyItems = [en.why.skills, en.why.portfolio, en.why.prep, en.why.community, en.why.prizes]

const blockData: typeof ru = {
  hero: {
    ...ru.hero,
    // в русском заголовке бренд «РУКОД_» входит в строку, в переводе его нет
    title: `${toPlain(en.hero.title)} RUCODE_`,
    description: [toPlain(en.hero.subtitle)],
    imageAlt: en.hero.rucodeAlt,
    cta: { ...ru.hero.cta, text: en.hero.register },
  },
  about: {
    ...ru.about,
    title: en.about.title,
    description: en.about.description,
    cards: translateEach('about.cards', ru.about.cards, en.about.stats, (card, stat) => ({
      ...card,
      title: stat.heading,
      text: stat.content,
    })),
  },
  numbers: {
    title: toPlain(en.stats2025.title),
    numbersOne: {
      ...ru.numbers.numbersOne,
      title: years.number,
      text: toLines(years.description),
    },
    numbersTwo: {
      ...ru.numbers.numbersTwo,
      title: participants.number,
      text: toLines(participants.description),
    },
    numbersThree: {
      ...ru.numbers.numbersThree,
      title: venues.number,
      text: toLines(venues.description),
    },
    numbersFour: {
      ...ru.numbers.numbersFour,
      title: applications.number,
      text: toLines(applications.description),
    },
  },
  divisions: {
    title: en.aboutDivision.title,
    description: en.aboutDivision.subtitle,
    cards: en.aboutDivision.items.map((item) => ({
      title: item.heading,
      text: item.description,
    })),
  },
  tracks: {
    ...ru.tracks,
    title: en.aboutTracks.title,
    description: en.aboutTracks.description,
    cards: translateEach('tracks.cards', ru.tracks.cards, en.aboutTracks.tracks, (card, track) => ({
      ...card,
      title: track.title,
      text: track.description,
    })),
  },
  why: {
    ...ru.why,
    title: en.why.title,
    cards: translateEach('why.cards', ru.why.cards, whyItems, (card, item) => ({
      ...card,
      title: item.title,
      text: item.text,
    })),
    cta: { ...ru.why.cta, text: en.hero.register },
  },
  how: {
    ...ru.how,
    title: en.howItsGoing.title,
    stages: translateEach('how.stages', ru.how.stages, en.howItsGoing.items, (stage, item, i) => {
      const content = stageContents[i]!
      return {
        title: item.heading,
        date: item.description,
        text: content.text1 || undefined,
        note: content.text2 || undefined,
        list: content.list.length ? content.list : undefined,
        cta: stage.cta && { ...stage.cta, text: content.button ?? en.howItsGoing.content0.button },
      }
    }),
  },
  achievements: {
    ...ru.achievements,
    title: toPlain(en.achievements.title),
    cards: translateEach(
      'achievements.cards',
      ru.achievements.cards,
      en.achievements.items,
      (card, item) => ({ ...card, text: item.text }),
    ),
  },
  venues: {
    title: toLines(en.venue.title),
    items: en.venue.districts.map((district) => ({
      title: district.heading,
      list: district.venues,
    })),
  },
  partners: {
    items: translateEach(
      'partners.items',
      ru.partners.items,
      [en.partners.general, en.partners.partners],
      (item, title) => ({
        ...item,
        title: toPlain(title),
        images: item.images.map((image) => ({ ...image, alt: partnerAlt[image.alt] ?? image.alt })),
      }),
    ),
  },
  gallery: {
    ...ru.gallery,
    title: en.gallery.title,
    cta: { ...ru.gallery.cta!, text: en.gallery.button },
  },
  faq: {
    title: en.faq.title,
    items: en.faq.items.map((item) => ({
      question: item.heading,
      answer: normalizeLinks(item.content),
    })),
    cta: { ...ru.faq.cta, text: en.faq.submit },
  },
}

export const champPageDataEn: ContentPage = {
  ...champPageData,
  blocks: champPageData.blocks.map((block) => ({
    ...block,
    data: blockData[block.type as keyof typeof blockData] ?? block.data,
  })),
}
