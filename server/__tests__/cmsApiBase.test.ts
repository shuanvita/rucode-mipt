import { describe, expect, it } from 'vitest'
import { getCmsApiBase } from '../utils/cmsApiBase'

describe('getCmsApiBase', () => {
  it('берёт явный адрес API и убирает завершающие слэши', () => {
    expect(getCmsApiBase('https://edu.mipt.ru/adm/cms-admin/cms-api/', '')).toBe(
      'https://edu.mipt.ru/adm/cms-admin/cms-api',
    )
    expect(getCmsApiBase(' http://127.0.0.1:3200 ', 'http://other/public/rucode')).toBe(
      'http://127.0.0.1:3200',
    )
  })

  it('без явного адреса использует происхождение адреса чтения', () => {
    expect(getCmsApiBase('', 'http://127.0.0.1:3200/public/rucode')).toBe('http://127.0.0.1:3200')
    expect(getCmsApiBase(undefined, 'https://cms.example.ru/public/rucode')).toBe(
      'https://cms.example.ru',
    )
  })

  it('возвращает пустую строку, если CMS не настроена или адрес некорректен', () => {
    expect(getCmsApiBase('', '')).toBe('')
    expect(getCmsApiBase(undefined, undefined)).toBe('')
    expect(getCmsApiBase('', 'не адрес')).toBe('')
  })
})
