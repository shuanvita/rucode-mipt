<script setup lang="ts">
defineProps<{
  src: string
  title?: string
}>()
</script>

<template>
  <iframe
    :src="src"
    :title="title"
    class="aspect-video w-full rounded-xl"
    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
    allowfullscreen
  />
</template>
