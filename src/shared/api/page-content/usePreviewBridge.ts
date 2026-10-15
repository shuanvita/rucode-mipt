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

/**
 * Режим предпросмотра по параметру адреса: `1` принимает черновик из админки, `published` показывает
 * опубликованное, но тоже подсвечивает блоки и отдаёт клики. Всё остальное: предпросмотр выключен.
 */
export function parsePreviewMode(value: unknown): 'draft' | 'published' | null {
  if (value === '1') return 'draft'
  if (value === 'published') return 'published'
  return null
}

/** id блока, по которому кликнули (ближайший предок с `data-block-id`); null: клик мимо блоков. */
export function blockIdFromEvent(target: EventTarget | null): string | null {
  if (!(target instanceof Element)) return null
  return target.closest(`[${BLOCK_ATTR}]`)?.getAttribute(BLOCK_ATTR) || null
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
  // Жёлтый (yellow-500): тот же цвет, что у выбранного блока в списке редактора.
  style.textContent = `[${HIGHLIGHT_ATTR}] { outline: 3px solid #eab308 !important; outline-offset: -3px !important; transition: outline-color .2s; }`
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
    const mode = parsePreviewMode(route.query[PREVIEW_QUERY])
    if (!mode) return
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

      // В режиме «Опубликованная» черновик не применяется: показываем то, что видят посетители.
      if (mode !== 'draft') return

      data.value = { page: message.page, isFallback: false }
      // Шапка и футер читаются из route.meta: подхватываем их, если вернутся на текущем рендере.
      route.meta.headerConfig = message.page.headerConfig
      route.meta.noFooterSpacing = message.page.noFooterSpacing
      void nextTick(() => {
        if (selectedId) highlightBlock(selectedId)
      })
    }

    // Клик по блоку выбирает его в редакторе. Перехватываем в фазе захвата и гасим переход по ссылке:
    // иначе клик по кнопке или ссылке увёл бы рамку со страницы, а выбор не сработал.
    const onClick = (event: MouseEvent) => {
      const blockId = blockIdFromEvent(event.target)
      if (!blockId) return
      event.preventDefault()
      event.stopPropagation()
      window.parent.postMessage({ source: CHANNEL, type: 'pick', blockId }, '*')
    }

    window.addEventListener('message', onMessage)
    document.addEventListener('click', onClick, true)
    onBeforeUnmount(() => {
      window.removeEventListener('message', onMessage)
      document.removeEventListener('click', onClick, true)
    })

    // Админка не знает, когда страница готова принять черновик: сообщаем сами.
    window.parent.postMessage({ source: CHANNEL, type: 'ready' }, '*')
  })
}
