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

  // Приватные ключи задаются только на сервере: NUXT_CMS_BASE_URL, NUXT_REVALIDATE_SECRET.
  runtimeConfig: {
    cmsBaseUrl: '',
    // NUXT_CMS_API_URL: корень API CMS для прокси манифеста и медиатеки (server/utils/cmsApiBase.ts).
    // Прод: https://edu.mipt.ru/adm/cms-admin/cms-api. Пусто: происхождение NUXT_CMS_BASE_URL.
    cmsApiUrl: '',
    revalidateSecret: '',
    // Прокси админки CMS (server/routes/cms-admin): NUXT_CMS_ADMIN_USER, NUXT_CMS_ADMIN_PASSWORD,
    // NUXT_CMS_ADMIN_UPSTREAM. Без логина и пароля прокси отвечает 404. На проде админка на
    // https://edu.mipt.ru/adm/cms-admin/, прокси не используется.
    cmsAdminUser: '',
    cmsAdminPassword: '',
    cmsAdminUpstream: 'http://127.0.0.1:3100',
    public: {
      // NUXT_PUBLIC_PREVIEW_ADMIN_ORIGINS: адреса админки CMS (через запятую), от которых принимается
      // черновик для предпросмотра. Пусто: принимается от любого окна, в которое встроен сайт.
      previewAdminOrigins: '',
      // NUXT_PUBLIC_BLOCK_SHOT=1: включает служебную страницу /__block/<type> для скриншотов блоков
      // (npm run block-shots). В проде не задаётся, страница отвечает 404.
      blockShot: '',
    },
  },

  plugins: ['~/app/block-registry/plugin'],

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
    // Глобальный route-middleware, который кладёт шапку и отступ футера страницы из CMS в route.meta
    middleware: 'app/page-meta',
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
    // Файлы медиатеки CMS приходят абсолютными ссылками <домен>/cms-api/media/... (см. server/routes/cms-api/media);
    // без разрешённого домена IPX отказывается их оптимизировать.
    domains: ['nuxt.rucode.net'],
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
