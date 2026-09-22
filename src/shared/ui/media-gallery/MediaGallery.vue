<script setup lang="ts" generic="T extends MediaCardProps">
// TODO Сделать рефакторинг текущего компонента и его потребителей
import type { MediaCardProps } from '~/shared/ui/media-gallery'

type Columns = 2 | 3 | 4

withDefaults(defineProps<{ items: T[]; columns?: Columns }>(), { columns: 4 })

const emit = defineEmits<{ select: [item: T, index: number] }>()

defineSlots<{
  item?(props: { item: T; index: number; select: () => void }): unknown
}>()

const cardProps = (item: T) => ({
  image: item.image,
  videoUrl: item.videoUrl,
  alt: item.alt,
  caption: item.caption,
  tags: item.tags,
  aspect: item.aspect,
})

const gridColsClass: Record<Columns, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
}

const sliderOptions = { slidesPerView: 1.15, spaceBetween: 12 }
</script>

<template>
  <div>
    <ul class="hidden gap-5 md:grid" :class="gridColsClass[columns]">
      <li v-for="(item, index) in items" :key="index" class="min-w-0">
        <slot name="item" :item="item" :index="index" :select="() => emit('select', item, index)">
          <UiMediaGalleryCard v-bind="cardProps(item)" @click="emit('select', item, index)" />
        </slot>
      </li>
    </ul>

    <UiSlider :items="items" :options="sliderOptions" class="md:hidden">
      <template #default="{ item, index }">
        <slot name="item" :item="item" :index="index" :select="() => emit('select', item, index)">
          <UiMediaGalleryCard v-bind="cardProps(item)" @click="emit('select', item, index)" />
        </slot>
      </template>
    </UiSlider>
  </div>
</template>
