<script setup lang="ts">
defineEmits<{ close: [] }>()
</script>

<template>
  <div class="flex flex-col items-center gap-4 py-4 text-center">
    <UiHeading tag="h3">Спасибо!</UiHeading>
    <UiText as="p" class="text-fg/80">
      Ваша заявка отправлена. Мы напишем вам на указанный e-mail, как только начнётся регистрация
      на мероприятия фестиваля RuCode.
    </UiText>
    <UiAction type="button" class="mt-2" @click="$emit('close')">Закрыть</UiAction>
  </div>
</template>
