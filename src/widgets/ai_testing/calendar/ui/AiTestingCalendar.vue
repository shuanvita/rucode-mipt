<script setup lang="ts">
import type { AiTestingCalendarProps } from '../model/AiTestingCalendar.types'

defineProps<AiTestingCalendarProps>()
</script>

<template>
  <UiEventsSlider :title="title" :slides="slides" />
</template>
