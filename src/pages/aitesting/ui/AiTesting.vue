<script setup lang="ts">
import { aiTestingData } from '../model/AiTesting.data'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'
import { AiTestingHero } from '~/widgets/ai_testing/hero'
import { AiTestingFormat } from '~/widgets/ai_testing/format'

const blockComponents: Record<string, Component> = {
  hero: AiTestingHero,
  format: AiTestingFormat,
}

const anchorIds: Record<string, string> = {
  format: 'format',
  demotest: 'demotest',
  calendar: 'calendar',
  partners: 'partners',
}

const { data } = await usePageContent('/aitesting', aiTestingData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/ai_champ')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
