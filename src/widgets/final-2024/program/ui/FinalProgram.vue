<script setup lang="ts">
import type { FinalProgramProps } from '~/widgets/final-2024/program'

defineProps<FinalProgramProps>()
</script>

<template>
  <section class="container">
    <UiHeading class="text-purple-primary mb-6 text-center font-black sm:mb-10" tag="h2">{{
      title
    }}</UiHeading>
    <div class="flex flex-wrap justify-center gap-5">
      <article
        v-for="track in tracks"
        :key="track.title"
        class="border-purple-primary flex w-full flex-col gap-y-9 border-y py-11.5 sm:rounded-[20px] sm:border sm:px-8.5 lg:max-w-135"
      >
        <UiHeading class="text-yellow-primary font-black whitespace-pre-line" tag="h3" as="h4">{{
          track.title
        }}</UiHeading>
        <ul class="flex min-h-128 flex-col sm:gap-y-3">
          <li
            v-for="row in track.rows"
            :key="row.date + row.title"
            class="flex flex-col items-center gap-x-3 sm:flex-row"
          >
            <span
              class="border-purple-primary bg-dark-primary text-purple-primary w-full shrink-0 border-y py-4 text-center text-[17px] font-bold sm:w-35 sm:rounded-lg sm:border sm:text-[20px]"
              >{{ row.date }}</span
            >
            <div class="flex w-full grow items-center justify-between gap-x-3 px-4 py-4 sm:p-0">
              <UiText class="max-w-70" size="custom"
                ><span class="text-[13px]/[1.4] sm:text-[15px]/[1.5]">{{ row.title }}</span></UiText
              >
              <UiAction
                v-if="row.link"
                class="text-yellow-primary outline-yellow-primary ml-auto px-7 py-3 text-[13px] font-bold underline outline-1 hover:text-orange-300 hover:outline-orange-300"
                variant="custom"
                :to="row.link.to"
                >{{ row.link.text }}</UiAction
              >
              <div v-else-if="row.hint" class="group relative shrink-0">
                <span
                  class="border-purple-primary text-purple-primary grid size-7 cursor-help place-items-center rounded-full border text-[15px] font-bold"
                  tabindex="0"
                  >?</span
                >
                <span
                  class="invisible absolute right-8.5 bottom-7 z-50 w-62.5 rounded bg-black p-2.5 text-[13px]/[1.4] whitespace-pre-line opacity-0 transition-opacity duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100"
                  >{{ row.hint }}</span
                >
              </div>
            </div>
          </li>
        </ul>
        <UiAction
          class="self-center px-4 py-4.5 text-[13px] font-extrabold uppercase"
          :variant="track.action.to ? 'secondary' : 'custom'"
          :class="!track.action.to && 'pointer-events-none bg-[#7b7b76] px-10 text-[#020200]'"
          :to="track.action.to"
          >{{ track.action.text }}</UiAction
        >
      </article>
    </div>
  </section>
</template>
