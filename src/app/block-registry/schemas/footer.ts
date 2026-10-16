import { z } from 'zod/v4'
import type { ZodType } from 'zod/v4'
import type { FooterData } from '~/widgets/footer'
import { itemId, link, text } from './fields'

// Ключей переводов (`titleKey` и др.) в форме нет: CMS отдаёт только русский текст, переводы остаются в коде
// страниц с английской версией (`definePageMeta({ footer })`).

/**
 * Форма футера страницы в админке (`footerSchema` манифеста, данные лежат в поле `footer` страницы).
 * Логотип и соцсети одинаковы на всех страницах и живут в коде виджета.
 * Привязка к `FooterData` через `satisfies`: расхождение с виджетом валит typecheck.
 */
export const footerSchema = z.object({
  links: z
    .array(
      z.object({
        id: itemId(),
        href: link().meta({
          title: 'Ссылка',
          description: 'Якорь блока на странице (#about) или адрес',
        }),
        title: text().meta({ title: 'Название' }),
      }),
    )
    .meta({ title: 'Ссылки в футере' })
    .optional(),
  regulation: z
    .object({
      href: link().meta({ title: 'Ссылка на документ' }),
      title: text().meta({ title: 'Название' }),
    })
    .meta({
      title: 'Регламент',
      description: 'Ссылка на положение или регламент. Если не задана, в футере её нет',
    })
    .optional(),
  contacts: z
    .object({
      site: z
        .object({
          label: text().meta({ title: 'Текст', description: 'rucode.net' }),
          href: link().meta({ title: 'Ссылка', description: 'https://rucode.net/' }),
        })
        .meta({ title: 'Ссылка на сайт', description: 'Жёлтая ссылка над почтой' })
        .optional(),
      email: text().meta({ title: 'Почта' }).optional(),
      link: z
        .object({
          label: text().meta({ title: 'Текст' }),
          href: link().meta({ title: 'Ссылка' }),
        })
        .meta({ title: 'Дополнительная ссылка', description: 'Например, Telegram-чат' })
        .optional(),
      phoneTitle: text().meta({ title: 'Заголовок над телефоном' }).optional(),
      phone: z
        .object({
          label: text().meta({ title: 'Телефон', description: '+7 (495) 128-34-32' }),
          href: link().meta({ title: 'Ссылка', description: 'tel:+74951283432' }),
        })
        .meta({ title: 'Телефон' })
        .optional(),
      workHours: text().meta({ title: 'Режим работы' }).optional(),
      extraGroups: z
        .array(
          z.object({
            id: itemId(),
            title: text().meta({ title: 'Для каких вопросов' }).optional(),
            email: text().meta({ title: 'Почта' }),
          }),
        )
        .meta({ title: 'Дополнительные почты' })
        .optional(),
    })
    .meta({
      title: 'Контакты',
      description: 'В футере показывается только то, что заполнено',
    })
    .optional(),
}) satisfies ZodType<Partial<FooterData>>
