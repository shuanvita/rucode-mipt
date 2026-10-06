<script setup lang="ts">
import { sanitizeRichText } from '~/shared/lib/sanitizeRichText'
import type { AiTestingAboutProps } from '~/widgets/ai_testing/about'

defineProps<AiTestingAboutProps>()
</script>

<template>
  <section class="container lg:mt-30">
    <div class="max-w-155 space-y-7">
      <h2
        v-if="title"
        class="text-purple-primary text-[20px] font-bold normal-case lg:text-3xl"
        v-html="sanitizeRichText(title)"
      />
      <UiText v-for="text in description" :key="text" :html="text" />
      <UiAction :to="cta.to">{{ cta.text }}</UiAction>
    </div>
  </section>
</template>
