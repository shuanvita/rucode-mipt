<script setup lang="ts">
const contentId = useId()

withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    icon?: string
    iconSize?: string
    disabled?: boolean
  }>(),
  {
    icon: 'plus',
    iconSize: 'w-9 h-9',
    disabled: false,
  },
)

const isOpen = defineModel<boolean>({ default: false })

function onToggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="border-purple-light overflow-hidden rounded-2xl border-2 md:rounded-4xl">
    <button
      :aria-controls="contentId"
      type="button"
      class="focus-visible:outline-ring bg-dark-primary hover:text-purple-light flex w-full cursor-pointer justify-between gap-4 px-6 py-4 font-bold text-[16] transition-colors duration-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 disabled:pointer-events-none disabled:opacity-40 lg:items-center lg:px-7 lg:py-6 lg:text-[20px]"
      :aria-expanded="isOpen"
      :disabled="disabled"
      @click="onToggle"
    >
      <span class="text-left">
        {{ title }}
        <span v-if="subtitle" class="mt-2 block text-base font-light lg:text-xl">{{
          subtitle
        }}</span>
      </span>

      <slot name="icon" :is-open="isOpen">
        <UiSvg
          :name="icon"
          :class="[
            'text-purple-light max-w-6 shrink-0 transition-transform duration-200 lg:max-w-[50px]',
            iconSize,
            isOpen && 'rotate-45',
          ]"
        />
      </slot>
    </button>

    <div
      :id="contentId"
      class="grid transition-[grid-template-rows] duration-300 ease-in-out"
      :style="{ gridTemplateRows: isOpen ? '1fr' : '0fr' }"
    >
      <div class="overflow-hidden" :inert="!isOpen">
        <div class="bg-dark-primary px-7 pb-4 text-[18px] font-light">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
