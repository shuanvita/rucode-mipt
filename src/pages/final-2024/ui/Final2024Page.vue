<script setup lang="ts">
import { FinalHero } from '~/widgets/final-2024/hero'
import { FinalAbout } from '~/widgets/final-2024/about'
import { FinalVideo } from '~/widgets/final-2024/video'
import { FinalQuotes } from '~/widgets/final-2024/quotes'
import { PrizesSection } from '~/widgets/final-2024/prizes'
import { FinalProgram } from '~/widgets/final-2024/program'
import { FinalLinks } from '~/widgets/final-2024/links'
import { FinalSchedule } from '~/widgets/final-2024/schedule'
import { FaqSection } from '~/widgets/faq'
import { FinalGallery } from '~/widgets/final-2024/gallery'
import { FinalOrganizers } from '~/widgets/final-2024/organizers'
import { FinalTelegram } from '~/widgets/final-2024/telegram'
import { PartnersSection } from '~/widgets/partners'

import { final2024PageData } from '../model/Final2024Page.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const blockComponents: Record<string, Component> = {
  hero: FinalHero,
  about: FinalAbout,
  video: FinalVideo,
  quotes: FinalQuotes,
  prizes: PrizesSection,
  program: FinalProgram,
  links: FinalLinks,
  schedule: FinalSchedule,
  faq: FaqSection,
  gallery: FinalGallery,
  organizers: FinalOrganizers,
  partners: PartnersSection,
  telegram: FinalTelegram,
}

const anchorIds: Record<string, string> = {
  about: 'about',
  quotes: 'comments',
  prizes: 'prize',
  program: 'program',
  faq: 'faq',
  gallery: 'gallery',
  organizers: 'organizers',
  partners: 'partners',
}

const { data } = await usePageContent('/final-2024', final2024PageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/final-2024')
</script>

<template>
  <div class="space-y-15 overflow-x-clip">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
