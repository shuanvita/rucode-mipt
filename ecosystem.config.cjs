module.exports = {
  apps: [
    {
      name: 'nuxt-rucode',
      port: 3000,
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NITRO_HOST: '127.0.0.1',
      },
    },
  ],
}
