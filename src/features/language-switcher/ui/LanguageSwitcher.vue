<script setup lang="ts">
import { useLanguageSwitch } from '../model/useLanguageSwitch'

const { options, isEnabled } = useLanguageSwitch()
</script>

<template>
  <nav v-if="isEnabled" class="flex items-center gap-2" :aria-label="$t('langSwitch.label')">
    <NuxtLink
      v-for="option in options"
      :key="option.code"
      :to="option.to"
      :lang="option.code"
      :aria-current="option.isActive ? 'true' : undefined"
      class="hover:text-yellow-secondary text-[12px]/[1.2] font-bold tracking-wider uppercase transition-colors duration-200"
      :class="option.isActive ? 'text-yellow-primary' : 'text-white'"
    >
      {{ option.code }}
    </NuxtLink>
  </nav>
</template>
