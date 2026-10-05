<script setup lang="ts">
import type { MaterialsSectionProps } from '~/widgets/practikum/materials'

defineProps<MaterialsSectionProps>()

const activeTab = ref(0)
</script>

<template>
  <section class="container space-y-5 sm:space-y-10">
    <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
    <UiTabs
      v-model="activeTab"
      :items="tabs"
      wrapper-class="lg:gap-5"
      item-class="text-[14px] sm:text-[18px] lg:text-[20px] lg:px-8 lg:min-w-auto"
    >
      <template #default="{ index }">
        <div v-if="tabs[index]?.items.length" class="mx-auto max-w-200 space-y-5">
          <UiAccordion v-for="item in tabs[index].items" :key="item.title" :title="item.title">
            <p class="text-[16px] tracking-[0.8px] lg:text-[18px]" v-html="item.content" />
          </UiAccordion>
        </div>
        <UiText v-else class="text-center" size="lg">{{ emptyText }}</UiText>
      </template>
    </UiTabs>
    <div class="flex justify-center">
      <UiAction class="px-10 sm:py-4" :to="action.to">{{ action.text }}</UiAction>
    </div>
  </section>
</template>
