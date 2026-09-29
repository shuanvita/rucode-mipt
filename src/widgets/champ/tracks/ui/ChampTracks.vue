<script setup lang="ts">
import type { ChampTracksProps } from '~/widgets/champ/tracks'
import ChampTrackCard from './ChampTrackCard.vue'

defineProps<ChampTracksProps>()
</script>

<template>
  <section class="container">
    <UiHeading v-if="title" class="text-yellow-primary mb-8 leading-none lg:mb-10" tag="h2">{{
      title
    }}</UiHeading>
    <UiText v-if="description" class="max-w-157" size="lg" weight="light">{{ description }}</UiText>
    <div class="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6">
      <ChampTrackCard v-for="card in cards" :key="card.title" v-bind="card" />
    </div>
  </section>
</template>
