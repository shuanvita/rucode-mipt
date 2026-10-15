<script setup lang="ts">
import type { ResolvedBlock } from './useContentBlocks'
import { BLOCK_ATTR, usePreviewActive } from './usePreviewBridge'

defineProps<{
  blocks: ResolvedBlock[]
}>()

// `data-block-id` нужен только предпросмотру в админке: в обычной выдаче DOM остаётся прежним.
const previewActive = usePreviewActive()
</script>

<template>
  <component
    :is="block.component"
    v-for="block in blocks"
    :id="block.anchor"
    :key="block.id"
    :[BLOCK_ATTR]="previewActive ? block.id : undefined"
    v-bind="block.data"
  />
</template>
