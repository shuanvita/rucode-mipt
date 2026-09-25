<script setup lang="ts">
import type { AiChampMaterialsProps } from '~/widgets/ai_champ/materials'

defineProps<AiChampMaterialsProps>()
</script>

<template>
  <section class="container flex flex-col items-center gap-10">
    <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>

    <div class="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
      <div class="flex flex-col items-center pt-4 lg:items-start">
        <NuxtPicture
          :src="imagePerson"
          width="210"
          alt=""
          loading="lazy"
          :img-attrs="{
            class: 'object-cover',
          }"
        />
        <UiText weight="bold" class="text-purple-primary mt-4">{{ namePerson }}</UiText>
      </div>

      <div class="min-w-0 flex-1 space-y-4">
        <UiSvg name="quote-open" class="text-yellow-primary size-8 lg:size-10" />
        <UiText size="lg" :html="text" />
        <UiSvg name="quote-close" class="text-yellow-primary ml-auto block size-8 lg:size-10" />
      </div>
    </div>

    <div class="flex w-full flex-col flex-wrap items-center justify-center gap-4">
      <div class="flex items-center gap-4">
        <NuxtPicture
          :src="footer.image"
          width="64"
          height="64"
          alt=""
          loading="lazy"
          :img-attrs="{ class: 'size-16 object-contain' }"
        />
        <UiText size="lg" weight="bold" class="text-yellow-primary">{{ footer.text }}</UiText>
      </div>
      <UiAction variant="ghost" :to="footer.action.to">{{ footer.action.text }}</UiAction>
    </div>
  </section>
</template>
