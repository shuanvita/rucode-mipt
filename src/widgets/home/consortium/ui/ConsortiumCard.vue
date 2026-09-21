<script setup lang="ts">
import type { ConsortiumCardProps } from '~/widgets/home/consortium'

defineProps<Pick<ConsortiumCardProps, 'city' | 'items'>>()
defineEmits<{ close: [] }>()
</script>

<template>
  <div
    class="consortium-card relative max-w-121 rounded-[20px] p-5 text-left text-white backdrop-blur-xs"
  >
    <UiAction
      class="absolute top-3 right-3 size-8 text-white/70 hover:bg-white/15 hover:text-white"
      variant="custom"
      icon="close"
      icon-size="size-4"
      aria-label="Закрыть"
      @click="$emit('close')"
    />

    <UiText size="sm" class="pr-9 tracking-wide text-white/70">{{ city }}</UiText>

    <ul
      class="mt-3 max-h-[min(60vh,26rem)] divide-y divide-white/15 overflow-y-auto overscroll-contain pr-1"
    >
      <li v-for="item in items" :key="item.id" class="space-y-3 py-4 first:pt-0 last:pb-0">
        <div class="flex flex-wrap items-start gap-x-4 gap-y-2">
          <UiHeading tag="h3" class="min-w-50 flex-1 text-xs font-semibold uppercase md:text-base">
            {{ item.title }}
          </UiHeading>

          <div class="w-34 rounded-md bg-white p-1">
            <NuxtPicture
              :src="item.image"
              alt=""
              width="128"
              loading="lazy"
              :img-attrs="{ class: 'aspect-34/20 w-full object-contain' }"
            />
          </div>
        </div>

        <UiText
          v-if="item.description"
          size="sm"
          class="border-t border-white/30 pt-3 text-white/90"
        >
          {{ item.description }}
        </UiText>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@keyframes consortium-card-in {
  from {
    opacity: 0;
    transform: translateY(6px) scale(0.97);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .consortium-card {
    animation: consortium-card-in 180ms ease-out;
  }
}

@media (min-width: 640px) {
  .consortium-card {
    background:
      linear-gradient(267.42deg, rgba(32, 33, 36, 0.58) 0.21%, rgba(32, 33, 36, 0.64) 67.38%),
      linear-gradient(106.06deg, rgba(182, 87, 255, 0.05) -29.45%, rgba(181, 89, 245, 0.05) 27.86%);
  }
}
</style>
