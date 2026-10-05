<script setup lang="ts">
import { HeroSection } from '~/widgets/practikum/hero'
import { StagesSection } from '~/widgets/practikum/stages'
import { MaterialsSection } from '~/widgets/practikum/materials'
import { DirectionsWork } from '~/widgets/consortium/directions'
import { PartnersSection } from '~/widgets/partners'

import { practicumPageData } from '../model/PracticumPage.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const blockComponents: Record<string, Component> = {
  hero: HeroSection,
  about: DirectionsWork,
  stages: StagesSection,
  materials: MaterialsSection,
  partners: PartnersSection,
}

const anchorIds: Record<string, string> = {
  about: 'about',
  stages: 'stages',
  materials: 'content',
  partners: 'partners',
}

const { data } = await usePageContent('/practikum', practicumPageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/practikum')
</script>

<template>
  <div class="space-y-15 overflow-x-clip">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
