<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    items: {
      label: string
      disabled?: boolean
    }[]
    wrapperClass?: string
    itemClass?: string
  }>(),
  {
    wrapperClass: '',
    itemClass: '',
  },
)

const activeTab = defineModel<number>({ default: 0 })

function selectTab(index: number) {
  if (props.items[index]?.disabled) return
  activeTab.value = index
}

const baseWrapperClass = 'flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-11'
const baseItemClass =
  'min-w-[305px] cursor-pointer rounded-[45px] px-11 py-3 text-[24px] font-extrabold tracking-[5%] uppercase transition duration-200 ease-out lg:min-w-auto lg:px-12'
const mergedWrapperClass = computed(() => twMerge(baseWrapperClass, props.wrapperClass))
const mergedItemClass = computed(() => twMerge(baseItemClass, props.itemClass))
</script>

<template>
  <div>
    <div :class="mergedWrapperClass">
      <button
        v-for="(item, index) in props.items"
        :key="index"
        type="button"
        :disabled="item.disabled"
        :class="[
          mergedItemClass,
          activeTab === index
            ? 'bg-(image:--stage-secret-gradient)'
            : 'bg-(image:--participant-card-bg) enabled:hover:-translate-y-0.5 enabled:hover:brightness-125 enabled:active:translate-y-0',
          item.disabled && 'cursor-not-allowed opacity-40',
        ]"
        @click="selectTab(index)"
      >
        {{ item.label }}
      </button>
    </div>

    <div class="mt-10">
      <slot :index="activeTab" />
    </div>
  </div>
</template>
