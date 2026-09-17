<script setup lang="ts">
import type { WhyParticipateProps } from '~/widgets/award2025/why-participate'
import { chunk } from '~/shared/lib/chunk.ts'

const props = defineProps<WhyParticipateProps>()

const CARDS_PER_COLUMN = 2
const columns = computed(() => chunk(props.cards, CARDS_PER_COLUMN))
</script>

<template>
  <section class="relative z-10 flex flex-col space-y-8 lg:space-y-11">
    <div class="container">
      <UiHeading class="max-w-62.5 lg:max-w-85" tag="h2">{{ title }}</UiHeading>
    </div>
    <UiMarquee>
      <div
        v-for="(column, index) in columns"
        :key="index"
        class="flex w-80.75 shrink-0 flex-col gap-y-8 sm:w-108"
      >
        <div
          v-for="(card, idx) in column"
          :key="idx"
          class="bg-blend-[normal,normal,screen] flex min-h-55 shrink-0 items-center justify-center rounded-[20px] bg-(image:--participant-card-bg) p-7 text-center backdrop-blur-sm lg:min-h-86.25"
        >
          <p
            class="text-[14px] font-bold tracking-[1.8px] text-white uppercase lg:text-[24px]"
            v-html="card.title"
          />
        </div>
      </div>
    </UiMarquee>

    <div
      class="pointer-events-none absolute top-1/2 left-0 z-0 size-235.25 translate-x-1/3 -translate-y-1/2 rounded-full bg-[rgba(255,209,2,0.17)] opacity-[0.37] blur-[271.25px]"
    />
  </section>
</template>
