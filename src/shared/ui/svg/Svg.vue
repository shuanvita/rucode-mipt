<script setup lang="ts">
// TODO Возможно nuxt-svgo не поддерживает SSR. Из-за этого warning гидрации. Временный обходной путь ClientOnly.
import type { Component } from 'vue'

const props = withDefaults(defineProps<{ name: string; decorative?: boolean }>(), {
  decorative: true,
})

const attrs = useAttrs()

const modules = import.meta.glob<{ default: Component }>('~/shared/icons/*.svg', { eager: true })
const icons: Record<string, Component> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [
    path.split('/').pop()!.replace('.svg', ''),
    mod.default,
  ]),
)

const icon = computed(() => {
  const found = icons[props.name]
  if (!found) console.warn(`[UiSvg] SVG not found: ${props.name}`)
  return found ?? null
})

if (import.meta.dev) {
  watchEffect(() => {
    if (!props.decorative && !attrs['aria-label'] && !attrs['aria-labelledby']) {
      console.warn(
        `[VSvg] name="${props.name}": decorative=false requires aria-label or aria-labelledby`,
      )
    }
  })
}
</script>

<template>
  <ClientOnly v-if="icon">
    <component :is="icon" role="img" :aria-hidden="decorative || undefined" />
    <template #fallback>
      <span class="inline-block" :style="{ width: '1em', height: '1em' }" aria-hidden="true" />
    </template>
  </ClientOnly>
</template>
