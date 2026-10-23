// Номер счётчика Яндекс Метрики: только цифры. Любое другое значение (пустое, опечатка)
// считается «счётчик выключен», чтобы не подставить в тег постороннюю строку.
export function parseCounterId(value: unknown): number | null {
  if (typeof value !== 'string' || !/^\d{1,12}$/.test(value.trim())) return null
  return Number(value.trim())
}
