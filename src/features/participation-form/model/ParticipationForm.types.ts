export interface ParticipationFormData {
  surname: string
  name: string
  patronymic: string
  email: string
  phone: string
  region: string
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
    region: '',
    agreement: false,
  }
}
