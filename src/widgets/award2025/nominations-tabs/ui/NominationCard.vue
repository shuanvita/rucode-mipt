<script setup lang="ts">
import type { NominationCard } from '../model/NominationsTabs.types'

defineProps<NominationCard>()
</script>

<template>
  <div>
    <UiHeading class="mb-6 lg:mb-8" tag="h2">{{ title }}</UiHeading>
    <UiText>{{ description }}</UiText>
    <UiText weight="bold" class="text-purple-primary">{{ tag }}</UiText>
  </div>
</template>
