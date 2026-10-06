<script setup lang="ts">
import type { ResumeSectionProps } from '~/widgets/mws/resume'

defineProps<ResumeSectionProps>()
</script>

<template>
  <section class="container space-y-7.5 sm:space-y-12.5">
    <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
    <div class="flex flex-col items-center gap-4 sm:gap-7.5">
      <UiText class="text-center" size="xl" :html="description" />
      <UiAction variant="red-outline" :to="vacancies.to">{{ vacancies.text }}</UiAction>
      <UiAction variant="red" :to="resume.to">{{ resume.text }}</UiAction>
    </div>
  </section>
</template>
