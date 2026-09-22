import type { ParticipationFormData, ParticipationFormErrors } from './ParticipationForm.types'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateParticipationForm(data: ParticipationFormData): ParticipationFormErrors {
  const errors: ParticipationFormErrors = {}

  if (!data.surname.trim()) errors.surname = 'Укажите фамилию'
  if (!data.name.trim()) errors.name = 'Укажите имя'
  if (!EMAIL_RE.test(data.email.trim())) errors.email = 'Некорректный e-mail'
  if (data.phone.length !== 10) errors.phone = 'Некорректный номер телефона'
  if (!data.region) errors.region = 'Выберите регион'
  if (!data.agreement) errors.agreement = 'Необходимо согласие на обработку персональных данных'

  return errors
}
