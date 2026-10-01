import {
  createEmptyConsortiumForm,
  type ConsortiumFormData,
  type ConsortiumFormErrors,
} from '../model/ConsortiumForm.types'
import { validateConsortiumForm } from '../model/validateConsortiumForm'
import { submitConsortiumForm } from './submitConsortiumForm'

export type ConsortiumFormStatus = 'idle' | 'submitting' | 'success' | 'error'

type TouchedFields = Partial<Record<keyof ConsortiumFormData, boolean>>

export function useConsortiumForm(endpoint?: MaybeRefOrGetter<string | undefined>) {
  const formData = reactive(createEmptyConsortiumForm())
  const touched = reactive<TouchedFields>({})
  const status = ref<ConsortiumFormStatus>('idle')
  const submitErrorMessage = ref('')

  const allErrors = computed(() => validateConsortiumForm(formData))
  const isValid = computed(() => Object.keys(allErrors.value).length === 0)

  // Ошибки показываем только для полей, которые пользователь уже покинул (blur)
  // или после попытки отправки.
  const errors = computed<ConsortiumFormErrors>(() => {
    const visible: ConsortiumFormErrors = {}
    for (const key of Object.keys(allErrors.value) as (keyof ConsortiumFormData)[]) {
      if (touched[key]) visible[key] = allErrors.value[key]
    }
    return visible
  })

  function touch(field: keyof ConsortiumFormData) {
    touched[field] = true
  }

  function touchAll() {
    for (const key of Object.keys(formData) as (keyof ConsortiumFormData)[]) {
      touched[key] = true
    }
  }

  async function submit() {
    touchAll()
    if (!isValid.value) return

    status.value = 'submitting'
    const result = await submitConsortiumForm(formData, toValue(endpoint))

    if (result.success) {
      status.value = 'success'
    } else {
      status.value = 'error'
      submitErrorMessage.value = result.error ?? 'Произошла ошибка'
    }
  }

  function reset() {
    Object.assign(formData, createEmptyConsortiumForm())
    for (const key of Object.keys(touched) as (keyof ConsortiumFormData)[]) {
      delete touched[key]
    }
    status.value = 'idle'
    submitErrorMessage.value = ''
  }

  return {
    formData,
    errors,
    isValid,
    status,
    submitErrorMessage,
    touch,
    submit,
    reset,
  }
}
