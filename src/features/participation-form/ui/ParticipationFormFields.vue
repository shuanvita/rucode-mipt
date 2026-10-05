<script setup lang="ts">
import { RUSSIAN_REGIONS } from '~/shared/config'
import type {
  ParticipationFormData,
  ParticipationFormErrors,
  ParticipationOptionGroup,
} from '~/features/participation-form'

defineProps<{
  errors: ParticipationFormErrors
  description?: string
  roleGroup?: ParticipationOptionGroup
  eventsGroup?: ParticipationOptionGroup
}>()

const emit = defineEmits<{ blur: [field: keyof ParticipationFormData] }>()

const formData = defineModel<ParticipationFormData>('formData', { required: true })

function toggleEvent(value: string, checked: boolean) {
  const rest = formData.value.events.filter((item) => item !== value)
  formData.value.events = checked ? [...rest, value] : rest
}
</script>

<template>
  <UiText v-if="description" as="p" class="text-fg/80">{{ description }}</UiText>

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
        formData.region = value ?? ''
        emit('blur', 'region')
      }
    "
    @blur="emit('blur', 'region')"
  />

  <div v-if="roleGroup || eventsGroup" class="grid items-start gap-x-6 gap-y-5 md:grid-cols-2">
    <fieldset v-if="roleGroup" class="flex flex-col gap-3">
      <legend class="mb-4 text-[13px] leading-5.5">{{ roleGroup.legend }}</legend>
      <UiRadio
        v-for="option in roleGroup.options"
        :key="option.value"
        v-model="formData.role"
        name="role"
        :value="option.value"
      >
        {{ option.label }}
      </UiRadio>
    </fieldset>

    <fieldset v-if="eventsGroup" class="flex flex-col gap-3">
      <legend class="mb-4 text-[13px] leading-5.5">{{ eventsGroup.legend }}</legend>
      <UiCheckbox
        v-for="option in eventsGroup.options"
        :key="option.value"
        name="events"
        :model-value="formData.events.includes(option.value)"
        @update:model-value="toggleEvent(option.value, $event)"
      >
        {{ option.label }}
      </UiCheckbox>
    </fieldset>
  </div>

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
