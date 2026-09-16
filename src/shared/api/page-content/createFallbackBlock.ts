import type { ContentBlock } from '~/shared/api'

export function createFallbackBlock<T>(
  type: string,
  order: number,
  data: T,
  enabled = true,
  id?: string,
): ContentBlock<T> {
  return {
    id: id ?? type,
    type,
    order,
    enabled,
    data,
  }
}
