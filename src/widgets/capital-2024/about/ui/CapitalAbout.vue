<script setup lang="ts">
import { sanitizeRichText } from '~/shared/lib/sanitizeRichText'
import type { CapitalAboutProps } from '~/widgets/capital-2024/about'

defineProps<CapitalAboutProps>()
</script>

<template>
  <section class="container flex flex-col gap-y-10 lg:gap-y-20">
    <div class="flex flex-col items-center gap-y-6 lg:gap-y-11">
      <UiHeading class="text-center normal-case" tag="h3" as="h4">{{ audienceTitle }}</UiHeading>
      <ul class="flex flex-wrap justify-center gap-5">
        <li
          v-for="item in audience"
          :key="item.text"
          class="border-purple-primary flex h-57.5 w-81.5 max-w-full flex-col items-center justify-start rounded-lg border px-7 pt-14 text-center"
        >
          <NuxtImg class="size-11 shrink-0" :src="item.icon" alt="" format="svg" loading="lazy" />
          <UiText class="text-yellow-primary pt-5 font-bold sm:text-[20px]/[1.46]" size="custom">{{
            item.text
          }}</UiText>
        </li>
      </ul>
      <div class="group relative">
        <span class="text-yellow-primary cursor-help px-4 text-center underline" tabindex="0">{{
          invitation.label
        }}</span>
        <span
          class="invisible absolute right-1/2 z-50 mt-3 w-81.5 max-w-[90vw] translate-x-1/2 rounded bg-black p-2.5 text-[13px]/[1.4] opacity-0 transition-opacity duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 [&_a]:underline"
          v-html="sanitizeRichText(invitation.hint)"
        />
      </div>
    </div>

    <div class="flex flex-col gap-y-6 lg:gap-y-10">
      <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
      <div class="flex gap-x-10 max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-y-8">
        <div class="w-full max-w-88.25 shrink-0">
          <UiSlider :items="photos" pagination>
            <template #default="{ item }">
              <NuxtImg
                class="aspect-[1.49] w-full rounded-lg object-cover"
                :src="item as string"
                alt=""
                loading="lazy"
              />
            </template>
          </UiSlider>
        </div>
        <div class="flex flex-col gap-y-3 text-[15px]/[1.4] sm:text-[16px]/[1.4]">
          <template v-for="(paragraph, index) in paragraphs" :key="index">
            <p class="[&_a]:underline" v-html="sanitizeRichText(paragraph)" />
            <NuxtImg
              v-if="index === 0"
              class="my-2 size-min"
              :src="logo.src"
              :alt="logo.alt"
              format="svg"
              loading="lazy"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
