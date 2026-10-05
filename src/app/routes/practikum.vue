<script setup lang="ts">
import { PracticumPage } from '@/pages/practikum'

definePageMeta({ headerConfig: 'practikum' })

useHead({
  title: 'RuCode.Практикум',
  meta: [
    {
      name: 'description',
      content:
        'Проводите современные занятия по искусственному интеллекту и машинному обучению с готовыми материалами: сценарии классных часов и практические задания для студентов.',
    },
    { property: 'og:title', content: 'RuCode.Практикум' },
    {
      property: 'og:description',
      content:
        'Проводите современные занятия по искусственному интеллекту и машинному обучению с готовыми материалами: сценарии классных часов и практические задания для студентов.',
    },
  ],
})
</script>

<template>
  <PracticumPage />
</template>
