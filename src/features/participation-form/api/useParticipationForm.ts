import {
  createEmptyParticipationForm,
  type ParticipationFormErrors,
} from '../model/ParticipationForm.types'
import { validateParticipationForm } from '../model/validateParticipationForm'
import { submitParticipationForm } from './submitParticipationForm'

export type ParticipationFormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function useParticipationForm() {
  const formData = reactive(createEmptyParticipationForm())
  const errors = ref<ParticipationFormErrors>({})
  const status = ref<ParticipationFormStatus>('idle')
  const submitErrorMessage = ref('')

  async function submit() {
    const validationErrors = validateParticipationForm(formData)
    errors.value = validationErrors
    if (Object.keys(validationErrors).length > 0) return

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
    errors.value = {}
    status.value = 'idle'
    submitErrorMessage.value = ''
  }

  return {
    formData,
    errors,
    status,
    submitErrorMessage,
    submit,
    reset,
  }
}
