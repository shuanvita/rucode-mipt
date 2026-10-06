<script setup lang="ts">
import type { CapitalHeroProps } from '~/widgets/capital-2024/hero'

defineProps<CapitalHeroProps>()
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
      <div class="mt-5 flex gap-x-26 max-lg:flex-col max-lg:items-center lg:mt-12">
        <div class="flex max-w-111.5 flex-col gap-y-5 max-lg:items-center max-lg:text-center">
          <div class="flex flex-col items-start gap-y-3 max-lg:items-center">
            <span
              class="rounded bg-[#9237D2] p-2 text-base/tight font-bold sm:text-[22px]/[1.46]"
              >{{ badge }}</span
            >
            <UiHeading class="max-w-91.5 normal-case" tag="h3" as="h4">{{ lead }}</UiHeading>
          </div>
          <UiText class="max-w-111.5" size="custom"
            ><span class="text-[13px]/[1.4] sm:text-[16px]/[1.4]"
              >{{ description }}
              <NuxtLink class="text-yellow-primary" :to="programLink.href">{{
                programLink.text
              }}</NuxtLink></span
            ></UiText
          >
          <UiAction
            class="bg-[#7b7b76] px-10 py-4.5 text-[13px] font-extrabold text-[#020200] uppercase"
            variant="custom"
            disabled
            >{{ action.text }}</UiAction
          >
        </div>
        <dl class="flex flex-col gap-y-4 max-lg:mt-5 lg:mt-24">
          <div v-for="fact in facts" :key="fact.label" class="flex flex-col gap-y-1">
            <dt class="text-[13px]/[1.4] sm:text-[16px]/[1.15]">{{ fact.label }}</dt>
            <dd
              class="text-yellow-primary text-[13px]/[1.4] font-bold whitespace-pre-line sm:text-[16px]/[1.15]"
            >
              {{ fact.value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <NuxtImg
      class="pointer-events-none mt-5 w-full max-w-160 lg:absolute lg:-top-15 lg:right-0 lg:mt-0 lg:w-160"
      :src="image"
      :alt="imageAlt"
      loading="lazy"
    />
  </section>
</template>
