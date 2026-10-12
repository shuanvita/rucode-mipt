/** Ключ файла медиатеки CMS: `<project>/<sha256>.<ext>` (тот же шаблон, что проверяет API). */
const KEY_PATTERN = /^[a-z0-9][a-z0-9-]*\/[a-f0-9]{64}\.[a-z0-9]{2,5}$/

/**
 * Ключ файла из пути `/cms-api/media/<project>/<sha256>.<ext>` или `null`.
 * Проверка строгая: на API уходит только собранный из ключа адрес, а не исходный путь,
 * поэтому через прокси нельзя обратиться ни к чему, кроме файлов медиатеки.
 */
export function getCmsMediaKey(path: string | undefined) {
  const pathname = (path ?? '').split('?')[0] ?? ''
  const prefix = '/cms-api/media/'
  if (!pathname.startsWith(prefix)) return null
  const key = pathname.slice(prefix.length)
  return KEY_PATTERN.test(key) ? key : null
}
