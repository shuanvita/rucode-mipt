<script setup lang="ts">
import { TheHeader, resolveHeader } from '~/widgets/header'
import type { HeaderData } from '~/widgets/header'
import { TheFooter, footerConfigs, resolveFooter } from '~/widgets/footer'
import type { FooterConfigKey, FooterData } from '~/widgets/footer'
import { ScrollToTop } from '~/features/scroll-to-top'

const route = useRoute()
const localeHead = useLocaleHead({ seo: true })

useHead(() => ({
  htmlAttrs: { lang: localeHead.value.htmlAttrs?.lang },
  link: localeHead.value.link,
  meta: localeHead.value.meta,
}))
// Шапка приходит из CMS (`route.meta.header` кладёт middleware `cms-page-meta`) или из `definePageMeta`
// у страниц с английской версией; без неё рисуется шапка по умолчанию (как на главной, без ссылок).
const config = computed(() => resolveHeader(route.meta.header as Partial<HeaderData> | undefined))
// Футер приходит из CMS (`route.meta.footer`); без него берётся ключ `footerConfig` из `definePageMeta`
// статических страниц, а если ключа нет, футер главной.
const footerConfig = computed(() => {
  const cms = route.meta.footer as Partial<FooterData> | undefined
  if (cms) return resolveFooter(cms, footerConfigs.home)
  return footerConfigs[(route.meta.footerConfig as FooterConfigKey) ?? 'home'] ?? footerConfigs.home
})
const noFooterSpacing = computed(() => route.meta.noFooterSpacing === true)
</script>

<template>
  <div class="flex flex-col overflow-hidden">
    <TheHeader class="mb-8" :config="config" />
    <div class="flex flex-col space-y-8">
      <main>
        <slot />
      </main>
    </div>
    <ScrollToTop />
    <TheFooter :class="noFooterSpacing ? '' : 'mt-8'" :config="footerConfig" />
  </div>
</template>
