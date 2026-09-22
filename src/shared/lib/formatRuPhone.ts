/**
 * Форматирует до 10 цифр национального номера в маску `(XXX) XXX-XX-XX`.
 * @example
 * formatRuPhone('9161234567') // → '(916) 123-45-67'
 */
export function formatRuPhone(digits: string): string {
  const d = digits.slice(0, 10)
  if (!d) return ''

  let result = `(${d.slice(0, 3)}`
  if (d.length >= 3) result += ')'
  if (d.length > 3) result += ` ${d.slice(3, 6)}`
  if (d.length > 6) result += `-${d.slice(6, 8)}`
  if (d.length > 8) result += `-${d.slice(8, 10)}`

  return result
}
