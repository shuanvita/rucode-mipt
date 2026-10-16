import type { FooterContacts, FooterData, NavLink } from './TheFooter.types'

/**
 * Футер по умолчанию: пустой. Кроме логотипа и соцсетей (они в шаблоне) всё задаётся в админке:
 * ссылки, регламент, ссылка на сайт, почта, телефон. Якоря главной (`#tracks`) на других страницах не работают,
 * как и ссылки шапки, поэтому своих у футера нет, пока их не зададут.
 */
export const defaultFooter: FooterData = { links: [] }

/**
 * Приводит `footer` из CMS (или `definePageMeta`) к данным футера. Показывается только заполненное: форма
 * в админке не умеет убирать необязательный объект целиком, поэтому недозаполненные ссылки, регламент,
 * телефон и почты отбрасываем, иначе на сайте появятся пустые ссылки. Запись с переводом (`titleKey`) остаётся.
 * `headerLinks` передаётся, когда на странице включено «Те же ссылки в футере»: тогда они заменяют ссылки футера
 * (даже если у шапки их нет: включённый флажок значит «ссылки как в шапке»).
 */
export function resolveFooter(
  footer: Partial<FooterData> | undefined,
  headerLinks?: NavLink[],
): FooterData {
  const regulation =
    footer?.regulation?.href && (footer.regulation.title || footer.regulation.titleKey)
      ? footer.regulation
      : undefined
  const contacts = footer?.contacts ? resolveContacts(footer.contacts) : undefined
  return {
    links:
      headerLinks?.map((link) => ({ ...link })) ??
      footer?.links?.filter((link) => link.href && (link.title || link.titleKey)) ??
      [],
    ...(regulation ? { regulation } : {}),
    ...(contacts ? { contacts } : {}),
  }
}

function resolveContacts(contacts: FooterContacts): FooterContacts | undefined {
  const site = contacts.site?.href && contacts.site.label ? contacts.site : undefined
  const link = contacts.link?.href && contacts.link.label ? contacts.link : undefined
  const phone = contacts.phone?.href && contacts.phone.label ? contacts.phone : undefined
  const extraGroups = contacts.extraGroups?.filter((group) => group.email)
  const resolved: FooterContacts = {
    ...(contacts.email ? { email: contacts.email } : {}),
    ...(site ? { site } : {}),
    ...(link ? { link } : {}),
    ...(phone ? { phone } : {}),
    ...(phone && contacts.phoneTitle ? { phoneTitle: contacts.phoneTitle } : {}),
    ...(phone && contacts.phoneTitleKey ? { phoneTitleKey: contacts.phoneTitleKey } : {}),
    ...(contacts.workHours ? { workHours: contacts.workHours } : {}),
    ...(contacts.workHours && contacts.workHoursKey ? { workHoursKey: contacts.workHoursKey } : {}),
    ...(extraGroups?.length ? { extraGroups } : {}),
  }
  return Object.keys(resolved).length ? resolved : undefined
}
