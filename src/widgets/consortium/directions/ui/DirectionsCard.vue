<script setup lang="ts">
import type { DirectionsCardProps } from '~/widgets/consortium/directions'

defineProps<DirectionsCardProps>()
</script>

<template>
  <article class="directions-card flex h-full flex-col gap-6 px-5 py-8 min-[420px]:px-10 md:py-10">
    <div class="flex flex-1/2 items-center gap-3.5">
      <div
        class="directions-icon flex size-12 shrink-0 items-center justify-center rounded-full md:size-16"
      >
        <UiSvg :name="icon" class="size-7" />
      </div>
      <h3
        class="text-[12px] font-semibold whitespace-pre-line uppercase min-[370px]:text-[14px] sm:text-[16px]"
      >
        {{ title }}
      </h3>
    </div>
    <UiText class="flex-1/2 whitespace-pre-line">{{ description }}</UiText>
  </article>
</template>

<style scoped>
.directions-card {
  --card-border-deg: 280deg;
  border: 1px solid transparent;
  background:
    linear-gradient(106.06deg, #caff330d -29.45%, #caff3300 27.86%) padding-box,
    linear-gradient(267.5deg, #b559f517 38.7%, #b559f51a 40.67%, #1c1c1c00 99.81%) padding-box,
    url('/images/consortium/card-noise.png') padding-box,
    linear-gradient(#1d1c22, #1d1c22) padding-box,
    linear-gradient(var(--card-border-deg), rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.03))
      border-box;
}

.directions-icon {
  background:
    radial-gradient(circle, #2c2c30 0%, #26262a 60%, #333338 100%) padding-box,
    linear-gradient(145deg, rgb(255 255 255 / 0.22), rgb(255 255 255 / 0.02)) border-box;
  border: 1px solid transparent;
  box-shadow: 0 0 0 6px rgb(255 255 255 / 0.03);
}
</style>
