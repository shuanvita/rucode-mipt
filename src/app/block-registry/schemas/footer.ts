import { z } from 'zod/v4'
import type { ZodType } from 'zod/v4'
import type { FooterData } from '~/widgets/footer'
import { itemId, link, text } from './fields'

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
      description:
        'Если заданы, заменяют контакты по умолчанию целиком: чего здесь нет, того в футере не будет',
    })
    .optional(),
}) satisfies ZodType<Partial<FooterData>>
