import { describe, it, expect } from 'vitest'
import { validateConsortiumForm } from './validateConsortiumForm'
import { createEmptyConsortiumForm } from './ConsortiumForm.types'

function validForm() {
  return {
    organization: 'ЦРИТО МФТИ',
    name: 'Иванов Иван Иванович',
    post: 'Руководитель группы',
    email: 'ivan@example.com',
    phone: '9161234567',
    phoneCountry: 'RU',
    audience: 'Да',
    audienceOther: '',
    promotion: ['Публикации на ресурсах организации'],
    promotionOther: '',
    eventsExperience: 'Да',
    partnershipExperience: 'Нет',
  }
}

describe('validateConsortiumForm', () => {
  it('не возвращает ошибок для валидной формы', () => {
    expect(validateConsortiumForm(validForm())).toEqual({})
  })

  it('требует все обязательные поля для пустой формы', () => {
    const errors = validateConsortiumForm(createEmptyConsortiumForm())
    expect(Object.keys(errors).sort()).toEqual(
      [
        'organization',
        'name',
        'post',
        'email',
        'phone',
        'audience',
        'promotion',
        'eventsExperience',
        'partnershipExperience',
      ].sort(),
    )
  })

  it('проверяет формат email и длину телефона', () => {
    expect(validateConsortiumForm({ ...validForm(), email: 'nope' }).email).toBeTruthy()
    expect(validateConsortiumForm({ ...validForm(), phone: '916' }).phone).toBeTruthy()
  })

  it('требует текст, если выбрано «Другое» в радио-группе', () => {
    const data = { ...validForm(), audience: 'Другое' }
    expect(validateConsortiumForm(data).audienceOther).toBeTruthy()
    expect(
      validateConsortiumForm({ ...data, audienceOther: 'Опишу' }).audienceOther,
    ).toBeUndefined()
  })

  it('требует текст, если среди возможностей продвижения выбрано «Другое»', () => {
    const data = { ...validForm(), promotion: ['Другое'] }
    expect(validateConsortiumForm(data).promotionOther).toBeTruthy()
    expect(
      validateConsortiumForm({ ...data, promotionOther: 'Свои каналы' }).promotionOther,
    ).toBeUndefined()
  })
})
