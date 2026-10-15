<script setup lang="ts">
import type { ContentBlock } from '~/shared/api'
import { ContentBlockRender, useContentBlocks } from '~/shared/api'

// Служебная страница для скриншотов блоков (scripts/block-shots.mjs): один блок без шапки и футера.
// Включается только переменной NUXT_PUBLIC_BLOCK_SHOT=1; в проде её нет, страница отвечает 404.
const config = useRuntimeConfig()
if (!config.public.blockShot) {
  throw createError({ statusCode: 404, message: 'Страница не найдена', fatal: true })
}

// Данные блока скрипт кладёт в `window` до загрузки страницы (Playwright addInitScript).
const sample = shallowRef<ContentBlock | null>(null)
onMounted(() => {
  sample.value =
    (window as unknown as { __CRITO_BLOCK_SAMPLE__?: ContentBlock }).__CRITO_BLOCK_SAMPLE__ ?? null
})

const blocks = useContentBlocks(
  () => (sample.value ? [{ ...sample.value, order: 0, enabled: true }] : []),
  '/',
)
</script>

<template>
  <div data-block-shot>
    <ContentBlockRender :blocks="blocks" />
  </div>
</template>
