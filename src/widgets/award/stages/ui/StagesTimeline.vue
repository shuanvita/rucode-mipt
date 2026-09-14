<script setup lang="ts">
import StageCard from './StageCard.vue'
import type { StagesTimelineProps, StageCardProps } from '~/widgets/award/stages'

defineProps<StagesTimelineProps>()

const spanClasses: Record<NonNullable<StageCardProps['span']>, string> = {
  double: 'sm:col-span-2 lg:col-span-2',
  full: 'sm:col-span-2 lg:col-span-3',
}
</script>

<template>
  <section class="relative container space-y-5 lg:space-y-10">
    <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
      <StageCard
        v-for="stage in stages"
        :key="stage.number"
        :class="stage.span && spanClasses[stage.span]"
        :number="stage.number"
        :title="stage.title"
        :description="stage.description"
        :variant="stage.variant"
      />
    </div>
    <NuxtPicture
      src="/images/award2026/firework.png"
      alt="Секрет"
      class="pointer-events-none absolute -right-25 bottom-25 z-0 w-67 lg:-right-20 lg:bottom-12 lg:w-[320px]"
    />
  </section>
</template>
