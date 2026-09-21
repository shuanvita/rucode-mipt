<script setup lang="ts">
import { onClickOutside, onKeyStroke, useMediaQuery, useResizeObserver } from '@vueuse/core'
import type { ConsortiumSectionProps } from '~/widgets/home/consortium'
import ConsortiumCard from './ConsortiumCard.vue'

const props = defineProps<ConsortiumSectionProps>()

const OFFSET = { right: 20, left: 4, bottom: 15, top: 4 } as const

const popupId = useId()
const mapRef = ref<HTMLElement | null>(null)
const popupRef = ref<HTMLElement | null>(null)

const isLargeScreen = useMediaQuery('(min-width: 640px)')

const activeId = ref<string | null>(null)
const activeCard = computed(() => props.cards.find((card) => card.id === activeId.value) ?? null)

const toggle = (id: string) => {
  activeId.value = activeId.value === id ? null : id
}
const close = () => {
  activeId.value = null
}

onKeyStroke('Escape', close)
onClickOutside(popupRef, close, { ignore: ['[data-consortium-pin]'] })

/* ---------- Позиционирование попапа ---------- */

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

/**
 * По умолчанию попап открывается справа-снизу от пина (card.side — предпочтение из данных).
 * Если он вылезает за карту, выбираем сторону, где вылет меньше. Размеры попапа не зависят
 * от placement, поэтому замер делаем один раз, без промежуточного рендера.
 */
function place() {
  const card = activeCard.value
  const popup = popupRef.value
  const map = mapRef.value
  if (!card || !popup || !map) return

  const { width: mapW, height: mapH } = map.getBoundingClientRect()
  // offsetWidth/offsetHeight не зависят от transform, поэтому анимации появления не мешают
  const w = popup.offsetWidth
  const h = popup.offsetHeight
  const px = (parseFloat(card.coordinates.x) / 100) * mapW
  const py = (parseFloat(card.coordinates.y) / 100) * mapH

  // На сколько px попап выйдет за карту при каждом варианте (<= 0 — помещается)
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

// flush: 'post' — DOM с попапом уже готов, можно мерить. Правка placement до paint, мерцания нет.
watch([activeCard, isLargeScreen], place, { flush: 'post' })
useResizeObserver(mapRef, place)
</script>

<template>
  <section class="container space-y-6 text-center lg:space-y-10">
    <UiHeading class="text-purple-primary" tag="h2">{{ title }}</UiHeading>
    <UiText class="mx-auto max-w-190">{{ description }}</UiText>

    <div>
      <!-- 1060px и пропорция 1.82 — как в старой реализации, под них откалиброваны coordinates -->
      <div ref="mapRef" class="relative mx-auto max-w-265">
        <img
          src="/images/home/map.webp"
          alt=""
          loading="lazy"
          draggable="false"
          class="pointer-events-none block aspect-[1.82] w-full select-none"
        />

        <!-- Пин привязан левым верхним углом к coordinates (без центрирования), как раньше -->
        <button
          v-for="card in cards"
          :key="card.id"
          type="button"
          data-consortium-pin
          :aria-label="card.city"
          :aria-expanded="card.id === activeId"
          :aria-controls="card.id === activeId ? popupId : undefined"
          :style="{ left: card.coordinates.x, top: card.coordinates.y }"
          class="absolute z-20 size-2.5 cursor-pointer rounded-full bg-(--point-color) shadow-[0_6.26px_6.26px_0_#00000040,0_6.26px_6.26px_0_var(--shadow-color)] transition-[background-color,box-shadow] duration-200 after:absolute after:-inset-2.5 hover:[--point-color:#FFD102] hover:[--shadow-color:#ECD778BF] min-[360px]:size-3 min-[450px]:size-4 sm:shadow-[0_6.26px_6.26px_0_#00000040,0_4.26px_4.26px_1px_var(--shadow-color)]"
          :class="
            card.id === activeId
              ? '[--point-color:#FFD102] [--shadow-color:#ECD778BF]'
              : '[--point-color:white] [--shadow-color:#FFFFFFBF]'
          "
          @click="toggle(card.id)"
        />

        <Transition
          enter-active-class="transition-opacity duration-200"
          enter-from-class="opacity-0"
          leave-active-class="transition-opacity duration-150"
          leave-to-class="opacity-0"
        >
          <div
            v-if="activeCard && isLargeScreen"
            :id="popupId"
            ref="popupRef"
            role="region"
            :aria-label="activeCard.city"
            :style="popupStyle"
            class="absolute z-30 w-121 max-w-full"
          >
            <ConsortiumCard :city="activeCard.city" :items="activeCard.items" />
          </div>
        </Transition>
      </div>

      <ConsortiumCard
        v-if="activeCard && !isLargeScreen"
        :id="popupId"
        :city="activeCard.city"
        :items="activeCard.items"
        class="mt-4"
      />
    </div>

    <UiAction v-if="action" :to="action.to" class="py-5">
      {{ action.text }}
    </UiAction>
  </section>
</template>
