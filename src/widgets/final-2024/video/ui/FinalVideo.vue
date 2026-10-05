<script setup lang="ts">
import type { FinalVideoProps } from '~/widgets/final-2024/video'

defineProps<FinalVideoProps>()
</script>

<template>
  <section class="container">
    <div
      class="relative min-h-60 overflow-hidden rounded-3xl after:absolute after:inset-0 after:bg-black/40 md:min-h-153"
    >
      <video
        class="absolute inset-0 size-full object-cover"
        :src="src"
        :poster="poster"
        autoplay
        loop
        muted
        playsinline
        preload="metadata"
      />
    </div>
  </section>
</template>
