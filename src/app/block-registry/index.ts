import type { BlockDefinition } from '~/shared/api'
import { aiTestingBlocks } from './blocks/aiTesting'
import { commonBlocks } from './blocks/common'
import { aiChampBlocks } from './blocks/aiChamp'
import { award2025Blocks } from './blocks/award2025'
import { award2026Blocks } from './blocks/award2026'
import { capital2024Blocks } from './blocks/capital2024'
import { champBlocks } from './blocks/champ'
import { consortiumBlocks } from './blocks/consortium'
import { final2024Blocks } from './blocks/final2024'
import { homeBlocks } from './blocks/home'
import { mtsBlocks } from './blocks/mts'
import { mwsBlocks } from './blocks/mws'
import { practikumBlocks } from './blocks/practikum'

const definitions: BlockDefinition[] = [
  ...aiTestingBlocks,
  ...commonBlocks,
  ...aiChampBlocks,
  ...award2025Blocks,
  ...award2026Blocks,
  ...capital2024Blocks,
  ...champBlocks,
  ...consortiumBlocks,
  ...final2024Blocks,
  ...homeBlocks,
  ...mtsBlocks,
  ...mwsBlocks,
  ...practikumBlocks,
]

/** Определения для рантайма: без схем, чтобы zod не попадал в клиентский бандл. */
export const blockDefinitions: BlockDefinition[] = definitions
