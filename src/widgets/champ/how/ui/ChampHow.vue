<script setup lang="ts">
import type { ChampHowProps } from '~/widgets/champ/how'

defineProps<ChampHowProps>()
</script>

<template>
  <section class="relative container">
    <UiHeading v-if="title" class="text-yellow-primary mb-7 leading-none" tag="h2">{{
      title
    }}</UiHeading>
    <div class="flex flex-col gap-y-5">
      <UiAccordion
        v-for="stage in stages"
        :key="stage.title"
        :title="stage.title"
        :subtitle="stage.date"
      >
        <div class="flex flex-col gap-3">
          <UiText v-if="stage.text" class="leading-relaxed">{{ stage.text }}</UiText>
          <ul
            v-if="stage.list?.length"
            class="list-disc space-y-1 pl-5 text-[14px] tracking-[0.8px] md:text-[16px]"
          >
            <li v-for="item in stage.list" :key="item">{{ item }}</li>
          </ul>
          <UiText v-if="stage.note" class="leading-relaxed">{{ stage.note }}</UiText>
          <UiAction v-if="stage.cta" class="mt-2 self-start" :to="stage.cta.to">{{
            stage.cta.text
          }}</UiAction>
        </div>
      </UiAccordion>
    </div>
    <NuxtPicture
      class="pointer-events-none absolute top-50 -left-40 -z-9 max-w-140 not-lg:hidden"
      src="/images/champ/cloud-3.png"
      alt=""
    />
  </section>
</template>
