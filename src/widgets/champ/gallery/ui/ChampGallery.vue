<script setup lang="ts">
import type { ChampGalleryProps } from '~/widgets/champ/gallery'

const scrollbarClass = `gallery-scrollbar-${useId()}`

const sliderOptions = {
  slidesPerView: 'auto',
  spaceBetween: 16,
  grabCursor: true,
  freeMode: true,
  scrollbar: { el: `.${scrollbarClass}`, draggable: true },
  breakpoints: {
    640: { spaceBetween: 32 },
  },
}

defineProps<ChampGalleryProps>()
</script>

<template>
  <section class="container">
    <UiHeading v-if="title" class="text-yellow-primary" tag="h2">{{ title }}</UiHeading>
    <UiSlider :items="images" :options="sliderOptions" class="gallery-slider mt-5 md:mt-10">
      <template #default="{ item }">
        <div
          class="aspect-4/5 w-45 overflow-hidden rounded-xl min-[540px]:w-60 sm:w-70 sm:rounded-3xl md:w-92 md:rounded-4xl"
        >
          <NuxtImg
            :src="item"
            alt=""
            loading="lazy"
            draggable="false"
            class="pointer-events-none size-full object-cover grayscale-[0.2] transition-all duration-500 hover:grayscale-0"
          />
        </div>
      </template>
    </UiSlider>
    <div
      :class="[
        scrollbarClass,
        'gallery-scrollbar bg-purple-primary relative mt-10 h-2 w-full rounded-full sm:h-6.5',
      ]"
    />
    <div v-if="cta" class="mt-6 flex justify-center md:mt-8.5">
      <UiAction :to="cta.to">
        {{ cta.text }}
      </UiAction>
    </div>
  </section>
</template>

<style scoped>
.gallery-slider :deep(swiper-slide) {
  width: auto;
}

.gallery-scrollbar :deep(.swiper-scrollbar-drag) {
  position: relative;
  height: 100%;
  border-radius: 9999px;
  background: #fff;
  cursor: grab;
}
</style>
