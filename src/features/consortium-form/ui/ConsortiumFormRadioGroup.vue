<script setup lang="ts">
import { OTHER_OPTION } from '../model/ConsortiumForm.types'

defineProps<{
  legend: string
  name: string
  options: readonly string[]
  error?: string
  otherPlaceholder?: string
  otherError?: string
}>()

const emit = defineEmits<{ blur: []; blurOther: [] }>()

const modelValue = defineModel<string>({ required: true })
const otherValue = defineModel<string>('other', { default: '' })
</script>

<template>
  <fieldset class="flex flex-col gap-3 text-[13px]">
    <legend class="mb-4 leading-5.5">{{ legend }}</legend>

    <UiRadio
      v-for="option in options"
      :key="option"
      v-model="modelValue"
      :name="name"
      :value="option"
      :error="!!error"
      @change="emit('blur')"
    >
      {{ option }}
    </UiRadio>
    <UiFieldError :message="error" />

    <UiInput
      v-if="otherPlaceholder && options.includes(OTHER_OPTION)"
      v-model="otherValue"
      :name="`${name}Other`"
      :label="OTHER_OPTION"
      :placeholder="otherPlaceholder"
      :error="!!otherError"
      :error-message="otherError"
      autocomplete="off"
      @blur="emit('blurOther')"
    />
  </fieldset>
</template>
