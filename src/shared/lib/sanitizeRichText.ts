/**
 * Очистка rich-text из CMS перед выводом через `v-html`.
 * Разрешён небольшой набор строчной и списочной разметки; всё остальное (скрипты, стили,
 * обработчики событий, `javascript:`-ссылки) вырезается. Работает без DOM, поэтому
 * одинаково выполняется на сервере и в браузере.
 */

const ALLOWED_TAGS = new Set([
  'a',
  'b',
  'strong',
  'i',
  'em',
  'u',
  'br',
  'p',
  'span',
  'ul',
  'ol',
  'li',
  'sup',
  'sub',
])

// `class` оставлен для существующих данных; от классов в данных планируется отказаться.
const ALLOWED_ATTRS = new Set(['href', 'target', 'rel', 'class', 'data-color'])

const SAFE_URL = /^(https?:|mailto:|tel:|\/|#|\.\.?\/)/i

const escapeAttr = (value: string) => value.replace(/"/g, '&quot;')

function sanitizeAttrs(source: string) {
  const attrs: string[] = []
  for (const match of source.matchAll(/([a-z][a-z0-9-]*)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi)) {
    const name = match[1]!.toLowerCase()
    const value = (match[2] ?? match[3] ?? '').trim()
    if (!ALLOWED_ATTRS.has(name)) continue
    if (name === 'href' && !SAFE_URL.test(value)) continue
    attrs.push(`${name}="${escapeAttr(value)}"`)
  }
  return attrs.length ? ` ${attrs.join(' ')}` : ''
}

export function sanitizeRichText(html: string | undefined | null) {
  if (!html) return ''

  return (
    html
      // комментарии, <script>/<style> вместе с содержимым
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<(script|style|iframe|object|embed)\b[\s\S]*?<\/\1\s*>/gi, '')
      // полный тег -> очищенный тег; одиночный «<» без закрывающей «>» экранируется
      .replace(
        /<(\/?)([a-z][a-z0-9-]*)\b([^>]*)>|</gi,
        (_match, slash?: string, rawName?: string, attrs?: string) => {
          if (rawName === undefined) return '&lt;'
          const name = rawName.toLowerCase()
          if (!ALLOWED_TAGS.has(name)) return ''
          return slash ? `</${name}>` : `<${name}${sanitizeAttrs(attrs ?? '')}>`
        },
      )
  )
}
