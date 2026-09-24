<script setup lang="ts">
import type { AiChampBenefitCardProps } from '~/widgets/ai_champ/benefits'

defineProps<AiChampBenefitCardProps>()
</script>

<template>
  <div class="flex flex-col items-center gap-7">
    <NuxtPicture
      :img-attrs="{
        class: 'aspect-[1.56] w-[197px] max-w-full self-center object-contain',
      }"
      :src="image"
      alt=""
    />
    <UiText size="lg" class="text-center">{{ text }}</UiText>
  </div>
</template>
