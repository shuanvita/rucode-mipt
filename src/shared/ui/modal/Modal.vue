<script setup lang="ts">
import { onKeyStroke, useScrollLock } from '@vueuse/core'

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

interface ModalProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const props = withDefaults(defineProps<ModalProps>(), { size: 'md' })
const panelRef = ref<HTMLElement>()
const isLocked = useScrollLock(import.meta.client ? document.body : null)
const isOpen = defineModel<boolean>({ required: true })

defineOptions({
  inheritAttrs: false,
})

const closeOnOverlayClick = () => {
  isOpen.value = false
}

onKeyStroke('Escape', () => {
  if (isOpen.value) {
    isOpen.value = false
  }
})

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-sm rounded-2xl',
  md: 'max-w-md rounded-2xl',
  lg: 'max-w-lg rounded-2xl',
  xl: 'max-w-xl rounded-2xl',
  full: 'max-w-[100vw] h-[100vh] rounded-none',
}

const modalSizeClass = computed(() => sizeClasses[props.size])

watch(isOpen, async (value) => {
  isLocked.value = value
  if (value) {
    await nextTick()
    panelRef.value?.focus()
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-999 flex items-center justify-center bg-black/40"
        role="dialog"
        aria-modal="true"
        @click="closeOnOverlayClick"
      >
        <div
          ref="panelRef"
          tabindex="-1"
          :class="[
            'bg-dark-primary flex w-full max-w-250 flex-col space-y-4 rounded-2xl p-8 shadow-xl outline-none max-md:p-6',
            modalSizeClass,
          ]"
          v-bind="$attrs"
          @click.stop
        >
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
