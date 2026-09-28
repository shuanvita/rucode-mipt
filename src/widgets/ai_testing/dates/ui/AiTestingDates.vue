<script setup lang="ts">
import type { AiTestingDatesProps } from '../model/AiTestingDates.types'

defineProps<AiTestingDatesProps>()
</script>

<template>
  <section class="relative container">
    <UiHeading
      v-if="title"
      class="text-purple-primary mb-8 text-center leading-none lg:mb-10"
      tag="h2"
      >{{ title }}</UiHeading
    >
    <div class="grid gap-8 lg:grid-cols-2">
      <UiCalendarCard v-for="card in cards" :key="card.id" v-bind="card" />
    </div>
    <NuxtPicture
      class="absolute top-1/2 -left-40 -z-9 max-h-110 -translate-y-1/2"
      src="/images/ai-testing/bubbles-left.png"
      alt=""
    />
    <NuxtPicture
      class="absolute top-1/2 -right-70 -z-9 max-h-110 -translate-y-1/2 rotate-y-180"
      src="/images/ai-testing/bubbles-right.png"
      alt=""
    />
  </section>
</template>
