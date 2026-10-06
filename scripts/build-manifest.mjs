// Генерирует манифест блоков: `npm run manifest [путь]` (по умолчанию .output/manifest.json).
// Манифест строится из реестра блоков, а реестр требует окружения Nuxt (алиасы, автоимпорты),
// поэтому генерация выполняется как vitest-тест `src/app/block-registry/manifest.test.ts`.
import { spawnSync } from 'node:child_process'

const out = process.argv[2] ?? '.output/manifest.json'
const result = spawnSync('npx', ['vitest', 'run', 'src/app/block-registry/manifest.test.ts'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, MANIFEST_OUT: out },
})

if (result.status === 0) console.log(`Манифест записан в ${out}`)
process.exit(result.status ?? 1)
