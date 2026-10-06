<script setup lang="ts">
import type { PartnersSectionProps } from '~/widgets/partners'

defineProps<PartnersSectionProps>()

const titleToneClasses = { purple: 'text-purple-primary', yellow: 'text-yellow-primary' }
</script>

<template>
  <section class="container flex flex-col items-center justify-center space-y-14 lg:space-y-22">
    <div v-for="item in items" :key="item.title" class="flex flex-col items-center">
      <UiHeading
        :class="[titleToneClasses[item.titleTone ?? 'purple'], item.text ? 'mb-5' : 'mb-10']"
        tag="h2"
        >{{ item.title }}</UiHeading
      >
      <UiText v-if="item.text" class="mb-8 max-w-191 text-center lg:mb-12">{{ item.text }}</UiText>
      <div class="flex items-center gap-6">
        <NuxtPicture
          v-for="img in item.images"
          :key="img.src"
          :img-attrs="{
            class: img.class,
          }"
          :src="img.src"
          :alt="img.alt"
        />
      </div>
    </div>
  </section>
</template>
