<script setup lang="ts">
import type { FinalHeroProps } from '~/widgets/final-2024/hero'

defineProps<FinalHeroProps>()
</script>

<template>
  <section class="relative container flex flex-col max-lg:items-center lg:min-h-130">
    <div class="relative z-10 flex flex-col max-lg:items-center">
      <NuxtImg
        class="w-50 max-w-full lg:w-88"
        :src="titleImage"
        :alt="titleAlt"
        format="svg"
        loading="eager"
      />
      <div class="mt-7 max-lg:text-center">
        <UiHeading class="text-yellow-primary font-semibold" tag="h3" as="h4">{{
          subtitle
        }}</UiHeading>
        <ul class="mt-5 flex max-w-222 flex-wrap gap-3 max-lg:justify-center">
          <li
            v-for="tag in tags"
            :key="tag"
            class="rounded-full px-4 py-2 text-[13px] font-semibold outline-1 outline-white sm:text-[15px]"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
    <NuxtImg
      class="pointer-events-none mt-5 w-full max-w-160 lg:absolute lg:-top-15 lg:right-0 lg:mt-0 lg:w-160"
      :src="image"
      :alt="imageAlt"
      format="svg"
      loading="lazy"
    />
  </section>
</template>
