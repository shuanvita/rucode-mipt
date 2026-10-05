<script setup lang="ts">
import type { FinalAboutProps } from '~/widgets/final-2024/about'

defineProps<FinalAboutProps>()
</script>

<template>
  <section class="container flex flex-col gap-y-8">
    <div class="flex flex-col gap-x-29 gap-y-5 md:flex-row">
      <dl class="flex max-w-111 flex-col gap-y-4">
        <div v-for="fact in facts" :key="fact.label" class="flex flex-col gap-y-1">
          <dt class="text-[13px]/[1.4] sm:text-[15px]/[1.5]">{{ fact.label }}</dt>
          <dd class="text-yellow-primary text-[13px]/[1.4] font-bold sm:text-[15px]/[1.5]">
            {{ fact.value }}
          </dd>
        </div>
      </dl>
      <div class="flex max-w-111 flex-col gap-y-1 md:ml-16">
        <UiText size="custom" class="text-[13px]/[1.4] sm:text-[15px]/[1.5]">{{
          audience.title
        }}</UiText>
        <ul>
          <li
            class="text-yellow-primary before:bg-yellow-primary relative ml-5.75 list-none text-[13px]/[1.4] font-bold before:absolute before:top-2.25 before:-left-3.25 before:size-1 before:rounded-full sm:text-[15px]/[1.5]"
          >
            {{ audience.text }}
          </li>
        </ul>
      </div>
    </div>
    <UiAction
      class="bg-[#7b7b76] px-10 py-4.5 text-[13px] font-extrabold text-[#020200] uppercase max-md:self-center"
      variant="custom"
      disabled
      >{{ action.text }}</UiAction
    >

    <div class="mt-10 flex flex-col gap-y-6 lg:mt-32 lg:gap-y-15">
      <div class="relative self-center">
        <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{
          title
        }}</UiHeading>
        <NuxtImg
          class="absolute -top-19.5 -left-48.75 z-10 h-32 w-44 max-[900px]:hidden"
          :src="crystal"
          alt=""
          loading="lazy"
        />
      </div>
      <div class="relative">
        <UiText class="max-w-158" size="custom"
          ><span class="text-[13px]/[1.4] sm:text-[15px]/[1.5]">{{ description }}</span></UiText
        >
        <NuxtImg
          class="absolute top-0 right-0 w-77.5 -translate-y-3/4 max-[900px]:hidden"
          :src="cat"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
