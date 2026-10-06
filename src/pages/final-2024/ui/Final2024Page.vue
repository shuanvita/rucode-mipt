<script setup lang="ts">
import { final2024PageData } from '../model/Final2024Page.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const { data } = await usePageContent('/final-2024', final2024PageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, '/final-2024')
</script>

<template>
  <div class="space-y-15 overflow-x-clip">
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
