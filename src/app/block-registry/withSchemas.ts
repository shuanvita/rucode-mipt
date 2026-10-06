import type { BlockDefinition } from '~/shared/api'
import { blockDefinitions } from './index'
import { blockSchemas } from './schemas'

/** Определения со схемами данных: используются только манифестом и тестами (не в клиентском бандле). */
export const blockDefinitionsWithSchemas: BlockDefinition[] = blockDefinitions.map(
  (definition) => ({
    ...definition,
    schema: blockSchemas[definition.type],
  }),
)
