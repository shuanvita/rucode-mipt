<script setup lang="ts">
import { champPageData } from '../model/ChampPage.data'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'
import { ChampHero } from '~/widgets/champ/hero'
import { ChampAbout } from '~/widgets/champ/about'

const blockComponents: Record<string, Component> = {
  hero: ChampHero,
  about: ChampAbout,
}

const anchorIds: Record<string, string> = {
  about: 'about',
  demo: 'demo',
  calendar: 'calendar',
  partners: 'partners',
}

const { data } = await usePageContent('/champ', champPageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/champ')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
