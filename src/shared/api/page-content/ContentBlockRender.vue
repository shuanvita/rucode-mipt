<script setup lang="ts">
import type { Component } from 'vue'

interface ResolvedBlock {
  id: string
  type: string
  data: Record<string, unknown>
}

defineProps<{
  blocks: ResolvedBlock[]
  components: Record<string, Component>
  anchorIds?: Record<string, string>
}>()
</script>

<template>
  <component
    :is="components[block.type]"
    v-for="block in blocks"
    :id="anchorIds?.[block.type]"
    :key="block.id"
    v-bind="block.data"
  />
</template>
