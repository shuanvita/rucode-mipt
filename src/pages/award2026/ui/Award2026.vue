<script setup lang="ts">
import { award2026Data } from '../model/Award2026.data'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const { data } = await usePageContent('/award2026', award2026Data)
const blocks = useContentBlocks(() => data.value?.page.blocks, '/award2026')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
