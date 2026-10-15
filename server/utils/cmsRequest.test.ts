import { describe, expect, it } from 'vitest'
import { buildCmsRequestBody } from './cmsRequest'

describe('buildCmsRequestBody', () => {
  it('оставляет только известные ключи', () => {
    expect(
      buildCmsRequestBody({
        form: 'consortium',
        fields: { name: 'Иван', promotion: ['a', 'b'] },
        pageUrl: 'https://rucode.example/consortium',
        website: 'x',
        extra: 1,
      }),
    ).toEqual({
      form: 'consortium',
      fields: { name: 'Иван', promotion: ['a', 'b'] },
      pageUrl: 'https://rucode.example/consortium',
    })
  })

  it('pageUrl необязателен и обрезается', () => {
    expect(buildCmsRequestBody({ form: 'f', fields: { a: 'b' } })).toEqual({
      form: 'f',
      fields: { a: 'b' },
    })
    const long = buildCmsRequestBody({ form: 'f', fields: { a: 'b' }, pageUrl: 'x'.repeat(3000) })
    expect(long?.pageUrl).toHaveLength(2000)
  })

  it('отвергает неверную форму данных', () => {
    for (const bad of [
      null,
      'x',
      [],
      {},
      { form: 'bad form', fields: { a: 'b' } },
      { form: 'f' },
      { form: 'f', fields: {} },
      { form: 'f', fields: { a: 1 } },
      { form: 'f', fields: { a: { b: 'c' } } },
      { form: 'f', fields: { a: [1] } },
    ]) {
      expect(buildCmsRequestBody(bad)).toBeNull()
    }
  })
})
