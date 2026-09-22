<script setup lang="ts">
import { RUSSIAN_REGIONS } from '~/shared/config'
import type { ParticipationFormData, ParticipationFormErrors } from '~/features/participation-form'

defineProps<{
  formData: ParticipationFormData
  errors: ParticipationFormErrors
}>()
</script>

<template>
  <UiText as="p" class="text-fg/80">
    Оставьте ваши контактные данные для участия в фестивале RuCode. Мы отправим вам письмо на
    указанный e-mail, как только начнётся регистрация на мероприятия.
  </UiText>

  <div class="grid grid-cols-2 gap-x-6 gap-y-5 max-md:grid-cols-1">
    <UiInput
      v-model="formData.surname"
      label="Фамилия"
      placeholder="Иванов"
      :error="!!errors.surname"
      :error-message="errors.surname"
    />
    <UiInput
      v-model="formData.name"
      label="Имя"
      placeholder="Иван"
      :error="!!errors.name"
      :error-message="errors.name"
    />
    <UiInput v-model="formData.patronymic" label="Отчество" placeholder="Иванович" />
    <UiInput
      v-model="formData.email"
      type="email"
      label="Ваш Email"
      placeholder="Email"
      :error="!!errors.email"
      :error-message="errors.email"
    />
  </div>

  <UiPhoneInput v-model="formData.phone" :error="!!errors.phone" :error-message="errors.phone" />

  <UiSelect
    v-model="formData.region"
    label="Регион"
    placeholder="Выберите регион"
    :options="RUSSIAN_REGIONS"
    :error="!!errors.region"
    :error-message="errors.region"
  />

  <UiCheckbox
    v-model="formData.agreement"
    :error="!!errors.agreement"
    :error-message="errors.agreement"
  >
    Я подтверждаю, что принимаю
    <NuxtLink to="/privacy-policy" class="text-purple-light underline" target="_blank">
      соглашение об обработке персональных данных МФТИ </NuxtLink
    >.
  </UiCheckbox>
</template>
