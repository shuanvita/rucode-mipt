<script setup lang="ts">
import { Capital2024Page } from '@/pages/capital-2024'

definePageMeta({ headerConfig: 'capital2024' })

useHead({
  title: 'Столица RuCode 2024',
  meta: [
    {
      name: 'description',
      content:
        'Столица RuCode 2024 — Всероссийский ИТ фестиваль по искусственному интеллекту и алгоритмическому программированию в Ставрополе (СКФУ), 19 октября 2024 года.',
    },
    { property: 'og:title', content: 'Столица RuCode 2024' },
    {
      property: 'og:description',
      content:
        'Столица RuCode 2024 — Всероссийский ИТ фестиваль по искусственному интеллекту и алгоритмическому программированию в Ставрополе (СКФУ), 19 октября 2024 года.',
    },
  ],
})
</script>

<template>
  <Capital2024Page />
</template>
