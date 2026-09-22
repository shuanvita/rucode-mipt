export interface PhoneCountry {
  code: string
  name: string
  dialCode: string
  flag: string
  /** Группы цифр национального номера для маски и длины, например [3, 3, 2, 2] → (999) 999-99-99 */
  groups: number[]
}

export const PHONE_COUNTRIES: PhoneCountry[] = [
  { code: 'BY', name: 'Беларусь', dialCode: '375', flag: 'flag-by', groups: [2, 3, 2, 2] },
  { code: 'KZ', name: 'Казахстан', dialCode: '7', flag: 'flag-kz', groups: [3, 3, 2, 2] },
  { code: 'KG', name: 'Киргизия', dialCode: '996', flag: 'flag-kg', groups: [2, 3, 2, 2] },
  { code: 'RU', name: 'Россия', dialCode: '7', flag: 'flag-ru', groups: [3, 3, 2, 2] },
  { code: 'UZ', name: 'Узбекистан', dialCode: '998', flag: 'flag-uz', groups: [2, 3, 2, 2] },
]

export const DEFAULT_PHONE_COUNTRY = 'RU'

export function getPhoneCountry(code: string): PhoneCountry {
  return PHONE_COUNTRIES.find((country) => country.code === code) ?? PHONE_COUNTRIES[3]
}

export function getPhoneDigitsLength(code: string): number {
  return getPhoneCountry(code).groups.reduce((sum, size) => sum + size, 0)
}
