<script setup lang="ts">
import { mtsPageData } from '../model/MtsPage.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const { data } = await usePageContent('/mts', mtsPageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, '/mts')
</script>

<template>
  <div class="space-y-25 overflow-x-clip">
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
