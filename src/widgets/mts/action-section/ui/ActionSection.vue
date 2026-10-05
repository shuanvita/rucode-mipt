<script setup lang="ts">
import type { ActionSectionProps } from '~/widgets/mts/action-section'

defineProps<ActionSectionProps>()
</script>

<template>
  <section class="container space-y-4 sm:space-y-7.5">
    <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
    <div class="flex flex-col items-center gap-4 sm:gap-7.5">
      <UiText v-if="description" class="max-w-233 text-center" size="xl">{{ description }}</UiText>
      <UiAction :variant="action.variant ?? 'mws'" :to="action.to">{{ action.text }}</UiAction>
    </div>
  </section>
</template>
