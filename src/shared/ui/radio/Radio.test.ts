import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Radio from './Radio.vue'

describe('Radio.vue', () => {
  it('выставляет v-model в value по клику', async () => {
    const updates: (string | undefined)[] = []
    const wrapper = await mountSuspended(Radio, {
      props: {
        modelValue: '',
        value: 'Да',
        name: 'q',
        'onUpdate:modelValue': (v: string | undefined) => {
          updates.push(v)
        },
      },
      slots: { default: () => 'Да' },
    })

    const input = wrapper.find('input[type="radio"]')
    expect((input.element as HTMLInputElement).checked).toBe(false)

    await input.setValue(true)
    expect(updates).toEqual(['Да'])
  })

  it('отмечен, когда v-model совпадает с value', async () => {
    const wrapper = await mountSuspended(Radio, {
      props: { modelValue: 'Нет', value: 'Нет' },
      slots: { default: () => 'Нет' },
    })
    expect((wrapper.find('input').element as HTMLInputElement).checked).toBe(true)
  })

  it('рендерит слот и помечает ошибку через aria-invalid', async () => {
    const wrapper = await mountSuspended(Radio, {
      props: { modelValue: '', value: 'Да', error: true },
      slots: { default: () => 'Вариант' },
    })
    expect(wrapper.text()).toContain('Вариант')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })
})
