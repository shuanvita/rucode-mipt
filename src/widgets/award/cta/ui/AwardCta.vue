<script setup lang="ts">
import type { AwardCtaProps } from '~/widgets/award/cta'

defineProps<AwardCtaProps>()
</script>

<template>
  <section class="bg-(image:--cta-bg) py-9 lg:py-15">
    <div class="container flex flex-col items-center justify-center space-y-8">
      <UiHeading class="text-yellow-primary text-center" tag="h2">{{ title }}</UiHeading>
      <UiAction class="lg:w-63" :to="action?.to">{{ action?.text }}</UiAction>
    </div>
  </section>
</template>
