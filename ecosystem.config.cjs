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
        NODE_ENV: 'production',
        PORT: 3000,
        NITRO_HOST: '127.0.0.1',
      },
    },
  ],
}
