<script setup lang="ts">
import { useScrollLock, onKeyStroke } from '@vueuse/core'
import type { HeaderConfig } from '../model/TheHeader.types'
import { LanguageSwitcher } from '~/features/language-switcher'

const props = defineProps<{
  config: HeaderConfig
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

function close() {
  emit('update:modelValue', false)
}

const isLocked = useScrollLock(import.meta.client ? document.documentElement : null)

watch(
  () => props.modelValue,
  (open) => {
    isLocked.value = open
  },
)

onKeyStroke('Escape', () => {
  if (props.modelValue) close()
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="modelValue"
        class="bg-dark-primary fixed inset-0 z-50 flex flex-col overflow-y-auto px-6 py-5 lg:hidden"
        role="dialog"
        aria-modal="true"
        :aria-label="$t('header.mobileMenu')"
      >
        <button
          type="button"
          class="focus-visible:outline-ring ml-auto flex h-8 w-8 items-center justify-center focus-visible:outline-1"
          :aria-label="$t('header.closeMenu')"
          @click="close"
        >
          <UiSvg name="close" class="h-5 w-5" />
        </button>

        <nav class="mt-6 flex flex-col gap-6" :aria-label="$t('header.mainNav')">
          <NuxtLink
            v-for="link in config.links"
            :key="link.href"
            class="text-[14px] font-bold tracking-wider text-white uppercase"
            :to="link.href"
            active-class="text-yellow-primary"
            @click="close"
          >
            {{ link.titleKey ? $t(link.titleKey) : link.title }}
          </NuxtLink>
        </nav>

        <template v-if="config.cta.items?.length">
          <hr class="mt-6 mb-4 border-t-white/15" />

          <span class="text-yellow-primary text-[14px] font-bold tracking-wider uppercase">
            {{ config.cta.label }}
          </span>

          <nav class="mt-3 flex flex-col gap-3" aria-label="Мероприятия">
            <NuxtLink
              v-for="item in config.cta.items"
              :key="item.href"
              class="text-[13px] font-medium tracking-wide text-white uppercase"
              :to="item.href"
              active-class="text-yellow-primary"
              @click="close"
            >
              {{ item.title }}
            </NuxtLink>
          </nav>
        </template>

        <UiAction
          v-else
          class="mt-6 self-start"
          :to="config.cta.to"
          :variant="config.cta.variant ?? 'primary'"
          @click="close"
        >
          {{ config.cta.labelKey ? $t(config.cta.labelKey) : config.cta.label }}
        </UiAction>

        <LanguageSwitcher class="mt-8" />
      </div>
    </Transition>
  </Teleport>
</template>
