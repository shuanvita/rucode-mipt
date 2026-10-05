<script setup lang="ts">
import type { FinalQuotesProps } from '~/widgets/final-2024/quotes'
import { useSliderNavigation } from '~/shared/lib/useSliderNavigation'

const { prevClass, nextClass, navigation } = useSliderNavigation()

const sliderOptions = {
  spaceBetween: 40,
  grabCursor: true,
  autoHeight: true,
  loop: true,
  navigation,
}

defineProps<FinalQuotesProps>()
</script>

<template>
  <section class="relative container">
    <UiHeading class="text-purple-primary mb-10 text-center font-black" tag="h2">{{
      title
    }}</UiHeading>
    <div class="relative">
      <UiSlider
        class="quotes-slider px-0 md:px-20"
        :items="items"
        :options="sliderOptions"
        pagination
      >
        <template #default="{ item }">
          <article
            class="flex flex-col items-center justify-center gap-x-10 gap-y-7 pb-14 md:flex-row"
          >
            <div class="flex w-full max-w-80 shrink-0 flex-col items-center gap-y-7">
              <NuxtImg class="max-h-50 w-auto" :src="item.photo" :alt="item.name" loading="lazy" />
              <div class="flex flex-col gap-y-5 text-center">
                <UiHeading class="text-purple-primary" tag="h3" as="h4">{{ item.name }}</UiHeading>
                <UiText class="whitespace-pre-line" size="sm">{{ item.role }}</UiText>
              </div>
            </div>
            <div class="flex w-full max-w-152 flex-col self-center">
              <UiSvg class="text-yellow-primary size-12.5" name="quote-open" />
              <UiText class="my-4 whitespace-pre-line md:mt-7">{{ item.text }}</UiText>
              <UiSvg class="text-yellow-primary size-12.5 self-end" name="quote-close" />
            </div>
          </article>
        </template>
      </UiSlider>
      <UiSliderArrow
        class="absolute top-[40%] left-0 z-10 -translate-y-1/2 text-white max-md:hidden"
        direction="prev"
        :nav-class="prevClass"
      />
      <UiSliderArrow
        class="absolute top-[40%] right-0 z-10 -translate-y-1/2 text-white max-md:hidden"
        direction="next"
        :nav-class="nextClass"
      />
    </div>
  </section>
</template>

<style scoped>
.quotes-slider {
  --swiper-pagination-color: #ffd102;
  --swiper-pagination-bullet-inactive-color: #fff;
  --swiper-pagination-bullet-inactive-opacity: 0.4;
}
</style>
