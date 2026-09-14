<script setup lang="ts">
import SimpleNominationCard from '~/widgets/award2026/nominations-tabs/ui/SimpleNominationCard.vue'
import PartnerNominationCard from '~/widgets/award2026/nominations-tabs/ui/PartnerNominationCard.vue'
import type { NominationsTabsProps } from '~/widgets/award2026/nominations-tabs'

defineProps<NominationsTabsProps>()
</script>

<template>
  <section class="relative z-10 container flex flex-col items-center space-y-8 lg:space-y-15">
    <UiHeading class="text-purple-primary text-center" tag="h2">{{ title }}</UiHeading>
    <UiTabs :items="tabs">
      <template #default="{ index }">
        <div class="space-y-14">
          <UiText class="mx-auto max-w-[558px] text-center">
            {{ tabs[index]?.description }}
          </UiText>

          <div class="grid gap-6 sm:grid-cols-2">
            <template v-for="nomination in tabs[index]?.nominations" :key="nomination.title">
              <SimpleNominationCard v-if="nomination.type === 'simple'" v-bind="nomination" />
              <PartnerNominationCard
                v-else-if="nomination.type === 'partner'"
                v-bind="nomination"
                class="sm:col-span-2"
              />
            </template>
          </div>
        </div>
      </template>
    </UiTabs>
    <UiAction class="h-[52px]" target="_blank" :to="action?.to">{{ action?.text }}</UiAction>
    <NuxtPicture
      src="/images/award2026/geometry-1.png"
      alt=""
      loading="lazy"
      class="absolute top-15 -left-45 -z-999 w-[592px] blur-[2px] lg:-top-[300px] lg:-left-[310px]"
    />
    <NuxtPicture
      src="/images/award2026/geometry-2.png"
      alt=""
      loading="lazy"
      class="absolute -z-999 hidden w-[592px] blur-[2px] lg:top-[400px] lg:-right-[420px] lg:block"
    />
  </section>
</template>
