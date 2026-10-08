<script setup lang="ts">
import type { Person } from '~/widgets/people-slider'

defineProps<Person>()
</script>

<template>
  <article class="relative flex flex-col items-center overflow-hidden">
    <div class="relative mb-8 h-45 w-45">
      <UiSvg class="absolute top-2 -right-6 h-28.25 w-24" name="slider-dotted" />
      <UiSvg class="absolute top-0 -left-2 h-12.5 w-12.5" name="slider-circle" />
      <NuxtPicture
        v-if="photo"
        :img-attrs="{
          class:
            'w-full h-full rounded-full object-cover shadow-[0_3.313px_3.313px_0_rgba(0,0,0,0.25)]',
        }"
        class="relative z-10"
        :src="photo"
        :alt="name"
      />
      <div
        v-else
        class="relative z-10 h-full w-full rounded-full bg-[#5E4877] shadow-[0_3.313px_3.313px_0_rgba(0,0,0,0.25)]"
      />
    </div>
    <UiHeading class="text-purple-primary mb-5" tag="h3" weight="bold">{{ name }}</UiHeading>
    <UiText v-if="text" class="px-7 text-center" size="sm">{{ text }}</UiText>
  </article>
</template>
