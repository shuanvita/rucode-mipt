<script setup lang="ts">
import type { AiChampStagesProps } from '~/widgets/ai_champ/stages'
import AiChampStageCard from '~/widgets/ai_champ/stages/ui/AiChampStageCard.vue'

defineProps<AiChampStagesProps>()
</script>

<template>
  <section class="container flex flex-col items-center space-y-10">
    <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>
    <ul class="flex w-full max-w-4xl flex-col gap-8">
      <li v-for="(item, index) in items" :key="item.id">
        <AiChampStageCard v-bind="item" :number="index + 1" />

        <div v-if="index < items.length - 1" class="flex justify-center">
          <UiSvg
            :class="['mt-8 h-20 w-57', { 'rotate-y-180': item.reverse }]"
            name="stage-arrow-left"
            aria-hidden="true"
          />
        </div>
      </li>
    </ul>
  </section>
</template>
