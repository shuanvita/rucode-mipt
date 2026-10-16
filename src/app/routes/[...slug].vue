<script setup lang="ts">
import { CmsPage } from '~/pages/cms-page'
import { applyCmsPageMeta, fetchCmsPage } from '~/shared/api'

// Страницы, созданные в админке: статические роуты (`champ.vue` и др.) имеют приоритет.
// Шапка и футер читаются из `route.meta` до рендера лейаута, поэтому настройки страницы
// из CMS подставляем в middleware. Для остальных роутов то же делает глобальный `cms-page-meta`.
definePageMeta({
  middleware: async (to) => {
    const slug = `/${[to.params.slug].flat().join('/')}`
    try {
      applyCmsPageMeta(to.meta, await fetchCmsPage(slug))
    } catch {
      return abortNavigation(
        createError({ statusCode: 404, message: 'Страница не найдена', fatal: true }),
      )
    }
  },
})
</script>

<template>
  <CmsPage />
</template>
