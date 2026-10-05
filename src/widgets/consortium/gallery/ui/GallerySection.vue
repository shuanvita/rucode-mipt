<script setup lang="ts">
import type { GallerySectionProps, GallerySlide } from '../model/GallerySection.types'

defineProps<GallerySectionProps>()

const uniqueId = useId()
const prevClass = `gallery-prev-${uniqueId}`
const nextClass = `gallery-next-${uniqueId}`
const navButtons = [
  { class: prevClass, label: 'Предыдущий слайд', flip: true },
  { class: nextClass, label: 'Следующий слайд', flip: false },
]

const sliderOptions = {
  slidesPerView: 'auto',
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 16,
  grabCursor: true,
  autoHeight: true,
  effect: 'coverflow',
  coverflowEffect: { rotate: 0, depth: 200, stretch: 100, slideShadows: false },
  navigation: {
    enabled: true,
    prevEl: `.${prevClass}`,
    nextEl: `.${nextClass}`,
  },
}

const isOpen = ref(false)
const activeSlide = ref<GallerySlide | null>(null)

function open(slide: GallerySlide) {
  activeSlide.value = slide
  isOpen.value = true
}
</script>

<template>
  <section class="container space-y-5 sm:space-y-10">
    <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
    <div>
      <UiSlider :items="slides" :options="sliderOptions" class="gallery-slider">
        <template #default="{ item }">
          <button
            type="button"
            :aria-label="item.videoUrl ? 'Открыть видео' : 'Открыть фото'"
            class="block w-[calc((100vw-20px)*0.9)] cursor-pointer text-left md:w-162 lg:w-210"
            @click="open(item)"
          >
            <article class="flex flex-col gap-y-5 md:gap-y-9">
              <div class="relative">
                <NuxtImg
                  :src="item.image"
                  alt=""
                  loading="lazy"
                  draggable="false"
                  class="gallery-image h-130 w-full rounded-[21px] object-cover transition-[filter] md:aspect-[1.79] md:h-auto"
                />
                <UiSvg
                  v-if="item.videoUrl"
                  name="play"
                  class="absolute top-1/2 left-1/2 size-26.5 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <UiHeading
                v-if="item.title"
                class="gallery-caption text-center font-medium tracking-normal transition-opacity"
                tag="h3"
              >
                {{ item.title }}
              </UiHeading>
            </article>
          </button>
        </template>
      </UiSlider>
      <div class="mt-6 flex justify-center gap-x-4 sm:mt-8">
        <button
          v-for="button in navButtons"
          :key="button.class"
          type="button"
          :aria-label="button.label"
          :class="[
            button.class,
            button.flip && 'rotate-180',
            'text-purple-primary grid size-8.5 place-items-center not-disabled:cursor-pointer disabled:text-[#C9ACCF] sm:size-12.5',
          ]"
        >
          <UiSvg name="chevron-right" class="h-6" />
        </button>
      </div>
    </div>

    <UiModal v-model="isOpen" size="2xl">
      <iframe
        v-if="activeSlide?.videoUrl"
        :src="activeSlide.videoUrl"
        class="aspect-video w-full rounded-xl"
        allow="autoplay; encrypted-media; fullscreen"
        allowfullscreen
      />
      <NuxtImg
        v-else-if="activeSlide"
        :src="activeSlide.image"
        alt=""
        class="max-h-[80vh] w-full rounded-xl object-contain"
      />
    </UiModal>
  </section>
</template>

<style scoped>
.gallery-slider :deep(swiper-slide) {
  width: auto;
}

.gallery-slider :deep(swiper-slide:not(.swiper-slide-active)) .gallery-image {
  filter: brightness(0.5);
}

.gallery-slider :deep(swiper-slide:not(.swiper-slide-active)) .gallery-caption {
  opacity: 0;
}
</style>
