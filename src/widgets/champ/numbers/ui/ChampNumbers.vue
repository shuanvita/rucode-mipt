<script setup lang="ts">
import type { ChampNumbersProps } from '../model/ChampNumbers.types'

const props = defineProps<ChampNumbersProps>()

const items = computed(() => [
  {
    key: 'one',
    data: props.numbersOne,
    wrapper:
      'not-md:top-150 not-lg:left-1/2 not-lg:-translate-x-55 not-lg:md:top-220 lg:top-37 lg:right-12',
    image: 'not-md:max-w-60 not-lg:-rotate-145',
    content: 'top-2/5 left-3/5 lg:top-[calc(50%+50px)] lg:left-1/2',
    title: 'text-5xl md:text-6xl',
    text: 'mt-1 w-max text-sm/tight md:text-lg',
  },
  {
    key: 'two',
    data: props.numbersTwo,
    wrapper:
      'not-md:top-110 not-md:left-[calc(50%+50px)] not-lg:z-30 not-lg:-translate-x-1/2 not-lg:md:top-160 not-lg:md:left-[calc(50%+150px)] lg:right-12 lg:-bottom-5',
    image: 'not-md:max-w-70',
    content: 'top-1/2 left-1/2',
    title: 'text-7xl leading-none md:text-[110px]',
    text: 'text-base/tight md:text-lg',
  },
  {
    key: 'three',
    data: props.numbersThree,
    wrapper:
      'not-md:top-70 not-lg:left-[calc(50%-50px)] not-lg:z-20 not-lg:-translate-x-1/2 not-lg:md:top-110 lg:top-50 lg:-left-12',
    image: 'not-md:max-w-80',
    content: 'top-1/2 left-1/2',
    title: 'text-6xl leading-none md:text-8xl',
    text: 'mt-1 text-sm/tight md:text-lg',
  },
  {
    key: 'four',
    data: props.numbersFour,
    wrapper:
      'not-lg:left-1/2 not-lg:-translate-x-1/2 lg:top-10 lg:left-[calc(50%-10px)] lg:-translate-x-1/2',
    image: 'w-110 mix-blend-screen md:w-170',
    content: 'top-1/2 left-1/2',
    title: 'text-7xl leading-none md:text-9xl',
    text: 'mt-1 text-sm/tight md:text-xl',
  },
])
</script>

<template>
  <section class="container">
    <UiHeading v-if="title" class="text-yellow-primary mb-8 leading-none lg:mb-10" tag="h2">{{
      title
    }}</UiHeading>
    <div
      class="relative h-230 not-min-[440px]:-mt-10 not-min-[440px]:h-195 not-min-[440px]:scale-80 not-lg:min-[440px]:mt-10 md:h-550 lg:h-195"
    >
      <div v-for="item in items" :key="item.key" :class="['absolute text-center', item.wrapper]">
        <img
          v-if="item.data.image"
          :src="item.data.image"
          alt=""
          loading="lazy"
          :class="['pointer-events-none max-w-none select-none', item.image]"
        />
        <div :class="['absolute z-10 -translate-1/2', item.content]">
          <h3 :class="['font-montserrat font-bold', item.title]">{{ item.data.title }}</h3>
          <p :class="['font-light whitespace-pre-line', item.text]">{{ item.data.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
