<script setup lang="ts">
import { CapitalHero } from '~/widgets/capital-2024/hero'
import { CapitalAbout } from '~/widgets/capital-2024/about'
import { CapitalProgram } from '~/widgets/capital-2024/program'
import { PeopleSlider } from '~/widgets/people-slider'
import { PhotoGallery } from '~/widgets/home/photo-gallery'
import { VideoGallery } from '~/widgets/home/video-gallery'
import { FinalOrganizers } from '~/widgets/final-2024/organizers'
import { FinalTelegram } from '~/widgets/final-2024/telegram'
import { PartnersSection } from '~/widgets/partners'

import { capital2024PageData } from '../model/Capital2024Page.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const blockComponents: Record<string, Component> = {
  hero: CapitalHero,
  about: CapitalAbout,
  faces: PeopleSlider,
  program: CapitalProgram,
  photos2024: PhotoGallery,
  videos2024: VideoGallery,
  photos2023: PhotoGallery,
  videos2023: VideoGallery,
  organizers: FinalOrganizers,
  partners: PartnersSection,
  telegram: FinalTelegram,
}

const anchorIds: Record<string, string> = {
  about: 'about',
  faces: 'faces',
  program: 'program',
  photos2024: 'gallery',
  organizers: 'organizers',
  partners: 'partners',
}

const { data } = await usePageContent('/capital-2024', capital2024PageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/capital-2024')
</script>

<template>
  <div class="space-y-15 overflow-x-clip">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
