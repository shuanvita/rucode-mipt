<script setup lang="ts">
import { MwsPage } from '@/pages/mws'

definePageMeta({ headerConfig: 'mws' })

useHead({
  title: 'RuCode × MWS',
  meta: [
    {
      name: 'description',
      content:
        'RuCode.навигатор: карьера — присоединяйся к ИТ-команде MWS (МТС Web Services): стажировки, направления, технологический стек и вакансии.',
    },
    { property: 'og:title', content: 'RuCode × MWS' },
    {
      property: 'og:description',
      content:
        'RuCode.навигатор: карьера — присоединяйся к ИТ-команде MWS (МТС Web Services): стажировки, направления, технологический стек и вакансии.',
    },
  ],
})
</script>

<template>
  <MwsPage />
</template>
