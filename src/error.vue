<script setup lang="ts">
import type { NuxtError } from '#app'

// Имя из одного слова не проходит vue/multi-word-component-names, а файл должен называться error.vue.
defineOptions({ name: 'ErrorPage' })

const props = defineProps<{ error: NuxtError }>()

const isNotFound = computed(() => props.error.status === 404)
const title = computed(() => (isNotFound.value ? 'Страница не найдена' : 'Что-то пошло не так'))
const text = computed(() =>
  isNotFound.value
    ? 'Возможно, ссылка устарела или в адресе опечатка. Вернитесь на главную — там всё самое интересное.'
    : 'Произошла ошибка на нашей стороне. Попробуйте обновить страницу или зайти позже.',
)
// Код крупно показываем только для 404: у остальных ошибок он ничего не скажет посетителю.
const code = computed(() => (isNotFound.value ? '404' : 'Ошибка'))

useHead(() => ({
  title: title.value,
  meta: [{ name: 'robots', content: 'noindex' }],
}))

// clearError сбрасывает ошибку и уводит на главную, иначе остались бы на битом адресе.
const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <section class="relative flex min-h-[60vh] items-center overflow-hidden py-16 md:py-24">
      <div
        class="bg-purple-primary/20 pointer-events-none absolute top-1/2 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] md:h-130 md:w-130"
        aria-hidden="true"
      />
      <div class="container flex flex-col items-center gap-6 text-center lg:gap-8">
        <p
          class="text-purple-primary leading-none font-black tracking-wider select-none"
          :class="
            isNotFound
              ? 'text-[96px] sm:text-[140px] md:text-[200px]'
              : 'text-[48px] md:text-[80px]'
          "
        >
          {{ code }}
        </p>
        <UiHeading tag="h1" as="h2">{{ title }}</UiHeading>
        <UiText class="max-w-150 text-center" size="lg">{{ text }}</UiText>
        <UiAction variant="primary" @click="goHome">На главную</UiAction>
      </div>
    </section>
  </NuxtLayout>
</template>
