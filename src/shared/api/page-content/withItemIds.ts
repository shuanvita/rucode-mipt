const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

/**
 * Проставляет `id` элементам массивов-объектов внутри `data` блока, у которых его нет.
 * Идентификатор детерминирован (`<blockId>.<путь>.<индекс>`): он нужен админке и бэкенду, чтобы
 * отслеживать перестановки и правки элементов списков, а виджетам — как `:key`.
 *
 * Сгенерированный `id` делается неперечисляемым: виджеты часто передают элемент целиком
 * (`v-bind="card"`), и перечисляемый `id` попал бы атрибутом в DOM (в том числе дублями, когда
 * один элемент выводится в мобильной и десктопной вёрстке). `item.id` при этом читается как обычно.
 * Элементы с собственным `id` не меняются, исходные данные не мутируются.
 */
export function withItemIds<T>(value: T, prefix: string): T {
  if (Array.isArray(value)) {
    return value.map((item, index) => {
      const path = `${prefix}.${index}`
      if (!isPlainObject(item)) return withItemIds(item, path)
      const next = withItemIds(item, path) as Record<string, unknown>
      if (typeof next.id === 'string' && next.id) return next
      return Object.defineProperty(next, 'id', { value: path, enumerable: false })
    }) as T
  }

  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, withItemIds(child, `${prefix}.${key}`)]),
    ) as T
  }

  return value
}
