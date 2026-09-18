<script setup lang="ts">
import type { InfoBlockProps } from '~/widgets/info-block'

defineProps<InfoBlockProps>()
</script>

<template>
  <section class="relative">
    <div class="container flex flex-col items-center justify-center gap-6 lg:gap-10">
      <UiHeading :class="['text-purple-primary font-bold', titleClass]" tag="h2">{{
        title
      }}</UiHeading>
      <UiText :class="['text-center', descriptionClass]" :html="description" />
    </div>
    <div v-if="isBackground">
      <NuxtPicture
        class="absolute top-1/2 left-0 -z-9 max-h-110 -translate-y-1/2"
        src="/images/info-block-bg.png"
        :alt="title"
      />
      <NuxtPicture
        class="absolute top-1/2 right-0 -z-9 max-h-110 -translate-y-1/2 rotate-y-180"
        src="/images/info-block-bg.png"
        :alt="title"
      />
    </div>
  </section>
</template>
