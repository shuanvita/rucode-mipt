<script setup lang="ts">
import type { ChampDivisionCard } from '../model/ChampDivisions.types'

defineProps<ChampDivisionCard>()
</script>

<template>
  <article
    class="border-purple-primary bg-dark-primary flex-1 basis-80 rounded-4xl border-3 px-9 py-8 shadow-[0_0_25px_-5px_var(--color-purple-primary)]"
  >
    <h3 class="font-montserrat text-purple-primary text-6xl font-bold md:text-8xl">{{ title }}</h3>
    <UiText class="mt-5 md:mt-7" weight="light">{{ text }}</UiText>
  </article>
</template>
