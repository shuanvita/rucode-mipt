<script setup lang="ts">
import type { ActionProps, ActionVariant } from './Action.types'

const props = withDefaults(defineProps<ActionProps>(), {
  variant: 'primary',
  type: 'button',
  iconSize: 'w-4 h-4',
  disabled: false,
  external: null,
})

const isLink = computed(() => !!props.to && !props.disabled)
const tag = computed(() => (isLink.value ? resolveComponent('NuxtLink') : 'button'))

const baseClasses =
  'group focus-visible:outline-ring cursor-pointer inline-flex items-center justify-center gap-1.5 rounded-[45px] tracking-widest transition-colors duration-200 focus-visible:outline-1 focus-visible:outline-offset-1'

const variants: Record<ActionVariant, string> = {
  primary:
    'px-6 py-3 bg-btn-primary hover:bg-btn-primary-hover text-black font-bold text-[12px] uppercase',
  secondary:
    'px-6 py-3 ring-1 ring-btn-primary hover:bg-btn-primary hover:text-dark-primary text-[12px] text-btn-primary font-bold uppercase',
  ghost:
    'px-6 py-3 ring-1 ring-white hover:bg-white hover:text-dark-primary text-[12px] text-white font-bold uppercase',
  custom: '',
}

const isExternal = computed(() => {
  if (typeof props.external === 'boolean') return props.external
  if (typeof props.to !== 'string') return false
  return /^(https?:\/\/|mailto:|tel:)/.test(props.to) || /\.[a-z0-9]{2,5}$/i.test(props.to)
})

const target = computed(() => props.target ?? (isExternal.value ? '_blank' : '_self'))

const rel = computed(() => {
  if (props.rel !== undefined) return props.rel
  return isExternal.value && target.value === '_blank' ? 'noopener noreferrer' : undefined
})

const bindings = computed(() =>
  isLink.value
    ? { to: props.to, external: isExternal.value, target: target.value, rel: rel.value }
    : { type: props.type, disabled: props.disabled },
)

if (import.meta.dev) {
  watchEffect(() => {
    if (props.icon && !props.ariaLabel) {
      console.warn('[UiAction]: `ariaLabel` должен быть задан, если используется только иконка.')
    }
  })
}
</script>

<template>
  <component
    :is="tag"
    v-bind="bindings"
    :aria-label="ariaLabel"
    :class="[baseClasses, variants[variant], disabled && 'pointer-events-none opacity-30']"
  >
    <UiSvg v-if="icon" :name="icon" :class="iconSize" />
    <template v-else>
      <UiSvg v-if="preIcon" :name="preIcon" :class="iconSize" />
      <slot />
      <UiSvg v-if="postIcon" :name="postIcon" :class="iconSize" />
    </template>
  </component>
</template>
