import { DEFAULT_PHONE_COUNTRY } from '~/shared/config'

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
