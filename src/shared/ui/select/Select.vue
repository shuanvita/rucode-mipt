<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { onClickOutside } from '@vueuse/core'
import { useFormField } from '~/shared/lib/useFormField'

interface SelectOption {
  value: number
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

const rootRef = ref<HTMLElement | null>(null)
const listRef = ref<HTMLUListElement | null>(null)
const isOpen = ref(false)
const activeIndex = ref(-1)

const listboxId = `${fieldId}-listbox`
const activeOptionId = computed(() =>
  activeIndex.value >= 0 ? `${fieldId}-option-${activeIndex.value}` : undefined,
)

const selectedOption = computed(() =>
  props.options.find((option) => String(option.value) === modelValue.value),
)

onClickOutside(rootRef, close)

function open() {
  if (props.disabled || isOpen.value) return
  activeIndex.value = props.options.findIndex((option) => String(option.value) === modelValue.value)
  isOpen.value = true
  nextTick(() => scrollActiveIntoView())
}

function close() {
  isOpen.value = false
  activeIndex.value = -1
}

function selectOption(option: SelectOption) {
  modelValue.value = String(option.value)
  close()
}

function scrollActiveIntoView() {
  const activeEl = listRef.value?.children[activeIndex.value] as HTMLElement | undefined
  activeEl?.scrollIntoView({ block: 'nearest' })
}

function moveActive(step: number) {
  if (!props.options.length) return
  const base = activeIndex.value < 0 ? (step > 0 ? -1 : props.options.length) : activeIndex.value
  activeIndex.value = Math.min(Math.max(base + step, 0), props.options.length - 1)
  scrollActiveIntoView()
}

function handleTriggerKeydown(event: KeyboardEvent) {
  if (!isOpen.value) {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
      event.preventDefault()
      open()
    }
    return
  }

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      moveActive(1)
      break
    case 'ArrowUp':
      event.preventDefault()
      moveActive(-1)
      break
    case 'Enter':
    case ' ':
      event.preventDefault()
      if (activeIndex.value >= 0) selectOption(props.options?.[activeIndex.value])
      break
    case 'Escape':
      event.preventDefault()
      close()
      break
    case 'Tab':
      close()
      break
  }
}

const BASE_TRIGGER_CLASS =
  'text-fg focus:border-yellow-primary/50 focus:ring-yellow-primary/10 border-yellow-primary flex h-full w-full items-center justify-between gap-2 rounded-lg border bg-transparent px-4 py-2.5 text-sm transition-colors duration-200 outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-40'

const triggerClass = computed(() =>
  twMerge(
    BASE_TRIGGER_CLASS,
    !selectedOption.value && 'text-fg/40',
    props.error && 'border-red focus:border-red focus:ring-red/10',
  ),
)
</script>

<template>
  <div ref="rootRef" class="relative flex w-full flex-col gap-2" :class="$attrs.class">
    <label v-if="label" class="text-fg" :for="fieldId">{{ label }}</label>
    <div class="relative">
      <button
        :id="fieldId"
        v-bind="attrsWithoutClass"
        type="button"
        :class="triggerClass"
        :disabled="disabled"
        :name="name"
        role="combobox"
        aria-haspopup="listbox"
        :aria-expanded="isOpen"
        :aria-controls="listboxId"
        :aria-activedescendant="activeOptionId"
        :aria-invalid="ariaInvalid"
        :aria-describedby="ariaDescribedby"
        @click="isOpen ? close() : open()"
        @keydown="handleTriggerKeydown"
      >
        <span class="truncate">{{
          selectedOption?.label ?? placeholder ?? 'Выберите значение'
        }}</span>
        <UiSvg
          name="arrow-down"
          class="size-4 shrink-0 transition-transform duration-200"
          :class="isOpen && 'rotate-180'"
        />
      </button>

      <ul
        v-show="isOpen"
        :id="listboxId"
        ref="listRef"
        role="listbox"
        :aria-activedescendant="activeOptionId"
        class="border-yellow-primary/50 absolute bottom-full left-0 z-99 mb-2 max-h-60 w-full space-y-1 overflow-y-auto rounded-2xl border bg-black/90 p-3"
      >
        <li
          v-for="(option, index) in options"
          :id="`${fieldId}-option-${index}`"
          :key="option.value"
          role="option"
          :aria-selected="String(option.value) === modelValue"
          class="text-fg cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors duration-200"
          :class="index === activeIndex && 'text-yellow-primary bg-white/5'"
          @click="selectOption(option)"
          @mouseenter="activeIndex = index"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
    <UiFieldError :id="errorId" :message="error ? errorMessage : undefined" />
  </div>
</template>
