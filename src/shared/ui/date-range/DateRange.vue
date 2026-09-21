<script setup lang="ts">
import type { DateRangeProps } from '~/shared/ui/date-range'

const props = defineProps<DateRangeProps>()

const text = computed(() => {
  const { from, to } = props
  const days = to ? `${from.day}-${to.day}` : `${from.day}`
  return `${days} ${from.month}`
})
</script>

<template>
  <div
    v-if="to?.month && to.month !== from.month"
    class="text-yellow-primary grid grid-cols-[auto_auto_auto] justify-center gap-x-1 gap-y-2 text-center text-4xl leading-none font-black"
  >
    <span>{{ from.day }}</span>
    <span>-</span>
    <span>{{ to.day }}</span>

    <span class="text-base font-normal">{{ from.month }}</span>
    <span class="col-start-3 text-base font-normal">{{ to.month }}</span>
  </div>

  <div v-else class="text-yellow-primary text-center text-4xl leading-none font-black">
    {{ text }}
  </div>
</template>
