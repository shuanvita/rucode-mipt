<script setup lang="ts">
import type { StepsSectionProps } from '../model/StepsSection.types'
import { ConsortiumFormModal } from '~/features/consortium-form'

defineProps<StepsSectionProps>()

const isFormOpen = ref(false)
</script>

<template>
  <section class="container space-y-5 sm:space-y-10">
    <UiHeading class="text-purple-primary text-center font-black" tag="h2" :html="title" />
    <div class="mx-2.5 flex flex-col lg:mx-12.5">
      <ol class="space-y-2.5">
        <li
          v-for="(step, index) in steps"
          :key="step.text"
          class="to-purple-primary/12 flex items-center gap-x-7.5 rounded-2xl border border-white/5 bg-linear-to-r from-white/3 px-5 py-7.5 sm:px-10"
        >
          <span
            class="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#333333] bg-[#1F1F1F] text-[16px] leading-5"
          >
            {{ index + 1 }}
          </span>
          <UiText>
            <UiText as="span" :html="step.text" />
            <UiAction v-if="step.link" variant="custom" :to="step.link.to" class="underline">
              {{ step.link.text }}
            </UiAction>
          </UiText>
        </li>
      </ol>
      <UiAction class="mx-auto mt-5 h-13 px-10 md:mt-8.5" @click="isFormOpen = true">
        {{ action.text }}
      </UiAction>
    </div>

    <ConsortiumFormModal v-model="isFormOpen" />
  </section>
</template>
