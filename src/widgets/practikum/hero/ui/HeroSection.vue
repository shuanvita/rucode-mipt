<script setup lang="ts">
import type { HeroSectionProps } from '~/widgets/practikum/hero'

defineProps<HeroSectionProps>()
</script>

<template>
  <section
    class="container mt-6 grid grid-cols-[minmax(0,1fr)] sm:mt-12 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-10"
  >
    <div class="col-start-1 row-start-1 flex flex-col items-start gap-5 lg:gap-8">
      <div class="space-y-3">
        <UiHeading tag="h1" class="font-black" :html="title" />
        <UiText class="max-w-120" size="xl" weight="semibold">{{ subtitle }}</UiText>
      </div>
      <UiText class="max-w-150" size="lg" weight="semibold">{{ description }}</UiText>
      <div class="max-w-155 space-y-2">
        <UiText class="text-yellow-primary" size="lg" weight="semibold">
          {{ audience.title }}
        </UiText>
        <ul class="list-disc space-y-1 pl-5 sm:pl-7.5">
          <li v-for="item in audience.items" :key="item">
            <UiText as="span" size="lg" weight="semibold">{{ item }}</UiText>
          </li>
        </ul>
      </div>
      <div class="flex w-full flex-wrap gap-x-8 gap-y-3">
        <UiAction
          v-for="action in actions"
          :key="action.to"
          :to="action.to"
          class="not-sm:w-full sm:px-10 sm:py-4"
        >
          {{ action.text }}
        </UiAction>
      </div>
    </div>
    <NuxtPicture
      class="pointer-events-none -z-10 col-start-1 row-start-1 mt-5 -mr-20 block h-0 w-65 translate-y-[20%] self-start justify-self-end min-[500px]:w-100 md:w-125 lg:z-0 lg:col-start-2 lg:m-0 lg:h-auto lg:w-full lg:translate-y-0 lg:justify-self-center"
      :img-attrs="{ class: 'w-full h-auto' }"
      :src="image"
      alt=""
      loading="eager"
      fetchpriority="high"
      preload
    />
  </section>
</template>
