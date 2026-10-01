<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = withDefaults(
  defineProps<{
    label?: string
    type?: 'text' | 'number' | 'password' | 'email' | 'tel'
    name?: string
    error?: boolean
    errorMessage?: string
    disabled?: boolean
  }>(),
  {
    type: 'text',
    disabled: false,
  },
)

const modelValue = defineModel<string>()

defineOptions({
  inheritAttrs: false,
})

const uniqueId = useId()
const errorId = useId()

const attrs = useAttrs()
const inputAttrs = computed(() => {
  const rest = { ...attrs }
  delete rest.class
  return rest
})

const inputClass = computed(() =>
  twMerge(
    'placeholder:text-purple-light/60 border-yellow-primary h-full w-full rounded-none border-0 border-b-2 bg-transparent px-5 py-3 text-sm transition-colors duration-200 outline-none focus:border-yellow-primary/60 disabled:cursor-not-allowed disabled:opacity-40',
    props.error && 'border-red focus:border-red',
  ),
)
</script>

<template>
  <div class="flex w-full flex-col gap-2" :class="attrs.class">
    <label v-if="label" class="text-fg" :for="uniqueId">{{ label }}</label>
    <input
      :class="inputClass"
      v-bind="inputAttrs"
      :id="uniqueId"
      :name="name"
      v-model="modelValue"
      :type="type"
      :disabled="disabled"
      :aria-invalid="error || undefined"
      :aria-describedby="error && errorMessage ? errorId : undefined"
    />
    <span v-if="error && errorMessage" :id="errorId" class="text-destructive text-xs" role="alert">
      {{ errorMessage }}
    </span>
  </div>
</template>
