<script setup lang="ts">
import type { ResolvedBlock } from './useContentBlocks'

defineProps<{
  blocks: ResolvedBlock[]
}>()
</script>

<template>
  <component
    :is="block.component"
    v-for="block in blocks"
    :id="block.anchor"
    :key="block.id"
    v-bind="block.data"
  />
</template>
