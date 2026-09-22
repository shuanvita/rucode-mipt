import type { ParticipationFormData } from '../model/ParticipationForm.types'

export interface SubmitParticipationResult {
  success: boolean
  error?: string
}

/**
 * Отправляет заявку на существующий внешний backend.
 * Формат тела запроса (имена полей, content-type) не задокументирован — использованы
 * разумные предположения (FormData, поля surname/name/patronymic/email/phone/region).
 * При уточнении контракта менять нужно только этот файл.
 */
export async function submitParticipationForm(
  data: ParticipationFormData,
): Promise<SubmitParticipationResult> {
  const body = new FormData()
  body.append('surname', data.surname.trim())
  body.append('name', data.name.trim())
  body.append('patronymic', data.patronymic.trim())
  body.append('email', data.email.trim())
  body.append('phone', `+7${data.phone}`)
  body.append('region', data.region)

  try {
    await $fetch('/new/regMerAdmin25.php', { method: 'POST', body })
    return { success: true }
  } catch (error) {
    if (import.meta.dev) {
      console.error('[participation-form] ошибка отправки формы:', error)
    }
    return { success: false, error: 'Не удалось отправить форму. Попробуйте ещё раз позже.' }
  }
}
