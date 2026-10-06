<script setup lang="ts">
import { aiTestingData } from '../model/AiTesting.data'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const { data } = await usePageContent('/aitesting', aiTestingData)
const blocks = useContentBlocks(() => data.value?.page.blocks, '/aitesting')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
