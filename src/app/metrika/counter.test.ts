import { describe, expect, it } from 'vitest'
import { parseCounterId } from './counter'

describe('parseCounterId', () => {
  it('принимает номер из цифр', () => {
    expect(parseCounterId('69703567')).toBe(69703567)
    expect(parseCounterId(' 69703567 ')).toBe(69703567)
  })

  it('принимает число: так Nuxt отдаёт значение переменной окружения', () => {
    expect(parseCounterId(69703567)).toBe(69703567)
  })

  it('пустое и некорректное значение выключает счётчик', () => {
    for (const value of [
      '',
      '  ',
      'abc',
      '1; alert(1)',
      '-5',
      '1234567890123',
      undefined,
      null,
      -5,
      1.5,
      1234567890123,
      Number.NaN,
      {},
    ]) {
      expect(parseCounterId(value)).toBeNull()
    }
  })
})
