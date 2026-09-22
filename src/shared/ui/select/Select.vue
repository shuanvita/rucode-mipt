<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { useFormField } from '~/shared/lib/useFormField'

interface SelectOption {
  value: string
  label: string
}

const props = withDefaults(
  defineProps<{
    label?: string
    options: SelectOption[]
    placeholder?: string
    name?: string
    error?: boolean
    errorMessage?: string
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

const { fieldId, errorId, attrsWithoutClass, ariaInvalid, ariaDescribedby } = useFormField(props)

const BASE_SELECT_CLASS =
  'text-fg focus:border-yellow-primary/50 focus:ring-yellow-primary/10 border-yellow-primary h-full w-full appearance-none rounded-lg border bg-transparent px-4 py-2.5 pr-10 text-sm transition-colors duration-200 outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-40'

const selectClass = computed(() =>
  twMerge(
    BASE_SELECT_CLASS,
    !modelValue.value && 'text-fg/40',
    props.error && 'border-red focus:border-red focus:ring-red/10',
  ),
)
</script>

<template>
  <div class="relative flex w-full flex-col gap-2" :class="$attrs.class">
    <label v-if="label" class="text-fg" :for="fieldId">{{ label }}</label>
    <div class="relative">
      <select
        :id="fieldId"
        v-bind="attrsWithoutClass"
        v-model="modelValue"
        :class="selectClass"
        :name="name"
        :disabled="disabled"
        :aria-invalid="ariaInvalid"
        :aria-describedby="ariaDescribedby"
      >
        <option disabled value="">{{ placeholder ?? 'Выберите значение' }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <UiSvg name="arrow-down" class="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2" />
    </div>
    <UiFieldError :id="errorId" :message="error ? errorMessage : undefined" />
  </div>
</template>
