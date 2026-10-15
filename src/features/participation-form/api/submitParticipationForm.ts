import { getPhoneCountry } from '~/shared/config'
import { submitCmsRequest, type CmsRequestFields } from '~/shared/api'
import type { ParticipationFormData } from '~/features/participation-form'

export interface SubmitParticipationResult {
  success: boolean
  error?: string
}

/** Ключ формы в заявках CMS: по нему менеджеры фильтруют список. */
export const PARTICIPATION_FORM_KEY = 'participation'

/** Поля заявки для CMS: мероприятия остаются списком. */
export function buildParticipationFields(data: ParticipationFormData): CmsRequestFields {
  return {
    surname: data.surname.trim(),
    name: data.name.trim(),
    patronymic: data.patronymic.trim(),
    email: data.email.trim(),
    phone: `+${getPhoneCountry(data.phoneCountry).dialCode}${data.phone}`,
    region: data.region,
    ...(data.role ? { role: data.role } : {}),
    events: data.events,
  }
}

/** Заявка сохраняется в CMS (`POST /api/cms-requests` -> crito-api), других получателей нет. */
export async function submitParticipationForm(
  data: ParticipationFormData,
): Promise<SubmitParticipationResult> {
  const accepted = await submitCmsRequest(PARTICIPATION_FORM_KEY, buildParticipationFields(data))
  if (accepted) return { success: true }
  return { success: false, error: 'Не удалось отправить форму. Попробуйте ещё раз позже.' }
}
