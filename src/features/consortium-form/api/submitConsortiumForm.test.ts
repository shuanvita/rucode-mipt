import { describe, expect, it } from 'vitest'
import { CONSORTIUM_QUESTIONS, createEmptyConsortiumForm } from '../model/ConsortiumForm.types'
import { buildConsortiumFields } from './submitConsortiumForm'

describe('buildConsortiumFields', () => {
  it('собирает поля заявки: телефон с кодом страны, списки остаются списками', () => {
    const fields = buildConsortiumFields({
      ...createEmptyConsortiumForm(),
      organization: ' ЦРИТО ',
      name: 'Иван',
      email: ' ivan@example.com ',
      phone: '9161234567',
      phoneCountry: 'RU',
      audience: 'Да',
      promotion: ['Публикации на ресурсах организации', 'Другое'],
      promotionOther: ' блог ',
    })

    expect(fields).toMatchObject({
      organization: 'ЦРИТО',
      name: 'Иван',
      email: 'ivan@example.com',
      phone: '+79161234567',
      audience: 'Да',
      promotion: ['Публикации на ресурсах организации', 'Другое'],
      promotionOther: 'блог',
    })
  })

  it('у каждого поля заявки есть вопрос для менеджера', () => {
    const fields = buildConsortiumFields(createEmptyConsortiumForm())
    for (const key of Object.keys(fields)) {
      expect(CONSORTIUM_QUESTIONS, `нет подписи для «${key}»`).toHaveProperty(key)
    }
  })
})
