import { describe, it, expect } from 'vitest'
import { formatRuPhone } from './formatRuPhone'

describe('formatRuPhone', () => {
  it('форматирует полный номер из 10 цифр', () => {
    expect(formatRuPhone('9161234567')).toBe('(916) 123-45-67')
  })

  it('форматирует частично введённый номер', () => {
    expect(formatRuPhone('916')).toBe('(916)')
    expect(formatRuPhone('91')).toBe('(91')
    expect(formatRuPhone('')).toBe('')
  })

  it('игнорирует цифры сверх 10 знаков (ожидается, что вызывающий код уже обрежет строку)', () => {
    expect(formatRuPhone('91612345678888')).toBe('(916) 123-45-67')
  })
})
