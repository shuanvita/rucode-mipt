<script setup lang="ts">
import ProductCard from '~/widgets/mws/products/ui/ProductCard.vue'
import type { ProductsSectionProps } from '~/widgets/mws/products'
import { useSliderNavigation } from '~/shared/lib/useSliderNavigation'

defineProps<ProductsSectionProps>()

const { prevClass, nextClass, navigation } = useSliderNavigation()

const sliderOptions = {
  spaceBetween: 20,
  grabCursor: true,
  navigation,
}
</script>

<template>
  <section class="container space-y-7.5 sm:space-y-12.5">
    <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
    <div class="relative mx-auto w-full max-w-280 pb-14 md:pb-0">
      <UiSlider :items="cards" :options="sliderOptions">
        <template #default="{ item }">
          <ProductCard v-bind="item" />
        </template>
      </UiSlider>
      <UiSliderArrow
        direction="prev"
        :nav-class="prevClass"
        class="absolute bottom-0 left-1/4 z-10 md:top-1/2 md:bottom-auto md:-left-15 md:-translate-y-1/2"
      />
      <UiSliderArrow
        direction="next"
        :nav-class="nextClass"
        class="absolute right-1/4 bottom-0 z-10 md:top-1/2 md:-right-15 md:bottom-auto md:-translate-y-1/2"
      />
    </div>
  </section>
</template>
