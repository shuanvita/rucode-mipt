import { registerBlocks } from '~/shared/api'
import { blockDefinitions } from './index'

// Реестр заполняется до рендера страниц: и на сервере, и на клиенте.
export default defineNuxtPlugin(() => {
  registerBlocks(blockDefinitions)
})
