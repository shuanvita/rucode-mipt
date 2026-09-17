/**
 * Разбивает массив на массив подмассивов фиксированного размера.
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // → [[1, 2], [3, 4], [5]]
 */
export function chunk<T>(array: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size),
  )
}
