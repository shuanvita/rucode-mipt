<script setup lang="ts">
import { ChampPage } from '~/pages/champ'

// Шапка и футер заданы здесь, а не в CMS, из-за переводов (`titleKey`): CMS отдаёт только русский.
// Для русской версии шапка и футер из CMS, если они заданы, перекрывают эти.
definePageMeta({
  footer: {
    links: [
      { href: '#about', title: 'О чемпионате', titleKey: 'nav.champ.about' },
      { href: '#how', title: 'Этапы', titleKey: 'nav.champ.stages' },
      { href: '#why', title: 'Зачем участвовать', titleKey: 'nav.champ.why' },
      { href: '#achievements', title: 'Достижения', titleKey: 'nav.champ.achievements' },
      { href: '#gallery', title: 'Фотогалерея', titleKey: 'nav.champ.gallery' },
    ],
    regulation: {
      href: '/files/reglament_mezhdunarodnogo_chempionata_rukod.pdf',
      title: 'Регламент чемпионата',
      titleKey: 'footer.champRegulation',
    },
    contacts: {
      site: { label: 'rucode.net', href: 'https://rucode.net/' },
      extraGroups: [
        {
          title: 'По вопросам организации и технической поддержки',
          titleKey: 'footer.supportTitle',
          email: 'support@rucode.net',
        },
        {
          title: 'По вопросам партнёрства и для СМИ',
          titleKey: 'footer.partnershipTitle',
          email: 'partnership@rucode.net',
        },
      ],
      phoneTitle: 'Связь с организаторами',
      phoneTitleKey: 'footer.contactTitle',
      phone: { label: '+7 495 128-34-32', href: 'tel:+74951283432' },
      workHours: 'с 10:00 до 18:00 МСК',
      workHoursKey: 'footer.champWorkHours',
    },
  },
  header: {
    links: [
      { href: '#about', title: 'О чемпионате', titleKey: 'nav.champ.about' },
      { href: '#how', title: 'Этапы', titleKey: 'nav.champ.stages' },
      { href: '#why', title: 'Зачем участвовать', titleKey: 'nav.champ.why' },
      { href: '#achievements', title: 'Достижения', titleKey: 'nav.champ.achievements' },
      { href: '#gallery', title: 'Фотогалерея', titleKey: 'nav.champ.gallery' },
    ],
  },
  i18n: { locales: ['ru', 'en'] },
})

const { t } = useI18n()

useHead({
  title: () => t('meta.champ.title'),
  meta: [
    {
      name: 'description',
      content: () => t('meta.champ.description'),
    },
    {
      property: 'og:title',
      content: () => t('meta.champ.title'),
    },
    {
      property: 'og:description',
      content: () => t('meta.champ.description'),
    },
  ],
})
</script>

<template>
  <ChampPage />
</template>
