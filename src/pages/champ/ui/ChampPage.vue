<script setup lang="ts">
import { champPageData } from '../model/ChampPage.data'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'
import { ChampHero } from '~/widgets/champ/hero'
import { ChampAbout } from '~/widgets/champ/about'
import { ChampNumbers } from '~/widgets/champ/numbers'
import { ChampDivisions } from '~/widgets/champ/divisions'
import { ChampTracks } from '~/widgets/champ/tracks'
import { ChampWhy } from '~/widgets/champ/why'
import { ChampHow } from '~/widgets/champ/how'
import { ChampVenues } from '~/widgets/champ/venues'
import { ChampFaq } from '~/widgets/champ/faq'
import { AchievementsSection } from '~/widgets/home/achievements'
import { PartnersSection } from '~/widgets/partners'

const blockComponents: Record<string, Component> = {
  hero: ChampHero,
  about: ChampAbout,
  numbers: ChampNumbers,
  divisions: ChampDivisions,
  tracks: ChampTracks,
  why: ChampWhy,
  how: ChampHow,
  achievements: AchievementsSection,
  venues: ChampVenues,
  partners: PartnersSection,
  faq: ChampFaq,
}

const anchorIds: Record<string, string> = {
  about: 'about',
  demo: 'demo',
  calendar: 'calendar',
  partners: 'partners',
}

const { data } = await usePageContent('/champ', champPageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/champ')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
