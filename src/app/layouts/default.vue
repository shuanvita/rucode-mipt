<script setup lang="ts">
import { TheHeader, headerConfigs } from '~/widgets/header'
import type { HeaderConfigKey } from '~/widgets/header'
import { TheFooter } from '~/widgets/footer'

const route = useRoute()
const headerKey = (route.meta.headerConfig as HeaderConfigKey) ?? 'home'
const config = headerConfigs[headerKey] ?? headerConfigs.home
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
    <TheFooter :class="noFooterSpacing ? '' : 'mt-8'" :config="config" />
  </div>
</template>
