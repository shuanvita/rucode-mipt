<script setup lang="ts">
import TrackCard from '~/widgets/home/tracks/ui/TrackCard.vue'
import type { TracksSectionProps } from '~/widgets/home/tracks'

defineProps<TracksSectionProps>()
</script>

<template>
  <section class="container space-y-6 lg:space-y-10">
    <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>
    <div class="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
      <TrackCard v-for="card in cards" :key="card.id" v-bind="card" />
    </div>
  </section>
</template>
