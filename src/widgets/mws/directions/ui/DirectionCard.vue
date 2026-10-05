<script setup lang="ts">
import type { DirectionCardProps } from '~/widgets/mws/directions'

defineProps<DirectionCardProps>()

defineEmits<{ select: [] }>()
</script>

<template>
  <article class="flex flex-col gap-3">
    <UiMediaGalleryCard
      :image="image"
      :video-url="videoUrl"
      :alt="alt || caption"
      @click="$emit('select')"
    />
    <UiText size="sm">{{ caption }}</UiText>
    <UiText size="sm">
      Прочитать статью можно по
      <UiAction variant="custom" class="inline text-blue-400 underline" :to="articleUrl">
        ссылке
      </UiAction>
    </UiText>
    <ul v-if="tags?.length" class="flex gap-2">
      <li v-for="tag in tags" :key="tag.label">
        <UiText size="xs" as="span" :class="['font-semibold tracking-normal', tag.color]">
          {{ tag.label }}
        </UiText>
      </li>
    </ul>
  </article>
</template>
