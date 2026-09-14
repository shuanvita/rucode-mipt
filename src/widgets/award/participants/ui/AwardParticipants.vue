<script setup lang="ts">
import type { AwardParticipantsProps } from '~/widgets/award/participants'

defineProps<AwardParticipantsProps>()
</script>

<template>
  <section
    class="relative container flex flex-col items-center space-y-5 overflow-hidden lg:items-start lg:space-y-8 lg:overflow-visible"
  >
    <UiHeading class="max-w-70 text-center lg:max-w-85 lg:text-left" tag="h2">{{
      title
    }}</UiHeading>
    <div
      class="rounded-2xl bg-[linear-gradient(180deg,rgba(27,27,27,0.18)_0%,rgba(153,153,153,0.16)_100%)] lg:py-6 lg:pr-18 lg:pl-15"
    >
      <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <li
          v-for="card in cards"
          :key="card"
          class="bg-blend-[normal,normal,screen] flex min-h-38.75 items-center justify-center rounded-[20px] bg-(image:--participant-card-bg) p-3 text-center backdrop-blur-sm lg:min-h-57.5"
        >
          <p class="text-[16px] font-bold tracking-[0.8px] text-white">{{ card }}</p>
        </li>
      </ul>
    </div>
    <div aria-hidden="true" class="pointer-events-none select-none">
      <NuxtPicture
        src="/images/award2026/cloud.png"
        alt=""
        loading="eager"
        class="absolute top-70 left-55 z-0 hidden w-147.5 lg:-top-75 lg:-left-50 lg:block"
      />
      <NuxtPicture
        src="/images/award2026/cloud.png"
        alt=""
        loading="eager"
        class="absolute top-0 right-0 z-0 hidden w-147.5 rotate-70 lg:top-65 lg:-right-52.5 lg:block"
      />
    </div>
  </section>
</template>
