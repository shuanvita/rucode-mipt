<script setup lang="ts">
import { ConsortiumPage } from '@/pages/consortium'

definePageMeta({ headerConfig: 'consortium' })

useHead({
  title: 'Консорциум RuCode',
  meta: [
    {
      name: 'description',
      content:
        'Консорциум RuCode — сеть научно-образовательных организаций, которые совместно проводят фестиваль по искусственному интеллекту и алгоритмическому программированию.',
    },
    { property: 'og:title', content: 'Консорциум RuCode' },
    {
      property: 'og:description',
      content:
        'Консорциум RuCode — сеть научно-образовательных организаций, которые совместно проводят фестиваль по искусственному интеллекту и алгоритмическому программированию.',
    },
  ],
})
</script>

<template>
  <ConsortiumPage />
</template>
