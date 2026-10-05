<script setup lang="ts">
import { ConsortiumSection } from '~/widgets/consortium-section'
import type { HomeConsortiumProps } from '../model/HomeConsortium.types'

defineProps<HomeConsortiumProps>()
</script>

<template>
  <section class="container space-y-6 text-center lg:space-y-10">
    <UiHeading class="text-purple-primary" tag="h2">{{ title }}</UiHeading>
    <UiText v-if="description" class="mx-auto max-w-190">{{ description }}</UiText>
    <ConsortiumSection />
    <UiAction v-if="action" :to="action.to" class="py-5">
      {{ action.text }}
    </UiAction>
  </section>
</template>
