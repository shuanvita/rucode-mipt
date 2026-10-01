<script setup lang="ts">
import { HeroSection } from '~/widgets/consortium/hero'
import { FestivalSection } from '~/widgets/consortium/festival'

import { consortiumPageData } from '../model/ConsortiumPage.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const blockComponents: Record<string, Component> = {
  hero: HeroSection,
  festival: FestivalSection,
}

const anchorIds: Record<string, string> = {
  festival: 'main',
}

const { data } = await usePageContent('/consortium', consortiumPageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/consortium')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
