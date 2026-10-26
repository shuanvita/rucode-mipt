// Номер счётчика Яндекс Метрики: только цифры. Любое другое значение (пустое, опечатка)
// считается «счётчик выключен», чтобы не подставить в тег постороннюю строку.
// Nuxt разбирает значение переменной окружения (`NUXT_PUBLIC_METRIKA_COUNTER_ID=69703567`) в число,
// поэтому в рантайм-конфиге номер приходит как number, а не как строка.
export function parseCounterId(value: unknown): number | null {
  const text = typeof value === 'number' && Number.isSafeInteger(value) ? String(value) : value
  if (typeof text !== 'string' || !/^\d{1,12}$/.test(text.trim())) return null
  return Number(text.trim())
}
