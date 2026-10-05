<script setup lang="ts">
import { HeroSection } from '~/widgets/mws/hero'
import { BenefitsSection } from '~/widgets/mws/benefits'
import { ProductsSection } from '~/widgets/mws/products'
import { StackSection } from '~/widgets/mws/stack'
import { InternshipSection } from '~/widgets/mws/internship'
import { ResumeSection } from '~/widgets/mws/resume'
import { DirectionsSection } from '~/widgets/mws/directions'
import { ContactsSection } from '~/widgets/mws/contacts'
import { FaqSection } from '~/widgets/faq'
import { PartnersSection } from '~/widgets/partners'

import { mwsPageData } from '../model/MwsPage.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const blockComponents: Record<string, Component> = {
  hero: HeroSection,
  benefits: BenefitsSection,
  products: ProductsSection,
  stack: StackSection,
  internship: InternshipSection,
  resume: ResumeSection,
  directions: DirectionsSection,
  contacts: ContactsSection,
  faq: FaqSection,
  partners: PartnersSection,
}

const anchorIds: Record<string, string> = {
  benefits: 'benefits',
  products: 'products',
  stack: 'stack',
  internship: 'internship',
  resume: 'resume',
  directions: 'directions',
  contacts: 'contacts',
  faq: 'faq',
  partners: 'partners',
}

const { data } = await usePageContent('/mws', mwsPageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/mws')
</script>

<template>
  <div class="space-y-25 overflow-x-clip">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
