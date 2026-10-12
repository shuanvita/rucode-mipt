import { createHash, timingSafeEqual } from 'node:crypto'

/** Разбор заголовка `Authorization: Basic <base64(user:password)>`. Пароль может содержать `:`. */
export function parseBasicAuth(header: string | undefined) {
  const match = /^Basic\s+([A-Za-z0-9+/=]+)\s*$/i.exec(header ?? '')
  if (!match?.[1]) return null

  const decoded = Buffer.from(match[1], 'base64').toString('utf8')
  const separator = decoded.indexOf(':')
  if (separator < 0) return null

  return { user: decoded.slice(0, separator), password: decoded.slice(separator + 1) }
}

// Сравнение через SHA-256: длины входов выравниваются, а `timingSafeEqual` не выдаёт различий по времени.
const digest = (value: string) => createHash('sha256').update(value).digest()
const safeEqual = (a: string, b: string) => timingSafeEqual(digest(a), digest(b))

/**
 * Доступ к админке CMS по basic auth. Закрыто по умолчанию: если логин или пароль не заданы,
 * доступ не получает никто (в том числе запрос без заголовка и с пустыми значениями).
 */
export function isCmsAdminAuthorized(
  header: string | undefined,
  expectedUser: string | undefined,
  expectedPassword: string | undefined,
) {
  if (!expectedUser || !expectedPassword) return false

  const credentials = parseBasicAuth(header)
  if (!credentials) return false

  // Обе проверки выполняются всегда: ошибка в логине не должна отличаться по времени от ошибки в пароле.
  const userOk = safeEqual(credentials.user, expectedUser)
  const passwordOk = safeEqual(credentials.password, expectedPassword)
  return userOk && passwordOk
}
