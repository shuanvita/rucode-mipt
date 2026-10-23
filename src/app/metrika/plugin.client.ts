import { parseCounterId } from './counter'

type Ym = ((id: number, method: string, ...args: unknown[]) => void) & {
  a?: unknown[][]
  l?: number
}

declare global {
  interface Window {
    ym?: Ym
  }
}

// Параметр предпросмотра из админки CMS (см. usePreviewBridge): такие открытия в статистику не идут.
const PREVIEW_QUERY = 'crito-preview'

// Яндекс Метрика включается, только если задан NUXT_PUBLIC_METRIKA_COUNTER_ID. Его кладут лишь в
// site.rucode.env (боевой rucode.net), поэтому на тестовом стенде nuxt.rucode.net счётчика нет.
export default defineNuxtPlugin((nuxtApp) => {
  const id = parseCounterId(useRuntimeConfig().public.metrikaCounterId)
  if (id === null) return

  if (PREVIEW_QUERY in useRouter().currentRoute.value.query) return

  // Стандартный загрузчик Метрики: вызовы копятся в ym.a, пока не загрузится tag.js.
  const ym: Ym =
    window.ym ??
    Object.assign(
      (...args: unknown[]) => {
        ;(ym.a ??= []).push(args)
      },
      {} as Pick<Ym, 'a' | 'l'>,
    )
  window.ym = ym
  ym.l = Date.now()

  const script = document.createElement('script')
  script.async = true
  script.src = `https://mc.yandex.ru/metrika/tag.js?id=${id}`
  document.head.appendChild(script)

  // Первый просмотр отправляет сам тег при init. Сайт SPA, поэтому дальнейшие переходы
  // между страницами считаем вручную.
  ym(id, 'init', { clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true })

  let previousUrl = location.href
  nuxtApp.hook('page:finish', () => {
    const url = location.href
    if (url === previousUrl) return
    ym(id, 'hit', url, { referer: previousUrl })
    previousUrl = url
  })
})
