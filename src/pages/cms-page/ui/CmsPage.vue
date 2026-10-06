<script setup lang="ts">
import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const route = useRoute()
const slug = `/${[route.params.slug].flat().join('/')}`

// Страницы из CMS не имеют локальных данных: если страницы нет, отдаём 404.
const { data } = await usePageContent(slug, {})
if (!data.value) {
  throw createError({ statusCode: 404, message: 'Страница не найдена', fatal: true })
}

const blocks = useContentBlocks(() => data.value?.page.blocks, slug)
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
