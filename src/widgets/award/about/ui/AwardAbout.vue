<script setup lang="ts">
import type { AwardAboutProps } from '~/widgets/award/about'

defineProps<AwardAboutProps>()
</script>

<template>
  <section class="container flex flex-col items-center justify-center gap-6">
    <UiHeading class="text-purple-primary font-bold" tag="h2">О премии</UiHeading>
    <UiText class="max-w-171 text-center">{{ description }}</UiText>
  </section>
</template>
