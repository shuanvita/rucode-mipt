<script setup lang="ts">
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

defineProps<{
  tag: HeadingTag
  as?: HeadingTag
  html?: string
}>()

const classes: Record<HeadingTag, string> = {
  h1: 'text-[20px] sm:text-[24px] md:text-[34px] xl:text-[40px] 2xl:text-[50px] leading-[1.2] uppercase',
  h2: 'text-[20px] sm:text-[28px] md:text-[36px] uppercase',
  h3: 'text-[19px]',
  h4: 'text-[15px] sm:text-[18px] md:text-[24px]',
  h5: 'text-lg',
  h6: 'text-base leading-[1.3]',
}
</script>

<template>
  <component :is="tag" :class="['leading-[1.1] font-bold tracking-wider', classes[as ?? tag]]">
    <div v-if="html" v-html="html" />
    <slot v-else />
  </component>
</template>
