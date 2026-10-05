<script setup lang="ts">
import type {
  BenefitImageCard,
  BenefitItem,
  BenefitsSectionProps,
  BenefitSize,
} from '~/widgets/mws/benefits'

defineProps<BenefitsSectionProps>()

const sizeClasses: Record<BenefitSize, string> = {
  sm: 'w-35.75 min-[500px]:w-66.25 md:w-82.25',
  md: 'w-47.25 min-[500px]:w-75 md:w-109',
  lg: 'w-75.75 min-[500px]:w-136.25 md:w-174',
}

const isImage = (item: BenefitItem): item is BenefitImageCard => 'image' in item
</script>

<template>
  <section class="space-y-7.5 sm:space-y-12.5">
    <UiHeading class="text-purple-primary container text-center font-black" tag="h2">
      {{ title }}
    </UiHeading>
    <div class="space-y-1.75 md:space-y-4">
      <UiMarquee
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="select-none"
        gap="gap-4.5 md:gap-10.5"
        :speed="60"
      >
        <template v-for="(item, index) in row" :key="index">
          <NuxtImg
            v-if="isImage(item)"
            class="h-37.5 w-auto max-w-none min-[500px]:h-65 md:h-86.25"
            :src="item.image"
            alt=""
            loading="lazy"
          />
          <div
            v-else
            :class="[
              'border-purple-primary flex h-37.5 shrink-0 items-center justify-center rounded-2xl border-2 px-4 min-[500px]:h-65 min-[500px]:rounded-[37px] min-[500px]:border-4 min-[500px]:px-9 md:h-86.25',
              sizeClasses[item.size ?? 'sm'],
            ]"
          >
            <UiText
              class="text-center text-[11px]/[1.2] font-bold tracking-wider uppercase min-[500px]:text-[18px]/6 md:text-[25px]/7.5"
              size="custom"
              :html="item.text"
            />
          </div>
        </template>
      </UiMarquee>
    </div>
  </section>
</template>
