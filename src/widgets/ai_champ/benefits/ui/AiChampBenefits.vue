<script setup lang="ts">
import type { AiChampBenefitsProps } from '~/widgets/ai_champ/benefits'
import AiChampBenefitCard from '~/widgets/ai_champ/benefits/ui/AiChampBenefitCard.vue'

defineProps<AiChampBenefitsProps>()
</script>

<template>
  <section class="container space-y-8">
    <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>
    <div class="grid md:grid-cols-2 xl:grid-cols-4">
      <AiChampBenefitCard v-for="card in items" :key="card.id" v-bind="card" />
    </div>
    <UiText
      v-if="quote"
      size="lg"
      class="mx-auto mt-8 flex max-w-142.5 items-center justify-center gap-2.5 rounded-lg border border-dashed border-purple-500 px-4 py-2.5 text-center"
    >
      {{ quote }}
    </UiText>
  </section>
</template>

<style scoped></style>
