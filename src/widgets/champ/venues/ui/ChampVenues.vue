<script setup lang="ts">
import type { ChampVenuesProps } from '~/widgets/champ/venues'

defineProps<ChampVenuesProps>()
</script>

<template>
  <section class="relative">
    <div
      class="gradient pointer-events-none absolute -top-20 -right-100 -z-10 h-125 w-225 -rotate-135 md:w-300 lg:-right-50"
    />
    <div class="relative container flex flex-col">
      <UiHeading
        v-if="title"
        class="text-yellow-primary mb-7 leading-none whitespace-pre-line"
        tag="h2"
        >{{ title }}</UiHeading
      >
      <div class="flex flex-col gap-y-5">
        <UiAccordion v-for="item in items" :key="item.title" :title="item.title">
          <ul
            v-if="item.list?.length"
            class="list-disc space-y-1 pl-5 text-[14px] tracking-[0.8px] md:text-[16px]"
          >
            <li v-for="venue in item.list" :key="venue">{{ venue }}</li>
          </ul>
        </UiAccordion>
      </div>
    </div>
    <NuxtPicture
      class="pointer-events-none absolute -top-2 left-3/5 -z-9 not-lg:hidden"
      src="/images/champ/bubbles2.png"
      alt=""
    />
    <NuxtPicture
      class="pointer-events-none absolute top-100 left-0 -z-9 max-w-103 opacity-20 not-lg:hidden"
      src="/images/champ/strokes-bubble.png"
      alt=""
    />
    <NuxtPicture
      class="pointer-events-none absolute top-120 right-0 -z-9 max-w-93 not-lg:hidden"
      src="/images/champ/bubbles-1.png"
      alt=""
    />
  </section>
</template>

<style scoped>
.gradient {
  mix-blend-mode: exclusion;
  background: radial-gradient(
    46.77% 44.98%,
    #0045ffb3 0.4%,
    #0031b6b3 21.77%,
    #002075b3 42.81%,
    #001243b3 61.74%,
    #00081eb3 78.18%,
    #000208b3 91.48%,
    #000000b3 100%
  );
}
</style>
