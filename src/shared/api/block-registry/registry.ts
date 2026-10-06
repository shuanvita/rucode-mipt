import { defineAsyncComponent } from 'vue'
import type { Component } from 'vue'
import type { BlockDefinition } from './types'

const definitions = new Map<string, BlockDefinition>()
const resolvedComponents = new Map<string, Component>()

/** Алиасы: `${page}|${oldType}` -> новый type; `|${oldType}` действует на любой странице. */
const aliases = new Map<string, string>()

export function registerBlocks(list: BlockDefinition[]) {
  for (const definition of list) {
    definitions.set(definition.type, definition)
    resolvedComponents.delete(definition.type)
    for (const alias of definition.aliases ?? []) {
      aliases.set(`${alias.page ?? ''}|${alias.type}`, definition.type)
    }
  }
}

export function getBlockDefinition(type: string) {
  return definitions.get(type)
}

export function getBlockDefinitions() {
  return [...definitions.values()]
}

/** Приводит `type` из ответа CMS к актуальному имени: точное совпадение, затем алиасы. */
export function resolveBlockType(type: string, pageSlug?: string) {
  if (definitions.has(type)) return type
  return aliases.get(`${pageSlug ?? ''}|${type}`) ?? aliases.get(`|${type}`)
}

export function getBlockComponent(type: string): Component | undefined {
  const cached = resolvedComponents.get(type)
  if (cached) return cached

  const definition = definitions.get(type)
  if (!definition) return undefined

  const { component } = definition
  // Функция без `setup`/`render` считается лоадером (`() => import(...)`), иначе это обычный компонент.
  const isLoader = typeof component === 'function' && !('setup' in component)
  const resolved = isLoader
    ? defineAsyncComponent(component as () => Promise<Component>)
    : (component as Component)

  resolvedComponents.set(type, resolved)
  return resolved
}

/** Для тестов. */
export function resetBlockRegistry() {
  definitions.clear()
  resolvedComponents.clear()
  aliases.clear()
}
