<script setup lang="ts">
import type { AiChampTasksProps } from '~/widgets/ai_champ/tasks'
import AiChampTaskCard from '~/widgets/ai_champ/tasks/ui/AiChampTaskCard.vue'
import { useCollapseTransition } from '~/shared/lib/useCollapseTransition'

defineProps<AiChampTasksProps>()
const isExpanded = ref(false)
const { onEnter, onAfterEnter, onLeave } = useCollapseTransition()
</script>

<template>
  <section class="container flex flex-col items-center space-y-10">
    <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>

    <div
      v-if="visibleCards?.length"
      class="mb-11 flex w-full flex-col items-center justify-between gap-5 lg:flex-row"
    >
      <AiChampTaskCard v-for="card in visibleCards" :key="card.id" v-bind="card" />
    </div>

    <UiText weight="bold" size="lg" class="max-w-135 text-center">{{ description }}</UiText>
    <UiSvg class="max-h-20 rotate-y-180" name="stage-arrow-left" />

    <div class="flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
      <div class="text-purple-primary text-center text-[22px] font-bold lg:text-[30px]">
        {{ subtitle }}
      </div>
      <UiAction @click="isExpanded = true">{{ btnText }}</UiAction>
    </div>

    <Transition @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave">
      <div v-if="isExpanded && hiddenCards?.length" class="w-full space-y-10">
        <div class="flex flex-wrap justify-center gap-10">
          <AiChampTaskCard
            v-for="card in hiddenCards"
            :key="card.id"
            v-bind="card"
            class="w-full sm:w-[calc(50%-1.25rem)]"
          />
        </div>

        <div class="flex flex-col items-center gap-6">
          <UiText size="lg">{{ hiddenContent }}</UiText>
          <div class="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
            <UiAction v-if="action" :to="action.to">{{ action.text }}</UiAction>
            <UiAction variant="ghost" @click="isExpanded = false">{{
              hideText ?? 'Скрыть'
            }}</UiAction>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>
