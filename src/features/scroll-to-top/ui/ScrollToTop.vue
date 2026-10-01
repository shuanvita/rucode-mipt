<script setup lang="ts">
const { t } = useI18n()

const visible = ref(false)
let observer: IntersectionObserver | null = null

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  const footer = document.querySelector('footer')
  if (!footer) return

  observer = new IntersectionObserver(([entry]) => {
    visible.value = !!entry?.isIntersecting
  })
  observer.observe(footer)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-200"
    leave-active-class="transition duration-200"
    enter-from-class="translate-y-2 opacity-0"
    leave-to-class="translate-y-2 opacity-0"
  >
    <button
      v-if="visible"
      type="button"
      :aria-label="t('scrollToTop.label')"
      class="border-yellow-primary text-yellow-primary hover:bg-yellow-primary fixed right-8 bottom-8 z-40 hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 bg-transparent transition-colors hover:text-black md:flex"
      @click="scrollToTop"
    >
      <UiSvg name="arrow-up" class="h-6 w-6" />
    </button>
  </Transition>
</template>
