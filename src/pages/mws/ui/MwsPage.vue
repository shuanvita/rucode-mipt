<script setup lang="ts">
import { HeroSection } from '~/widgets/mws/hero'

import { mwsPageData } from '../model/MwsPage.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const blockComponents: Record<string, Component> = {
  hero: HeroSection,
}

const anchorIds: Record<string, string> = {}

const { data } = await usePageContent('/mws', mwsPageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/mws')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
