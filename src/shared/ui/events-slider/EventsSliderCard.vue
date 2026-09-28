<script setup lang="ts">
import type { EventsSliderCardProps } from '~/shared/ui/events-slider'

defineProps<EventsSliderCardProps>()
</script>

<template>
  <article
    class="relative flex h-full w-full flex-col items-center space-y-7 rounded-lg border bg-[#1A1C21] p-7 text-center transition-all duration-300"
    :class="active ? 'border-purple-primary shadow-[0_0_20px_#b658ffcc]' : 'border-[#6D6D6D]'"
  >
    <div
      v-if="format"
      :class="[
        'absolute top-4 right-4 rounded-full px-3 py-1 text-[11px] font-semibold text-black',
        format.color || 'bg-yellow-primary',
      ]"
    >
      {{ format.text }}
    </div>

    <UiDateRange v-if="date" :from="date.from" :to="date.to" />

    <UiHeading :class="date ? '' : 'text-yellow-primary'" tag="h6">{{ title }}</UiHeading>

    <div class="space-y-4">
      <UiText v-for="text in description" :key="text" class="text-left">{{ text }}</UiText>
    </div>

    <ul v-if="list?.length" class="space-y-2">
      <li v-for="text in list" :key="text" class="text-purple-primary font-medium">
        {{ text }}
      </li>
    </ul>

    <UiAction :to="action.to" :variant="active ? 'primary' : 'ghost'" class="mt-auto!">
      {{ action.text }}
    </UiAction>
  </article>
</template>
