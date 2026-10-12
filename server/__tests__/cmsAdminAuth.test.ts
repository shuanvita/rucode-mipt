import { describe, expect, it } from 'vitest'
import { isCmsAdminAuthorized, parseBasicAuth } from '../utils/cmsAdminAuth'

const basic = (user: string, password: string) =>
  `Basic ${Buffer.from(`${user}:${password}`).toString('base64')}`

describe('parseBasicAuth', () => {
  it('разбирает логин и пароль', () => {
    expect(parseBasicAuth(basic('cms', 'secret'))).toEqual({ user: 'cms', password: 'secret' })
  })

  it('пароль может содержать двоеточие', () => {
    expect(parseBasicAuth(basic('cms', 'a:b:c'))).toEqual({ user: 'cms', password: 'a:b:c' })
  })

  it('отклоняет отсутствующий и некорректный заголовок', () => {
    expect(parseBasicAuth(undefined)).toBeNull()
    expect(parseBasicAuth('')).toBeNull()
    expect(parseBasicAuth('Bearer abc')).toBeNull()
    expect(parseBasicAuth('Basic')).toBeNull()
    expect(parseBasicAuth(`Basic ${Buffer.from('без-двоеточия').toString('base64')}`)).toBeNull()
  })
})

describe('isCmsAdminAuthorized', () => {
  it('пускает с верными данными', () => {
    expect(isCmsAdminAuthorized(basic('cms', 'secret'), 'cms', 'secret')).toBe(true)
  })

  it('отказывает при неверном пароле или логине', () => {
    expect(isCmsAdminAuthorized(basic('cms', 'wrong'), 'cms', 'secret')).toBe(false)
    expect(isCmsAdminAuthorized(basic('other', 'secret'), 'cms', 'secret')).toBe(false)
    expect(isCmsAdminAuthorized(basic('cms', 'secre'), 'cms', 'secret')).toBe(false)
    expect(isCmsAdminAuthorized(basic('cms', 'secrets'), 'cms', 'secret')).toBe(false)
  })

  it('отказывает без заголовка', () => {
    expect(isCmsAdminAuthorized(undefined, 'cms', 'secret')).toBe(false)
  })

  it('закрыто по умолчанию: без настроенных логина или пароля не пускает никого', () => {
    expect(isCmsAdminAuthorized(basic('', ''), '', '')).toBe(false)
    expect(isCmsAdminAuthorized(basic('', ''), undefined, undefined)).toBe(false)
    expect(isCmsAdminAuthorized(basic('cms', ''), 'cms', '')).toBe(false)
    expect(isCmsAdminAuthorized(basic('cms', 'secret'), '', 'secret')).toBe(false)
    expect(isCmsAdminAuthorized(undefined, '', '')).toBe(false)
  })
})
