<script setup lang="ts">
defineProps<{
  title: string
  image: string
  alt: string
}>()
</script>

<template>
  <div class="flex flex-col items-center">
    <UiHeading
      class="text-purple-primary mb-5 text-center text-[20px] leading-none lg:mb-10 lg:text-[32px]"
      tag="h3"
      >{{ title }}</UiHeading
    >
    <NuxtPicture
      class="flex h-auto w-full justify-center object-contain lg:max-w-[320px]"
      :src="image"
      :alt="alt"
      loading="eager"
      fetchpriority="high"
      preload
    />
  </div>
</template>
