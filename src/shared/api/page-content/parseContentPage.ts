import type { ContentBlock, ContentPage } from './usePageContent.types'

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const optionalString = (value: unknown) => value === undefined || typeof value === 'string'

function parseBlock(value: unknown, index: number): ContentBlock {
  if (!isRecord(value)) throw new Error(`blocks[${index}]: ожидался объект`)
  const { id, type, order, enabled, anchor, schemaVersion } = value
  if (typeof id !== 'string' || !id) throw new Error(`blocks[${index}].id: ожидалась строка`)
  if (typeof type !== 'string' || !type) throw new Error(`blocks[${index}].type: ожидалась строка`)
  if (typeof order !== 'number') throw new Error(`blocks[${index}].order: ожидалось число`)
  if (typeof enabled !== 'boolean') throw new Error(`blocks[${index}].enabled: ожидался boolean`)
  if (!optionalString(anchor)) throw new Error(`blocks[${index}].anchor: ожидалась строка`)
  if (schemaVersion !== undefined && typeof schemaVersion !== 'number')
    throw new Error(`blocks[${index}].schemaVersion: ожидалось число`)
  return value as unknown as ContentBlock
}

/**
 * Проверяет ответ CMS на соответствие `ContentPage` (см. docs/cms-contract.md).
 * Написана вручную: схемы zod нужны только манифесту и не должны попадать в клиентский бандл.
 * Содержимое `data` не проверяется: его валидирует бэкенд по схеме из манифеста.
 */
export function parseContentPage(value: unknown): ContentPage {
  if (!isRecord(value)) throw new Error('ожидался объект страницы')
  if (typeof value.slug !== 'string') throw new Error('slug: ожидалась строка')
  if (typeof value.version !== 'number') throw new Error('version: ожидалось число')
  if (!Array.isArray(value.blocks)) throw new Error('blocks: ожидался массив')
  if (!optionalString(value.headerConfig)) throw new Error('headerConfig: ожидалась строка')
  if (value.noFooterSpacing !== undefined && typeof value.noFooterSpacing !== 'boolean')
    throw new Error('noFooterSpacing: ожидался boolean')
  if (value.meta !== undefined) {
    if (!isRecord(value.meta)) throw new Error('meta: ожидался объект')
    for (const key of ['title', 'description', 'ogTitle', 'ogDescription', 'ogImage']) {
      if (!optionalString(value.meta[key])) throw new Error(`meta.${key}: ожидалась строка`)
    }
  }
  value.blocks.forEach(parseBlock)
  return value as unknown as ContentPage
}
