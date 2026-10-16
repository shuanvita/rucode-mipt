import { describe, expect, it } from 'vitest'
import { defaultFooter, resolveFooter } from './TheFooter.default'

describe('resolveFooter', () => {
  it('без футера из CMS отдаёт пустой футер: ни ссылок, ни регламента, ни контактов', () => {
    expect(resolveFooter(undefined)).toEqual(defaultFooter)
    expect(defaultFooter).toEqual({ links: [] })
    expect(resolveFooter({ links: [], contacts: {} })).toEqual({ links: [] })
  })

  it('страница с одними ссылками остаётся без контактов и регламента', () => {
    const links = [{ href: '#about', title: 'О нас' }]
    expect(resolveFooter({ links })).toEqual({ links })
  })

  it('показывает только заполненные контакты', () => {
    expect(
      resolveFooter({ contacts: { email: 'a@rucode.net', workHours: 'с 10 до 18' } }).contacts,
    ).toEqual({ email: 'a@rucode.net', workHours: 'с 10 до 18' })
  })

  it('сохраняет регламент, сайт, телефон, ссылку и дополнительные почты', () => {
    const footer = {
      links: [],
      regulation: { href: '/r.pdf', title: 'Регламент' },
      contacts: {
        email: 'a@rucode.net',
        site: { label: 'rucode.net', href: 'https://rucode.net/' },
        link: { label: 'Telegram', href: 'https://t.me/x' },
        phoneTitle: 'Связь',
        phone: { label: '+7 495', href: 'tel:+7495' },
        extraGroups: [{ title: 'Поддержка', email: 's@rucode.net' }],
      },
    }
    const config = resolveFooter(footer)
    expect(config.regulation).toEqual(footer.regulation)
    expect(config.contacts).toEqual(footer.contacts)
  })

  it('отбрасывает недозаполненные ссылки, регламент, сайт, телефон и почты', () => {
    expect(
      resolveFooter({
        links: [
          { href: '', title: 'Без адреса' },
          { href: '#a', title: '' },
          { href: '#b', title: 'Есть' },
        ],
        regulation: { href: '', title: 'Регламент' },
        contacts: {
          email: '',
          site: { label: 'rucode.net', href: '' },
          link: { label: '', href: 'https://t.me/x' },
          phoneTitle: 'Связь',
          phone: { label: '+7 495', href: '' },
          extraGroups: [{ title: 'Пусто', email: '' }],
        },
      }),
    ).toEqual({ links: [{ href: '#b', title: 'Есть' }] })
  })

  it('оставляет записи с переводом по titleKey (страницы с английской версией)', () => {
    const footer = {
      links: [{ href: '#about', title: '', titleKey: 'nav.champ.about' }],
      regulation: { href: '/r.pdf', title: '', titleKey: 'footer.champRegulation' },
      contacts: {
        phone: { label: '+7 495', href: 'tel:+7495' },
        phoneTitle: 'Связь',
        phoneTitleKey: 'footer.contactTitle',
        workHours: 'с 10 до 18',
        workHoursKey: 'footer.champWorkHours',
      },
    }
    expect(resolveFooter(footer)).toEqual(footer)
  })

  it('не меняет общий футер по умолчанию', () => {
    resolveFooter(undefined).links.push({ href: '#b', title: 'B' })
    expect(defaultFooter.links).toEqual([])
  })
})
