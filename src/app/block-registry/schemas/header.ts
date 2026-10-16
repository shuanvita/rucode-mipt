import { z } from 'zod/v4'
import type { ZodType } from 'zod/v4'
import type { HeaderData } from '~/widgets/header'
import { image, itemId, link, text } from './fields'

/**
 * Форма шапки страницы в админке (`headerSchema` манифеста, данные лежат в поле `header` страницы).
 * Меню «Мероприятия» и переключатель языка одинаковы на всех страницах и живут в коде виджета.
 * Привязка к `HeaderData` через `satisfies`: расхождение с виджетом валит typecheck.
 */
export const headerSchema = z.object({
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
    .meta({ title: 'Ссылки в шапке' })
    .optional(),
  logo: z
    .object({ src: image().meta({ title: 'Картинка' }) })
    .meta({ title: 'Свой логотип', description: 'Если не задан, показывается логотип RuCode' })
    .optional(),
  partnerLogo: z
    .object({
      src: image().meta({ title: 'Картинка' }),
      alt: text().meta({ title: 'Название партнёра' }).optional(),
      to: link().meta({ title: 'Ссылка при клике' }).optional(),
    })
    .meta({ title: 'Логотип партнёра' })
    .optional(),
  supportLogos: z
    .array(
      z.object({
        id: itemId(),
        src: image().meta({ title: 'Картинка' }),
        alt: text().meta({ title: 'Подпись' }).optional(),
      }),
    )
    .meta({ title: 'Логотипы поддержки' })
    .optional(),
}) satisfies ZodType<Partial<HeaderData>>
