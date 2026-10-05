<script setup lang="ts">
import { MwsPage } from '@/pages/mws'

definePageMeta({ headerConfig: 'mws' })

useHead({
  title: 'MWS RuCode',
  meta: [{ property: 'og:title', content: 'MWS RuCode' }],
})
</script>

<template>
  <MwsPage />
</template>
