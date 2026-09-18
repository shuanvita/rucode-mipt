<script setup lang="ts">
import type { InfoBlockProps } from '~/widgets/info-block'

defineProps<InfoBlockProps>()
</script>

<template>
  <section class="container flex flex-col items-center justify-center gap-6 lg:gap-10">
    <UiHeading :class="['text-purple-primary font-bold', titleClass]" tag="h2">{{
      title
    }}</UiHeading>
    <UiText :class="['text-center', descriptionClass]" :html="description" />
  </section>
</template>
