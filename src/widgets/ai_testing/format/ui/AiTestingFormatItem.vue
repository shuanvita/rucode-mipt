<script setup lang="ts">
defineProps<{
  title: string
  image: string
  alt: string
}>()
</script>

<template>
  <div class="flex flex-col items-center">
    <UiHeading class="text-purple-primary mb-5 text-center leading-none lg:mb-10" tag="h3">{{
      title
    }}</UiHeading>
    <NuxtPicture
      class="flex h-auto w-full max-w-[320px] justify-center object-contain"
      :src="image"
      :alt="alt"
      loading="eager"
      fetchpriority="high"
      preload
    />
  </div>
</template>
