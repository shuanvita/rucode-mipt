<script setup lang="ts">
import type { ChampAboutCardProps } from '../model/ChampAbout.types'

defineProps<ChampAboutCardProps>()
</script>

<template>
  <article class="flex flex-col items-center gap-4 rounded-4xl">
    <UiSvg v-if="image" class="size-14 lg:size-18" :name="image" />
    <div
      class="border-purple-light bg-dark-primary h-full w-full rounded-4xl border-3 p-4 text-center shadow-[0_0_25px_-5px_var(--color-purple-light)]"
    >
      <h3 class="mb-1 text-xl font-bold lg:text-2xl">{{ title }}</h3>
      <UiText>{{ text }}</UiText>
    </div>
  </article>
</template>
