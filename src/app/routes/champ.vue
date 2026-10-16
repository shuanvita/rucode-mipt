<script setup lang="ts">
import { ChampPage } from '~/pages/champ'

// Шапка задана здесь, а не в CMS, из-за переводов ссылок (`titleKey`): CMS отдаёт только русский.
// Для русской версии шапка из CMS, если она в ней задана, перекрывает эту.
definePageMeta({
  footerConfig: 'champ',
  header: {
    links: [
      { href: '#about', title: 'О чемпионате', titleKey: 'nav.champ.about' },
      { href: '#how', title: 'Этапы', titleKey: 'nav.champ.stages' },
      { href: '#why', title: 'Зачем участвовать', titleKey: 'nav.champ.why' },
      { href: '#achievements', title: 'Достижения', titleKey: 'nav.champ.achievements' },
      { href: '#gallery', title: 'Фотогалерея', titleKey: 'nav.champ.gallery' },
    ],
  },
  i18n: { locales: ['ru', 'en'] },
})

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
