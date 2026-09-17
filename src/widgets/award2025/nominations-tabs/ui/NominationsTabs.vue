<script setup lang="ts">
// TODO Вынести в отдельный компонент в widgets/award. Объединить функциональность с /award2025 и /award2026
import type { NominationsTabsProps } from '../model/NominationsTabs.types'
import NominationCard from '~/widgets/award2025/nominations-tabs/ui/NominationCard.vue'

defineProps<NominationsTabsProps>()
</script>

<template>
  <section class="relative z-10 container flex flex-col items-center space-y-8 lg:space-y-10">
    <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>
    <UiText v-if="description" class="mx-auto max-w-191.5 text-center" :html="description" />
    <UiTabs :items="tabs">
      <template #default="{ index }">
        <div class="space-y-14">
          <UiText v-if="tabs[index]?.description" class="mx-auto max-w-139.5 text-center">
            {{ tabs[index]?.description }}
          </UiText>

          <UiTabs
            v-if="tabs[index]?.subTabs?.length"
            :items="tabs[index].subTabs!"
            wrapper-class="gap-3 lg:gap-4"
            item-class="min-w-0 px-6 py-2 text-[14px] lg:text-[16px] lg:px-8"
          >
            <template #default="{ index: subIndex }">
              <div
                class="grid gap-8 rounded-[40px] border border-white p-8 sm:grid-cols-2 lg:gap-15"
              >
                <NominationCard
                  v-for="nomination in tabs[index].subTabs![subIndex]?.nominations"
                  :key="nomination.title"
                  v-bind="nomination"
                />
              </div>
            </template>
          </UiTabs>

          <div
            v-else
            class="grid gap-8 rounded-[40px] border border-white p-8 sm:grid-cols-2 lg:gap-15"
          >
            <NominationCard
              v-for="nomination in tabs[index]?.nominations"
              :key="nomination.title"
              v-bind="nomination"
            />
          </div>
        </div>
      </template>
    </UiTabs>
    <UiAction class="h-[52px]" target="_blank" :to="action?.to">{{ action?.text }}</UiAction>
    <NuxtPicture
      src="/images/award2026/geometry-1.png"
      alt=""
      loading="lazy"
      class="absolute top-15 -left-45 -z-999 w-[592px] blur-[2px] lg:-top-[300px] lg:-left-[310px]"
    />
    <NuxtPicture
      src="/images/award2026/geometry-2.png"
      alt=""
      loading="lazy"
      class="absolute -z-999 hidden w-[592px] blur-[2px] lg:top-[400px] lg:-right-[420px] lg:block"
    />
  </section>
</template>
