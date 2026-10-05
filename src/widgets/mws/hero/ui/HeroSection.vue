<script setup lang="ts">
import type { HeroSectionProps } from '~/widgets/mws/hero'

defineProps<HeroSectionProps>()
</script>

<template>
  <section class="container space-y-6 lg:space-y-8">
    <UiHeading tag="h1" :html="title" />
    <UiText v-if="description">{{ description }}</UiText>
  </section>
</template>
