<script setup lang="ts">
import type { AwardHeroProps } from '~/widgets/award/hero'

defineProps<AwardHeroProps>()
</script>

<template>
  <section class="container grid items-center gap-10 lg:grid-cols-[489px_1fr]">
    <div class="flex flex-col items-center justify-center gap-5 lg:items-start">
      <UiHeading class="text-center lg:text-left" tag="h1" :html="title" />
      <NuxtPicture
        class="flex h-auto w-full justify-center object-contain lg:hidden"
        :src="imageMobile"
        alt="Rucode Festival"
        width="458"
        height="397"
      />
      <UiAction class="h-13 lg:w-full" :to="action?.to">{{ action?.text }}</UiAction>
    </div>
    <NuxtPicture
      class="hidden h-full w-full object-contain lg:flex lg:justify-center"
      :src="image"
      :img-attrs="{ class: 'w-full h-full' }"
      alt="RuCode Festival"
    />
  </section>
</template>
