import { getCmsApiBase } from '../../../../utils/cmsApiBase'
import { getCmsManifestProject } from '../../../../utils/cmsManifest'

/**
 * Загрузка манифеста блоков из CI сайта: `PUT /cms-api/projects/<project>/manifest`.
 *
 * API CMS слушает только localhost, а nginx-правил для него на сервере нет, поэтому CI отправляет
 * манифест через сайт. Авторизации здесь нет: ключ проекта (`x-ci-key`) проверяет сам API.
 * Разрешён только этот метод и только этот путь; сессионные заголовки на API не пересылаются.
 */
export default defineEventHandler((event) => {
  const { cmsBaseUrl, cmsApiUrl } = useRuntimeConfig(event)
  const apiBase = getCmsApiBase(cmsApiUrl, cmsBaseUrl)
  const project = apiBase ? getCmsManifestProject(event.path) : null
  if (!apiBase || !project) throw createError({ statusCode: 404, message: 'Not Found' })

  return proxyRequest(event, `${apiBase}/projects/${project}/manifest`, {
    headers: { authorization: '', cookie: '' },
  })
})
