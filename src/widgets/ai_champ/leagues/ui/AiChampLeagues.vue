<script setup lang="ts">
import type { AiChampLeaguesProps } from '~/widgets/ai_champ/leagues'
import AiChampLeagueCard from '~/widgets/ai_champ/leagues/ui/AiChampLeagueCard.vue'

defineProps<AiChampLeaguesProps>()
</script>

<template>
  <section class="container flex flex-col items-center space-y-10">
    <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>
    <div class="space-y-6">
      <AiChampLeagueCard
        v-for="item in items"
        :key="item.id"
        v-bind="item"
        :reverse="item.reverse"
      />
    </div>
    <UiAction :to="action?.to">{{ action?.text }}</UiAction>
  </section>
</template>
