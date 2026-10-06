<script setup lang="ts">
import type { PersonQuoteProps } from '../model/PersonQuote.types'

defineProps<PersonQuoteProps>()
</script>

<template>
  <section class="container space-y-9 sm:space-y-14">
    <UiHeading v-if="title" class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>
    <div class="mx-auto flex max-w-251.75 flex-col items-center gap-10 md:flex-row">
      <div class="flex max-w-80 flex-col items-center gap-4 text-center md:min-w-65">
        <div class="avatar-decorations relative w-fit">
          <div class="relative z-20 size-40 overflow-hidden rounded-full bg-white/5 sm:size-45">
            <NuxtImg
              :src="image"
              alt=""
              loading="lazy"
              class="relative z-30 size-full object-cover object-top"
            />
          </div>
        </div>
        <div class="space-y-4">
          <UiText
            size="custom"
            weight="bold"
            class="text-purple-primary text-[15px] md:text-[19px]"
          >
            {{ name }}
          </UiText>
          <UiText v-if="role" size="custom" class="text-[12px] sm:text-[13px]" :html="role" />
        </div>
      </div>

      <div class="flex max-w-158.25 flex-col space-y-4">
        <UiSvg name="quote-open" class="text-yellow-primary size-8 lg:size-10" />
        <UiText :html="text" />
        <UiSvg name="quote-close" class="text-yellow-primary ml-auto block size-8 lg:size-10" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.avatar-decorations::before {
  content: '';
  position: absolute;
  z-index: 30;
  top: -6px;
  left: -14px;
  width: 36%;
  aspect-ratio: 1;
  border-radius: 9999px;
  background: var(--color-yellow-primary);
}

.avatar-decorations::after {
  content: '';
  position: absolute;
  z-index: 10;
  top: -4px;
  right: -22px;
  width: 70px;
  height: 140px;
  background-image: radial-gradient(circle, #fff 2px, transparent 2.5px);
  background-size: 17px 17px;
}
</style>
