<script setup lang="ts">
import { practicumPageData } from '../model/PracticumPage.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const { data } = await usePageContent('/practikum', practicumPageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, '/practikum')
</script>

<template>
  <div class="space-y-15 overflow-x-clip">
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
