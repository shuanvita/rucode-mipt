import { getPhoneDigitsLength } from '~/shared/config'
import { OTHER_OPTION } from './ConsortiumForm.types'
import type { ConsortiumFormData, ConsortiumFormErrors } from './ConsortiumForm.types'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateConsortiumForm(data: ConsortiumFormData): ConsortiumFormErrors {
  const errors: ConsortiumFormErrors = {}

  if (!data.organization.trim()) errors.organization = 'Укажите название организации'
  if (!data.name.trim()) errors.name = 'Укажите ФИО'
  if (!data.post.trim()) errors.post = 'Укажите должность'
  if (!EMAIL_RE.test(data.email.trim())) errors.email = 'Некорректный e-mail'
  if (data.phone.length !== getPhoneDigitsLength(data.phoneCountry)) {
    errors.phone = 'Некорректный номер телефона'
  }

  if (!data.audience) errors.audience = 'Выберите вариант'
  else if (data.audience === OTHER_OPTION && !data.audienceOther.trim()) {
    errors.audienceOther = 'Опишите свою ситуацию'
  }

  if (data.promotion.length === 0) errors.promotion = 'Выберите хотя бы один вариант'
  else if (data.promotion.includes(OTHER_OPTION) && !data.promotionOther.trim()) {
    errors.promotionOther = 'Опишите ваши возможности'
  }

  if (!data.eventsExperience) errors.eventsExperience = 'Выберите вариант'
  if (!data.partnershipExperience) errors.partnershipExperience = 'Выберите вариант'

  return errors
}
