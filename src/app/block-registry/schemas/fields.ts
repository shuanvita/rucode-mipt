import { z } from 'zod/v4'

/**
 * Типы полей для админки. `x-field` попадает в JSON Schema манифеста и подсказывает,
 * какой редактор показать (обычная строка, rich-text, картинка, ссылка).
 */
export const text = () => z.string()
export const richText = () => z.string().meta({ 'x-field': 'richtext' })
export const image = () => z.string().meta({ 'x-field': 'image' })
export const link = () => z.string().meta({ 'x-field': 'link' })

/** Идентификатор элемента списка: нужен для перестановки и ключей; генерирует админка. */
export const itemId = () => z.string().optional()
