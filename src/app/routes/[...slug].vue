<script setup lang="ts">
import { CmsPage } from '~/pages/cms-page'
import { fetchCmsPage } from '~/shared/api'

// Страницы, созданные в админке: статические роуты (`champ.vue` и др.) имеют приоритет.
// Шапка и футер читаются из `route.meta` до рендера лейаута, поэтому настройки страницы
// из CMS подставляем в middleware.
definePageMeta({
  middleware: async (to) => {
    const slug = `/${[to.params.slug].flat().join('/')}`
    try {
      const page = await fetchCmsPage(slug)
      if (page.headerConfig) to.meta.headerConfig = page.headerConfig
      if (page.noFooterSpacing) to.meta.noFooterSpacing = true
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
