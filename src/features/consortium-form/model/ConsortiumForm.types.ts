import { DEFAULT_PHONE_COUNTRY } from '~/shared/config'

export const OTHER_OPTION = 'Другое'
export const AUDIENCE_OPTIONS = ['Да', 'Нет', OTHER_OPTION] as const
export const YES_NO_OPTIONS = ['Да', 'Нет'] as const
export const PROMOTION_OPTIONS = [
  'Публикации на ресурсах организации',
  'Взаимодействие с региональными СМИ',
  OTHER_OPTION,
] as const

export interface ConsortiumFormData {
  organization: string
  name: string
  post: string
  email: string
  phone: string
  phoneCountry: string
  audience: string
  audienceOther: string
  promotion: string[]
  promotionOther: string
  eventsExperience: string
  partnershipExperience: string
}

export type ConsortiumFormErrors = Partial<Record<keyof ConsortiumFormData, string>>

export function createEmptyConsortiumForm(): ConsortiumFormData {
  return {
    organization: '',
    name: '',
    post: '',
    email: '',
    phone: '',
    phoneCountry: DEFAULT_PHONE_COUNTRY,
    audience: '',
    audienceOther: '',
    promotion: [],
    promotionOther: '',
    eventsExperience: '',
    partnershipExperience: '',
  }
}
