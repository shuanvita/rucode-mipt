import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Checkbox from './Checkbox.vue'

describe('Checkbox.vue', () => {
  it('переключает v-model по клику', async () => {
    const wrapper = await mountSuspended(Checkbox, {
      props: { modelValue: false, 'onUpdate:modelValue': (v: boolean) => wrapper.setProps({ modelValue: v }) },
      slots: { default: () => 'Согласие' },
    })

    const input = wrapper.find('input[type="checkbox"]')
    expect((input.element as HTMLInputElement).checked).toBe(false)

    await input.setValue(true)
    expect((input.element as HTMLInputElement).checked).toBe(true)
  })

  it('рендерит слот', async () => {
    const wrapper = await mountSuspended(Checkbox, {
      props: { modelValue: false },
      slots: { default: () => 'Текст согласия' },
    })
    expect(wrapper.text()).toContain('Текст согласия')
  })

  it('показывает сообщение об ошибке', async () => {
    const wrapper = await mountSuspended(Checkbox, {
      props: { modelValue: false, error: true, errorMessage: 'Обязательное поле' },
      slots: { default: () => 'Согласие' },
    })
    expect(wrapper.text()).toContain('Обязательное поле')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })
})
