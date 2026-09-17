<script setup lang="ts">
import type { HomeHeroProps } from '~/widgets/home/hero'

defineProps<HomeHeroProps>()

const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) videoRef.value?.pause()
})
</script>

<template>
  <section
    class="relative container flex min-h-153 w-full flex-col overflow-hidden rounded-3xl px-16 max-md:px-5 md:mt-8 md:items-center md:justify-center md:py-16"
  >
    <video
      v-if="video"
      ref="videoRef"
      :src="video"
      class="inset-0 size-full rounded-3xl object-cover md:absolute"
      autoplay
      loop
      muted
      playsinline
      aria-hidden="true"
    />

    <div class="inset-0 rounded-3xl bg-black/40 md:absolute" aria-hidden="true" />
    <div
      class="relative z-10 mt-60 flex w-full max-w-full flex-col items-center max-md:mt-10 md:w-94.25"
    >
      <NuxtPicture
        width="378"
        height="112"
        :src="logo"
        alt="Rucode Festival"
        class="w-150 max-w-full max-md:w-44.25"
      />

      <UiAction v-if="action" :to="action.to" class="mt-10 py-5" @click="$emit('openForm')">
        {{ action.text ?? 'Хочу участвовать' }}
      </UiAction>
    </div>
  </section>
</template>
