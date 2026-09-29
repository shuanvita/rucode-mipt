<script setup lang="ts">
import type { ChampWhyCardProps } from '../model/ChampWhy.types'

defineProps<ChampWhyCardProps>()
</script>

<template>
  <article
    class="border-purple-primary flex flex-col justify-between rounded-2xl border-2 px-5 py-8"
    :class="isActive ? 'bg-purple-primary text-dark-primary' : 'text-fg'"
  >
    <UiSvg v-if="image" class="ml-auto h-15 w-auto" :name="image" />
    <div :class="{ 'mt-7': image }">
      <h3
        class="text-base font-semibold text-balance md:text-2xl"
        :class="{ 'text-purple-primary': !isActive }"
      >
        {{ title }}
      </h3>
      <UiText class="mt-1 text-pretty" :class="{ 'lg:mb-8': isActive }">{{ text }}</UiText>
    </div>
  </article>
</template>
