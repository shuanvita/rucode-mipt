<script setup lang="ts">
import type { HomeHeroProps } from '~/widgets/home/hero'
import { ParticipationFormModal } from '~/features/participation-form'

defineProps<HomeHeroProps>()

defineOptions({
  inheritAttrs: false,
})

const isFormOpen = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) videoRef.value?.pause()
})
</script>

<template>
  <section
    v-bind="$attrs"
    class="relative container flex flex-col overflow-hidden rounded-3xl py-8 md:items-center md:justify-center lg:min-h-153"
  >
    <video
      v-if="video"
      ref="videoRef"
      class="inset-0 size-full rounded-3xl object-cover md:absolute"
      :src="video"
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
      <NuxtPicture class="w-150 max-w-full max-md:w-44.25" :src="logo" alt="Rucode Festival" />

      <UiAction v-if="action" class="mt-10 py-5" @click="isFormOpen = true">
        {{ action.text ?? 'Хочу участвовать' }}
      </UiAction>
    </div>
  </section>

  <ParticipationFormModal v-model="isFormOpen" />
</template>
