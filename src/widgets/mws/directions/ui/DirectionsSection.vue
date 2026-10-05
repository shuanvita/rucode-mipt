<script setup lang="ts">
import DirectionCard from '~/widgets/mws/directions/ui/DirectionCard.vue'
import type { DirectionCardProps, DirectionsSectionProps } from '~/widgets/mws/directions'

defineProps<DirectionsSectionProps>()

const isOpen = ref(false)
const activeItem = ref<DirectionCardProps | null>(null)

function open(item: DirectionCardProps) {
  activeItem.value = item
  isOpen.value = true
}
</script>

<template>
  <section class="container space-y-7.5 sm:space-y-12.5">
    <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
    <UiMediaGallery class="mx-auto max-w-320" :items="cards" :columns="3" @select="open">
      <template #item="{ item, select }">
        <DirectionCard v-bind="item" @select="select" />
      </template>
    </UiMediaGallery>
    <UiModal v-model="isOpen" size="lg">
      <template v-if="activeItem">
        <UiHeading class="text-center" tag="h3" as="h6">{{ activeItem.caption }}</UiHeading>
        <UiVideoFrame :src="activeItem.videoUrl" :title="activeItem.caption" />
      </template>
    </UiModal>
  </section>
</template>
