<script setup lang="ts">
defineProps<{
  direction: 'prev' | 'next'
  // Класс, по которому Swiper находит кнопку (см. useSliderNavigation)
  navClass: string
}>()
</script>

<template>
  <button
    type="button"
    :aria-label="direction === 'prev' ? 'Предыдущий слайд' : 'Следующий слайд'"
    :class="[
      navClass,
      'text-purple-primary hover:text-purple-primary/80 grid size-12.5 place-items-center transition-colors not-disabled:cursor-pointer disabled:opacity-40',
    ]"
  >
    <UiSvg :name="direction === 'prev' ? 'arrow-left' : 'arrow-right'" />
  </button>
</template>
