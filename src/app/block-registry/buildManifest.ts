import { z } from 'zod/v4'
import type { BlockAlias, BlockCategory, BlockDefinition } from '~/shared/api'

export interface ManifestBlock {
  type: string
  title: string
  category: BlockCategory
  schemaVersion: number
  /** Блок без схемы нельзя редактировать в админке: его можно только включить, скрыть или переставить. */
  readonly: boolean
  aliases: BlockAlias[]
  /** JSON Schema поля `data` (draft 2020-12). */
  schema?: Record<string, unknown>
}

export interface BlockManifest {
  project: string
  version: string
  blocks: ManifestBlock[]
}

/** Манифест блоков проекта: его отправляют бэкенду при деплое (`PUT /projects/{id}/manifest`). */
export function buildManifest(
  definitions: BlockDefinition[],
  { project, version }: { project: string; version: string },
): BlockManifest {
  return {
    project,
    version,
    blocks: definitions
      .map((definition) => ({
        type: definition.type,
        title: definition.title,
        category: definition.category,
        schemaVersion: definition.schemaVersion,
        readonly: !definition.schema,
        aliases: definition.aliases ?? [],
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
