<script setup lang="ts">
import { AiTesting } from '~/pages/aitesting'

definePageMeta({ headerConfig: 'aitesting' })

useHead({
  title: 'Всероссийское тестирование RuCode по искусственному интеллекту',
  meta: [
    {
      name: 'description',
      content:
        'Прими участие во Всероссийском тестировании и узнай, насколько хорошо ты разбираешься в технологиях искусственного интеллекта!',
    },
    {
      property: 'og:title',
      content:
        'Прими участие во Всероссийском тестировании и узнай, насколько хорошо ты разбираешься в технологиях искусственного интеллекта!ю',
    },
    {
      property: 'og:description',
      content:
        'Прими участие во Всероссийском тестировании и узнай, насколько хорошо ты разбираешься в технологиях искусственного интеллекта!',
    },
  ],
})
</script>

<template>
  <AiTesting />
</template>
