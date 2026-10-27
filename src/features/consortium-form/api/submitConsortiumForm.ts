import { getPhoneCountry } from '~/shared/config'
import { submitCmsRequest, type CmsRequestFields } from '~/shared/api'
import type { ConsortiumFormData } from '~/features/consortium-form'
import { CONSORTIUM_QUESTIONS } from '../model/ConsortiumForm.types'

export interface SubmitConsortiumResult {
  success: boolean
  error?: string
}

/** Ключ формы в заявках CMS: по нему менеджеры фильтруют список. */
export const CONSORTIUM_FORM_KEY = 'consortium'

/** Поля заявки для CMS: списки остаются списками. */
export function buildConsortiumFields(data: ConsortiumFormData): CmsRequestFields {
  return {
    organization: data.organization.trim(),
    name: data.name.trim(),
    post: data.post.trim(),
    email: data.email.trim(),
    phone: `+${getPhoneCountry(data.phoneCountry).dialCode}${data.phone}`,
    audience: data.audience,
    audienceOther: data.audienceOther.trim(),
    promotion: data.promotion,
    promotionOther: data.promotionOther.trim(),
    eventsExperience: data.eventsExperience,
    partnershipExperience: data.partnershipExperience,
  }
}

/** Заявка сохраняется в CMS (`POST /api/cms-requests` -> crito-api), других получателей нет. */
export async function submitConsortiumForm(
  data: ConsortiumFormData,
): Promise<SubmitConsortiumResult> {
  const accepted = await submitCmsRequest(
    CONSORTIUM_FORM_KEY,
    buildConsortiumFields(data),
    CONSORTIUM_QUESTIONS,
  )
  if (accepted) return { success: true }
  return { success: false, error: 'Не удалось отправить форму. Попробуйте ещё раз позже.' }
}
