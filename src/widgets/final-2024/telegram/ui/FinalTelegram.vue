<script setup lang="ts">
import type { FinalTelegramProps } from '~/widgets/final-2024/telegram'

defineProps<FinalTelegramProps>()
</script>

<template>
  <section class="bg-[#9237D2]">
    <div class="relative container flex flex-col-reverse items-center min-[1160px]:flex-row">
      <div
        class="z-20 flex max-w-105.75 flex-col gap-y-7 pt-4 pb-15 min-[1160px]:max-w-159 min-[1160px]:gap-y-13.5 min-[1160px]:pt-23.5 min-[1160px]:pb-30"
      >
        <UiText class="font-semibold sm:text-[20px]/[1.4]" size="custom">{{ text }}</UiText>
        <UiAction class="px-10 py-4.5 text-[13px] font-extrabold" :to="action.to">{{
          action.text
        }}</UiAction>
      </div>
      <NuxtImg
        class="z-10 w-150 max-w-full max-[1160px]:ml-7 min-[1160px]:absolute min-[1160px]:right-5.5"
        :src="image"
        :alt="imageAlt"
        loading="lazy"
      />
    </div>
  </section>
</template>
