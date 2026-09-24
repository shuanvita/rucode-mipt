<script setup lang="ts">
import { aiChampData } from '../model/AiChamp.data'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'
import { AiChampHero } from '~/widgets/ai_champ/hero'
import { AiChampBenefits } from '~/widgets/ai_champ/benefits'
import { AiChampLeagues } from '~/widgets/ai_champ/leagues'
import { AiChampStages } from '~/widgets/ai_champ/stages'
import { AiChampTasks } from '~/widgets/ai_champ/tasks'

const blockComponents: Record<string, Component> = {
  hero: AiChampHero,
  benefits: AiChampBenefits,
  leagues: AiChampLeagues,
  stages: AiChampStages,
  tasks: AiChampTasks,
}

const anchorIds: Record<string, string> = {
  leagues: 'leagues',
  stages: 'stages',
  tasks: 'tasks',
}

const { data } = await usePageContent('/ai_champ', aiChampData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/ai_champ')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
