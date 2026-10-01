<script setup lang="ts">
import { HeroSection } from '~/widgets/consortium/hero'

import { consortiumPageData } from '../model/ConsortiumPage.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const blockComponents: Record<string, Component> = {
  hero: HeroSection,
}

const anchorIds: Record<string, string> = {
  hero: 'main',
}

const { data } = await usePageContent('/consortium', consortiumPageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/consortium')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
