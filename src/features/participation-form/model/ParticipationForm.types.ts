import { DEFAULT_PHONE_COUNTRY } from '~/shared/config'

/**
 * Подписи полей формы: их показывает разметка и их же получают менеджеры в CMS вместо ключей.
 * Вопросы про роль и мероприятия приходят из CMS-блока (`legend` группы), здесь только запасные.
 */
export const PARTICIPATION_QUESTIONS = {
  surname: 'Фамилия',
  name: 'Имя',
  patronymic: 'Отчество',
  email: 'Ваш Email',
  phone: 'Телефон',
  region: 'Регион',
  role: 'Роль',
  events: 'Мероприятия, которые планируете посетить',
} as const

export interface ParticipationFormData {
  surname: string
  name: string
  patronymic: string
  email: string
  phone: string
  phoneCountry: string
  region: string
  role: string
  events: string[]
  agreement: boolean
}

export type ParticipationFormErrors = Partial<Record<keyof ParticipationFormData, string>>

export function createEmptyParticipationForm(): ParticipationFormData {
  return {
    surname: '',
    name: '',
    patronymic: '',
    email: '',
    phone: '',
    phoneCountry: DEFAULT_PHONE_COUNTRY,
    region: '',
    role: '',
    events: [],
    agreement: false,
  }
}

export interface ParticipationOption {
  value: string
  label: string
}

export interface ParticipationOptionGroup {
  legend: string
  options: ParticipationOption[]
}
