/** Slug проекта CMS (тот же шаблон, что проверяет API). */
const PROJECT_PATTERN = /^[a-z0-9][a-z0-9-]*$/

/**
 * Slug проекта из пути `/cms-api/projects/<project>/manifest` или `null`.
 * На API уходит только собранный из slug адрес, а не исходный путь, поэтому через прокси
 * нельзя обратиться ни к чему, кроме загрузки манифеста.
 */
export function getCmsManifestProject(path: string | undefined) {
  const pathname = (path ?? '').split('?')[0] ?? ''
  const match = /^\/cms-api\/projects\/([^/]+)\/manifest\/?$/.exec(pathname)
  const project = match?.[1]
  return project && PROJECT_PATTERN.test(project) ? project : null
}
