import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title:
        'Всероссийский фестиваль по искусственному интеллекту и алгоритмическому программированию ',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  nitro: { preset: 'node-server' },

  fonts: {
    families: [{ name: 'Montserrat', weights: [300, 400, 500, 600, 700, 800, 900] }],
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
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
    format: ['avif', 'webp'],
  },
})
