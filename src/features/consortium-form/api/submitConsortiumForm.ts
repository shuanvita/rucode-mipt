import { getPhoneCountry } from '~/shared/config'
import type { ConsortiumFormData } from '~/features/consortium-form'

export interface SubmitConsortiumResult {
  success: boolean
  error?: string
}

// TODO Уточнить endpoint и набор полей, которые ожидает бек
export const DEFAULT_CONSORTIUM_ENDPOINT = '/new/regConsortium.php'

export async function submitConsortiumForm(
  data: ConsortiumFormData,
  endpoint: string = DEFAULT_CONSORTIUM_ENDPOINT,
): Promise<SubmitConsortiumResult> {
  const body = new FormData()
  body.append('organization', data.organization.trim())
  body.append('name', data.name.trim())
  body.append('post', data.post.trim())
  body.append('email', data.email.trim())
  body.append('phone', `+${getPhoneCountry(data.phoneCountry).dialCode}${data.phone}`)
  body.append('audience', data.audience)
  body.append('audienceOther', data.audienceOther.trim())
  body.append('promotion', data.promotion.join(', '))
  body.append('promotionOther', data.promotionOther.trim())
  body.append('eventsExperience', data.eventsExperience)
  body.append('partnershipExperience', data.partnershipExperience)

  try {
    await $fetch(endpoint, { method: 'POST', body })
    return { success: true }
  } catch (error) {
    if (import.meta.dev) {
      console.error('[consortium-form] ошибка отправки формы:', error)
    }
    return { success: false, error: 'Не удалось отправить форму. Попробуйте ещё раз позже.' }
  }
}
