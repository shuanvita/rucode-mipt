<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { useFormField } from '~/shared/lib/useFormField'

const props = withDefaults(
  defineProps<{
    value: string
    name?: string
    error?: boolean
    disabled?: boolean
  }>(),
  {
    disabled: false,
  },
)

const modelValue = defineModel<string>()

defineOptions({
  inheritAttrs: false,
})

const { fieldId, attrsWithoutClass, ariaInvalid } = useFormField(props)

const circleClass = computed(() =>
  twMerge(
    'border-yellow-primary/60 peer-checked:bg-yellow-primary peer-focus-visible:outline-yellow-primary/50 flex size-4.5 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-colors duration-200 peer-focus-visible:outline peer-focus-visible:outline-offset-1 peer-disabled:cursor-not-allowed peer-disabled:opacity-40',
    props.error && 'border-red',
  ),
)
</script>

<template>
  <label :for="fieldId" class="flex w-fit cursor-pointer items-center gap-3" :class="$attrs.class">
    <input
      v-bind="attrsWithoutClass"
      :id="fieldId"
      v-model="modelValue"
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      class="peer sr-only"
      :aria-invalid="ariaInvalid"
    />
    <span :class="circleClass" />
    <span class="text-fg/80 text-sm">
      <slot />
    </span>
  </label>
</template>
