<script setup lang="ts">
import type { ContactsSectionProps } from '~/widgets/mws/contacts'

defineProps<ContactsSectionProps>()
</script>

<template>
  <section class="container space-y-7.5 sm:space-y-12.5">
    <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
    <ul class="flex flex-wrap items-start justify-center gap-4">
      <li v-for="card in cards" :key="card.title">
        <UiAction variant="custom" :to="card.to" class="block rounded-[44px]">
          <article
            class="relative isolate flex h-67.5 w-61.5 flex-col justify-between overflow-hidden rounded-[44px] border-5 border-white px-2.75 pt-7.5 pb-6"
          >
            <NuxtImg
              class="absolute inset-0 -z-10 size-full object-cover"
              :src="card.image"
              alt=""
              loading="lazy"
            />
            <UiText size="lg">{{ card.description }}</UiText>
            <UiHeading class="uppercase" tag="h3" as="h4">{{ card.title }}</UiHeading>
          </article>
        </UiAction>
      </li>
    </ul>
  </section>
</template>
