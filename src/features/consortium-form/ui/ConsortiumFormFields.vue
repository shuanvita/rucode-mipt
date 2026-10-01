<script setup lang="ts">
import {
  AUDIENCE_OPTIONS,
  OTHER_OPTION,
  PROMOTION_OPTIONS,
  YES_NO_OPTIONS,
} from '../model/ConsortiumForm.types'
import type { ConsortiumFormData, ConsortiumFormErrors } from '~/features/consortium-form'
import ConsortiumFormRadioGroup from './ConsortiumFormRadioGroup.vue'

defineProps<{
  errors: ConsortiumFormErrors
}>()

const emit = defineEmits<{ blur: [field: keyof ConsortiumFormData] }>()

const formData = defineModel<ConsortiumFormData>('formData', { required: true })

function togglePromotion(option: string, checked: boolean) {
  const rest = formData.value.promotion.filter((item) => item !== option)
  formData.value.promotion = checked ? [...rest, option] : rest
  emit('blur', 'promotion')
}
</script>

<template>
  <div class="grid grid-cols-2 items-start gap-x-10 gap-y-7 max-md:grid-cols-1">
    <UiInput
      v-model="formData.organization"
      name="organization"
      label="Название организации"
      placeholder="ЦРИТО МФТИ"
      :error="!!errors.organization"
      :error-message="errors.organization"
      @blur="emit('blur', 'organization')"
    />
    <UiInput
      v-model="formData.name"
      name="name"
      label="ФИО"
      placeholder="Иванов Иван Иванович"
      autocomplete="name"
      :error="!!errors.name"
      :error-message="errors.name"
      @blur="emit('blur', 'name')"
    />
    <UiInput
      v-model="formData.post"
      name="post"
      label="Должность в организации"
      placeholder="Руководитель группы"
      :error="!!errors.post"
      :error-message="errors.post"
      @blur="emit('blur', 'post')"
    />
    <UiInput
      v-model="formData.email"
      type="email"
      name="email"
      label="Почта"
      placeholder="Ivanov@mail.ru"
      autocomplete="email"
      :error="!!errors.email"
      :error-message="errors.email"
      @blur="emit('blur', 'email')"
    />
    <UiPhoneInput
      v-model="formData.phone"
      v-model:country="formData.phoneCountry"
      :error="!!errors.phone"
      :error-message="errors.phone"
      @blur="emit('blur', 'phone')"
    />
  </div>

  <div class="grid grid-cols-2 items-start gap-x-10 gap-y-7 max-md:grid-cols-1">
    <ConsortiumFormRadioGroup
      v-model="formData.audience"
      v-model:other="formData.audienceOther"
      legend="Есть ли у Вас возможность привлечения на ИТ-чемпионат не менее 50 участников?"
      name="audience"
      :options="AUDIENCE_OPTIONS"
      other-placeholder="Опишите свою ситуацию"
      :error="errors.audience"
      :other-error="errors.audienceOther"
      @blur="emit('blur', 'audience')"
      @blur-other="emit('blur', 'audienceOther')"
    />

    <fieldset class="flex flex-col gap-3 text-[13px]">
      <legend class="mb-4 leading-5.5">
        Какие у Вашей организации есть возможности продвижения? (1 и более вариантов)
      </legend>

      <UiCheckbox
        v-for="option in PROMOTION_OPTIONS"
        :key="option"
        name="promotion"
        :model-value="formData.promotion.includes(option)"
        :error="!!errors.promotion"
        @update:model-value="togglePromotion(option, $event)"
      >
        {{ option }}
      </UiCheckbox>
      <UiFieldError :message="errors.promotion" />

      <UiInput
        v-model="formData.promotionOther"
        name="promotionOther"
        :label="OTHER_OPTION"
        placeholder="Опишите ваши возможности"
        autocomplete="off"
        :error="!!errors.promotionOther"
        :error-message="errors.promotionOther"
        @blur="emit('blur', 'promotionOther')"
      />
    </fieldset>

    <ConsortiumFormRadioGroup
      v-model="formData.eventsExperience"
      legend="Есть ли у Вашей организации опыт проведения ИТ-мероприятий?"
      name="eventsExperience"
      :options="YES_NO_OPTIONS"
      :error="errors.eventsExperience"
      @blur="emit('blur', 'eventsExperience')"
    />

    <ConsortiumFormRadioGroup
      v-model="formData.partnershipExperience"
      legend="Есть ли у Вашей организации опыт партнерского взаимодействия с ИТ-компаниями?"
      name="partnershipExperience"
      :options="YES_NO_OPTIONS"
      :error="errors.partnershipExperience"
      @blur="emit('blur', 'partnershipExperience')"
    />
  </div>
</template>
