export interface CmsRequestBody {
  form: string
  fields: Record<string, string | string[]>
  /** Подписи полей (вопросы формы); необязательны, лишние и неверные отбрасываются. */
  labels?: Record<string, string>
  pageUrl?: string
}

const FORM_PATTERN = /^[A-Za-z0-9_-]{1,64}$/
const MAX_LABEL_LENGTH = 500

/**
 * Проверяет тело заявки с сайта и оставляет только известные ключи.
 * Значения: строки или списки строк; всё остальное это `null` (заявка отвергается, а не чинится).
 * Подписи вторичны: заявку из-за них не отвергаем, а берём только строки для имеющихся полей.
 * Лимиты размера окончательно проверяет CMS, здесь отсекается заведомо чужая форма данных.
 */
export function buildCmsRequestBody(input: unknown): CmsRequestBody | null {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null
  const { form, fields, labels, pageUrl } = input as Record<string, unknown>
  if (typeof form !== 'string' || !FORM_PATTERN.test(form)) return null
  if (!fields || typeof fields !== 'object' || Array.isArray(fields)) return null

  const clean: Record<string, string | string[]> = {}
  for (const [key, value] of Object.entries(fields)) {
    if (typeof value === 'string') clean[key] = value
    else if (Array.isArray(value) && value.every((item) => typeof item === 'string'))
      clean[key] = value
    else return null
  }
  if (Object.keys(clean).length === 0) return null

  const cleanLabels = pickLabels(labels, clean)

  return {
    form,
    fields: clean,
    ...(cleanLabels ? { labels: cleanLabels } : {}),
    ...(typeof pageUrl === 'string' && pageUrl ? { pageUrl: pageUrl.slice(0, 2000) } : {}),
  }
}

function pickLabels(
  input: unknown,
  fields: Record<string, string | string[]>,
): Record<string, string> | undefined {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return undefined
  const result: Record<string, string> = {}
  for (const [key, value] of Object.entries(input as Record<string, unknown>)) {
    if (!(key in fields) || typeof value !== 'string') continue
    const label = value.trim().slice(0, MAX_LABEL_LENGTH)
    if (label) result[key] = label
  }
  return Object.keys(result).length ? result : undefined
}
