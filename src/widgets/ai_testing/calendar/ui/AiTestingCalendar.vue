<script setup lang="ts">
import type { AiTestingCalendarProps } from '~/widgets/ai_testing/calendar'

defineProps<AiTestingCalendarProps>()
</script>

<template>
  <UiEventsSlider :title="title" :slides="slides" />
</template>
