interface FormFieldOptions {
  error?: boolean
  errorMessage?: string
}

/**
 * Общая a11y/attrs-обвязка для инпутообразных shared/ui компонентов:
 * id поля и ошибки, attrs без `class` (чтобы не задваивать его на корневом div), aria-атрибуты.
 */
export function useFormField(props: FormFieldOptions) {
  const fieldId = useId()
  const errorId = useId()

  const attrs = useAttrs()
  const attrsWithoutClass = computed(() => {
    const { class: _class, ...rest } = attrs
    return rest
  })

  const ariaInvalid = computed(() => props.error || undefined)
  const ariaDescribedby = computed(() => (props.error && props.errorMessage ? errorId : undefined))

  return { fieldId, errorId, attrsWithoutClass, ariaInvalid, ariaDescribedby }
}
