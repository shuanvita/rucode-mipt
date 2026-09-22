<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { onClickOutside } from '@vueuse/core'
import { PHONE_COUNTRIES, DEFAULT_PHONE_COUNTRY, getPhoneCountry } from '~/shared/config'
import { formatPhoneNumber } from '~/shared/lib/formatPhoneNumber'
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
const country = defineModel<string>('country', { default: DEFAULT_PHONE_COUNTRY })

defineOptions({
  inheritAttrs: false,
})

const { fieldId, errorId, attrsWithoutClass, ariaInvalid, ariaDescribedby } = useFormField(props)

const attrs = useAttrs()
function emitBlur() {
  if (typeof attrs.onBlur === 'function') attrs.onBlur()
}

const selectedCountry = computed(() => getPhoneCountry(country.value))
const displayValue = computed(() => formatPhoneNumber(modelValue.value, selectedCountry.value.groups))

function handleInput(event: Event) {
  const maxDigits = selectedCountry.value.groups.reduce((sum, size) => sum + size, 0)
  const digits = (event.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, maxDigits)
  modelValue.value = digits
}

const rootRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)
const activeIndex = ref(-1)
const listboxId = `${fieldId}-country-listbox`

onClickOutside(rootRef, close)

function open() {
  if (props.disabled || isOpen.value) return
  activeIndex.value = PHONE_COUNTRIES.findIndex((option) => option.code === country.value)
  isOpen.value = true
}

function close() {
  isOpen.value = false
  activeIndex.value = -1
}

function selectCountry(option: (typeof PHONE_COUNTRIES)[number]) {
  if (option.code !== country.value) modelValue.value = ''
  country.value = option.code
  close()
  emitBlur()
}

function moveActive(step: number) {
  const base = activeIndex.value < 0 ? (step > 0 ? -1 : PHONE_COUNTRIES.length) : activeIndex.value
  activeIndex.value = Math.min(Math.max(base + step, 0), PHONE_COUNTRIES.length - 1)
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
      if (activeIndex.value >= 0) selectCountry(PHONE_COUNTRIES[activeIndex.value])
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

const BASE_WRAPPER_CLASS =
  'focus-within:border-yellow-primary/50 focus-within:ring-yellow-primary/10 border-yellow-primary flex h-full w-full items-center gap-2 rounded-lg border px-4 py-2.5 transition-colors duration-200 focus-within:ring-2 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-40'

const wrapperClass = computed(() =>
  twMerge(
    BASE_WRAPPER_CLASS,
    props.error && 'border-red focus-within:border-red focus-within:ring-red/10',
  ),
)
</script>

<template>
  <div ref="rootRef" class="flex w-full flex-col gap-2" :class="$attrs.class">
    <label class="text-fg" :for="fieldId">Телефон</label>
    <div class="relative">
      <div :class="wrapperClass">
        <button
          type="button"
          class="flex shrink-0 cursor-pointer items-center gap-1.5 outline-none disabled:cursor-not-allowed"
          :disabled="disabled"
          role="combobox"
          aria-haspopup="listbox"
          :aria-expanded="isOpen"
          :aria-controls="listboxId"
          :aria-label="`Страна: ${selectedCountry.name}`"
          @click="isOpen ? close() : open()"
          @keydown="handleTriggerKeydown"
          @blur="emitBlur"
        >
          <UiSvg :name="selectedCountry.flag" class="h-4 w-5 shrink-0 rounded-[2px]" />
          <span class="text-fg/60 text-sm">+{{ selectedCountry.dialCode }}</span>
          <UiSvg
            name="arrow-down"
            class="size-3 shrink-0 transition-transform duration-200"
            :class="isOpen && 'rotate-180'"
          />
        </button>
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

      <ul
        v-show="isOpen"
        :id="listboxId"
        role="listbox"
        class="border-yellow-primary/50 absolute top-full left-0 z-99 mt-2 w-full min-w-64 space-y-1 overflow-y-auto rounded-2xl border bg-black/90 p-3"
      >
        <li
          v-for="(option, index) in PHONE_COUNTRIES"
          :key="option.code"
          role="option"
          :aria-selected="option.code === country"
          class="text-fg flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors duration-200"
          :class="index === activeIndex && 'text-yellow-primary bg-white/5'"
          @click="selectCountry(option)"
          @mouseenter="activeIndex = index"
        >
          <UiSvg :name="option.flag" class="h-4 w-5 shrink-0 rounded-[2px]" />
          <span class="flex-1 truncate">{{ option.name }}</span>
          <span class="text-fg/60">+{{ option.dialCode }}</span>
        </li>
      </ul>
    </div>
    <UiFieldError :id="errorId" :message="error ? errorMessage : undefined" />
  </div>
</template>
