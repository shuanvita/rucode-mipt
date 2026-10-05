<script setup lang="ts">
import type { DirectionsWorkProps } from '~/widgets/consortium/directions'
import DirectionsCard from './DirectionsCard.vue'

defineProps<DirectionsWorkProps>()

const cornerClasses = [
  'rounded-tl-[40px] rounded-tr-[14px] rounded-br-[40px] rounded-bl-[14px]',
  'rounded-tl-[14px] rounded-tr-[40px] rounded-br-[14px] rounded-bl-[40px]',
]

const borderDegrees = ['280deg', '76deg', '260deg', '100deg']
</script>

<template>
  <section class="relative space-y-5 sm:space-y-10">
    <UiHeading v-if="title" class="text-purple-primary container text-center font-black" tag="h2">
      {{ title }}
    </UiHeading>
    <ul class="container grid gap-5 md:grid-cols-2 md:gap-x-4">
      <li v-for="(card, index) in cards" :key="card.title">
        <DirectionsCard
          v-bind="card"
          :class="cornerClasses[(index + Math.floor(index / 2)) % 2]"
          :style="{ '--card-border-deg': borderDegrees[index % borderDegrees.length] }"
        />
      </li>
    </ul>

    <div class="pointer-events-none absolute inset-0 overflow-x-clip">
      <div
        class="bg-yellow-primary/18 absolute -bottom-25 left-0 size-100 -translate-x-2/3 rounded-full opacity-55 blur-[130px]"
      />
      <div
        class="bg-yellow-primary/17 absolute -top-3 right-0 size-100 translate-x-4/5 rounded-full opacity-55 blur-[130px]"
      />
    </div>
  </section>
</template>
