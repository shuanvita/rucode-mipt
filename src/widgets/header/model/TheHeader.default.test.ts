import { describe, expect, it } from 'vitest'
import { defaultHeader, resolveHeader } from './TheHeader.default'

describe('resolveHeader', () => {
  it('без шапки из CMS отдаёт шапку по умолчанию без ссылок', () => {
    expect(resolveHeader(undefined)).toEqual(defaultHeader)
    expect(resolveHeader(undefined).links).toEqual([])
  })

  it('шапка с одним логотипом получает пустой список ссылок', () => {
    expect(resolveHeader({ logo: { src: '/media/x.png' } })).toEqual({
      links: [],
      logo: { src: '/media/x.png' },
    })
  })

  it('сохраняет ссылки и логотипы страницы', () => {
    const header = {
      links: [{ href: '#about', title: 'О нас' }],
      partnerLogo: { src: '/p.png', alt: 'MWS', to: 'https://example.com' },
      supportLogos: [{ src: '/s.png' }],
    }
    expect(resolveHeader(header)).toEqual(header)
  })

  it('отбрасывает пустые логотипы и недозаполненные ссылки', () => {
    expect(
      resolveHeader({
        logo: { src: '' },
        partnerLogo: { src: '', alt: 'МТС', to: 'https://job.mts.ru/' },
        supportLogos: [{ src: '' }, { src: '/s.png' }],
        links: [
          { href: '', title: 'Без адреса' },
          { href: '#a', title: '' },
          { href: '#b', title: 'Есть' },
        ],
      }),
    ).toEqual({ links: [{ href: '#b', title: 'Есть' }], supportLogos: [{ src: '/s.png' }] })
  })

  it('оставляет ссылки с переводом по titleKey', () => {
    const links = [{ href: '#about', title: '', titleKey: 'nav.champ.about' }]
    expect(resolveHeader({ links }).links).toEqual(links)
  })

  it('передаёт флажок «те же ссылки в футере» только когда он включён', () => {
    expect(resolveHeader({ linksInFooter: true }).linksInFooter).toBe(true)
    expect(resolveHeader({ linksInFooter: false })).not.toHaveProperty('linksInFooter')
    expect(resolveHeader(undefined)).not.toHaveProperty('linksInFooter')
  })

  it('не меняет общую шапку по умолчанию', () => {
    resolveHeader({ links: [{ href: '#a', title: 'A' }] }).links.push({ href: '#b', title: 'B' })
    expect(defaultHeader.links).toEqual([])
  })
})
