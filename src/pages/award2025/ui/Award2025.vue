<script setup lang="ts">
import { award2025Data } from '../model/Award2025.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const { data } = await usePageContent('/award2025', award2025Data)
const blocks = useContentBlocks(() => data.value?.page.blocks, '/award2025')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
