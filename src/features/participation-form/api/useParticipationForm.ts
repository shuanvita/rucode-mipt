import {
  createEmptyParticipationForm,
  type ParticipationFormData,
  type ParticipationFormErrors,
} from '../model/ParticipationForm.types'
import { validateParticipationForm } from '../model/validateParticipationForm'
import { submitParticipationForm } from './submitParticipationForm'

export type ParticipationFormStatus = 'idle' | 'submitting' | 'success' | 'error'

type TouchedFields = Partial<Record<keyof ParticipationFormData, boolean>>

export function useParticipationForm() {
  const formData = reactive(createEmptyParticipationForm())
  const touched = reactive<TouchedFields>({})
  const status = ref<ParticipationFormStatus>('idle')
  const submitErrorMessage = ref('')

  const allErrors = computed(() => validateParticipationForm(formData))
  const isValid = computed(() => Object.keys(allErrors.value).length === 0)

  // Ошибки показываем только для полей, которые пользователь уже покинул (blur)
  // или после попытки отправки — чтобы не пугать пустой формой сразу при открытии.
  const errors = computed<ParticipationFormErrors>(() => {
    const visible: ParticipationFormErrors = {}
    for (const key of Object.keys(allErrors.value) as (keyof ParticipationFormData)[]) {
      if (touched[key]) visible[key] = allErrors.value[key]
    }
    return visible
  })

  function touch(field: keyof ParticipationFormData) {
    touched[field] = true
  }

  function touchAll() {
    for (const key of Object.keys(formData) as (keyof ParticipationFormData)[]) {
      touched[key] = true
    }
  }

  async function submit() {
    touchAll()
    if (!isValid.value) return

    status.value = 'submitting'
    const result = await submitParticipationForm(formData)

    if (result.success) {
      status.value = 'success'
    } else {
      status.value = 'error'
      submitErrorMessage.value = result.error ?? 'Произошла ошибка'
    }
  }

  function reset() {
    Object.assign(formData, createEmptyParticipationForm())
    for (const key of Object.keys(touched) as (keyof ParticipationFormData)[]) {
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
