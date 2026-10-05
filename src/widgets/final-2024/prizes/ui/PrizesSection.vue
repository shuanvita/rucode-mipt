<script setup lang="ts">
import type { PrizesSectionProps } from '~/widgets/final-2024/prizes'

defineProps<PrizesSectionProps>()
</script>

<template>
  <section class="container">
    <UiHeading class="text-purple-primary mb-6 px-5 text-center font-black sm:mb-10" tag="h2">{{
      title
    }}</UiHeading>
    <div class="grid gap-8 sm:grid-cols-3 sm:gap-5">
      <article v-for="item in items" :key="item.title" class="flex flex-col items-center gap-y-3">
        <div class="flex h-50 w-full items-center justify-center">
          <NuxtImg
            class="max-h-full w-auto max-w-full object-contain"
            :src="item.image"
            alt=""
            format="png"
            loading="lazy"
          />
        </div>
        <UiText class="text-center" size="custom"
          ><span class="text-[15px]/[1.5]">{{ item.title }}</span></UiText
        >
      </article>
    </div>
  </section>
</template>
