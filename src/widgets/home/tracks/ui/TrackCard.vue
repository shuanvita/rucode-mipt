<script setup lang="ts">
import type { TrackCardProps } from '~/widgets/home/tracks'

defineProps<TrackCardProps>()

const tagColorClasses = {
  blue: 'text-blue-400 border-blue-400',
  emerald: 'text-emerald-300 border-emerald-300',
  amber: 'text-amber-400 border-amber-400',
  rose: 'text-rose-500 border-rose-500',
}
</script>

<template>
  <div class="flex flex-col space-y-5">
    <NuxtPicture
      class="place-self-center"
      :img-attrs="{
        class: 'max-w-70',
      }"
      :src="image"
      :alt="tag"
    />
    <UiText
      weight="semibold"
      size="lg"
      :class="['place-self-center rounded-sm border p-2', tagColor && tagColorClasses[tagColor]]"
      as="span"
      >{{ tag }}</UiText
    >
    <UiText weight="light">{{ text }}</UiText>
    <ul class="space-y-2">
      <li v-for="item in links" :key="item.id" class="flex items-start gap-3">
        <span class="mt-2 size-1.5 shrink-0 rounded-full bg-white"></span>
        <UiAction
          class="hover:text-fg transition-color inline text-[14px] text-amber-200 duration-200"
          variant="custom"
          :to="item.to"
          >{{ item.text }}</UiAction
        >
      </li>
    </ul>
  </div>
</template>
