<script setup lang="ts">
import type { ChampDivisionsProps } from '../model/ChampDivisions.types'
import ChampDivisionCard from './ChampDivisionCard.vue'

defineProps<ChampDivisionsProps>()
</script>

<template>
  <section class="relative">
    <div
      class="gradient pointer-events-none absolute -bottom-70 -left-100 -z-10 h-125 w-225 -rotate-45 md:w-300 lg:-left-50"
    />
    <div class="relative container">
      <UiHeading v-if="title" class="text-yellow-primary mb-8 leading-none lg:mb-10" tag="h2">{{
        title
      }}</UiHeading>
      <UiText v-if="description" class="max-w-150" size="lg" weight="light">{{
        description
      }}</UiText>
      <div class="relative mt-12.5 flex flex-wrap gap-x-7.5 gap-y-6">
        <ChampDivisionCard v-for="card in cards" :key="card.title" v-bind="card" />
      </div>
      <NuxtPicture
        class="pointer-events-none absolute top-40 right-0 -z-9 max-w-60 md:max-w-90 lg:top-20"
        src="/images/champ/bubbles-1.png"
        alt=""
      />
    </div>
  </section>
</template>

<style scoped>
.gradient {
  mix-blend-mode: exclusion;
  background: radial-gradient(
    46.77% 44.98%,
    #0045ffb3 0.4%,
    #0031b6b3 21.77%,
    #002075b3 42.81%,
    #001243b3 61.74%,
    #00081eb3 78.18%,
    #000208b3 91.48%,
    #000000b3 100%
  );
}
</style>
