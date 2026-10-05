<script setup lang="ts">
import { MtsPage } from '@/pages/mts'

definePageMeta({ headerConfig: 'mts' })

useHead({
  title: 'RuCode × МТС',
  meta: [
    {
      name: 'description',
      content:
        'Присоединяйся к МТС: оплачиваемые стажировки, программы МТС Старт, ПРО и Лидер, направления и продукты экосистемы, вакансии.',
    },
    { property: 'og:title', content: 'RuCode × МТС' },
    {
      property: 'og:description',
      content:
        'Присоединяйся к МТС: оплачиваемые стажировки, программы МТС Старт, ПРО и Лидер, направления и продукты экосистемы, вакансии.',
    },
  ],
})
</script>

<template>
  <MtsPage />
</template>
