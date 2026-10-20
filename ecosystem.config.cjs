const { existsSync, readFileSync } = require('node:fs')

// Настройки CMS (NUXT_CMS_BASE_URL, NUXT_REVALIDATE_SECRET, NUXT_CMS_ADMIN_*) лежат вне репозитория,
// чтобы деплой, который перезаписывает этот файл, их не затирал. Без файла сайт работает на локальных данных.
// Разбор написан вручную, без util.parseEnv: pm2 в CI может работать на старом Node, а ошибка в этом файле
// не должна мешать запуску сайта, поэтому при любом сбое возвращаются пустые настройки.
const SITE_ENV = '/home/anvshurygin/.config/rucode/site.env'

function readEnvFile(file) {
  try {
    if (!existsSync(file)) return {}
    const env = {}
    for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
      if (line.trim().startsWith('#')) continue
      const match = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/.exec(line)
      if (match) env[match[1]] = match[2].replace(/^(['"])(.*)\1$/, '$2')
    }
    return env
  } catch {
    return {}
  }
}

module.exports = {
  apps: [
    {
      name: 'nuxt-rucode',
      cwd: '/var/www/nuxt.rucode.net',
      port: 3000,
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      // interpreter: '/home/anvshurygin/.nvm/versions/node/v24.21.0/bin/node',
      interpreter: '/usr/bin/node',
      env: {
        ...readEnvFile(SITE_ENV),
        NODE_ENV: 'production',
        PORT: 3000,
        NITRO_HOST: '127.0.0.1',
      },
    },
  ],
}
