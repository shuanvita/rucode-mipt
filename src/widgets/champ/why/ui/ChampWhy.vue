<script setup lang="ts">
import type { ChampWhyProps } from '~/widgets/champ/why'
import ChampWhyCard from './ChampWhyCard.vue'

defineProps<ChampWhyProps>()

const cardClasses = [
  'lg:row-span-3',
  'not-md:order-first lg:row-span-7',
  'not-lg:order-last not-lg:md:col-span-full lg:row-span-11',
  'lg:row-span-8',
  'lg:row-span-4 lg:justify-end',
]
</script>

<template>
  <section class="container flex flex-col">
    <UiHeading v-if="title" class="text-yellow-primary leading-none" tag="h2">{{
      title
    }}</UiHeading>
    <div class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <ChampWhyCard
        v-for="(card, index) in cards"
        :key="card.title"
        v-bind="card"
        :class="cardClasses[index]"
      />
    </div>
    <UiAction v-if="cta" class="mt-9 self-center md:mt-12" :to="cta.to">
      {{ cta.text }}
    </UiAction>
  </section>
</template>
