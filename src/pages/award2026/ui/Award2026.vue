<script setup lang="ts">
import { AwardHero } from '~/widgets/award/hero'
import { AwardAbout } from '~/widgets/award/about'
import { AwardParticipants } from '~/widgets/award/participants'
import { WhyParticipate } from '~/widgets/award2026/why-participate'
import { AwardFaq } from '~/widgets/award2026/award-faq'
import { AwardCta } from '~/widgets/award2026/award-cta'
import { PartnersSection } from '~/widgets/partners'
import { PeopleSlider } from '~/widgets/people-slider'
import { StagesTimeline } from '~/widgets/stages-timeline'
import { NominationsTabs } from '~/widgets/award2026/nominations-tabs'

import { peopleSlider, partners } from '../model/Award2026.data'
</script>

<template>
  <div class="space-y-15">
    <AwardHero />
    <AwardAbout id="premium" />
    <AwardParticipants />
    <WhyParticipate />
    <NominationsTabs id="nominations" />
    <StagesTimeline id="stages" />
    <PeopleSlider v-bind="peopleSlider" id="committee" />
    <PartnersSection :items="partners.items" id="partners" />
    <AwardCta />
    <AwardFaq class="mb-10 lg:mb-15" />
  </div>
</template>
