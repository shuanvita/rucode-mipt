<script setup lang="ts">
import type { AiChampCoursesProps } from '~/widgets/ai_champ/courses'
import AiChampCourseCard from '~/widgets/ai_champ/courses/ui/AiChampCourseCard.vue'

const props = defineProps<AiChampCoursesProps>()

const defaultActiveId = computed(() => props.slides?.[1]?.id ?? props.slides?.[0]?.id)

const activeId = ref<string>()

watchEffect(() => {
  if (activeId.value) return
  activeId.value = defaultActiveId.value
})

const orderedSlides = computed(() => {
  if (!props.slides?.length) return []
  const active = props.slides.find((slide) => slide.id === activeId.value)
  if (!active) return props.slides

  const rest = props.slides.filter((slide) => slide.id !== activeId.value)
  const middle = Math.ceil(rest.length / 2)
  return [...rest.slice(0, middle), active, ...rest.slice(middle)]
})

const mobileSliderRef = ref()
const mobileSwiper = computed(() => mobileSliderRef.value?.swiper)
const mobileSliderOptions = {
  autoHeight: true,
}

const cardEls = ref<Record<string, HTMLElement | null>>({})
const measuring = ref(false)
const cardHeight = ref<number>()

function setCardRef(id: string, el: Element | null) {
  cardEls.value[id] = el as HTMLElement | null
}

async function measureHeights() {
  measuring.value = true
  await nextTick()
  if (document.fonts?.ready) {
    try {
      await document.fonts.ready
    } catch {}
  }
  await nextTick()

  const baseHeight = defaultActiveId.value
    ? (cardEls.value[defaultActiveId.value]?.offsetHeight ?? 0)
    : 0
  const otherHeights = (props.slides ?? []).map(
    (slide) => cardEls.value[slide.id]?.offsetHeight ?? 0,
  )
  cardHeight.value = Math.max(baseHeight, ...otherHeights) || undefined

  measuring.value = false
}

let resizeRaf = 0
function onResize() {
  cancelAnimationFrame(resizeRaf)
  resizeRaf = requestAnimationFrame(measureHeights)
}

onMounted(() => {
  measureHeights()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  cancelAnimationFrame(resizeRaf)
})

function cardStyle() {
  if (measuring.value || !cardHeight.value) return undefined
  return { minHeight: `${cardHeight.value}px` }
}
</script>

<template>
  <section class="container flex flex-col items-center space-y-10">
    <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>

    <div v-if="slides?.length" class="w-full max-w-100 space-y-7 lg:hidden">
      <UiSlider ref="mobileSliderRef" :items="slides" :options="mobileSliderOptions" class="w-full">
        <template #default="{ item }">
          <AiChampCourseCard v-bind="item" />
        </template>
      </UiSlider>

      <div class="flex items-center justify-center gap-6">
        <UiAction
          variant="custom"
          icon="swiper-arrow-left"
          icon-size="size-8"
          aria-label="Предыдущий слайд"
          class="hover:text-yellow-primary text-white"
          :disabled="mobileSwiper?.isBeginning?.value"
          @click="mobileSwiper?.prev()"
        />

        <div class="flex items-center gap-2.5">
          <button
            v-for="(_, index) in slides"
            :key="index"
            type="button"
            :aria-label="`Перейти к слайду ${index + 1}`"
            :aria-current="mobileSwiper?.activeIndex?.value === index"
            class="size-2 rounded-full transition-colors not-disabled:cursor-pointer"
            :class="mobileSwiper?.activeIndex?.value === index ? 'bg-white' : 'bg-[#6D6D6D]'"
            @click="mobileSwiper?.to(index)"
          />
        </div>

        <UiAction
          variant="custom"
          icon="swiper-arrow-right"
          icon-size="size-8"
          aria-label="Следующий слайд"
          class="hover:text-yellow-primary text-white"
          :disabled="mobileSwiper?.isEnd?.value"
          @click="mobileSwiper?.next()"
        />
      </div>
    </div>

    <TransitionGroup
      v-if="slides?.length"
      tag="div"
      name="course"
      class="hidden w-full flex-wrap items-center justify-center gap-6 py-8 lg:flex"
    >
      <div
        v-for="item in orderedSlides"
        :key="item.id"
        :ref="(el) => setCardRef(item.id, el as Element | null)"
        class="w-80 max-w-full shrink-0 cursor-pointer transition-transform duration-500 lg:w-87.5"
        :class="item.id === activeId ? 'z-10 scale-105 lg:-mx-4' : 'z-0'"
        :style="cardStyle()"
        @click="activeId = item.id"
      >
        <AiChampCourseCard v-bind="item" :active="item.id === activeId" />
      </div>
    </TransitionGroup>
  </section>
</template>

<style scoped>
.course-move {
  transition: transform 0.5s ease;
}
</style>
