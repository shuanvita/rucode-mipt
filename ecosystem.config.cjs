const { existsSync, readFileSync } = require('node:fs')

// Настройки CMS (NUXT_CMS_BASE_URL, NUXT_REVALIDATE_SECRET, NUXT_CMS_ADMIN_*) лежат вне репозитория,
// чтобы деплой, который перезаписывает этот файл, их не затирал. Без файла сайт работает на локальных данных.
// Общий файл site.env читают обе копии; различия копий (например NUXT_PUBLIC_I18N_BASE_URL с доменом копии)
// лежат в необязательном site.<name>.env рядом и перекрывают общие значения.
// Разбор написан вручную, без util.parseEnv: pm2 в CI может работать на старом Node, а ошибка в этом файле
// не должна мешать запуску сайта, поэтому при любом сбое возвращаются пустые настройки.
const CONFIG_DIR = '/home/anvshurygin/.config/rucode'

// Копии сайта на одном сервере. name, cwd и port согласованы с .github/workflows/deploy.yml и nginx:
// менять вместе. Порт у каждой копии свой, иначе вторая не стартует.
const SITES = [
  { name: 'nuxt-rucode', cwd: '/var/www/nuxt.rucode.net', port: 3000 }, // тестовый стенд nuxt.rucode.net
  { name: 'rucode', cwd: '/var/www/rucode.net', port: 3001 }, // прод rucode.net
]

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
  apps: SITES.map(({ name, cwd, port }) => ({
    name,
    cwd,
    port,
    exec_mode: 'cluster',
    instances: 'max',
    script: './.output/server/index.mjs',
    interpreter: '/usr/bin/node',
    env: {
      ...readEnvFile(`${CONFIG_DIR}/site.env`),
      ...readEnvFile(`${CONFIG_DIR}/site.${name}.env`),
      NODE_ENV: 'production',
      PORT: port,
      NITRO_HOST: '127.0.0.1',
    },
  })),
}
