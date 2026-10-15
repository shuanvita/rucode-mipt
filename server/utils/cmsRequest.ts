export interface CmsRequestBody {
  form: string
  fields: Record<string, string | string[]>
  pageUrl?: string
}

const FORM_PATTERN = /^[A-Za-z0-9_-]{1,64}$/

/**
 * Проверяет тело заявки с сайта и оставляет только известные ключи.
 * Значения: строки или списки строк; всё остальное это `null` (заявка отвергается, а не чинится).
 * Лимиты размера окончательно проверяет CMS, здесь отсекается заведомо чужая форма данных.
 */
export function buildCmsRequestBody(input: unknown): CmsRequestBody | null {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null
  const { form, fields, pageUrl } = input as Record<string, unknown>
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

  return {
    form,
    fields: clean,
    ...(typeof pageUrl === 'string' && pageUrl ? { pageUrl: pageUrl.slice(0, 2000) } : {}),
  }
}
