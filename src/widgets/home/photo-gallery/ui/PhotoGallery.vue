<script setup lang="ts">
import type { PhotoGalleryProps } from '~/widgets/home/photo-gallery'
import type { MediaCardProps } from '~/shared/ui/media-gallery'

defineProps<PhotoGalleryProps>()

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
    <UiMediaGallery :items="photos" :columns="4" @select="open" />
    <UiModal v-model="isOpen" size="lg">
      <!--      <NuxtPicture-->
      <!--        v-if="activeItem"-->
      <!--        class="max-h-[80vh] w-full rounded-xl object-contain"-->
      <!--        :src="activeItem.image"-->
      <!--        :alt="activeItem.alt || activeItem.caption || ''"-->
      <!--      />-->
      <img
        v-if="activeItem"
        :src="activeItem.image"
        :alt="activeItem.alt || activeItem.caption || ''"
        class="max-h-[80vh] w-full rounded-xl object-contain"
      />
    </UiModal>
  </section>
</template>
