<script setup lang="ts">
import type { FaqSectionProps } from '~/widgets/faq/model/FaqSection.types.ts'

defineProps<FaqSectionProps>()
</script>

<template>
  <section class="container space-y-6 lg:space-y-10">
    <UiHeading v-if="title" class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>
    <div class="space-y-5">
      <UiAccordion v-for="item in items" :key="item.heading" :title="item.heading">
        <p class="text-[16px] tracking-[0.8px] lg:text-[18px]" v-html="item.content" />
      </UiAccordion>
    </div>
  </section>
</template>

<style scoped></style>
