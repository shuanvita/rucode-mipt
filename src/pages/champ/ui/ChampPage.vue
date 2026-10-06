<script setup lang="ts">
import { champPageData } from '../model/ChampPage.data'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const { data } = await usePageContent('/champ', {
  ru: champPageData,
  en: () => import('../model/ChampPage.data.en').then((module) => module.champPageDataEn),
})
const blocks = useContentBlocks(() => data.value?.page.blocks, '/champ')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
