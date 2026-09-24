<script setup lang="ts">
import type { AiChampPreparationProps } from '~/widgets/ai_champ/preparation'

defineProps<AiChampPreparationProps>()

const sliderRef = ref()
const swiper = computed(() => sliderRef.value?.swiper)

const sliderOptions = {
  autoHeight: true,
  breakpoints: {
    1024: {
      autoHeight: false,
    },
  },
}
</script>

<template>
  <section class="container flex flex-col items-center space-y-10">
    <div class="flex flex-col items-center space-y-7">
      <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>
      <div v-if="subtitle" class="text-purple-primary text-center font-bold uppercase lg:text-2xl">
        {{ subtitle }}
      </div>
      <div v-if="caption" class="text-yellow-primary text-center text-[18px] font-bold">
        {{ caption }}
      </div>
    </div>

    <div v-if="slides?.length" class="flex w-full max-w-183 flex-col items-center space-y-7">
      <UiSlider ref="sliderRef" :items="slides" :options="sliderOptions" class="w-full">
        <template #default="{ item }">
          <div class="flex flex-col items-center space-y-7">
            <div v-if="item.title" class="text-yellow-primary text-center text-[18px] font-bold">
              {{ item.title }}
            </div>
            <div
              class="w-full space-y-4 rounded-lg border border-[#6D6D6D] bg-[#1A1C21] p-7 text-center"
            >
              <UiText v-for="text in item.description" :key="text">
                {{ text }}
              </UiText>
            </div>
          </div>
        </template>
      </UiSlider>

      <div class="flex items-center gap-6">
        <UiAction
          variant="custom"
          icon="swiper-arrow-left"
          icon-size="size-8"
          aria-label="Предыдущий слайд"
          class="hover:text-yellow-primary text-white"
          :disabled="swiper?.isBeginning?.value"
          @click="swiper?.prev()"
        />

        <div class="flex items-center gap-2.5">
          <button
            v-for="(_, index) in slides"
            :key="index"
            type="button"
            :aria-label="`Перейти к слайду ${index + 1}`"
            :aria-current="swiper?.activeIndex?.value === index"
            class="size-2 rounded-full transition-colors not-disabled:cursor-pointer"
            :class="swiper?.activeIndex?.value === index ? 'bg-white' : 'bg-[#6D6D6D]'"
            @click="swiper?.to(index)"
          />
        </div>

        <UiAction
          variant="custom"
          icon="swiper-arrow-right"
          icon-size="size-8"
          aria-label="Следующий слайд"
          class="hover:text-yellow-primary text-white"
          :disabled="swiper?.isEnd?.value"
          @click="swiper?.next()"
        />
      </div>
    </div>
  </section>
</template>
