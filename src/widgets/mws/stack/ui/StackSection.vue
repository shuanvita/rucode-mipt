<script setup lang="ts">
import type { StackSectionProps } from '~/widgets/mws/stack'

defineProps<StackSectionProps>()
</script>

<template>
  <section class="container space-y-4 sm:space-y-7.5">
    <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
    <div class="flex flex-col justify-between gap-6 md:flex-row md:gap-20">
      <UiText class="max-w-137.5" size="xl">{{ description }}</UiText>
      <ul class="flex max-w-112.5 flex-wrap gap-2 md:gap-4">
        <li v-for="item in items" :key="item">
          <UiTag>{{ item }}</UiTag>
        </li>
      </ul>
    </div>
  </section>
</template>
