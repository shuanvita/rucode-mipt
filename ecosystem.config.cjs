const { existsSync, readFileSync } = require('node:fs')
const { parseEnv } = require('node:util')

// Настройки CMS (NUXT_CMS_BASE_URL, NUXT_REVALIDATE_SECRET, NUXT_CMS_ADMIN_*) лежат вне репозитория,
// чтобы деплой, который перезаписывает этот файл, их не затирал. Без файла сайт работает на локальных данных.
const SITE_ENV = '/home/anvshurygin/.config/rucode/site.env'
const cms = existsSync(SITE_ENV) ? parseEnv(readFileSync(SITE_ENV, 'utf8')) : {}

module.exports = {
  apps: [
    {
      name: 'nuxt-rucode',
      port: 3000,
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      interpreter: '/home/anvshurygin/.nvm/versions/node/v24.21.0/bin/node',
      env: {
        ...cms,
        NODE_ENV: 'production',
        PORT: 3000,
        NITRO_HOST: '127.0.0.1',
      },
    },
  ],
}
