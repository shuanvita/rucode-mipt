<script setup lang="ts">
import type { CalendarSectionProps } from '~/widgets/home/calendar'
import CalendarCard from '~/widgets/home/calendar/ui/CalendarCard.vue'

defineProps<CalendarSectionProps>()
</script>

<template>
  <section class="container space-y-6 lg:space-y-10">
    <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>
    <UiTabs wrapper-class="grid md:grid-cols-2 gap-2" item-class="text-[14px] h-full" :items="tabs">
      <template #default="{ index }">
        <div class="space-y-14">
          <div
            :class="[
              'grid gap-5',
              (tabs[index]?.cards?.length ?? 0) > 3 ? 'md:grid-cols-2' : 'md:grid-cols-3',
            ]"
          >
            <template v-for="card in tabs[index]?.cards" :key="card.id">
              <CalendarCard v-bind="card" />
            </template>
          </div>
        </div>
      </template>
    </UiTabs>
  </section>
</template>
