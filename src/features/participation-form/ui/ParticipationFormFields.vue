<script setup lang="ts">
import { RUSSIAN_REGIONS } from '~/shared/config'
import type { ParticipationFormData, ParticipationFormErrors } from '~/features/participation-form'

defineProps<{
  errors: ParticipationFormErrors
}>()

const emit = defineEmits<{ blur: [field: keyof ParticipationFormData] }>()

const formData = defineModel<ParticipationFormData>('formData', { required: true })
</script>

<template>
  <UiText as="p" class="text-fg/80">
    Оставьте ваши контактные данные для участия в фестивале RuCode. Мы отправим вам письмо на
    указанный e-mail, как только начнётся регистрация на мероприятия.
  </UiText>

  <div class="grid grid-cols-2 items-start gap-x-6 gap-y-5 max-md:grid-cols-1">
    <UiInput
      v-model="formData.surname"
      label="Фамилия"
      placeholder="Иванов"
      :error="!!errors.surname"
      :error-message="errors.surname"
      @blur="emit('blur', 'surname')"
    />
    <UiInput
      v-model="formData.name"
      label="Имя"
      placeholder="Иван"
      :error="!!errors.name"
      :error-message="errors.name"
      @blur="emit('blur', 'name')"
    />
    <UiInput v-model="formData.patronymic" label="Отчество" placeholder="Иванович" />
    <UiInput
      v-model="formData.email"
      type="email"
      label="Ваш Email"
      placeholder="Email"
      :error="!!errors.email"
      :error-message="errors.email"
      @blur="emit('blur', 'email')"
    />
  </div>

  <UiPhoneInput
    v-model="formData.phone"
    v-model:country="formData.phoneCountry"
    :error="!!errors.phone"
    :error-message="errors.phone"
    @blur="emit('blur', 'phone')"
  />

  <UiSelect
    :model-value="formData.region"
    label="Регион"
    placeholder="Выберите регион"
    :options="RUSSIAN_REGIONS"
    :error="!!errors.region"
    :error-message="errors.region"
    @update:model-value="
      (value) => {
        formData.region = value
        emit('blur', 'region')
      }
    "
    @blur="emit('blur', 'region')"
  />

  <UiCheckbox
    :model-value="formData.agreement"
    :error="!!errors.agreement"
    :error-message="errors.agreement"
    @update:model-value="
      (value) => {
        formData.agreement = value
        emit('blur', 'agreement')
      }
    "
    @blur="emit('blur', 'agreement')"
  >
    Я подтверждаю, что принимаю
    <NuxtLink
      to="https://mipt.ru/docs/download.php?code=politika_obrabotki_personalnykh_dannykh"
      class="text-purple-light underline"
      target="_blank"
    >
      соглашение об обработке персональных данных МФТИ </NuxtLink
    >.
  </UiCheckbox>
</template>
