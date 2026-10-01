<script setup lang="ts">
import type { FestivalSectionProps } from '~/widgets/consortium/festival'
import FestivalCard from './FestivalCard.vue'

defineProps<FestivalSectionProps>()

const sliderOptions = {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 20 },
  },
}
</script>

<template>
  <section class="relative space-y-5 sm:space-y-10">
    <UiHeading class="text-purple-primary container text-center font-black" tag="h2">
      {{ title }}
    </UiHeading>
    <div class="container">
      <UiSlider
        class="festival-slider xl:hidden"
        :items="cards"
        :options="sliderOptions"
        pagination
      >
        <template #default="{ item }">
          <div class="mx-auto h-full w-65.75 pb-10 md:w-full">
            <FestivalCard v-bind="item" />
          </div>
        </template>
      </UiSlider>

      <ul class="hidden grid-cols-4 gap-5 xl:grid">
        <li v-for="card in cards" :key="card.title">
          <FestivalCard v-bind="card" />
        </li>
      </ul>
    </div>

    <div class="pointer-events-none absolute inset-0 -z-10 overflow-x-clip">
      <div class="absolute top-1/3 right-1/2 size-60 translate-x-1/3 bg-[#5E4877] blur-[130px]" />
      <NuxtImg
        src="/images/consortium/cloud.webp"
        alt=""
        loading="lazy"
        class="absolute top-1/2 left-0 w-100 -translate-x-1/3 -translate-y-1/2 rotate-167 opacity-17"
      />
      <NuxtImg
        src="/images/consortium/cloud.webp"
        alt=""
        loading="lazy"
        class="absolute top-1/2 right-0 w-100 translate-x-1/3 -translate-y-1/2 rotate-12 opacity-17"
      />
      <NuxtImg
        src="/images/consortium/geometry-left.png"
        alt=""
        loading="lazy"
        class="absolute top-1/2 left-0 w-100 translate-x-[-35%] translate-y-[-75%] xl:w-125"
      />
      <NuxtImg
        src="/images/consortium/geometry-right.png"
        alt=""
        loading="lazy"
        class="absolute top-1/2 right-0 w-100 translate-x-[65%] translate-y-[-15%] xl:w-125"
      />
    </div>
  </section>
</template>

<style scoped>
.festival-slider {
  --swiper-pagination-bullet-inactive-color: #d9d9d9;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-theme-color: var(--color-purple-primary);
  --swiper-pagination-bottom: 0;
}
</style>
