<script setup lang="ts">
import type { MaterialsSectionProps } from '~/widgets/practikum/materials'

defineProps<MaterialsSectionProps>()

const activeTab = ref(0)
const closed = reactive(new Set<string>())

function toggle(key: string) {
  if (closed.has(key)) closed.delete(key)
  else closed.add(key)
}
</script>

<template>
  <section class="container space-y-5 sm:space-y-10">
    <UiHeading class="text-purple-primary text-center font-black" tag="h2">{{ title }}</UiHeading>
    <UiTabs
      v-model="activeTab"
      :items="tabs"
      wrapper-class="lg:gap-5"
      item-class="text-[14px] sm:text-[18px] lg:text-[20px] lg:px-8 lg:min-w-auto"
    >
      <template #default="{ index }">
        <div v-if="tabs[index]?.items.length" class="mx-auto flex max-w-[805px] flex-col gap-y-10">
          <div v-for="item in tabs[index].items" :key="item.title">
            <h3>
              <button
                type="button"
                class="hover:text-yellow-primary flex cursor-pointer flex-row items-center gap-x-8 text-left transition-colors"
                :aria-expanded="!closed.has(`${index}-${item.title}`)"
                @click="toggle(`${index}-${item.title}`)"
              >
                <UiSvg
                  name="materials-chevron"
                  class="h-7 w-[17px] shrink-0 transition-transform duration-200"
                  :class="closed.has(`${index}-${item.title}`) && '-rotate-90'"
                  aria-hidden="true"
                />
                <span class="text-[14px] leading-[1.35] uppercase sm:text-[20px] md:text-[25px]">
                  {{ item.title }}
                </span>
              </button>
            </h3>
            <div
              class="grid transition-[grid-template-rows] duration-300 ease-in-out"
              :style="{ gridTemplateRows: closed.has(`${index}-${item.title}`) ? '0fr' : '1fr' }"
            >
              <div class="overflow-hidden" :inert="closed.has(`${index}-${item.title}`)">
                <div class="mt-6 flex flex-col gap-y-7.5 sm:pl-[51px]">
                  <p class="max-w-[249px] text-[12px] tracking-wider">{{ item.description }}</p>
                  <div
                    class="flex flex-col gap-x-7.5 gap-y-5 min-[340px]:flex-row min-[340px]:items-center"
                  >
                    <a
                      v-if="item.presentationTo"
                      :href="item.presentationTo"
                      target="_blank"
                      rel="noopener"
                      class="hover:text-yellow-primary flex flex-row items-center gap-x-2 transition-colors"
                    >
                      <UiSvg class="h-[26px] w-[37px] shrink-0" name="materials-presentation" />
                      <span class="text-[12px] leading-[1.1] font-bold">Презентация</span>
                    </a>
                    <a
                      v-if="item.allMaterialsTo"
                      :href="item.allMaterialsTo"
                      class="hover:text-yellow-primary flex flex-row items-center gap-x-2 transition-colors"
                    >
                      <UiSvg class="h-[27px] w-5 shrink-0" name="materials-all" />
                      <span class="text-[12px] leading-[1.1] font-bold">Все материалы</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UiText v-else class="text-center" size="lg">{{ emptyText }}</UiText>
      </template>
    </UiTabs>
    <div class="flex justify-center">
      <UiAction class="px-10 text-center sm:py-4" :to="action.to">{{ action.text }}</UiAction>
    </div>
  </section>
</template>
