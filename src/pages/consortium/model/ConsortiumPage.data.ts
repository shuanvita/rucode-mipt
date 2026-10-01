import type { HeroSectionProps } from '~/widgets/consortium/hero'
import { createFallbackBlock } from '~/shared/api'
import type { ContentPage } from '~/shared/api'

const hero: HeroSectionProps = {
  marquee: 'Университет «Сириус» - столица RuCode!',
  title:
    'Консорциум соорганизаторов Всероссийского фестиваля <span class="text-yellow-primary">RuCode</span>',
  tags: [
    'Поддерживаем инновации',
    'Помогаем молодым талантам',
    'Создаём среду для развития науки и технологий',
  ],
  action: {
    text: 'Присоединиться',
  },
  document: {
    to: '/files/polozhenie-o-konsorcziume-1.pdf',
    text: 'Положение о консорциуме соорганизаторов',
  },
  image: '/images/consortium/hero.webp',
}

export const consortiumPageData: ContentPage = {
  slug: '/consortium',
  version: 1,
  blocks: [createFallbackBlock('hero', 10, hero)],
}
