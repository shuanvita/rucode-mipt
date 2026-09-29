<script setup lang="ts">
import type {
  AchievementsSectionProps,
  AchievementsTitleAlign,
  AchievementsTitleColor,
} from '~/widgets/home/achievements'
import AchievementCard from '~/widgets/home/achievements/ui/AchievementCard.vue'

const props = defineProps<AchievementsSectionProps>()

const colorClasses: Record<AchievementsTitleColor, string> = {
  purple: 'text-purple-primary',
  'purple-light': 'text-purple-light',
  yellow: 'text-yellow-primary',
  white: 'text-fg',
}

const alignClasses: Record<AchievementsTitleAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const titleClasses = computed(() => [
  props.titleColor ? colorClasses[props.titleColor] : 'text-purple-primary',
  props.titleAlign ? alignClasses[props.titleAlign] : 'text-center',
])
</script>

<template>
  <section class="container space-y-6 lg:space-y-10">
    <UiHeading :class="titleClasses" tag="h2">{{ title }}</UiHeading>
    <div class="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <AchievementCard v-for="card in cards" :key="card.id" :shadow="cardShadow" v-bind="card" />
    </div>
  </section>
</template>
