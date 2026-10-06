<script setup lang="ts">
import { aiChampData } from '../model/AiChamp.data'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const { data } = await usePageContent('/ai_champ', aiChampData)
const blocks = useContentBlocks(() => data.value?.page.blocks, '/ai_champ')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
