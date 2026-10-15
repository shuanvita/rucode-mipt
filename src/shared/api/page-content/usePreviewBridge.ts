import type { Ref } from 'vue'
import { parseContentPage } from './parseContentPage'
import type { ContentPage } from './usePageContent.types'

/** Параметр адреса, по которому админка CMS открывает страницу в iframe предпросмотра. */
export const PREVIEW_QUERY = 'crito-preview'
/** Атрибут корня блока: нужен только в предпросмотре, чтобы найти блок и подсветить его. */
export const BLOCK_ATTR = 'data-block-id'
const CHANNEL = 'crito-preview'
const STYLE_ID = 'crito-preview-style'
const HIGHLIGHT_ATTR = 'data-crito-selected'

// Формат сообщений описан в `@crito/contract` (crito-api, packages/contract/src/preview.ts).
type PreviewMessage =
  | { type: 'draft'; page: ContentPage }
  | { type: 'select'; blockId: string | null }

/** Сообщение админки (черновик или выбранный блок); всё остальное игнорируется. */
export function parsePreviewMessage(data: unknown, slug: string): PreviewMessage | null {
  if (typeof data !== 'object' || data === null) return null
  const message = data as { source?: unknown; type?: unknown; page?: unknown; blockId?: unknown }
  if (message.source !== CHANNEL) return null

  if (message.type === 'select') {
    if (message.blockId === null) return { type: 'select', blockId: null }
    return typeof message.blockId === 'string' ? { type: 'select', blockId: message.blockId } : null
  }

  if (message.type === 'draft') {
    const page = message.page
    if (typeof page !== 'object' || page === null) return null
    try {
      // slug и version серверу не нужны: подставляем свои, остальное проверяет тот же разбор, что и для ответа CMS.
      return { type: 'draft', page: parseContentPage({ ...page, slug, version: 0 }) }
    } catch {
      return null
    }
  }
  return null
}

/** Сообщение с черновиком; оставлено отдельной функцией ради тестов и обратной совместимости. */
export function parseDraftMessage(data: unknown, slug: string): ContentPage | null {
  const message = parsePreviewMessage(data, slug)
  return message?.type === 'draft' ? message.page : null
}

/** true, пока страница открыта как предпросмотр: блоки помечаются `data-block-id`. */
export function usePreviewActive() {
  return useState('crito-preview-active', () => false)
}

function ensureStyle() {
  if (document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  // outline внутрь блока: не уезжает за края страницы и не меняет раскладку.
  style.textContent = `[${HIGHLIGHT_ATTR}] { outline: 3px solid #6366f1 !important; outline-offset: -3px !important; transition: outline-color .2s; }`
  document.head.append(style)
}

/** Подсвечивает блок по id и прокручивает к нему; null снимает подсветку. Возвращает, найден ли блок. */
export function highlightBlock(blockId: string | null): boolean {
  document.querySelectorAll(`[${HIGHLIGHT_ATTR}]`).forEach((el) => el.removeAttribute(HIGHLIGHT_ATTR))
  if (!blockId) return true
  const target = document.querySelector(`[${BLOCK_ATTR}="${CSS.escape(blockId)}"]`)
  if (!target) return false
  ensureStyle()
  target.setAttribute(HIGHLIGHT_ATTR, '')
  target.scrollIntoView({ behavior: 'smooth', block: 'center' })
  return true
}

/**
 * Предпросмотр несохранённых правок из админки CMS (crito-api).
 * Работает только внутри iframe и только с `?crito-preview=1`: посетитель сайта его не увидит.
 * Админка присылает `postMessage` с блоками из редактора, они подменяют ответ CMS на лету,
 * ничего не сохраняя и не публикуя; сообщение `select` подсвечивает выбранный в редакторе блок.
 * Принимаем сообщения только от родительского окна, а если задан `NUXT_PUBLIC_PREVIEW_ADMIN_ORIGINS`
 * (через запятую), ещё и только с этих адресов.
 */
export function usePreviewBridge(
  data: Ref<{ page: ContentPage; isFallback: boolean } | null | undefined>,
  slug: string,
) {
  const route = useRoute()
  const config = useRuntimeConfig()
  const active = usePreviewActive()

  onMounted(() => {
    if (route.query[PREVIEW_QUERY] !== '1') return
    if (window.parent === window) return
    active.value = true

    const allowed = String(config.public.previewAdminOrigins ?? '')
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean)

    // Выбор может прийти раньше, чем блоки отрисованы после нового черновика: запоминаем и повторяем.
    let selectedId: string | null = null

    const onMessage = (event: MessageEvent) => {
      if (event.source !== window.parent) return
      if (allowed.length && !allowed.includes(event.origin)) return
      const message = parsePreviewMessage(event.data, slug)
      if (!message) return

      if (message.type === 'select') {
        selectedId = message.blockId
        highlightBlock(selectedId)
        return
      }

      data.value = { page: message.page, isFallback: false }
      // Шапка и футер читаются из route.meta: подхватываем их, если вернутся на текущем рендере.
      route.meta.headerConfig = message.page.headerConfig
      route.meta.noFooterSpacing = message.page.noFooterSpacing
      void nextTick(() => {
        if (selectedId) highlightBlock(selectedId)
      })
    }

    window.addEventListener('message', onMessage)
    onBeforeUnmount(() => window.removeEventListener('message', onMessage))

    // Админка не знает, когда страница готова принять черновик: сообщаем сами.
    window.parent.postMessage({ source: CHANNEL, type: 'ready' }, '*')
  })
}
