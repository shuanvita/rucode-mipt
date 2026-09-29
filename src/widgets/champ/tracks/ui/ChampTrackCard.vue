<script setup lang="ts">
import type { ChampTrackCard } from '../model/ChampTracks.types'

defineProps<ChampTrackCard>()
</script>

<template>
  <article class="flex basis-75 flex-col" :style="{ color }">
    <NuxtPicture class="mx-auto max-w-45 sm:max-w-55 md:max-w-60" :src="image" alt="" />
    <h3 class="font-montserrat mt-3.5 text-center text-xl font-extrabold md:text-3xl">
      {{ title }}
    </h3>
    <UiText size="custom" class="mx-auto mt-2 max-w-72 text-center text-sm md:text-lg">{{
      text
    }}</UiText>
  </article>
</template>
