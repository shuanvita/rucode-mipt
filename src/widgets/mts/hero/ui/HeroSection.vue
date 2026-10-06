<script setup lang="ts">
import type { HeroSectionProps } from '~/widgets/mts/hero'

defineProps<HeroSectionProps>()
</script>

<template>
  <section
    class="container mt-6 grid grid-cols-[minmax(0,1fr)] sm:mt-12 lg:mt-0 lg:grid-cols-2 lg:items-center lg:gap-10"
  >
    <div class="col-start-1 row-start-1 flex flex-col items-start gap-17.5 md:gap-10">
      <UiHeading class="text-brand-red font-black" tag="h1" :html="title" />
      <UiText class="max-w-120 pr-22 sm:pr-0" size="xl" :html="description" />
    </div>
    <NuxtPicture
      class="pointer-events-none -z-10 col-start-1 row-start-1 -mt-4 -mr-18 block h-0 w-66 self-start justify-self-end min-[500px]:w-125 sm:w-150 md:w-200 lg:z-0 lg:col-start-2 lg:-my-16 lg:mr-0 lg:ml-0 lg:h-auto lg:w-full lg:max-w-228 lg:self-center lg:justify-self-center"
      :img-attrs="{ class: 'w-full h-auto' }"
      :src="image"
      alt=""
      loading="eager"
      fetchpriority="high"
      preload
    />
  </section>
</template>
