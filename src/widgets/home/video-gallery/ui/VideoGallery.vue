<script setup lang="ts">
import type { VideoGalleryProps } from '~/widgets/home/video-gallery'
import type { MediaCardProps } from '~/shared/ui/media-gallery'

defineProps<VideoGalleryProps>()

const isOpen = ref(false)
const activeItem = ref<MediaCardProps | null>(null)
const activeIndex = ref(0)

function open(item: MediaCardProps, index: number) {
  activeItem.value = item
  activeIndex.value = index
  isOpen.value = true
}
</script>

<template>
  <section class="container space-y-6 text-center lg:space-y-10">
    <UiHeading class="text-purple-primary" tag="h2">{{ title }}</UiHeading>
    <UiMediaGallery :items="items" :columns="3" video @select="open" />
    <UiModal v-model="isOpen" size="lg">
      <iframe
        v-if="activeItem?.videoUrl"
        :src="activeItem.videoUrl"
        class="aspect-video w-full rounded-xl"
        allow="autoplay; encrypted-media; fullscreen"
        allowfullscreen
      />
      <img
        v-else-if="activeItem"
        :src="activeItem.image"
        :alt="activeItem.alt || activeItem.caption || ''"
        class="max-h-[80vh] w-full rounded-xl object-contain"
      />
    </UiModal>
  </section>
</template>
