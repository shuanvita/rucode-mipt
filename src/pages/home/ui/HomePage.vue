<script setup lang="ts">
import { homePageData } from '../model/HomePage.data'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const { data } = await usePageContent('/', homePageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, '/')
</script>

<template>
  <div class="space-y-10 lg:space-y-25">
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
