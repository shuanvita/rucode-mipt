import type { BlockDefinition } from './types'

export function defineBlock(
  definition: Omit<BlockDefinition, 'schemaVersion'> & { schemaVersion?: number },
): BlockDefinition {
  return { schemaVersion: 1, ...definition }
}
