import { describe, expect, it } from 'vitest'
import { footerConfigs } from './TheFooter.config'
import { defaultFooter, resolveFooter } from './TheFooter.default'

const base = footerConfigs.home

describe('defaultFooter', () => {
  it('без своих ссылок: якоря главной на других страницах не работают', () => {
    expect(defaultFooter.links).toEqual([])
    expect(defaultFooter.regulation).toBeNull()
    expect(defaultFooter.contacts).toBe(footerConfigs.home.contacts)
  })

  it('страница с контактами, но без ссылок, остаётся без ссылок', () => {
    expect(resolveFooter({ contacts: { email: 'a@rucode.net' } }, defaultFooter).links).toEqual([])
  })
})

describe('resolveFooter', () => {
  it('страница с одними ссылками получает контакты базового футера и не получает регламента', () => {
    const links = [{ href: '#about', title: 'О нас' }]
    expect(resolveFooter({ links }, base)).toEqual({
      links,
      regulation: null,
      contacts: base.contacts,
    })
  })

  it('заданные контакты заменяют контакты по умолчанию целиком', () => {
    const { contacts } = resolveFooter(
      { links: [], contacts: { email: 'a@rucode.net', workHours: 'с 10 до 18' } },
      base,
    )
    expect(contacts).toEqual({ email: 'a@rucode.net', phone: null, workHours: 'с 10 до 18' })
  })

  it('сохраняет регламент, телефон, ссылку и дополнительные почты', () => {
    const footer = {
      links: [],
      regulation: { href: '/r.pdf', title: 'Регламент' },
      contacts: {
        email: 'a@rucode.net',
        link: { label: 'Telegram', href: 'https://t.me/x' },
        phoneTitle: 'Связь',
        phone: { label: '+7 495', href: 'tel:+7495' },
        extraGroups: [{ title: 'Поддержка', email: 's@rucode.net' }],
      },
    }
    const config = resolveFooter(footer, base)
    expect(config.regulation).toEqual(footer.regulation)
    expect(config.contacts).toMatchObject({
      link: footer.contacts.link,
      phone: footer.contacts.phone,
      phoneTitle: 'Связь',
      extraGroups: footer.contacts.extraGroups,
    })
  })

  it('отбрасывает недозаполненные ссылки, регламент, телефон и почты', () => {
    const config = resolveFooter(
      {
        links: [
          { href: '', title: 'Без адреса' },
          { href: '#a', title: '' },
          { href: '#b', title: 'Есть' },
        ],
        regulation: { href: '', title: 'Регламент' },
        contacts: {
          email: '',
          link: { label: '', href: 'https://t.me/x' },
          phoneTitle: 'Связь',
          phone: { label: '+7 495', href: '' },
          extraGroups: [{ title: 'Пусто', email: '' }],
        },
      },
      base,
    )
    expect(config).toEqual({
      links: [{ href: '#b', title: 'Есть' }],
      regulation: null,
      contacts: { email: null, phone: null, workHours: null },
    })
  })

  it('не меняет базовый футер', () => {
    resolveFooter({ links: [{ href: '#a', title: 'A' }] }, base).links.push({
      href: '#b',
      title: 'B',
    })
    expect(base.links.map((link) => link.href)).not.toContain('#b')
  })
})
