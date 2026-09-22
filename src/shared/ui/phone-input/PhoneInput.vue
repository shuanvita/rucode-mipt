<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { formatRuPhone } from '~/shared/lib/formatRuPhone'
import { useFormField } from '~/shared/lib/useFormField'

const props = withDefaults(
  defineProps<{
    name?: string
    error?: boolean
    errorMessage?: string
    disabled?: boolean
  }>(),
  {
    disabled: false,
  },
)

const modelValue = defineModel<string>({ default: '' })

defineOptions({
  inheritAttrs: false,
})

const { fieldId, errorId, attrsWithoutClass, ariaInvalid, ariaDescribedby } = useFormField(props)

const displayValue = computed(() => formatRuPhone(modelValue.value))

function handleInput(event: Event) {
  const digits = (event.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, 10)
  modelValue.value = digits
}

const BASE_WRAPPER_CLASS =
  'focus-within:border-yellow-primary/50 focus-within:ring-yellow-primary/10 border-yellow-primary flex h-full w-full items-center gap-2 rounded-lg border px-4 py-2.5 transition-colors duration-200 focus-within:ring-2 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-40'

const wrapperClass = computed(() =>
  twMerge(BASE_WRAPPER_CLASS, props.error && 'border-red focus-within:border-red focus-within:ring-red/10'),
)
</script>

<template>
  <div class="flex w-full flex-col gap-2" :class="$attrs.class">
    <label class="text-fg" :for="fieldId">Телефон</label>
    <div :class="wrapperClass">
      <UiSvg name="flag-ru" class="h-4 w-5 shrink-0 rounded-[2px]" />
      <span class="text-fg/60 text-sm">+7</span>
      <input
        :id="fieldId"
        v-bind="attrsWithoutClass"
        :value="displayValue"
        type="tel"
        inputmode="numeric"
        :name="name"
        placeholder="(___) ___-__-__"
        :disabled="disabled"
        class="placeholder:text-fg/40 h-full w-full bg-transparent text-sm outline-none disabled:cursor-not-allowed"
        :aria-invalid="ariaInvalid"
        :aria-describedby="ariaDescribedby"
        @input="handleInput"
      />
    </div>
    <UiFieldError :id="errorId" :message="error ? errorMessage : undefined" />
  </div>
</template>
