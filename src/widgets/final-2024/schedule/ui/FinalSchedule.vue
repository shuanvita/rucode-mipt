<script setup lang="ts">
import type { FinalScheduleProps } from '~/widgets/final-2024/schedule'

defineProps<FinalScheduleProps>()
</script>

<template>
  <section class="container">
    <UiHeading class="text-purple-primary mb-6 text-center font-black sm:mb-10" tag="h2">{{
      title
    }}</UiHeading>
    <div class="flex flex-col gap-y-5">
      <UiHeading class="font-black" tag="h3" as="h4">{{ day }}</UiHeading>
      <UiText as="div" size="sm">
        <NuxtLink
          class="text-yellow-primary underline"
          :to="group.to"
          target="_blank"
          rel="noopener noreferrer"
          >{{ group.text }}</NuxtLink
        >
        <br />
        <u>{{ group.note }}</u>
      </UiText>
      <ul class="flex flex-col gap-y-4">
        <li
          v-for="row in rows"
          :key="row.time"
          class="flex flex-col items-start gap-x-6 gap-y-2 sm:flex-row sm:items-center"
        >
          <span
            class="border-purple-primary w-full shrink-0 rounded-lg border bg-black px-4 py-3 text-center text-[15px] font-bold sm:w-48"
            >{{ row.time }}</span
          >
          <UiText size="custom"
            ><span class="text-[13px]/[1.4] sm:text-[15px]/[1.5]">{{ row.text }}</span></UiText
          >
        </li>
      </ul>
    </div>
  </section>
</template>
