<script setup lang="ts">
import type { FinalLinksProps } from '~/widgets/final-2024/links'

defineProps<FinalLinksProps>()
</script>

<template>
  <section class="container flex flex-col items-center gap-y-2 sm:gap-y-3">
    <UiAction
      v-for="item in items"
      :key="item.to"
      class="max-w-full px-8 py-4.5 text-center text-[13px] font-extrabold"
      :to="item.to"
      >{{ item.text }}</UiAction
    >
  </section>
</template>
