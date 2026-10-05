<script setup lang="ts">
// TODO Вынести config и types, т.к. для Header и Footer одинаковые. Убрать ClientOnly (доработать UiSvg / UiAction)
import type { FooterConfig, FooterContacts } from '../model/TheFooter.types'
import { defaultFooterContacts, defaultFooterRegulation } from '../model/TheFooter.config'

const props = defineProps<{
  config: FooterConfig
}>()

const contacts = computed<FooterContacts>(() => ({
  ...defaultFooterContacts,
  ...props.config.contacts,
}))
const hasExtra = computed(() => !!contacts.value.extraGroups?.length)
const regulation = computed(() =>
  props.config.regulation === undefined ? defaultFooterRegulation : props.config.regulation,
)

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
      class="container grid place-items-center gap-10 lg:place-items-start lg:items-start lg:gap-12"
      :class="
        hasExtra
          ? 'lg:grid-cols-[144px_auto_auto_258px_107px]'
          : 'lg:grid-cols-[144px_auto_258px_107px]'
      "
    >
      <NuxtLink class="order-1 lg:order-0 lg:col-start-1" to="/">
        <NuxtPicture
          class="max-w-36"
          width="144"
          height="144"
          src="/logo-white.svg"
          :alt="$t('footer.logoAlt')"
        />
      </NuxtLink>

      <div
        class="order-2 flex flex-col items-center gap-4 lg:order-0 lg:col-start-2 lg:items-start"
        :aria-label="$t('footer.nav')"
      >
        <NuxtLink
          v-for="link in config.links"
          :key="link.href"
          class="first:text-yellow-primary hover:text-yellow-secondary text-[12px]/[1.2] font-bold tracking-wider uppercase transition-colors duration-200"
          :to="link.href"
          active-class="text-yellow-primary"
        >
          {{ link.titleKey ? $t(link.titleKey) : link.title }}
        </NuxtLink>
      </div>

      <div v-if="hasExtra" class="order-4 flex flex-col gap-6 lg:order-0 lg:col-start-3">
        <div
          v-for="group in contacts.extraGroups"
          :key="group.email"
          class="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left"
        >
          <div v-if="group.title" class="max-w-64 text-[15px]/[1.4] font-bold">
            {{ group.titleKey ? $t(group.titleKey) : group.title }}
          </div>
          <UiAction
            class="text-[15px] hover:underline"
            variant="custom"
            :to="`mailto:${group.email}`"
          >
            {{ group.email }}
          </UiAction>
        </div>
      </div>

      <div
        class="order-4 flex flex-col items-center lg:order-0 lg:items-start"
        :class="hasExtra ? 'lg:col-start-4' : 'lg:col-start-3'"
      >
        <UiAction
          class="text-yellow-primary hover:text-fg mb-5 text-[19px] font-bold lowercase transition-colors duration-200 hover:underline"
          variant="custom"
          target="_blank"
          to="https://rucode.net/"
        >
          rucode.net
        </UiAction>

        <UiAction
          v-if="contacts.email"
          class="mb-4 text-[15px] font-bold hover:underline"
          variant="custom"
          :to="`mailto:${contacts.email}`"
        >
          {{ contacts.email }}
        </UiAction>

        <UiAction
          v-if="contacts.link"
          class="mb-4 text-[15px] font-bold hover:underline"
          variant="custom"
          :to="contacts.link.href"
        >
          {{ contacts.link.label }}
        </UiAction>

        <div v-if="contacts.phoneTitle" class="mb-4 text-[15px] font-bold">
          {{ contacts.phoneTitleKey ? $t(contacts.phoneTitleKey) : contacts.phoneTitle }}
        </div>
        <UiAction
          v-if="contacts.phone"
          class="text-[15px] font-bold hover:underline"
          variant="custom"
          :to="contacts.phone.href"
        >
          {{ contacts.phone.label }}
        </UiAction>
        <div v-if="contacts.workHours" class="mb-10 text-[13px]">
          {{ contacts.workHoursKey ? $t(contacts.workHoursKey) : contacts.workHours }}
        </div>

        <UiAction
          v-if="regulation"
          class="text-[12px] underline hover:no-underline"
          variant="custom"
          target="_blank"
          :to="regulation.href"
        >
          {{ regulation.titleKey ? $t(regulation.titleKey) : regulation.title }}
        </UiAction>
      </div>

      <ClientOnly>
        <div
          class="order-3 flex items-center gap-3 lg:order-0"
          :class="hasExtra ? 'lg:col-start-5' : 'lg:col-start-4'"
        >
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
