<script setup lang="ts">
import type { FinalOrganizersProps } from '~/widgets/final-2024/organizers'

defineProps<FinalOrganizersProps>()
</script>

<template>
  <section class="container">
    <UiHeading class="text-purple-primary mb-5 text-center font-black sm:mb-10" tag="h2">{{
      title
    }}</UiHeading>
    <ul class="grid gap-2 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
      <li v-for="item in items" :key="item.name">
        <NuxtLink
          class="flex h-38.5 w-full flex-col items-center rounded-lg bg-white text-black outline-1 outline-zinc-400 sm:max-w-65"
          :to="item.to"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="flex w-full flex-1 items-center justify-center overflow-hidden px-4 pt-3">
            <NuxtImg
              :class="['max-h-full max-w-full object-contain', item.logoClass]"
              :src="item.logo"
              :alt="item.name"
              loading="lazy"
            />
          </span>
          <span class="px-2 pb-3 text-center text-[13px]/[1.28]"
            >{{ item.name }}, {{ item.city }}</span
          >
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
