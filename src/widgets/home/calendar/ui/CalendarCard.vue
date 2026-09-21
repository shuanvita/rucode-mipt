<script setup lang="ts">
import type { CalendarCardProps } from '~/widgets/home/calendar'

defineProps<CalendarCardProps>()
</script>

<template>
  <UiAction
    class="shadow-3xl flex flex-col justify-start gap-2 rounded-lg border border-neutral-500 px-2 py-3 shadow transition-shadow duration-200 hover:shadow-[0_0_20px_#b658ffcc]"
    :to="link"
    variant="custom"
  >
    <div
      :class="[
        'self-end rounded-md px-2 py-1 text-[14px] font-semibold text-black',
        format.color || 'bg-yellow-primary',
      ]"
    >
      {{ format.text }}
    </div>
    <UiDateRange class="mb-4" :from="date.from" :to="date.to" />
    <UiHeading class="mb-6 text-center" tag="h6">{{ title }}</UiHeading>
    <div class="mt-auto flex flex-wrap items-center justify-center gap-2">
      <UiText
        v-for="tag in tags"
        :key="tag.id"
        weight="semibold"
        size="xs"
        :class="['tracking-normal', tag.color]"
        as="span"
      >
        {{ tag.text }}
      </UiText>
    </div>
  </UiAction>
</template>
