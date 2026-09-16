<script setup lang="ts">
import { AwardHero } from '~/widgets/award/hero'
import { AwardAbout } from '~/widgets/award/about'
import { AwardParticipants } from '~/widgets/award/participants'
import { WhyParticipate } from '~/widgets/award2026/why-participate'
import { FaqSection } from '~/widgets/faq'
import { AwardCta } from '~/widgets/award/cta'
import { PartnersSection } from '~/widgets/partners'
import { PeopleSlider } from '~/widgets/people-slider'
import { StagesTimeline } from '~/widgets/award/stages'
import { NominationsTabs } from '~/widgets/award2026/nominations-tabs'

import { award2026Data } from '../model/Award2026.data'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const blockComponents: Record<string, Component> = {
  hero: AwardHero,
  about: AwardAbout,
  participants: AwardParticipants,
  whyParticipate: WhyParticipate,
  nominationsTabs: NominationsTabs,
  stagesTimeline: StagesTimeline,
  peopleSlider: PeopleSlider,
  partners: PartnersSection,
  cta: AwardCta,
  faq: FaqSection,
}

const anchorIds: Record<string, string> = {
  about: 'premium',
  nominationsTabs: 'nominations',
  stagesTimeline: 'stages',
  peopleSlider: 'committee',
  partners: 'partners',
}

const { data } = await usePageContent('/award2026', award2026Data)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/award2026')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
