<script setup lang="ts">
import { TheHeader, headerConfigs } from '~/widgets/header'
import type { HeaderConfigKey } from '~/widgets/header'
import { TheFooter, footerConfigs } from '~/widgets/footer'
import { ScrollToTop } from '~/features/scroll-to-top'

const route = useRoute()
const localeHead = useLocaleHead({ seo: true })

useHead(() => ({
  htmlAttrs: { lang: localeHead.value.htmlAttrs?.lang },
  link: localeHead.value.link,
  meta: localeHead.value.meta,
}))
const headerKey = computed(() => (route.meta.headerConfig as HeaderConfigKey) ?? 'home')
const config = computed(() => headerConfigs[headerKey.value] ?? headerConfigs.home)
const footerConfig = computed(() => footerConfigs[headerKey.value] ?? footerConfigs.home)
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
