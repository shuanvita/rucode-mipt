import { describe, it, expect } from 'vitest'
import { validateParticipationForm } from './validateParticipationForm'
import { createEmptyParticipationForm } from './ParticipationForm.types'

function validForm() {
  return {
    surname: 'Иванов',
    name: 'Иван',
    patronymic: '',
    email: 'ivan@example.com',
    phone: '9161234567',
    phoneCountry: 'RU',
    region: 'moscow',
    agreement: true,
  }
}

describe('validateParticipationForm', () => {
  it('не возвращает ошибок для валидной формы (отчество опционально)', () => {
    expect(validateParticipationForm(validForm())).toEqual({})
  })

  it('требует фамилию, имя, email, телефон, регион и согласие для пустой формы', () => {
    const errors = validateParticipationForm(createEmptyParticipationForm())
    expect(Object.keys(errors).sort()).toEqual(
      ['surname', 'name', 'email', 'phone', 'region', 'agreement'].sort(),
    )
  })

  it('проверяет формат email', () => {
    const errors = validateParticipationForm({ ...validForm(), email: 'not-an-email' })
    expect(errors.email).toBeTruthy()
  })

  it('требует ровно 10 цифр телефона', () => {
    expect(validateParticipationForm({ ...validForm(), phone: '916123' }).phone).toBeTruthy()
    expect(validateParticipationForm({ ...validForm(), phone: '9161234567' }).phone).toBeUndefined()
  })

  it('требует отмеченный чекбокс согласия', () => {
    expect(validateParticipationForm({ ...validForm(), agreement: false }).agreement).toBeTruthy()
  })

  it('проверяет длину номера в зависимости от страны', () => {
    expect(
      validateParticipationForm({ ...validForm(), phoneCountry: 'BY', phone: '9161234567' }).phone,
    ).toBeTruthy()
    expect(
      validateParticipationForm({ ...validForm(), phoneCountry: 'BY', phone: '291234567' }).phone,
    ).toBeUndefined()
  })
})
