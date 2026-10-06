<script setup lang="ts">
import type { InternshipSectionProps } from '~/widgets/mts/internship'

defineProps<InternshipSectionProps>()
</script>

<template>
  <section class="container space-y-7.5 sm:space-y-12.5">
    <div class="space-y-4 sm:space-y-7.5">
      <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
      <UiText class="mx-auto max-w-129 text-center" size="xl" :html="description" />
    </div>
    <ul class="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      <li v-for="card in cards" :key="card.title" class="flex flex-col gap-5">
        <div class="flex justify-center sm:h-32 sm:items-end">
          <NuxtImg
            class="h-30 w-auto sm:h-auto sm:max-h-full"
            :src="card.image"
            alt=""
            loading="lazy"
          />
        </div>
        <UiHeading tag="h3" as="h5" class="font-medium">{{ card.title }}</UiHeading>
        <UiText size="lg">{{ card.text }}</UiText>
      </li>
    </ul>
    <div class="flex justify-center">
      <UiAction variant="red" :to="action.to">{{ action.text }}</UiAction>
    </div>
  </section>
</template>
