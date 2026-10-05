<script setup lang="ts">
import type { FinalGalleryProps } from '~/widgets/final-2024/gallery'

defineProps<FinalGalleryProps>()
</script>

<template>
  <section class="container">
    <UiHeading class="text-purple-primary mb-5 text-center font-black sm:mb-10" tag="h2">{{
      title
    }}</UiHeading>
    <div class="grid gap-x-5 gap-y-6 max-md:gap-y-3 md:grid-cols-4">
      <NuxtImg
        v-for="image in images"
        :key="image"
        class="aspect-[1.49] w-full rounded-lg object-cover"
        :src="image"
        alt=""
        loading="lazy"
      />
    </div>
  </section>
</template>
