<script setup lang="ts">
import { useToggle, onClickOutside } from '@vueuse/core'
import type { HeaderConfig } from '../model/TheHeader.types'
import { eventsMenu } from '../model/TheHeader.events'
import { MobileMenu } from '~/widgets/header'
import { LanguageSwitcher } from '~/features/language-switcher'

const props = defineProps<{
  config: HeaderConfig
}>()

// Шесть и больше ссылок не помещаются в строку на 1024–1280px: бургер держим до xl
const isWide = computed(() => props.config.links.length >= 6)

const UiAction = resolveComponent('UiAction')

const [isMenuOpen, toggleMenu] = useToggle(false)

const [isCtaDropdownOpen, toggleCtaDropdown] = useToggle(false)
const ctaDropdownRef = ref<HTMLElement | null>(null)
onClickOutside(ctaDropdownRef, () => toggleCtaDropdown(false))
</script>

<template>
  <header class="container flex max-w-300 items-center justify-between px-10 pt-6">
    <div class="mr-4 flex shrink-0 items-center gap-3 lg:gap-5">
      <UiAction variant="custom" class="max-w-25 lg:max-w-31" to="/">
        <NuxtPicture
          :width="config.logo?.width ?? 167"
          :height="config.logo?.height ?? 110"
          :src="config.logo?.src ?? '/logo.svg'"
          :alt="$t('header.logoAlt')"
        />
      </UiAction>
      <template v-if="config.partnerLogo">
        <span class="text-[20px] leading-none font-bold text-white lg:text-[20px]">X</span>
        <component
          :is="config.partnerLogo.to ? UiAction : 'div'"
          v-bind="config.partnerLogo.to ? { to: config.partnerLogo.to, variant: 'custom' } : {}"
        >
          <NuxtImg
            class="h-14 w-auto lg:h-18"
            :src="config.partnerLogo.src"
            :alt="config.partnerLogo.alt"
            format="png"
            loading="eager"
          />
        </component>
      </template>
      <NuxtImg
        v-for="logo in config.supportLogos"
        :key="logo.src"
        class="h-9 w-auto lg:h-12"
        :src="logo.src"
        :alt="logo.alt"
        format="png"
        loading="eager"
      />
    </div>

    <div :class="['hidden items-center gap-6', isWide ? 'xl:flex' : 'lg:flex']">
      <nav class="flex items-center gap-4 xl:gap-5":aria-label="$t('header.mainNav')">
        <UiAction
          v-for="link in config.links"
          :key="link.href"
          variant="custom"
          class="first:text-yellow-primary hover:text-yellow-secondary text-[12px]/[1.2] font-bold tracking-wider uppercase transition-colors duration-200"
          :to="link.href"
          active-class="text-yellow-primary"
        >
          {{ link.titleKey ? $t(link.titleKey) : link.title }}
        </UiAction>
      </nav>

      <div ref="ctaDropdownRef" class="relative">
        <UiAction
          aria-haspopup="true"
          post-icon="arrow-down"
          :aria-expanded="isCtaDropdownOpen"
          @click="toggleCtaDropdown()"
        >
          {{ eventsMenu.label }}
        </UiAction>

        <ul
          v-show="isCtaDropdownOpen"
          class="absolute top-full right-0 z-99 mt-2 min-w-50 space-y-2 rounded-2xl bg-black/90 p-3"
        >
          <li v-for="item in eventsMenu.items" :key="item.href">
            <UiAction
              variant="custom"
              :to="item.href"
              class="hover:text-yellow-primary block text-[12px] uppercase transition-colors duration-200"
              @click="toggleCtaDropdown(false)"
            >
              {{ item.title }}
            </UiAction>
          </li>
        </ul>
      </div>

      <LanguageSwitcher />
    </div>

    <UiAction
      :class="[
        'focus-visible:outline-ring flex h-8 w-8 items-center justify-center',
        isWide ? 'xl:hidden' : 'lg:hidden',
      ]"
      :aria-label="$t('header.openMenu')"
      variant="custom"
      @click="toggleMenu(true)"
    >
      <UiSvg name="burger" class="h-15 w-15" />
    </UiAction>
    <MobileMenu
      :model-value="isMenuOpen"
      :wide="isWide"
      :config="config"
      @update:model-value="toggleMenu"
    />
  </header>
</template>
