<script setup lang="ts">
import type { AiChampTaskCardProps } from '~/widgets/ai_champ/tasks'

defineProps<AiChampTaskCardProps>()
</script>

<template>
  <article
    class="relative flex min-h-32.5 w-full flex-col justify-center overflow-hidden rounded-lg border border-[#6D6D6D] bg-[#1A1C21] p-7 pt-15 lg:pt-7"
  >
    <div
      :class="[
        'absolute top-0 right-0 flex max-h-8.5 items-center gap-1 rounded-tr-lg rounded-bl-lg px-4 py-1',
        badge?.variant === 'pro'
          ? 'bg-purple-primary border border-[#8239B7]'
          : 'border border-[#6470EB] bg-[#7884FF]',
      ]"
    >
      <span class="text-[15px] font-medium">{{ badge?.text }}</span>
      <NuxtPicture
        :img-attrs="{
          class: 'max-h-7.5 object-cover',
        }"
        :src="
          badge?.variant === 'pro'
            ? 'images/ai_champ/task-pro.png'
            : 'images/ai_champ/task-base.png'
        "
        alt=""
      />
    </div>
    <UiHeading v-if="title" class="pt-4 text-center" tag="h6">{{ title }}</UiHeading>
    <div v-if="subtitle" class="space-y-7">
      <div class="flex gap-4">
        <UiText class="text-yellow-primary text-[15px]" weight="medium">{{ subtitle }}</UiText>
        <NuxtPicture
          :img-attrs="{
            class: 'max-h-[50px] object-cover',
          }"
          :src="logo"
        />
      </div>
      <UiText>{{ description }}</UiText>
      <UiText class="text-yellow-primary" size="lg" weight="bold">{{ footer }}</UiText>
    </div>
  </article>
</template>
