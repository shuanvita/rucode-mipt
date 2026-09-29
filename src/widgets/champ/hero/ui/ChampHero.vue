<script setup lang="ts">
import type { ChampHeroProps } from '~/widgets/champ/hero'

defineProps<ChampHeroProps>()
</script>

<template>
  <section class="overflow-x-clipn relative">
    <div
      class="gradient pointer-events-none absolute top-0 -left-100 -z-10 h-125 w-225 rotate-45 md:w-300 lg:-left-50"
    />
    <div class="container grid items-center gap-15 lg:grid-cols-2">
      <div class="flex flex-col gap-5 lg:gap-8">
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
      <div class="flex justify-center">
        <NuxtPicture
          class="h-auto w-auto max-w-[80%] justify-center object-contain"
          :src="image"
          alt="Всероссийское тестирование RuCode"
          loading="eager"
          fetchpriority="high"
          preload
        />
      </div>
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
