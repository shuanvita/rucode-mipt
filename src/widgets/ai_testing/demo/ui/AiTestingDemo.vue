<script setup lang="ts">
import type { AiTestingDemoProps } from '~/widgets/ai_testing/demo/model/AiTestingDemo.types.ts'

defineProps<AiTestingDemoProps>()
</script>

<template>
  <section class="container lg:mt-40">
    <div class="grid gap-6 xl:grid-cols-[350px_1fr]">
      <div class="flex items-center justify-center">
        <NuxtPicture :src="image" alt="" preload />
      </div>
      <div class="flex flex-col gap-8">
        <UiHeading
          v-if="title"
          class="text-purple-primary text-center leading-none lg:text-left"
          tag="h2"
          >{{ title }}</UiHeading
        >
        <UiText class="text-center lg:text-left">{{ text }}</UiText>
        <div class="flex flex-col items-center gap-6 lg:flex-row">
          <div
            v-for="(card, index) in cards"
            :key="card.id"
            class="flex flex-col items-center gap-3"
          >
            <NuxtPicture
              :class="['flex max-w-25 justify-center', { 'max-lg:self-center': index % 2 === 0 }]"
              :img-attrs="{
                class: index % 2 === 0 ? 'size-20 object-contain lg:size-auto' : '',
              }"
              :src="card.image"
              alt=""
              preload
            />
            <div
              v-if="card.text"
              class="flex w-51 max-w-full items-center justify-center rounded-lg border border-purple-500 bg-neutral-800 p-1"
            >
              {{ card.text }}
            </div>
          </div>
        </div>
        <UiText class="text-center lg:text-left">{{ footerText }}</UiText>
        <UiAction class="self-center lg:self-start">{{ btnText }}</UiAction>
      </div>
    </div>
  </section>
</template>
