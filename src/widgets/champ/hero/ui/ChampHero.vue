<script setup lang="ts">
import type { ChampHeroProps } from '~/widgets/champ/hero'

defineProps<ChampHeroProps>()
</script>

<template>
  <section class="container grid items-center gap-15 lg:grid-cols-2">
    <div class="flex flex-col gap-8">
      <h1 class="text-2xl font-extrabold sm:text-3xl md:text-6xl">{{ title }}</h1>
      <div class="space-y-4">
        <UiText
          v-for="text in description"
          :key="text"
          class="mt-2 max-w-110 text-base font-light md:mt-5 md:text-2xl"
          size="custom"
          >{{ text }}</UiText
        >
      </div>
      <UiAction v-if="cta" class="self-start" :to="cta.to">{{ cta.text }}</UiAction>
    </div>
    <NuxtPicture
      class="h-auto w-auto justify-center object-contain"
      :src="image"
      alt="Всероссийское тестирование RuCode"
      loading="eager"
      fetchpriority="high"
      preload
    />
  </section>
</template>
