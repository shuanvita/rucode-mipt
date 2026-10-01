<script setup lang="ts">
import type { HeroSectionProps } from '~/widgets/consortium/hero'
import { ConsortiumFormModal } from '~/features/consortium-form'

defineProps<HeroSectionProps>()

const isFormOpen = ref(false)
</script>

<template>
  <section class="space-y-8 lg:space-y-14">
    <UiMarquee class="border-y border-white py-1 lg:py-1.5" :speed="10">
      <span
        class="text-[14px] font-bold tracking-wider whitespace-nowrap text-white uppercase lg:text-[20px]"
      >
        {{ marquee }}
      </span>
    </UiMarquee>
    <div class="container grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
      <div class="flex flex-col items-center gap-6 lg:items-start lg:gap-8">
        <UiHeading class="text-center lg:max-w-170 lg:text-left" tag="h1" :html="title" />
        <NuxtPicture
          class="flex h-auto max-w-75 justify-center object-contain lg:hidden"
          :src="image"
          alt="Консорциум RuCode"
          width="458"
          height="397"
          loading="eager"
          fetchpriority="high"
          preload
        />
        <ul class="flex flex-wrap justify-center gap-3 lg:justify-start">
          <li v-for="tag in tags" :key="tag">
            <UiText
              as="span"
              class="block rounded-[45px] border border-white px-4 py-1 text-center lg:px-5 lg:py-2"
            >
              {{ tag }}
            </UiText>
          </li>
        </ul>
        <UiAction class="h-13 px-10" @click="isFormOpen = true">{{ action.text }}</UiAction>
      </div>
      <div class="hidden flex-col items-center gap-6 lg:flex">
        <NuxtPicture
          class="flex w-full max-w-114.5 justify-center object-contain"
          :src="image"
          :img-attrs="{ class: 'w-full h-full' }"
          alt="Консорциум RuCode"
          loading="eager"
          fetchpriority="high"
          preload
        />
        <UiAction
          variant="custom"
          :to="document.to"
          class="self-end text-[14px] tracking-normal text-white/70 underline underline-offset-4 hover:text-white"
        >
          {{ document.text }}
        </UiAction>
      </div>
      <UiAction
        variant="custom"
        :to="document.to"
        class="text-center text-[14px] tracking-normal text-white/70 underline underline-offset-4 hover:text-white lg:hidden"
      >
        {{ document.text }}
      </UiAction>
    </div>

    <ConsortiumFormModal v-model="isFormOpen" />
  </section>
</template>
