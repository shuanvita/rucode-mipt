<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
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

const modelValue = defineModel<boolean>({ default: false })

defineOptions({
  inheritAttrs: false,
})

const { fieldId, errorId, attrsWithoutClass, ariaInvalid, ariaDescribedby } = useFormField(props)

const boxClass = computed(() =>
  twMerge(
    'border-yellow-primary/60 peer-checked:bg-yellow-primary peer-focus-visible:outline-yellow-primary/50 mt-0.5 flex size-4.5 shrink-0 cursor-pointer items-center justify-center rounded border transition-colors duration-200 peer-focus-visible:outline peer-focus-visible:outline-offset-1 peer-disabled:cursor-not-allowed peer-disabled:opacity-40',
    props.error && 'border-red',
  ),
)
</script>

<template>
  <div class="flex w-full flex-col gap-2" :class="$attrs.class">
    <label :for="fieldId" class="flex cursor-pointer items-start gap-3">
      <input
        v-bind="attrsWithoutClass"
        :id="fieldId"
        v-model="modelValue"
        type="checkbox"
        :name="name"
        :disabled="disabled"
        class="peer sr-only"
        :aria-invalid="ariaInvalid"
        :aria-describedby="ariaDescribedby"
      />
      <span :class="boxClass">
        <svg
          v-if="modelValue"
          viewBox="0 0 12 10"
          class="size-2.5 fill-none stroke-black stroke-2"
          aria-hidden="true"
        >
          <path d="M1 5L4.5 8.5L11 1" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
      <span class="text-fg/80 text-sm">
        <slot />
      </span>
    </label>
    <UiFieldError :id="errorId" :message="error ? errorMessage : undefined" />
  </div>
</template>
