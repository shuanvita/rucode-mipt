<script setup lang="ts">
import type { AiTestingHeroProps } from '~/widgets/ai_testing/hero/model/AiTestingHero.types.ts'

defineProps<AiTestingHeroProps>()
</script>

<template>
  <section class="container grid items-center gap-8 lg:grid-cols-2">
    <div class="flex flex-col space-y-8">
      <UiHeading class="text-purple-primary mb-11 leading-none" tag="h1" as="h2" :html="title" />
      <NuxtPicture
        class="flex h-auto w-full justify-center object-contain lg:hidden"
        :src="image"
        alt="Всероссийское тестирование RuCode"
        loading="eager"
        fetchpriority="high"
        preload
      />
      <div class="space-y-4">
        <UiText v-for="text in description" :key="text" size="lg">{{ text }}</UiText>
      </div>
      <UiAction v-if="cta" class="self-center lg:self-start" :to="cta.to">{{ cta.text }}</UiAction>
    </div>
    <div class="relative self-center">
      <NuxtPicture
        class="hidden h-auto w-full justify-center object-contain lg:flex"
        :src="image"
        alt="Всероссийское тестирование RuCode"
        loading="eager"
        fetchpriority="high"
        preload
      />
    </div>
  </section>
</template>
