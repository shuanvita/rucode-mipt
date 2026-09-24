<script setup lang="ts">
import type { AiChampStageCardProps } from '~/widgets/ai_champ/stages'
import { useScrollReveal } from '~/shared/lib/useScrollReveal'

defineProps<AiChampStageCardProps & { number: number }>()

const { target, isVisible } = useScrollReveal()
</script>

<template>
  <div
    ref="target"
    :class="[
      'flex max-w-122 gap-4 transition-[opacity,transform] duration-800 ease-out motion-reduce:transition-none',
      reverse ? 'mr-auto' : 'ml-auto',
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
    ]"
  >
    <span class="text-yellow-primary shrink-0 text-[40px] leading-none font-bold">
      {{ number }}
    </span>
    <div class="space-y-3">
      <UiText v-for="text in description" :key="text" :html="text" />
    </div>
  </div>
</template>
