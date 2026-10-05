<script setup lang="ts">
import { Final2024Page } from '@/pages/final-2024'

definePageMeta({ headerConfig: 'final2024' })

useHead({
  title: 'RuCode.Финал 2024',
  meta: [
    {
      name: 'description',
      content:
        'RuCode.Финал 2024 — учебно-популярное мероприятие по искусственному интеллекту и алгоритмическому программированию: онлайн-курсы, интенсивы, чемпионаты.',
    },
    { property: 'og:title', content: 'RuCode.Финал 2024' },
    {
      property: 'og:description',
      content:
        'RuCode.Финал 2024 — учебно-популярное мероприятие по искусственному интеллекту и алгоритмическому программированию: онлайн-курсы, интенсивы, чемпионаты.',
    },
  ],
})
</script>

<template>
  <Final2024Page />
</template>
