<script setup lang="ts">
import type { ProductCardProps } from '~/widgets/mws/products'

defineProps<ProductCardProps>()
</script>

<template>
  <article
    class="relative flex min-h-112.5 flex-col overflow-hidden rounded-[17px] border border-white p-5 min-[400px]:rounded-[45px] min-[400px]:border-3 md:p-12 lg:block lg:pr-[45%]"
  >
    <UiHeading tag="h3" as="h2" :html="title" />
    <UiText class="mt-6 max-w-162.5" size="xl">{{ description }}</UiText>
    <ul v-if="tags.length" class="mt-8 flex max-w-112.5 flex-wrap gap-3 lg:mt-16">
      <li v-for="tag in tags" :key="tag">
        <UiTag>{{ tag }}</UiTag>
      </li>
    </ul>
    <NuxtImg
      class="mx-auto mt-6 h-auto w-full max-w-122.5 lg:absolute lg:top-1/2 lg:right-0 lg:mx-0 lg:mt-0 lg:h-full lg:max-h-110 lg:w-auto lg:-translate-y-1/2"
      :src="image"
      alt=""
      loading="lazy"
    />
  </article>
</template>
