<script setup lang="ts">
import type { AiChampLeaguesCardProps } from '~/widgets/ai_champ/leagues'

defineProps<AiChampLeaguesCardProps>()
</script>

<template>
  <div
    :class="[
      'flex flex-col items-center justify-center gap-15 sm:flex-row',
      { 'sm:flex-row-reverse': reverse },
    ]"
  >
    <NuxtPicture
      :src="image"
      width="322"
      height="283"
      alt=""
      loading="lazy"
      :img-attrs="{
        class: 'aspect-[322/283] w-[322px] object-cover not-sm:max-w-[230px]',
      }"
    />

    <div class="flex flex-col items-center">
      <UiHeading
        class="border-yellow-primary text-yellow-primary mb-6 rounded-full border px-8 py-4 text-[16px] tracking-normal sm:text-[20px] lg:text-[24px]"
        tag="h3"
      >
        {{ title }}
      </UiHeading>

      <div class="space-y-3">
        <UiText v-for="text in description" :key="text" class="max-w-127.5">{{ text }}</UiText>
      </div>
    </div>
  </div>
</template>
