<script setup lang="ts">
import { sanitizeRichText } from '~/shared/lib/sanitizeRichText'
import type { StagesSectionProps } from '~/widgets/practikum/stages'

const props = defineProps<StagesSectionProps>()

const ROW_SPLIT = 3
const widths = ['w-84', 'w-67.5', 'w-84', 'w-67.5', 'w-84']

const rows = computed(() => [
  props.steps.slice(0, ROW_SPLIT).map((step, i) => ({ step, width: widths[i] })),
  props.steps.slice(ROW_SPLIT).map((step, i) => ({ step, width: widths[i + ROW_SPLIT] })),
])
</script>

<template>
  <section class="relative space-y-5 sm:space-y-10">
    <UiHeading class="text-purple-primary relative z-10 container text-center font-black" tag="h2">
      {{ title }}
    </UiHeading>
    <div class="stages-scroll relative z-10 overflow-x-auto">
      <div class="mx-auto w-fit space-y-16 px-5">
        <div
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          :class="['flex', rowIndex > 0 && 'justify-end']"
        >
          <ol class="relative flex gap-x-12">
            <li
              v-for="({ step, width }, index) in row"
              :key="step.title"
              :class="['relative z-10', width]"
            >
              <component
                :is="step.to ? 'a' : 'div'"
                v-bind="
                  step.to ? { href: step.to, target: '_blank', rel: 'noopener noreferrer' } : {}
                "
                class="bg-dark-primary/70 flex h-33.25 items-center gap-2.5 rounded-[20px] border border-white px-5 py-4 backdrop-blur-md"
              >
                <div class="flex h-full flex-1 flex-col justify-center gap-2">
                  <p
                    class="text-[14px] leading-[1.6] font-semibold tracking-wider uppercase"
                    v-html="sanitizeRichText(step.title)"
                  />
                  <UiText
                    v-if="step.note"
                    class="text-[8px] uppercase"
                    size="custom"
                    :html="step.note"
                  />
                </div>
                <NuxtImg
                  class="aspect-square w-25 shrink-0 object-contain"
                  :src="step.image"
                  alt=""
                  loading="lazy"
                />
              </component>
              <span
                v-if="rowIndex > 0 && index === 0"
                aria-hidden="true"
                class="absolute bottom-full left-1/2 h-16 border-l border-dashed border-white/60"
              />
            </li>
            <li
              aria-hidden="true"
              class="absolute inset-x-0 top-1/2 z-0 h-px -translate-y-1/2 border-t border-white/60"
            />
          </ol>
        </div>
      </div>
    </div>
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div
        class="absolute top-0 -right-1/3 size-100 -translate-y-1/2 rounded-full bg-[#5E4877] blur-[370px] not-sm:hidden"
      />
      <NuxtImg
        class="absolute bottom-0 left-0 aspect-[815/720] w-[815px] -translate-x-1/2 translate-y-1/3 blur-[1.5px] select-none"
        src="/images/practikum/geometry.png"
        alt=""
        loading="lazy"
      />
    </div>
  </section>
</template>

<style scoped>
.stages-scroll {
  scrollbar-width: none;
}

.stages-scroll::-webkit-scrollbar {
  display: none;
}
</style>
