<script setup lang="ts">
import type { AiChampMaterialsProps } from '~/widgets/ai_champ/materials'

defineProps<AiChampMaterialsProps>()
</script>

<template>
  <section class="container flex flex-col items-center justify-center gap-4">
    <div class="flex items-center gap-4">
      <NuxtPicture
        :src="footer.image"
        width="64"
        height="64"
        alt=""
        loading="lazy"
        :img-attrs="{ class: 'size-16 object-contain' }"
      />
      <UiText size="lg" weight="bold" class="text-yellow-primary">{{ footer.text }}</UiText>
    </div>
    <UiAction variant="ghost" :to="footer.action.to">{{ footer.action.text }}</UiAction>
  </section>
</template>
