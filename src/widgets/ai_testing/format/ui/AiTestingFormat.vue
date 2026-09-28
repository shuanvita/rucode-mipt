<script setup lang="ts">
import type { AiTestingFormatProps } from '../model/AiTestingFormat.types'
import AiTestingFormatItem from './AiTestingFormatItem.vue'

defineProps<AiTestingFormatProps>()
</script>

<template>
  <section class="container lg:mt-40">
    <UiHeading class="text-purple-primary mb-8 text-center leading-none lg:mb-10" tag="h2">{{
      title
    }}</UiHeading>
    <div class="grid gap-8 lg:grid-cols-3">
      <AiTestingFormatItem
        class="order-1"
        :title="online.title"
        :image="online.image"
        alt="Онлайн"
      />
      <UiText
        class="order-3 text-center text-[15px]/[1.5] lg:order-2 lg:text-[17px]"
        size="custom"
        >{{ text }}</UiText
      >
      <AiTestingFormatItem
        class="order-2 lg:order-3"
        :title="offline.title"
        :image="offline.image"
        alt="Очно"
      />
    </div>
  </section>
</template>
