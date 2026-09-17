<script setup lang="ts">
import { homePageData } from '../model/HomePage.data'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'
import { HomeHero } from '~/widgets/home/hero'
import { PartnersSection } from '~/widgets/partners'

const blockComponents: Record<string, Component> = {
  hero: HomeHero,
  partners: PartnersSection,
}

const anchorIds: Record<string, string> = {
  tracks: 'tracks',
  calendar: 'calendar',
  organizers: 'organizers',
  videos: 'videos',
}

const { data } = await usePageContent('/', homePageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
