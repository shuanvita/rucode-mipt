import type { ContentBlock } from '~/shared/api'

interface FallbackBlockOptions {
  enabled?: boolean
  id?: string
  anchor?: string
  schemaVersion?: number
}

export function createFallbackBlock<T>(
  type: string,
  order: number,
  data: T,
  options: boolean | FallbackBlockOptions = {},
): ContentBlock<T> {
  const {
    enabled = true,
    id,
    anchor,
    schemaVersion,
  } = typeof options === 'boolean' ? { enabled: options } : options

  return {
    id: id ?? type,
    type,
    order,
    enabled,
    data,
    ...(anchor ? { anchor } : {}),
    ...(schemaVersion ? { schemaVersion } : {}),
  }
}
