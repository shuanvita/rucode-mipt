import { describe, it, expect } from 'vitest'
import { formatPhoneNumber } from './formatPhoneNumber'

describe('formatPhoneNumber', () => {
  it('форматирует полный номер из 10 цифр (группы 3-3-2-2)', () => {
    expect(formatPhoneNumber('9161234567', [3, 3, 2, 2])).toBe('(916) 123-45-67')
  })

  it('форматирует частично введённый номер', () => {
    expect(formatPhoneNumber('916', [3, 3, 2, 2])).toBe('(916)')
    expect(formatPhoneNumber('91', [3, 3, 2, 2])).toBe('(91')
    expect(formatPhoneNumber('', [3, 3, 2, 2])).toBe('')
  })

  it('форматирует номер из 9 цифр (группы 2-3-2-2)', () => {
    expect(formatPhoneNumber('291234567', [2, 3, 2, 2])).toBe('(29) 123-45-67')
  })

  it('игнорирует цифры сверх длины маски (ожидается, что вызывающий код уже обрежет строку)', () => {
    expect(formatPhoneNumber('91612345678888', [3, 3, 2, 2])).toBe('(916) 123-45-67')
  })
})
