// Скриншоты блоков для каталога в админке CMS: `npm run block-shots [тип ...]`.
// Пишет public/previews/<type>.png; `npm run manifest` кладёт их в манифест полем `preview`.
// Запускать до `npm run build`, чтобы картинки попали в .output/public.
import { spawn, spawnSync } from 'node:child_process'
import { mkdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { chromium } from 'playwright'

const PORT = process.env.BLOCK_SHOTS_PORT ?? '3210'
const BASE = `http://127.0.0.1:${PORT}`
const SAMPLES = resolve('.output/block-samples.json')
const OUT_DIR = resolve('public/previews')
const only = new Set(process.argv.slice(2))

function writeSamples() {
  const result = spawnSync(
    'npx',
    ['vitest', 'run', 'src/app/block-registry/blockSamples.test.ts'],
    {
      stdio: 'inherit',
      shell: true,
      env: { ...process.env, BLOCK_SAMPLES_OUT: SAMPLES },
    },
  )
  if (result.status !== 0) process.exit(result.status ?? 1)
}

function startServer() {
  const child = spawn('npx', ['nuxt', 'dev', '--port', PORT, '--host', '127.0.0.1'], {
    stdio: 'ignore',
    shell: true,
    detached: process.platform !== 'win32',
    env: { ...process.env, NUXT_PUBLIC_BLOCK_SHOT: '1' },
  })
  const stop = () => {
    if (process.platform === 'win32') {
      spawnSync('taskkill', ['/pid', String(child.pid), '/T', '/F'], { stdio: 'ignore' })
    } else {
      try {
        process.kill(-child.pid, 'SIGTERM')
      } catch {
        // уже завершён
      }
    }
  }
  return stop
}

async function waitForServer() {
  const deadline = Date.now() + 180_000
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${BASE}/__block/ping`)
      if (response.status < 500) return
    } catch {
      // сервер ещё поднимается
    }
    await new Promise((done) => setTimeout(done, 1000))
  }
  throw new Error('Dev-сервер не поднялся за 180 секунд')
}

writeSamples()
const samples = JSON.parse(readFileSync(SAMPLES, 'utf8'))
mkdirSync(OUT_DIR, { recursive: true })

const stop = startServer()
let failed = 0
let made = 0
try {
  await waitForServer()
  const browser = await chromium.launch()
  try {
    for (const [type, sample] of Object.entries(samples)) {
      if (only.size > 0 && !only.has(type)) continue
      const context = await browser.newContext({
        viewport: { width: 1280, height: 800 },
        reducedMotion: 'reduce',
      })
      const page = await context.newPage()
      try {
        await page.addInitScript((value) => {
          window.__CRITO_BLOCK_SAMPLE__ = value
        }, sample)
        await page.goto(`${BASE}/__block/${encodeURIComponent(type)}`, { waitUntil: 'networkidle' })
        const root = page.locator('[data-block-shot] > *').first()
        await root.waitFor({ timeout: 20_000 })
        await page.evaluate(() => document.fonts.ready)
        await page.waitForTimeout(500)
        await page
          .locator('[data-block-shot]')
          .screenshot({ path: resolve(OUT_DIR, `${type}.png`) })
        made += 1
      } catch (error) {
        failed += 1
        console.warn(`Не удалось снять ${type}: ${error.message.split('\n')[0]}`)
      } finally {
        await context.close()
      }
    }
  } finally {
    await browser.close()
  }
} finally {
  stop()
}

console.log(
  `Скриншотов: ${made}, ошибок: ${failed}, образцов в данных страниц: ${Object.keys(samples).length}`,
)
process.exit(failed > 0 && made === 0 ? 1 : 0)
