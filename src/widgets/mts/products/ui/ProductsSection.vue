<script setup lang="ts">
import type { ProductsSectionProps } from '~/widgets/mts/products'

defineProps<ProductsSectionProps>()
</script>

<template>
  <section class="container space-y-7.5 sm:space-y-12.5">
    <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
    <ul class="flex flex-wrap justify-center gap-x-4 gap-y-8.5 sm:gap-x-11">
      <li v-for="card in cards" :key="card.title" class="w-[calc(50%-8px)] sm:w-86">
        <article
          class="min-[400px]:rounded-pill relative isolate grid overflow-hidden rounded-[17px] border border-white min-[400px]:border-3"
        >
          <NuxtImg
            class="col-start-1 row-start-1 h-auto w-full"
            :src="card.image"
            alt=""
            loading="lazy"
          />
          <UiHeading
            class="z-10 col-start-1 row-start-1 p-3 font-bold min-[400px]:p-8"
            tag="h3"
            as="h4"
            :html="card.title"
          />
        </article>
      </li>
    </ul>
  </section>
</template>
