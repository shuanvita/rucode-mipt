<script setup lang="ts">
import type { ParticipantsSectionProps } from '../model/ParticipantsSection.types'

defineProps<ParticipantsSectionProps>()
</script>

<template>
  <section class="relative container space-y-5 sm:space-y-10">
    <UiHeading v-if="title" class="text-purple-primary text-center font-black" tag="h2">
      {{ title }}
    </UiHeading>
    <div class="relative z-10 mx-2.5 lg:mx-12.5">
      <div class="participants-card space-y-9 rounded-2xl p-5 backdrop-blur-[48px] md:p-12.5">
        <UiHeading v-if="subtitle" class="max-w-[80%] font-semibold uppercase" tag="h3">
          {{ subtitle }}
        </UiHeading>
        <ul class="space-y-5">
          <li v-for="item in items" :key="item" class="flex gap-3">
            <UiSvg name="briefcase" class="size-6 shrink-0 text-[#B3B3B3]" />
            <UiText>{{ item }}</UiText>
          </li>
        </ul>
      </div>
    </div>

    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 overflow-x-clip"
    >
      <div
        class="bg-purple-primary/36 absolute -bottom-35 left-0 size-108 -translate-x-2/3 rounded-full opacity-55 blur-[97px]"
      />
      <div
        class="bg-purple-primary/36 absolute top-14 right-0 size-69 translate-x-4/5 rounded-full opacity-55 blur-[97px]"
      />
    </div>
  </section>
</template>

<style scoped>
.participants-card {
  border: 1px dashed rgb(255 255 255 / 0.2);
  background: linear-gradient(160deg, rgb(255 255 255 / 0.02), rgb(255 255 255 / 0.1));
}
</style>
