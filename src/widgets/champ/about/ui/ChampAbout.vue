<script setup lang="ts">
import type { ChampAboutProps } from '~/widgets/champ/about'
import ChampAboutCard from '~/widgets/champ/about/ui/ChampAboutCard.vue'

defineProps<ChampAboutProps>()
</script>

<template>
  <section class="container">
    <UiHeading v-if="title" class="text-yellow-primary mb-8 leading-none lg:mb-10" tag="h2">{{
      title
    }}</UiHeading>
    <UiText v-if="description" size="lg" weight="light" class="mb-15 max-w-200">{{
      description
    }}</UiText>
    <div class="relative grid gap-10 lg:grid-cols-2 lg:gap-16 xl:grid-cols-4">
      <ChampAboutCard v-for="card in cards" :key="card.id" v-bind="card" />
      <NuxtPicture
        class="absolute top-40 -left-40 -z-9 max-w-70 -translate-y-1/2"
        src="/images/champ/cloud-1.png"
        alt=""
      />
      <NuxtPicture
        class="absolute top-10 -right-40 -z-9 max-w-90"
        src="/images/champ/cloud-2.png"
        alt=""
      />
    </div>
  </section>
</template>
