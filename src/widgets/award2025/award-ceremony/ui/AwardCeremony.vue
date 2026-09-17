<script setup lang="ts">
import type { AwardCeremonyProps } from '../model/AwardCeremony.types'

defineProps<AwardCeremonyProps>()
</script>

<template>
  <section class="mx-auto max-w-270">
    <UiHeading class="text-purple-primary mb-4 text-center lg:mb-10" tag="h2">{{
      title
    }}</UiHeading>
    <div
      class="grid grid-rows-1 place-content-center justify-items-center gap-4 lg:grid-cols-[455px_296px] lg:justify-items-stretch"
    >
      <div
        class="flex flex-col items-center justify-center space-y-2 rounded-[20px] bg-[rgba(27,27,27,0.26)] px-15 py-4"
      >
        <UiText
          v-for="(text, index) in description"
          :key="`text-item-${index}`"
          class="text-center lg:text-left"
          >{{ text }}</UiText
        >
      </div>
      <NuxtPicture
        :img-attrs="{
          class: 'rounded-[20px] object-contain object-center max-h-[233px] lg:max-h-full',
        }"
        class="rounded-[20px]"
        :src="image"
        :alt="title"
      />
    </div>
  </section>
</template>
