<script setup lang="ts">
import type { CapitalProgramProps } from '~/widgets/capital-2024/program'

defineProps<CapitalProgramProps>()

const opened = ref<Record<number, boolean>>({})
</script>

<template>
  <section class="container flex flex-col items-center gap-y-6 lg:gap-y-10">
    <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
    <div class="flex w-full flex-col gap-y-5">
      <UiAccordion
        v-for="(item, index) in items"
        :key="item.time + item.title"
        v-model="opened[index]"
        :title="item.time"
        :subtitle="item.title"
      >
        <div class="flex flex-col gap-y-4 pt-2 text-[15px]/[1.5] lg:text-[16px]/[1.5]">
          <p class="text-purple-light font-bold">{{ item.place }}</p>
          <p v-if="item.content" class="[&_b]:text-yellow-primary" v-html="item.content" />
          <UiAction v-if="item.video" class="self-start" variant="secondary" :to="item.video">
            Смотреть видеозапись
          </UiAction>
        </div>
      </UiAccordion>
    </div>
    <UiText class="text-center" size="sm">{{ note }}</UiText>
    <UiAction
      class="bg-[#7b7b76] px-10 py-4.5 text-[13px] font-extrabold text-[#020200] uppercase"
      variant="custom"
      disabled
      >{{ action.text }}</UiAction
    >
  </section>
</template>
