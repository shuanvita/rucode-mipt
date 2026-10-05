<script setup lang="ts">
import PersonCard from '~/widgets/people-slider/ui/PersonCard.vue'
import type { PeopleSliderProps } from '~/widgets/people-slider'
import { useSliderNavigation } from '~/shared/lib/useSliderNavigation'

const { prevClass, nextClass, navigation } = useSliderNavigation()

const sliderOptions = {
  spaceBetween: 29,
  grabCursor: true,
  centeredSlides: true,
  navigation,
  breakpoints: {
    640: {
      slidesPerView: 'auto',
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
}

defineProps<PeopleSliderProps>()
</script>

<template>
  <section class="relative container flex flex-col items-center space-y-5 lg:space-y-10">
    <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>
    <UiText v-if="description" class="max-w-146 text-center">{{ description }}</UiText>
    <div class="relative mx-auto w-full max-w-254.5">
      <UiSlider :items="people" :options="sliderOptions" class="pt-4">
        <template #default="{ item }">
          <PersonCard :photo="item.photo" :name="item.name" :text="item.text" />
        </template>
      </UiSlider>
      <UiSliderArrow
        direction="prev"
        :nav-class="prevClass"
        class="absolute top-1/2 left-0 z-10 -translate-y-1/2 min-[1200px]:-left-15"
      />
      <UiSliderArrow
        direction="next"
        :nav-class="nextClass"
        class="absolute top-1/2 right-0 z-10 -translate-y-1/2 min-[1200px]:-right-15"
      />
    </div>
    <div
      class="pointer-events-none absolute top-0 left-0 z-0 h-113.25 w-128.75 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#5E4877] blur-[217.35px]"
    />
  </section>
</template>
