<script setup lang="ts">
// TODO Уточнить по форме. Какие поля ожидает бек + endpoint отправки
import { useParticipationForm } from '../api/useParticipationForm'
import ParticipationFormFields from './ParticipationFormFields.vue'
import ParticipationFormSuccess from './ParticipationFormSuccess.vue'
import type { ParticipationOptionGroup } from '../model/ParticipationForm.types'

const props = defineProps<{
  endpoint?: string
  description?: string
  roleGroup?: ParticipationOptionGroup
  eventsGroup?: ParticipationOptionGroup
}>()

const isOpen = defineModel<boolean>({ required: true })

const { formData, errors, status, submitErrorMessage, isValid, touch, submit, reset } =
  useParticipationForm(() => props.endpoint)

watch(isOpen, (value) => {
  if (!value) reset()
})
</script>

<template>
  <UiModal v-model="isOpen" size="2xl" fullscreen-on-mobile>
    <ParticipationFormSuccess v-if="status === 'success'" />

    <form v-else class="flex flex-col gap-5" @submit.prevent="submit">
      <ParticipationFormFields
        v-model:form-data="formData"
        :errors="errors"
        :description="description"
        :role-group="roleGroup"
        :events-group="eventsGroup"
        @blur="touch"
      />

      <div class="flex justify-center">
        <button
          type="submit"
          class="rounded-pill cursor-pointer bg-yellow-400 px-10 py-5 text-center font-semibold text-black transition-opacity disabled:opacity-40 max-md:px-5 max-md:py-3"
          :disabled="status === 'submitting' || !isValid"
        >
          {{ status === 'submitting' ? 'Отправка…' : 'Отправить форму' }}
        </button>
      </div>

      <p v-if="status === 'error'" class="text-destructive text-sm" role="alert">
        {{ submitErrorMessage }}
      </p>
    </form>
  </UiModal>
</template>
