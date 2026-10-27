import { DEFAULT_PHONE_COUNTRY } from '~/shared/config'

export const OTHER_OPTION = 'Другое'
export const AUDIENCE_OPTIONS = ['Да', 'Нет', OTHER_OPTION] as const
export const YES_NO_OPTIONS = ['Да', 'Нет'] as const
export const PROMOTION_OPTIONS = [
  'Публикации на ресурсах организации',
  'Взаимодействие с региональными СМИ',
  OTHER_OPTION,
] as const

/**
 * Вопросы формы: их показывает разметка и их же получают менеджеры в CMS вместо ключей полей.
 * Одна константа на оба места, чтобы подпись в заявке не разошлась с формой.
 */
export const CONSORTIUM_QUESTIONS = {
  organization: 'Название организации',
  name: 'ФИО',
  post: 'Должность в организации',
  email: 'Почта',
  phone: 'Телефон',
  audience: 'Есть ли у Вас возможность привлечения на ИТ-чемпионат не менее 50 участников?',
  audienceOther: `Описание ситуации (ответ «${OTHER_OPTION}» на вопрос о привлечении участников)`,
  promotion: 'Какие у Вашей организации есть возможности продвижения? (1 и более вариантов)',
  promotionOther: `Описание возможностей продвижения (вариант «${OTHER_OPTION}»)`,
  eventsExperience: 'Есть ли у Вашей организации опыт проведения ИТ-мероприятий?',
  partnershipExperience:
    'Есть ли у Вашей организации опыт партнерского взаимодействия с ИТ-компаниями?',
} as const

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
