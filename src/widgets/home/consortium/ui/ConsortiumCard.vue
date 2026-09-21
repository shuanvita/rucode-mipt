<script setup lang="ts">
import type { ConsortiumCardProps } from '~/widgets/home/consortium'

// Карточке нужны только данные для отображения: id, координаты и side — забота секции
defineProps<Pick<ConsortiumCardProps, 'city' | 'items'>>()
defineEmits<{ close: [] }>()
</script>

<template>
  <article
    class="consortium-card relative max-w-121 rounded-[20px] p-5 text-left text-white backdrop-blur-xs"
  >
    <button
      type="button"
      aria-label="Закрыть"
      class="absolute top-3 right-3 grid size-8 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
      @click="$emit('close')"
    >
      <svg
        viewBox="0 0 14 14"
        class="size-3.5"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path d="M1 1l12 12M13 1L1 13" />
      </svg>
    </button>

    <!-- Город — контекст (eyebrow), главное в карточке — организация -->
    <p class="pr-9 text-sm tracking-wide text-white/70">{{ city }}</p>

    <!-- Длинные описания не растягивают попап бесконечно: список скроллится внутри -->
    <ul
      class="mt-3 max-h-[min(60vh,26rem)] divide-y divide-white/15 overflow-y-auto overscroll-contain pr-1"
    >
      <li v-for="item in items" :key="item.id" class="space-y-3 py-4 first:pt-0 last:pb-0">
        <div class="flex flex-row flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <h3 class="max-w-70 min-w-50 flex-1 text-xs font-semibold uppercase md:text-base">
            {{ item.title }}
          </h3>

          <div
            class="flex min-h-14 w-full max-w-34 flex-col items-center justify-center rounded-md bg-white p-1"
          >
            <!-- alt пустой: название организации рядом, дублировать его скринридеру не нужно -->
            <img
              :src="item.image"
              alt=""
              loading="lazy"
              draggable="false"
              class="aspect-34/20 w-34 object-contain"
            />
          </div>
        </div>

        <p
          v-if="item.description"
          class="border-t border-white/30 pt-3 text-sm leading-relaxed text-white/90"
        >
          {{ item.description }}
        </p>
      </li>
    </ul>
  </article>
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

/* Подложка только в режиме попапа (от 640px), под картой на мобильных фон не нужен */
@media (min-width: 640px) {
  .consortium-card {
    background:
      linear-gradient(267.42deg, rgba(32, 33, 36, 0.58) 0.21%, rgba(32, 33, 36, 0.64) 67.38%),
      linear-gradient(106.06deg, rgba(182, 87, 255, 0.05) -29.45%, rgba(181, 89, 245, 0.05) 27.86%);
  }
}
</style>
