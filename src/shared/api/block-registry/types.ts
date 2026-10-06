import type { Component } from 'vue'

/** Старое имя типа блока: нужно, чтобы ответы CMS со старыми `type` продолжали работать. */
/** Минимальный интерфейс схемы: достаточно `safeParse`; сам zod на фронте не импортируем. */
export interface ZodSchema {
  safeParse: (data: unknown) => { success: boolean; error?: { issues: unknown[] } }
}

export interface BlockAlias {
  /** Страница, на которой действовало старое имя; без неё алиас действует на любой странице. */
  page?: string
  type: string
}

export type BlockCategory =
  'hero' | 'content' | 'media' | 'people' | 'cards' | 'faq' | 'cta' | 'partners' | 'contacts'

export interface BlockDefinition {
  /** Глобально уникальное имя вида блока: `faq`, `champ.hero`. */
  type: string
  title: string
  category: BlockCategory
  /** Растёт при несовместимых изменениях схемы; новые необязательные поля версию не меняют. */
  schemaVersion: number
  component: Component | (() => Promise<Component>)
  /** Схема `data` (zod). Блок без схемы попадает в манифест как `readonly`. */
  /** Схема данных (zod); подключается только для манифеста и тестов. */
  schema?: ZodSchema
  /** Приводит данные старой версии схемы к текущей. */
  migrate?: (data: Record<string, unknown>, fromVersion: number) => Record<string, unknown>
  aliases?: BlockAlias[]
}
