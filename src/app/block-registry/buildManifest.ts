import { z } from 'zod/v4'
import type { BlockAlias, BlockCategory, BlockDefinition } from '~/shared/api'
import { headerSchema } from './schemas/header'

export interface ManifestBlock {
  type: string
  title: string
  category: BlockCategory
  schemaVersion: number
  /** Блок без схемы нельзя редактировать в админке: его можно только включить, скрыть или переставить. */
  readonly: boolean
  aliases: BlockAlias[]
  /** Путь картинки-превью (`/previews/<type>.png`), если скриншот блока сделан. */
  preview?: string
  /** JSON Schema поля `data` (draft 2020-12). */
  schema?: Record<string, unknown>
}

export interface BlockManifest {
  project: string
  version: string
  blocks: ManifestBlock[]
  /** JSON Schema поля `header` страницы: по ней админка строит форму шапки. */
  headerSchema: Record<string, unknown>
}

/** Манифест блоков проекта: его отправляют бэкенду при деплое (`PUT /projects/{id}/manifest`). */
export function buildManifest(
  definitions: BlockDefinition[],
  {
    project,
    version,
    hasPreview = () => false,
  }: { project: string; version: string; hasPreview?: (type: string) => boolean },
): BlockManifest {
  return {
    project,
    version,
    headerSchema: z.toJSONSchema(headerSchema as unknown as z.ZodType) as Record<string, unknown>,
    blocks: definitions
      .map((definition) => ({
        type: definition.type,
        title: definition.title,
        category: definition.category,
        schemaVersion: definition.schemaVersion,
        readonly: !definition.schema,
        aliases: definition.aliases ?? [],
        ...(hasPreview(definition.type) ? { preview: `/previews/${definition.type}.png` } : {}),
        ...(definition.schema
          ? {
              schema: z.toJSONSchema(definition.schema as unknown as z.ZodType) as Record<
                string,
                unknown
              >,
            }
          : {}),
      }))
      .toSorted((a, b) => a.type.localeCompare(b.type)),
  }
}
