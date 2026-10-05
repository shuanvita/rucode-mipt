<script setup lang="ts">
import type { HeroSectionProps } from '~/widgets/mws/hero'
import { ParticipationFormModal } from '~/features/participation-form'

defineProps<HeroSectionProps>()

const isFormOpen = ref(false)
</script>

<template>
  <section class="container mt-6 grid grid-cols-[minmax(0,1fr)] sm:mt-12 lg:mt-20">
    <div class="col-start-1 row-start-1 flex flex-col items-start gap-5 lg:gap-10">
      <UiHeading tag="h1" :html="title" />
      <UiAction variant="mws" @click="isFormOpen = true">{{ action.text }}</UiAction>
      <div class="space-y-5">
        <UiHeading class="font-black" tag="h3" as="h2" :html="subtitle" />
        <UiText class="max-w-120 pr-20 sm:pr-0" size="xl">{{ description }}</UiText>
      </div>
    </div>
    <NuxtPicture
      class="pointer-events-none -z-10 col-start-1 row-start-1 mt-5 -mr-20 block h-0 w-65 translate-y-[20%] self-start justify-self-end sm:w-100 md:w-150 lg:w-190 lg:translate-x-[10%] lg:-translate-y-[10%]"
      :img-attrs="{ class: 'w-full h-auto' }"
      :src="image"
      alt=""
      loading="eager"
      fetchpriority="high"
      preload
    />

    <ParticipationFormModal
      v-model="isFormOpen"
      :description="form.description"
      :role-group="form.roleGroup"
      :events-group="form.eventsGroup"
    />
  </section>
</template>
