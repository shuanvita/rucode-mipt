<script setup lang="ts">
import type { WhyParticipateProps } from '~/widgets/award2026/why-participate'

defineProps<WhyParticipateProps>()
</script>

<template>
  <section class="relative container flex flex-col space-y-8 lg:space-y-11">
    <UiHeading class="max-w-62.5 lg:max-w-85" tag="h2">{{ title }}</UiHeading>
    <ul class="grid gap-6 md:grid-cols-2 lg:gap-10 xl:grid-cols-2">
      <li
        v-for="card in cards"
        :key="card.title"
        class="bg-blend-[normal,normal,screen] flex min-h-50.25 items-center justify-center rounded-[20px] bg-(image:--participant-card-bg) p-7 text-center backdrop-blur-sm"
      >
        <p
          class="text-[16px] font-bold tracking-[1.8px] text-white uppercase lg:text-[24px]"
          v-html="card.title"
        />
      </li>
    </ul>
    <div
      class="pointer-events-none absolute top-1/2 left-0 z-0 size-235.25 translate-x-1/3 -translate-y-1/2 rounded-full bg-[rgba(255,209,2,0.17)] opacity-[0.37] blur-[271.25px]"
    />
  </section>
</template>
