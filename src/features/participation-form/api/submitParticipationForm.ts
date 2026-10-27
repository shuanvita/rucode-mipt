import { getPhoneCountry } from '~/shared/config'
import { submitCmsRequest, type CmsRequestFields, type CmsRequestLabels } from '~/shared/api'
import type { ParticipationFormData } from '~/features/participation-form'
import {
  PARTICIPATION_QUESTIONS,
  type ParticipationOptionGroup,
} from '../model/ParticipationForm.types'

export interface SubmitParticipationResult {
  success: boolean
  error?: string
}

/** Группы вариантов (роль, мероприятия): их вопросы и названия вариантов приходят из CMS-блока. */
export interface ParticipationGroups {
  roleGroup?: ParticipationOptionGroup
  eventsGroup?: ParticipationOptionGroup
}

/** Ключ формы в заявках CMS: по нему менеджеры фильтруют список. */
export const PARTICIPATION_FORM_KEY = 'participation'

/** Название варианта, как его видел посетитель; id остаётся запасным значением, если варианта нет в группе. */
function optionLabel(group: ParticipationOptionGroup | undefined, value: string): string {
  return group?.options.find((option) => option.value === value)?.label ?? value
}

/**
 * Поля заявки для CMS: мероприятия остаются списком. Роль и мероприятия уходят названиями вариантов,
 * а не id из CMS-блока, иначе менеджер увидит в заявке «7» вместо «Студент бакалавриата».
 */
export function buildParticipationFields(
  data: ParticipationFormData,
  groups: ParticipationGroups = {},
): CmsRequestFields {
  return {
    surname: data.surname.trim(),
    name: data.name.trim(),
    patronymic: data.patronymic.trim(),
    email: data.email.trim(),
    phone: `+${getPhoneCountry(data.phoneCountry).dialCode}${data.phone}`,
    region: data.region,
    ...(data.role ? { role: optionLabel(groups.roleGroup, data.role) } : {}),
    events: data.events.map((value) => optionLabel(groups.eventsGroup, value)),
  }
}

/** Подписи полей: вопрос группы из CMS-блока, а без неё запасной. */
export function buildParticipationLabels(groups: ParticipationGroups = {}): CmsRequestLabels {
  return {
    ...PARTICIPATION_QUESTIONS,
    role: groups.roleGroup?.legend || PARTICIPATION_QUESTIONS.role,
    events: groups.eventsGroup?.legend || PARTICIPATION_QUESTIONS.events,
  }
}

/** Заявка сохраняется в CMS (`POST /api/cms-requests` -> crito-api), других получателей нет. */
export async function submitParticipationForm(
  data: ParticipationFormData,
  groups: ParticipationGroups = {},
): Promise<SubmitParticipationResult> {
  const accepted = await submitCmsRequest(
    PARTICIPATION_FORM_KEY,
    buildParticipationFields(data, groups),
    buildParticipationLabels(groups),
  )
  if (accepted) return { success: true }
  return { success: false, error: 'Не удалось отправить форму. Попробуйте ещё раз позже.' }
}
