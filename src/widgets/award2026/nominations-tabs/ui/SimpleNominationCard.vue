<script setup lang="ts">
import type { SimpleNominationCard } from '~/widgets/award2026/nominations-tabs'

defineProps<SimpleNominationCard>()
</script>

<template>
  <div
    class="flex flex-col rounded-[15px] border border-white p-6 lg:min-h-[294px] lg:rounded-[50px] lg:p-15"
  >
    <UiHeading class="mb-3 uppercase" tag="h2">{{ title }}</UiHeading>
    <div class="space-y-4 text-white/80">
      <UiText v-for="(text, index) in description" :key="`text-${index}`">
        {{ text }}
      </UiText>
    </div>
    <div v-if="support" class="mt-6 flex flex-col items-start gap-3">
      <UiText class="text-white/80">{{ support.text }}</UiText>
      <NuxtPicture :src="support.logo" :alt="support.alt" class="h-8 w-auto" />
    </div>
  </div>
