<script setup lang="ts">
import type { PrizesSectionProps } from '~/widgets/final-2024/prizes'

defineProps<PrizesSectionProps>()
</script>

<template>
  <section class="container">
    <UiHeading class="text-purple-primary mb-6 text-center" tag="h2">{{ title }}</UiHeading>
    <div class="grid gap-8 sm:grid-cols-3 sm:gap-5">
      <div v-for="item in items" :key="item.title" class="flex flex-col items-center gap-3">
        <NuxtPicture :src="item.image" alt="" format="png" loading="lazy" />
        <UiText class="text-center" size="lg">{{ item.title }}</UiText>
      </div>
    </div>
  </section>
</template>
