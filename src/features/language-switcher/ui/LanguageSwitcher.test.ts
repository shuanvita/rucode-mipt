import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import LanguageSwitcher from './LanguageSwitcher.vue'

describe('LanguageSwitcher.vue', () => {
  it('показывает оба языка на странице с включённым en', async () => {
    const wrapper = await mountSuspended(LanguageSwitcher, { route: '/champ' })

    const links = wrapper.findAll('a')
    expect(links.map((link) => link.text())).toEqual(['ru', 'en'])
    expect(links.map((link) => link.attributes('href'))).toEqual(['/champ', '/en/champ'])
    expect(links[0]!.attributes('aria-current')).toBe('true')
  })

  it('ничего не рендерит на странице без английской версии', async () => {
    const wrapper = await mountSuspended(LanguageSwitcher, { route: '/award2026' })
    expect(wrapper.find('nav').exists()).toBe(false)
  })
})
