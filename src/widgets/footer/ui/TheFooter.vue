<script setup lang="ts">
// TODO Вынести config и types, т.к. для Header и Footer одинаковые. Убрать ClientOnly (доработать UiSvg / UiAction)
import type { FooterConfig } from '../model/TheFooter.types'

defineProps<{
  config: FooterConfig
}>()

const socials = [
  {
    icon: 'telegram',
    link: 'https://t.me/rucodefestival',
  },
  {
    icon: 'vk',
    link: 'https://vk.com/rucodefestival',
  },
  {
    icon: 'max',
    link: 'https://max.ru/rucodefestival',
  },
]
</script>

<template>
  <footer class="bg-footer py-4 lg:py-10">
    <div
      class="container grid place-items-center gap-10 lg:grid-cols-[144px_auto_258px_107px] lg:place-items-start lg:items-start lg:gap-12"
    >
      <NuxtLink class="order-1 lg:order-0 lg:col-start-1" to="/">
        <NuxtPicture
          class="max-w-36"
          width="144"
          height="144"
          src="logo-white.svg"
          alt="Rucode Festival logo"
        />
      </NuxtLink>

      <div
        class="order-2 flex flex-col items-center gap-4 lg:order-0 lg:col-start-2 lg:items-start"
        aria-label="Навигация в подвале сайта"
      >
        <NuxtLink
          v-for="link in config.links"
          :key="link.href"
          class="first:text-yellow-primary hover:text-yellow-secondary text-[12px]/[1.2] font-bold tracking-wider uppercase transition-colors duration-200"
          :to="link.href"
          active-class="text-yellow-primary"
        >
          {{ link.title }}
        </NuxtLink>
      </div>

      <div class="order-4 flex flex-col items-center lg:order-0 lg:col-start-3">
        <UiAction
          class="text-yellow-primary hover:text-fg mb-5 text-[19px] font-bold lowercase transition-colors duration-200 hover:underline"
          variant="custom"
          target="_blank"
          to="https://rucode.net/"
        >
          rucode.net
        </UiAction>

        <UiAction
          class="mb-4 text-[15px] font-bold hover:underline"
          variant="custom"
          to="mailto:award@rucode.net"
        >
          award@rucode.net
        </UiAction>

        <UiAction
          class="text-[15px] font-bold hover:underline"
          variant="custom"
          to="tel:+74951283432"
        >
          + 7 (495) 128-34-32
        </UiAction>
        <div class="mb-10">Режим работы: 10:00-18:00</div>

        <UiAction
          class="text-[12px] underline hover:no-underline"
          variant="custom"
          target="_blank"
          to="https://rucode.net/wp-content/uploads/2026/08/polozhenie-rucode.premii.pdf"
        >
          Положение о проведении Премии
        </UiAction>
      </div>

      <ClientOnly>
        <div class="order-3 flex items-center gap-3 lg:order-0 lg:col-start-4">
          <UiAction
            v-for="social in socials"
            :key="social.link"
            class="hover:opacity-80"
            variant="custom"
            :to="social.link"
            :aria-label="social.icon"
            target="_blank"
            :icon="social.icon"
            icon-size="w-7 h-7"
          />
        </div>
      </ClientOnly>
    </div>
  </footer>
</template>
