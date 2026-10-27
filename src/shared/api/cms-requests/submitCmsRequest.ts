export type CmsRequestFields = Record<string, string | string[]>

/** Подписи полей: ключ поля -> вопрос так, как его видел посетитель. Менеджеры видят их в заявке вместо ключей. */
export type CmsRequestLabels = Record<string, string>

/**
 * Сохраняет заявку в CMS (проект сайта определяется адресом `NUXT_CMS_BASE_URL` на сервере).
 * Возвращает `false` при любой ошибке, в том числе когда CMS не настроена (404): форма
 * сама решает, достаточно ли ей другого обработчика.
 */
export async function submitCmsRequest(
  form: string,
  fields: CmsRequestFields,
  labels?: CmsRequestLabels,
): Promise<boolean> {
  try {
    await $fetch('/api/cms-requests', {
      method: 'POST',
      body: { form, fields, labels, pageUrl: window.location.href.slice(0, 2000) },
      timeout: 8000,
    })
    return true
  } catch (error) {
    // 404: CMS на этом окружении не подключена, это штатно и шума не заслуживает.
    const statusCode = (error as { statusCode?: number }).statusCode
    if (import.meta.dev && statusCode !== 404) {
      console.error('[cms-requests] заявка не сохранена в CMS:', error)
    }
    return false
  }
}
