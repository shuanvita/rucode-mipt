<script setup lang="ts">
import { ChampPage } from '~/pages/champ'

definePageMeta({ headerConfig: 'champ' })

useHead({
  title: 'Международный чемпионат РуКод',
  meta: [
    {
      name: 'description',
      content: 'Интеллектуальный вызов для тех, кто выбирает путь в ИТ',
    },
    {
      property: 'og:title',
      content: 'Интеллектуальный вызов для тех, кто выбирает путь в ИТ',
    },
    {
      property: 'og:description',
      content: 'Интеллектуальный вызов для тех, кто выбирает путь в ИТ',
    },
  ],
})
</script>

<template>
  <ChampPage />
</template>
