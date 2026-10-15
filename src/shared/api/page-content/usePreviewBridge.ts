import type { Ref } from 'vue'
import { parseContentPage } from './parseContentPage'
import type { ContentPage } from './usePageContent.types'

/** Параметр адреса, по которому админка CMS открывает страницу в iframe предпросмотра. */
export const PREVIEW_QUERY = 'crito-preview'
const CHANNEL = 'crito-preview'

interface DraftMessage {
  source: typeof CHANNEL
  type: 'draft'
  page: Omit<ContentPage, 'slug' | 'version'>
}

/** Сообщение админки с черновиком страницы; всё остальное игнорируется. */
export function parseDraftMessage(data: unknown, slug: string): ContentPage | null {
  if (typeof data !== 'object' || data === null) return null
  const message = data as Partial<DraftMessage>
  if (message.source !== CHANNEL || message.type !== 'draft') return null
  const page = message.page
  if (typeof page !== 'object' || page === null) return null
  try {
    // slug и version серверу не нужны: подставляем свои, остальное проверяет тот же разбор, что и для ответа CMS.
    return parseContentPage({ ...page, slug, version: 0 })
  } catch {
    return null
  }
}

/**
 * Предпросмотр несохранённых правок из админки CMS (crito-api).
 * Работает только внутри iframe и только с `?crito-preview=1`: посетитель сайта его не увидит.
 * Админка присылает `postMessage` с блоками из редактора, они подменяют ответ CMS на лету,
 * ничего не сохраняя и не публикуя. Принимаем сообщения только от родительского окна, а если задан
 * `NUXT_PUBLIC_PREVIEW_ADMIN_ORIGINS` (через запятую), ещё и только с этих адресов.
 */
export function usePreviewBridge(
  data: Ref<{ page: ContentPage; isFallback: boolean } | null | undefined>,
  slug: string,
) {
  const route = useRoute()
  const config = useRuntimeConfig()

  onMounted(() => {
    if (route.query[PREVIEW_QUERY] !== '1') return
    if (window.parent === window) return

    const allowed = String(config.public.previewAdminOrigins ?? '')
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean)

    const onMessage = (event: MessageEvent) => {
      if (event.source !== window.parent) return
      if (allowed.length && !allowed.includes(event.origin)) return
      const page = parseDraftMessage(event.data, slug)
      if (!page) return
      data.value = { page, isFallback: false }
      // Шапка и футер читаются из route.meta: подхватываем их, если вернутся на текущем рендере.
      route.meta.headerConfig = page.headerConfig
      route.meta.noFooterSpacing = page.noFooterSpacing
    }

    window.addEventListener('message', onMessage)
    onBeforeUnmount(() => window.removeEventListener('message', onMessage))

    // Админка не знает, когда страница готова принять черновик: сообщаем сами.
    window.parent.postMessage({ source: CHANNEL, type: 'ready' }, '*')
  })
}
