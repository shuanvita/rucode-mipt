<script setup lang="ts">
import { homePageData } from '../model/HomePage.data'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'
import { HomeHero } from '~/widgets/home/hero'
import { InfoBlock } from '~/widgets/info-block'
import { AchievementsSection } from '~/widgets/home/achievements'
import { PartnersSection } from '~/widgets/partners'
import { TracksSection } from '~/widgets/home/tracks'
import { CalendarSection } from '~/widgets/home/calendar'

const blockComponents: Record<string, Component> = {
  hero: HomeHero,
  about: InfoBlock,
  achievements: AchievementsSection,
  tracks: TracksSection,
  calendar: CalendarSection,
  partners: PartnersSection,
}

const anchorIds: Record<string, string> = {
  tracks: 'tracks',
  calendar: 'calendar',
  organizers: 'organizers',
  videos: 'videos',
}

const { data } = await usePageContent('/', homePageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/')
</script>

<template>
  <div class="space-y-10 lg:space-y-25">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
