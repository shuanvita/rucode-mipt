<script setup lang="ts">
import type { MediaCardProps } from '~/shared/ui/media-gallery'

const props = defineProps<MediaCardProps>()

const aspectClasses: Record<NonNullable<MediaCardProps['aspect']>, string> = {
  photo: 'aspect-[3/2]',
  video: 'aspect-video',
}

const aspectClass = computed(
  () => aspectClasses[props.aspect ?? (props.videoUrl ? 'video' : 'photo')],
)
</script>

<template>
  <button type="button" class="group block w-full cursor-pointer text-left outline-none">
    <span
      class="relative block overflow-hidden rounded-xl group-focus-visible:ring-2 group-focus-visible:ring-white/70"
      :class="aspectClass"
    >
      <img
        :src="image"
        :alt="alt || caption || ''"
        loading="lazy"
        class="size-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <span
        v-if="videoUrl"
        class="absolute inset-0 grid place-items-center bg-black/0 transition-colors group-hover:bg-black/20"
      >
        <UiSvg class="h-12 w-12" name="play" decorative />
      </span>
    </span>

    <UiText v-if="caption" class="mt-3" size="sm">{{ caption }}</UiText>

    <span v-if="tags?.length" class="mt-1 flex flex-wrap gap-2">
      <UiText
        v-for="tag in tags"
        :key="tag.label"
        size="xs"
        :class="['tracking-normal', tag.color]"
        as="span"
      >
        {{ tag.label }}
      </UiText>
    </span>
  </button>
</template>
