import { getPhoneCountry } from '~/shared/config'
import type { ParticipationFormData } from '../model/ParticipationForm.types'

export interface SubmitParticipationResult {
  success: boolean
  error?: string
}

export const DEFAULT_PARTICIPATION_ENDPOINT = '/new/regMerAdmin25.php'

export async function submitParticipationForm(
  data: ParticipationFormData,
  endpoint: string = DEFAULT_PARTICIPATION_ENDPOINT,
): Promise<SubmitParticipationResult> {
  const body = new FormData()
  body.append('surname', data.surname.trim())
  body.append('name', data.name.trim())
  body.append('patronymic', data.patronymic.trim())
  body.append('email', data.email.trim())
  body.append('phone', `+${getPhoneCountry(data.phoneCountry).dialCode}${data.phone}`)
  body.append('region', data.region)

  try {
    await $fetch(endpoint, { method: 'POST', body })
    return { success: true }
  } catch (error) {
    if (import.meta.dev) {
      console.error('[participation-form] ошибка отправки формы:', error)
    }
    return { success: false, error: 'Не удалось отправить форму. Попробуйте ещё раз позже.' }
  }
}
