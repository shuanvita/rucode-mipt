<script setup lang="ts">
import type { InternshipSectionProps } from '~/widgets/mws/internship'

defineProps<InternshipSectionProps>()
</script>

<template>
  <section class="container space-y-4 sm:space-y-7.5">
    <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
    <ul class="grid gap-6 md:grid-cols-2">
      <li
        v-for="card in cards"
        :key="card.title"
        class="rounded-3xl border-white p-6 pb-12 min-[400px]:border-3"
      >
        <UiHeading class="mb-5" tag="h3" as="h5">{{ card.title }}</UiHeading>
        <UiText size="lg" :html="card.text" />
      </li>
    </ul>
  </section>
</template>
