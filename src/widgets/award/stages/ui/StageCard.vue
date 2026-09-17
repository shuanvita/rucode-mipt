<script setup lang="ts">
import type { StageCardProps } from '~/widgets/award/stages'

defineProps<Omit<StageCardProps, 'span'>>()
</script>

<template>
  <div
    class="flex min-h-45 flex-col gap-8 rounded-2xl bg-(image:--participant-card-bg) px-6 py-7"
    :class="{
      'bg-(image:--stage-active-gradient)': variant === 'active',
      'bg-(image:--stage-secret-gradient) font-bold': variant === 'secret',
    }"
  >
    <div class="text-[20px] font-bold tracking-[1px] uppercase">{{ title }}</div>
    <div class="flex items-center gap-7">
      <div
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#333333] bg-[#1F1F1F]"
        :class="{ 'border-transparent bg-white text-black': variant === 'active' }"
      >
        {{ number }}
      </div>
      <p class="text-[16px]" v-html="description" />
    </div>
  </div>
</template>
