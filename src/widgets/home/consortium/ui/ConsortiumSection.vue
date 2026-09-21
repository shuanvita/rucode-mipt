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

/**
 * Отступы попапа от левого верхнего угла пина, px.
 * right/bottom — как в старой реализации (+20 / +15), left/top — зеркальные, для разворота.
 */
const OFFSET = { right: 20, left: 4, bottom: 15, top: 4 } as const

const popupId = useId()
const mapRef = ref<HTMLElement | null>(null)
const popupRef = ref<HTMLElement | null>(null)
const mobileCardRef = ref<HTMLElement | null>(null)

// Как в старой версии: от 640px попап рядом с пином, ниже — карточка под картой.
// На SSR вернёт false, но попап рендерится только после клика, так что hydration mismatch невозможен.
const isLargeScreen = useMediaQuery('(min-width: 640px)')
const reducedMotion = usePreferredReducedMotion()

/* ---------- Выбор пина ---------- */

const activeId = ref<string | null>(null)
const activeCard = computed(() => props.cards.find((card) => card.id === activeId.value) ?? null)

const toggle = (id: string) => {
  activeId.value = activeId.value === id ? null : id
}
const close = () => {
  activeId.value = null
}

// Закрытие кнопкой внутри карточки: после unmount фокус пропал бы в body, возвращаем его на пин
const closeFromCard = () => {
  const pin = mapRef.value?.querySelector<HTMLElement>(
    '[data-consortium-pin][aria-expanded="true"]',
  )
  close()
  pin?.focus()
}

onKeyStroke('Escape', close)
// Клик по пину обрабатывает toggle, поэтому пины из «внешних» кликов исключаем
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

// Анимация появления «растёт» из угла, обращённого к пину
const cardOrigin = computed(() => ({
  transformOrigin: `${placement.y === 'bottom' ? 'top' : 'bottom'} ${placement.x === 'right' ? 'left' : 'right'}`,
}))

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

// flush: 'post' — DOM уже готов. Правка placement до paint, мерцания нет.
watch(
  [activeCard, isLargeScreen],
  () => {
    if (isLargeScreen.value) return place()

    // На мобильных карточка под картой может оказаться за пределами экрана
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
      <!-- Подсказка: без неё не очевидно, что белые точки кликабельны -->
      <p v-if="hint" class="mb-4 text-sm text-white/60">{{ hint }}</p>

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
          class="group absolute size-2.5 cursor-pointer touch-manipulation rounded-full bg-(--point-color) shadow-[0_6.26px_6.26px_0_#00000040,0_6.26px_6.26px_0_var(--shadow-color)] outline-offset-4 outline-white transition-[background-color,box-shadow] duration-200 after:absolute after:-inset-2.5 hover:[--point-color:#FFD102] hover:[--shadow-color:#ECD778BF] focus-visible:outline-2 motion-reduce:transition-none min-[360px]:size-3 min-[450px]:size-4 sm:shadow-[0_6.26px_6.26px_0_#00000040,0_4.26px_4.26px_1px_var(--shadow-color)]"
          :class="
            card.id === activeId
              ? 'z-20 [--point-color:#FFD102] [--shadow-color:#ECD778BF]'
              : 'z-10 [--point-color:white] [--shadow-color:#FFFFFFBF] hover:z-20'
          "
          @click="toggle(card.id)"
        >
          <!-- Активный пин «пульсирует», чтобы связь пин ↔ карточка читалась сразу -->
          <span
            v-if="card.id === activeId"
            aria-hidden="true"
            class="absolute inset-0 rounded-full bg-(--point-color) opacity-60 motion-safe:animate-ping"
          />
          <!-- Название города по ховеру/фокусу (только на устройствах с hover) -->
          <span
            v-else
            aria-hidden="true"
            class="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-black/75 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100"
          >
            {{ card.city }}
          </span>
        </button>

        <div
          v-if="activeCard && isLargeScreen"
          :id="popupId"
          ref="popupRef"
          role="region"
          :aria-label="activeCard.city"
          :style="popupStyle"
          class="absolute z-30 w-121 max-w-full"
        >
          <!-- key: при переключении между пинами карточка пересоздаётся и анимируется заново -->
          <ConsortiumCard
            :key="activeCard.id"
            :city="activeCard.city"
            :items="activeCard.items"
            :style="cardOrigin"
            @close="closeFromCard"
          />
        </div>
      </div>

      <div v-if="activeCard && !isLargeScreen" ref="mobileCardRef" class="mt-4">
        <ConsortiumCard
          :id="popupId"
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
