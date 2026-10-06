<script setup lang="ts">
import { mwsPageData } from '../model/MwsPage.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const { data } = await usePageContent('/mws', mwsPageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, '/mws')
</script>

<template>
  <div class="space-y-25 overflow-x-clip">
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
