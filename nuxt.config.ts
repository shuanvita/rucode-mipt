import tailwindcss from '@tailwindcss/vite'
import type { NuxtPage } from 'nuxt/schema'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title:
        'Всероссийский фестиваль по искусственному интеллекту и алгоритмическому программированию',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  features: { inlineStyles: true },

  nitro: {
    preset: 'node-server',
  },

  fonts: {
    families: [{ name: 'Montserrat', weights: [300, 400, 500, 600, 700, 800, 900] }],
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/scripts',
    '@pinia/nuxt',
    'nuxt-svgo',
    '@vueuse/nuxt',
    'nuxt-swiper',
  ],

  srcDir: './src',
  dir: {
    app: 'app/entrypoint',
    pages: 'app/routes',
    layouts: 'app/layouts',
  },

  components: [{ path: './shared/ui', prefix: 'ui', extensions: ['vue'] }],

  css: ['~/app/styles/main.css'],

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
    },
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },

  svgo: {
    defaultImport: 'component',
    componentPrefix: 'icon',
    autoImportPath: false,
  },

  image: {
    format: ['webp'],
  },

  hooks: {
    'pages:extend'(pages) {
      const restrictToDefaultLocale = (list: NuxtPage[]) => {
        for (const page of list) {
          page.meta ??= {}
          page.meta.i18n ??= { locales: ['ru'] }
          if (page.children) restrictToDefaultLocale(page.children)
        }
      }
      restrictToDefaultLocale(pages)
    },
  },

  i18n: {
    locales: [
      { code: 'ru', language: 'ru-RU', files: ['ru.json'] },
      { code: 'en', language: 'en-US', files: ['en.json'] },
    ],
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
    customRoutes: 'meta',
    detectBrowserLanguage: false,
    // Для hreflang/canonical; на проде переопределяется переменной NUXT_PUBLIC_I18N_BASE_URL
    baseUrl: 'https://rucode.net',
    restructureDir: 'src/app/i18n',
    langDir: 'locales',
  },
})
