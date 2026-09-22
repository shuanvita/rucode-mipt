<script setup lang="ts">
defineProps<{
  id?: string
  message?: string
}>()
</script>

<template>
  <span v-if="message" :id="id" class="text-destructive text-xs" role="alert">{{ message }}</span>
</template>
