<script setup lang="ts">
import type { MarqueeProps } from './Marquee.types'

const props = withDefaults(defineProps<MarqueeProps>(), {
  direction: 'horizontal',
  reverse: false,
  speed: 30,
  gap: 'gap-8',
  pauseOnHover: true,
})

const paused = ref(false)
const isVertical = computed(() => props.direction === 'vertical')

const containerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const repeat = ref(2)

function updateRepeat() {
  const container = containerRef.value
  const content = contentRef.value
  if (!container || !content) return

  const containerSize = isVertical.value ? container.clientHeight : container.clientWidth
  const singleSetSize =
    (isVertical.value ? content.scrollHeight : content.scrollWidth) / repeat.value
  if (!singleSetSize) return

  repeat.value = Math.max(2, Math.ceil((containerSize * 2) / singleSetSize))
}

let observer: ResizeObserver | undefined

onMounted(() => {
  updateRepeat()
  observer = new ResizeObserver(updateRepeat)
  observer.observe(containerRef.value!)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div
    ref="containerRef"
    class="relative overflow-hidden"
    @mouseenter="pauseOnHover && (paused = true)"
    @mouseleave="pauseOnHover && (paused = false)"
  >
    <div
      ref="contentRef"
      :class="[
        'marquee flex w-max',
        gap,
        {
          'marquee-vertical': isVertical,
          'flex-col': isVertical,
          'marquee-horizontal': !isVertical,
          'flex-row': !isVertical,
          reverse: reverse,
        },
      ]"
      :style="{
        '--marquee-duration': `${speed}s`,
        '--marquee-repeat': repeat,
        animationPlayState: paused ? 'paused' : 'running',
      }"
    >
      <div v-for="item in repeat" :key="item" class="contents">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  --marquee-repeat: 2;
  --marquee-duration: 30s;
  animation: var(--marquee-duration) linear infinite;
  animation-play-state: inherit;
}
.marquee.reverse {
  animation-direction: reverse;
}
.marquee-horizontal {
  animation-name: marquee-horizontal-anim;
}
.marquee-vertical {
  animation-name: marquee-vertical-anim;
}

@keyframes marquee-horizontal-anim {
  to {
    transform: translateX(calc(-100% / var(--marquee-repeat)));
  }
}
@keyframes marquee-vertical-anim {
  to {
    transform: translateY(calc(-100% / var(--marquee-repeat)));
  }
}
</style>
