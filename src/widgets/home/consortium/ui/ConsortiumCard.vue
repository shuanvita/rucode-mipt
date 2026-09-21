<script setup lang="ts">
import type { ConsortiumCardProps } from '~/widgets/home/consortium'

// Карточке нужны только данные для отображения: id, координаты и side — забота секции
defineProps<Pick<ConsortiumCardProps, 'city' | 'items'>>()
</script>

<template>
  <article
    class="consortium-card max-w-121 space-y-5 rounded-[20px] p-5 text-left text-white backdrop-blur-xs"
  >
    <span class="flex">{{ city }}</span>

    <div v-for="item in items" :key="item.id" class="space-y-2">
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
            class="aspect-[34/20] w-34 object-contain"
          />
        </div>
      </div>

      <hr class="border-white" />
      <p v-if="item.description">{{ item.description }}</p>
    </div>
  </article>
</template>

<style scoped>
/* Подложка только в режиме попапа (от 640px), под картой на мобильных фон не нужен */
@media (min-width: 640px) {
  .consortium-card {
    background:
      linear-gradient(267.42deg, rgba(32, 33, 36, 0.58) 0.21%, rgba(32, 33, 36, 0.64) 67.38%),
      linear-gradient(106.06deg, rgba(182, 87, 255, 0.05) -29.45%, rgba(181, 89, 245, 0.05) 27.86%);
  }
}
</style>
