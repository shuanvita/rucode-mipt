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

import {
  peopleSlider,
  partners,
  cta,
  faq,
  stagesTimeline,
  hero,
  about,
  participants,
  whyParticipate,
  nominationsTabs,
} from '../model/Award2026.data'
</script>

<template>
  <div class="space-y-15">
    <AwardHero v-bind="hero" />
    <AwardAbout id="premium" v-bind="about" />
    <AwardParticipants v-bind="participants" />
    <WhyParticipate v-bind="whyParticipate" />
    <NominationsTabs id="nominations" v-bind="nominationsTabs" />
    <StagesTimeline id="stages" v-bind="stagesTimeline" />
    <PeopleSlider v-bind="peopleSlider" id="committee" />
    <PartnersSection id="partners" :items="partners.items" />
    <AwardCta v-bind="cta" />
    <FaqSection v-bind="faq" class="mb-10 lg:mb-15" />
  </div>
</template>
