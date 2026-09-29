<script setup lang="ts">
import { ChampPage } from '~/pages/champ'

definePageMeta({ headerConfig: 'champ', i18n: { locales: ['ru', 'en'] } })

const { t } = useI18n()

useHead({
  title: () => t('meta.champ.title'),
  meta: [
    {
      name: 'description',
      content: () => t('meta.champ.description'),
    },
    {
      property: 'og:title',
      content: () => t('meta.champ.title'),
    },
    {
      property: 'og:description',
      content: () => t('meta.champ.description'),
    },
  ],
})
</script>

<template>
  <ChampPage />
</template>
