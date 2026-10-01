<script setup lang="ts">
import type { FestivalCardProps } from '~/widgets/consortium/festival'

defineProps<FestivalCardProps>()
</script>

<template>
  <div
    class="relative z-10 size-full rounded-[40px] bg-linear-to-b from-white/35 via-white/10 to-white/20 p-[10px] backdrop-blur-sm"
  >
    <div
      class="bg-dark-primary relative flex size-full min-h-81.5 flex-col gap-4 overflow-hidden rounded-[30px] px-6 pt-8 pb-8 lg:px-5 xl:px-6"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -top-10 -left-10 size-48 rounded-full bg-[#5E4877]/60 blur-[50px]"
      />
      <div class="relative space-y-3">
        <UiText
          as="span"
          size="custom"
          weight="black"
          class="block text-[28px] tracking-wider uppercase xl:text-[36px]"
        >
          {{ title }}
        </UiText>
        <UiText class="whitespace-pre-line text-white/90">{{ description }}</UiText>
      </div>
      <NuxtImg
        :src="icon"
        format="svg"
        alt=""
        width="96"
        height="96"
        loading="lazy"
        class="pointer-events-none relative mt-auto size-24 self-center"
      />
    </div>
  </div>
</template>
