<script setup lang="ts">
// TODO Уточнить по форме. Какие поля ожидает бек + endpoint отправки. Стилизация формы сделать как в production
import { useParticipationForm } from '../api/useParticipationForm'
import ParticipationFormFields from './ParticipationFormFields.vue'
import ParticipationFormSuccess from './ParticipationFormSuccess.vue'

const isOpen = defineModel<boolean>({ required: true })

const { formData, errors, status, submitErrorMessage, isValid, touch, submit, reset } =
  useParticipationForm()

watch(isOpen, (value) => {
  if (!value) reset()
})
</script>

<template>
  <UiModal v-model="isOpen" size="xl">
    <ParticipationFormSuccess v-if="status === 'success'" @close="isOpen = false" />

    <form v-else class="flex flex-col gap-5" @submit.prevent="submit">
      <ParticipationFormFields v-model:form-data="formData" :errors="errors" @blur="touch" />

      <UiAction type="submit" class="w-full" :disabled="status === 'submitting' || !isValid">
        {{ status === 'submitting' ? 'Отправка…' : 'Отправить форму' }}
      </UiAction>

      <p v-if="status === 'error'" class="text-destructive text-sm" role="alert">
        {{ submitErrorMessage }}
      </p>
    </form>
  </UiModal>
</template>
