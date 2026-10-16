<script setup lang="ts">
import { TheHeader, resolveHeader } from '~/widgets/header'
import type { HeaderData } from '~/widgets/header'
import { TheFooter, resolveFooter } from '~/widgets/footer'
import type { FooterData } from '~/widgets/footer'
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
// Футер, как и шапка, приходит из CMS (`route.meta.footer`) или из `definePageMeta` у страниц с английской
// версией; без него рисуется пустой футер: только логотип и соцсети, остальное задаётся в админке.
// Флажок шапки «Те же ссылки в футере» заменяет ссылки футера ссылками шапки.
const footerConfig = computed(() =>
  resolveFooter(
    route.meta.footer as Partial<FooterData> | undefined,
    config.value.linksInFooter ? config.value.links : undefined,
  ),
)
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
