<script setup lang="ts">
import type { AchievementsSectionProps } from '~/widgets/home/achievements'
import AchievementCard from '~/widgets/home/achievements/ui/AchievementCard.vue'

defineProps<AchievementsSectionProps>()
</script>

<template>
  <section class="container space-y-6 lg:space-y-10">
    <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>
    <div class="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <AchievementCard v-for="card in cards" :key="card.id" v-bind="card" />
    </div>
  </section>
</template>
