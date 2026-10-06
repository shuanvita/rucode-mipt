<script setup lang="ts">
import { capital2024PageData } from '../model/Capital2024Page.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const { data } = await usePageContent('/capital-2024', capital2024PageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, '/capital-2024')
</script>

<template>
  <div class="space-y-15 overflow-x-clip">
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
