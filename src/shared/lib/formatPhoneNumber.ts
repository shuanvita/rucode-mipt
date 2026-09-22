/**
 * Форматирует цифры национального номера по группам маски, например groups=[3,3,2,2] → `(999) 999-99-99`.
 * @example
 * formatPhoneNumber('9161234567', [3, 3, 2, 2]) // → '(916) 123-45-67'
 */
export function formatPhoneNumber(digits: string, groups: number[]): string {
  const total = groups.reduce((sum, size) => sum + size, 0)
  const d = digits.slice(0, total)
  if (!d) return ''

  let result = ''
  let consumed = 0

  groups.forEach((size, index) => {
    const groupEnd = consumed + size
    const part = d.slice(consumed, groupEnd)
    if (!part) return

    if (index === 0) {
      result += `(${part}`
      if (d.length >= groupEnd) result += ')'
    } else {
      result += `${index === 1 ? ' ' : '-'}${part}`
    }

    consumed = groupEnd
  })

  return result
}
