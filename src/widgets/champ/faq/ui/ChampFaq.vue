<script setup lang="ts">
import type { ChampFaqProps } from '~/widgets/champ/faq'

defineProps<ChampFaqProps>()
</script>

<template>
  <section class="container flex flex-col">
    <UiHeading v-if="title" class="text-yellow-primary mb-7 leading-none" tag="h2">{{
      title
    }}</UiHeading>
    <div class="flex flex-col gap-y-5">
      <UiAccordion v-for="item in items" :key="item.question" :title="item.question">
        <UiText
          v-if="item.answer"
          class="[&_a]:text-purple-light leading-relaxed [&_a]:underline"
          :html="item.answer"
        />
      </UiAccordion>
    </div>
    <UiAction v-if="cta" class="mt-12 self-center md:mt-16" :to="cta.to">{{ cta.text }}</UiAction>
  </section>
</template>
