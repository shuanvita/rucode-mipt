<script setup lang="ts" generic="T extends MediaCardProps">
import type { MediaAspect, MediaCardProps } from './MediaGallery.types'

type Columns = 2 | 3 | 4

const props = withDefaults(
  defineProps<{
    items: T[]
    columns?: Columns
    desktop?: 'grid' | 'slider'
    mobileSlidesPerView?: number
    video?: boolean
    aspect?: MediaAspect
  }>(),
  { columns: 4, desktop: 'grid', mobileSlidesPerView: 1.15, video: false },
)

const emit = defineEmits<{ select: [item: T, index: number] }>()

defineSlots<{
  item?(props: { item: T; index: number; select: () => void }): unknown
}>()

const cardProps = (item: T) => ({
  image: item.image,
  alt: item.alt,
  caption: item.caption,
  tags: item.tags,
  video: props.video,
  aspect: props.aspect,
})

const gridColsClass: Record<Columns, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
}

const sliderOptions = computed(() => {
  const base = { slidesPerView: props.mobileSlidesPerView, spaceBetween: 12 }

  if (props.desktop === 'slider') {
    return {
      ...base,
      breakpoints: { 768: { slidesPerView: props.columns, spaceBetween: 20 } },
    }
  }
  return base
})
</script>

<template>
  <div>
    <ul v-if="desktop === 'grid'" class="hidden gap-5 md:grid" :class="gridColsClass[columns]">
      <li v-for="(item, index) in items" :key="index" class="min-w-0">
        <slot name="item" :item="item" :index="index" :select="() => emit('select', item, index)">
          <UiMediaGalleryCard v-bind="cardProps(item)" @click="emit('select', item, index)" />
        </slot>
      </li>
    </ul>

    <UiSlider :items="items" :options="sliderOptions" :class="{ 'md:hidden': desktop === 'grid' }">
      <template #default="{ item, index }">
        <slot name="item" :item="item" :index="index" :select="() => emit('select', item, index)">
          <UiMediaGalleryCard v-bind="cardProps(item)" @click="emit('select', item, index)" />
        </slot>
      </template>
    </UiSlider>
  </div>
</template>
