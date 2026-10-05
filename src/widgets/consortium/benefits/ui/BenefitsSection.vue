<script setup lang="ts">
import type { BenefitsSectionProps } from '../model/BenefitsSection.types'

const props = defineProps<BenefitsSectionProps>()

const isLastRow = (index: number) => {
  const total = props.benefits.length
  const lastRowStart = total % 2 === 0 ? total - 2 : total - 1
  return index >= lastRowStart
}
</script>

<template>
  <section class="relative space-y-5 sm:space-y-10">
    <UiHeading v-if="title" class="text-purple-primary container text-center font-black" tag="h2">
      {{ title }}
    </UiHeading>
    <div class="relative z-10 mx-2.5">
      <ul
        class="benefits-list mx-auto grid max-w-225.5 grid-cols-1 overflow-hidden rounded-[40px] backdrop-blur-[48px] sm:grid-cols-2"
      >
        <li
          v-for="(benefit, index) in benefits"
          :key="benefit"
          class="flex items-center justify-center px-10 py-4.5 text-center whitespace-pre-line md:py-10"
          :class="[
            index !== benefits.length - 1 && 'border-b border-dashed border-white/20',
            isLastRow(index) && 'sm:border-b-0',
            index === benefits.length - 1 && benefits.length % 2 === 1 && 'sm:col-span-full',
          ]"
        >
          {{ benefit }}
        </li>
      </ul>
    </div>

    <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-x-clip">
      <div
        class="bg-yellow-primary/18 absolute -bottom-25 left-0 size-80 -translate-x-2/3 rounded-full opacity-55 blur-[97px]"
      />
      <div
        class="bg-yellow-primary/17 absolute -top-3 right-0 size-80 translate-x-4/5 rounded-full opacity-55 blur-[97px]"
      />
    </div>
  </section>
</template>

<style scoped>
.benefits-list {
  border: 1px dashed rgb(255 255 255 / 0.2);
  background: linear-gradient(160deg, rgb(255 255 255 / 0.02), rgb(255 255 255 / 0.1));
}
</style>
