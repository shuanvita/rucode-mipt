<script setup lang="ts">
import {
  onClickOutside,
  onKeyStroke,
  useMediaQuery,
  usePreferredReducedMotion,
  useResizeObserver,
} from '@vueuse/core'
import type { ConsortiumSectionProps } from '~/widgets/home/consortium'
import ConsortiumCard from './ConsortiumCard.vue'

const props = defineProps<ConsortiumSectionProps>()

const OFFSET = { right: 20, left: 4, bottom: 15, top: 4 } as const

const popupId = useId()
const mapRef = ref<HTMLElement | null>(null)
const popupRef = ref<HTMLElement | null>(null)
const mobileCardRef = ref<HTMLElement | null>(null)

const isLargeScreen = useMediaQuery('(min-width: 640px)')
const reducedMotion = usePreferredReducedMotion()

const activeId = ref<string | null>(null)
const activeCard = computed(() => props.cards.find((card) => card.id === activeId.value) ?? null)

function toggle(id: string) {
  return (activeId.value = activeId.value === id ? null : id)
}
function close() {
  return (activeId.value = null)
}

function closeFromCard() {
  const pin = mapRef.value?.querySelector<HTMLElement>(
    '[data-consortium-pin][aria-expanded="true"]',
  )
  close()
  pin?.focus()
}

onKeyStroke('Escape', close)
onClickOutside(popupRef, close, { ignore: ['[data-consortium-pin]'] })

const placement = reactive<{ x: 'left' | 'right'; y: 'top' | 'bottom' }>({
  x: 'right',
  y: 'bottom',
})

const popupStyle = computed(() => {
  const card = activeCard.value
  if (!card) return undefined

  const { x, y } = placement
  return {
    left: `calc(${card.coordinates.x} + ${x === 'right' ? OFFSET.right : -OFFSET.left}px)`,
    top: `calc(${card.coordinates.y} + ${y === 'bottom' ? OFFSET.bottom : -OFFSET.top}px)`,
    transform: `translate(${x === 'left' ? '-100%' : '0'}, ${y === 'top' ? '-100%' : '0'})`,
  }
})

const cardOrigin = computed(() => ({
  transformOrigin: `${placement.y === 'bottom' ? 'top' : 'bottom'} ${placement.x === 'right' ? 'left' : 'right'}`,
}))

function place() {
  const card = activeCard.value
  const popup = popupRef.value
  const map = mapRef.value
  if (!card || !popup || !map) return

  const { width: mapW, height: mapH } = map.getBoundingClientRect()
  const w = popup.offsetWidth
  const h = popup.offsetHeight
  const px = (parseFloat(card.coordinates.x) / 100) * mapW
  const py = (parseFloat(card.coordinates.y) / 100) * mapH

  const overflow = {
    right: px + OFFSET.right + w - mapW,
    left: w + OFFSET.left - px,
    bottom: py + OFFSET.bottom + h - mapH,
    top: h + OFFSET.top - py,
  }

  const preferredX = card.side ?? 'right'
  const otherX = preferredX === 'right' ? 'left' : 'right'
  placement.x =
    overflow[preferredX] > 0 && overflow[otherX] < overflow[preferredX] ? otherX : preferredX
  placement.y = overflow.bottom > 0 && overflow.top < overflow.bottom ? 'top' : 'bottom'
}

watch(
  [activeCard, isLargeScreen],
  () => {
    if (isLargeScreen.value) return place()

    mobileCardRef.value?.scrollIntoView({
      behavior: reducedMotion.value === 'reduce' ? 'auto' : 'smooth',
      block: 'nearest',
    })
  },
  { flush: 'post' },
)
useResizeObserver(mapRef, place)
</script>

<template>
  <section class="container space-y-6 text-center lg:space-y-10">
    <UiHeading class="text-purple-primary" tag="h2">{{ title }}</UiHeading>
    <UiText class="mx-auto max-w-190">{{ description }}</UiText>

    <div>
      <UiText v-if="hint" class="mb-4 text-white/60" size="sm" weight="light">{{ hint }}</UiText>
      <div ref="mapRef" class="relative mx-auto max-w-265">
        <NuxtImg
          :src="imageMap"
          alt="Карта России"
          width="1060"
          loading="lazy"
          class="pointer-events-none aspect-[1.82] w-full select-none"
        />
        <button
          v-for="card in cards"
          :key="card.id"
          type="button"
          data-consortium-pin
          :aria-label="card.city"
          :aria-expanded="card.id === activeId"
          :aria-controls="card.id === activeId ? popupId : undefined"
          :style="{ left: card.coordinates.x, top: card.coordinates.y }"
          class="consortium-pin group absolute size-2.5 cursor-pointer rounded-full outline-offset-4 outline-white transition duration-200 after:absolute after:-inset-2.5 hover:z-20 focus-visible:z-20 focus-visible:outline-2 min-[360px]:size-3 min-[450px]:size-4"
          @click="toggle(card.id)"
        >
          <span
            v-if="card.id === activeId"
            aria-hidden="true"
            class="absolute inset-0 rounded-full bg-(--point-color) opacity-60 motion-safe:animate-ping"
          />
          <UiText
            v-else
            as="span"
            size="xs"
            aria-hidden="true"
            class="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-black/75 px-2 py-1 whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100"
          >
            {{ card.city }}
          </UiText>
        </button>

        <div
          v-if="activeCard && isLargeScreen"
          :id="popupId"
          ref="popupRef"
          :style="popupStyle"
          class="absolute z-30 w-121 max-w-full"
        >
          <ConsortiumCard
            :key="activeCard.id"
            :city="activeCard.city"
            :items="activeCard.items"
            :style="cardOrigin"
            @close="closeFromCard"
          />
        </div>
      </div>

      <div v-if="activeCard && !isLargeScreen" :id="popupId" ref="mobileCardRef" class="mt-4">
        <ConsortiumCard
          :key="activeCard.id"
          :city="activeCard.city"
          :items="activeCard.items"
          @close="closeFromCard"
        />
      </div>
    </div>

    <UiAction v-if="action" :to="action.to" class="py-5">
      {{ action.text }}
    </UiAction>
  </section>
</template>

<style scoped>
.consortium-pin {
  --point-color: #fff;
  --shadow-color: #ffffffbf;
  background: var(--point-color);
  box-shadow:
    0 6px 6px 0 #00000040,
    0 4px 4px 1px var(--shadow-color);
}

.consortium-pin[aria-expanded='true'] {
  --point-color: #ffd102;
  --shadow-color: #ecd778bf;
}

@media (hover: hover) {
  .consortium-pin:hover {
    --point-color: #ffd102;
    --shadow-color: #ecd778bf;
  }
}
</style>
