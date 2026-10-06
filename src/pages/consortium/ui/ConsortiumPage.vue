<script setup lang="ts">
import { consortiumPageData } from '../model/ConsortiumPage.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const { data } = await usePageContent('/consortium', consortiumPageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, '/consortium')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
