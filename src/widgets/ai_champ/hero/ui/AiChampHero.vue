<script setup lang="ts">
import type { AiChampHeroProps } from '~/widgets/ai_champ/hero'

defineProps<AiChampHeroProps>()
</script>

<template>
  <section class="container grid items-center gap-8 lg:grid-cols-2">
    <div>
      <UiHeading class="mb-11 leading-none" tag="h1" :html="title" />
      <div class="space-y-4">
        <UiText size="lg" v-for="text in description" :key="text">{{ text }}</UiText>
      </div>
    </div>
    <div class="relative self-center">
      <NuxtPicture
        class="relative z-10 flex h-auto w-full justify-center object-contain"
        :src="image"
        alt="Rucode Festival"
        width="548"
        height="481"
        loading="eager"
        fetchpriority="high"
        preload
      />
      <div class="absolute top-0 left-0 aspect-square w-[70%] bg-[#6426F3] blur-[100px]" />
      <div class="absolute top-0 right-0 aspect-square w-[50%] bg-[#B559F5CC] blur-[100px]" />
    </div>
  </section>
</template>
