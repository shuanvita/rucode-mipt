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

import { award26Data } from '../model/Award2026.data'
</script>

<template>
  <div class="space-y-15">
    <AwardHero v-bind="award26Data.hero" />
    <AwardAbout id="premium" v-bind="award26Data.about" />
    <AwardParticipants v-bind="award26Data.participants" />
    <WhyParticipate v-bind="award26Data.whyParticipate" />
    <NominationsTabs id="nominations" v-bind="award26Data.nominationsTabs" />
    <StagesTimeline id="stages" v-bind="award26Data.stagesTimeline" />
    <PeopleSlider v-bind="award26Data.peopleSlider" id="committee" />
    <PartnersSection id="partners" :items="award26Data.partners.items" />
    <AwardCta v-bind="award26Data.cta" />
    <FaqSection v-bind="award26Data.faq" class="mb-10 lg:mb-15" />
  </div>
</template>
