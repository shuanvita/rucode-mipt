<script setup lang="ts">
import { AwardHero } from '~/widgets/award/hero'
import { InfoBlock } from '~/widgets/info-block'
import { AwardParticipants } from '~/widgets/award/participants'
import { WhyParticipate } from '~/widgets/award2025/why-participate'
import { AwardCeremony } from '~/widgets/award2025/award-ceremony'
import { AwardCta } from '~/widgets/award/cta'
import { PartnersSection } from '~/widgets/partners'
import { PeopleSlider } from '~/widgets/people-slider'
import { StagesTimeline } from '~/widgets/award/stages'
import { NominationsTabs } from '~/widgets/award2025/nominations-tabs'

import { award2025Data } from '../model/Award2025.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const blockComponents: Record<string, Component> = {
  hero: AwardHero,
  about: InfoBlock,
  participants: AwardParticipants,
  whyParticipate: WhyParticipate,
  nominationsTabs: NominationsTabs,
  stagesTimeline: StagesTimeline,
  awardCeremony: AwardCeremony,
  peopleSlider: PeopleSlider,
  partners: PartnersSection,
  cta: AwardCta,
}

const anchorIds: Record<string, string> = {
  about: 'premium',
  nominationsTabs: 'nominations',
  stagesTimeline: 'stages',
  awardCeremony: 'ceremony',
  peopleSlider: 'committee',
  partners: 'partners',
}

const { data } = await usePageContent('/award2025', award2025Data)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/award2025')
</script>

<template>
  <div class="space-y-15">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
