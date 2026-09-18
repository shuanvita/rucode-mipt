<script setup lang="ts">
import type { AchievementCardProps } from '~/widgets/home/achievements'

defineProps<AchievementCardProps>()
</script>

<template>
  <div
    class="border-purple-primary flex min-h-80 flex-col items-center justify-center gap-6 rounded-4xl border-3 px-7 py-4 lg:min-h-105"
  >
    <NuxtPicture
      :img-attrs="{
        class: 'min-w-50',
      }"
      class="mix-blend-lighten"
      :src="image"
      alt=""
    />
    <UiText class="text-center" weight="light">{{ text }}</UiText>
  </div>
</template>
