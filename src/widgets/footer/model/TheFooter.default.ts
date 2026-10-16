import type { FooterConfig, FooterContacts, FooterData } from './TheFooter.types'

/**
 * Приводит `footer` из CMS к конфигу футера. Заданный футер описывает страницу целиком: чего в нём нет,
 * того на сайте не будет (регламент, телефон, режим работы). Исключение: без блока `contacts` берутся
 * контакты базового футера (`base`, главной), чтобы страница с одними ссылками не осталась без почты.
 * Форма в админке не умеет убирать необязательный объект целиком, поэтому недозаполненные ссылки, регламент,
 * телефон и почты отбрасываем: иначе на сайте появятся пустые ссылки.
 */
export function resolveFooter(footer: Partial<FooterData>, base: FooterConfig): FooterConfig {
  const regulation = footer.regulation?.href && footer.regulation.title ? footer.regulation : null
  return {
    links: footer.links?.filter((link) => link.href && link.title) ?? [],
    regulation,
    contacts: footer.contacts ? resolveContacts(footer.contacts) : base.contacts,
  }
}

function resolveContacts(contacts: NonNullable<FooterData['contacts']>): Partial<FooterContacts> {
  const link = contacts.link?.href && contacts.link.label ? contacts.link : undefined
  const phone = contacts.phone?.href && contacts.phone.label ? contacts.phone : null
  const extraGroups = contacts.extraGroups?.filter((group) => group.email)
  return {
    email: contacts.email || null,
    phone,
    workHours: contacts.workHours || null,
    ...(link ? { link } : {}),
    ...(phone && contacts.phoneTitle ? { phoneTitle: contacts.phoneTitle } : {}),
    ...(extraGroups?.length ? { extraGroups } : {}),
  }
}
