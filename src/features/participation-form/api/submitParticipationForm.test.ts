import { describe, expect, it } from 'vitest'
import { createEmptyParticipationForm } from '../model/ParticipationForm.types'
import { buildParticipationFields, buildParticipationLabels } from './submitParticipationForm'

const groups = {
  roleGroup: {
    legend: 'Я —',
    options: [
      { value: '1', label: 'Школьник' },
      { value: '7', label: 'Студент бакалавриата' },
    ],
  },
  eventsGroup: {
    legend: 'Мероприятия, которые планируете посетить:',
    options: [
      { value: '453', label: 'RuCode.Практикум' },
      { value: '458', label: 'RuCode.Премия' },
    ],
  },
}

const data = {
  ...createEmptyParticipationForm(),
  surname: 'Иванов',
  phone: '9161234567',
  phoneCountry: 'RU',
  role: '7',
  events: ['458', '453', '999'],
}

describe('buildParticipationFields', () => {
  it('роль и мероприятия уходят названиями, а не id; неизвестный id остаётся как есть', () => {
    const fields = buildParticipationFields(data, groups)
    expect(fields.role).toBe('Студент бакалавриата')
    expect(fields.events).toEqual(['RuCode.Премия', 'RuCode.Практикум', '999'])
  })

  it('без групп значения остаются id', () => {
    expect(buildParticipationFields(data).role).toBe('7')
  })
})

describe('buildParticipationLabels', () => {
  it('вопросы про роль и мероприятия берутся из групп блока', () => {
    const labels = buildParticipationLabels(groups)
    expect(labels.role).toBe('Я —')
    expect(labels.events).toBe('Мероприятия, которые планируете посетить:')
    expect(labels.surname).toBe('Фамилия')
  })

  it('без групп подставляются запасные подписи', () => {
    const labels = buildParticipationLabels()
    expect(labels.role).toBe('Роль')
    expect(labels.events).toBe('Мероприятия, которые планируете посетить')
  })
})
