<script setup lang="ts">
import { HeroSection } from '~/widgets/consortium/hero'
import { FestivalSection } from '~/widgets/consortium/festival'
import { DirectionsWork } from '~/widgets/consortium/directions'
import { BenefitsSection } from '~/widgets/consortium/benefits'
import { ParticipantsSection } from '~/widgets/consortium/participants'
import { GallerySection } from '~/widgets/consortium/gallery'
import { StepsSection } from '~/widgets/consortium/steps'
import { PersonQuote } from '~/widgets/person-quote'
import PlacesSection from './PlacesSection.vue'

import { consortiumPageData } from '../model/ConsortiumPage.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const blockComponents: Record<string, Component> = {
  hero: HeroSection,
  festival: FestivalSection,
  directions: DirectionsWork,
  consortium: PlacesSection,
  participants: ParticipantsSection,
  steps: StepsSection,
  gallery: GallerySection,
  benefits: BenefitsSection,
  personQuote: PersonQuote,
}

const anchorIds: Record<string, string> = {
  benefits: 'benefits',
  festival: 'main',
  directions: 'directions',
  consortium: 'geography',
  participants: 'forwho',
  steps: 'stages',
  gallery: 'gallery',
}

const { data } = await usePageContent('/consortium', consortiumPageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/consortium')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
