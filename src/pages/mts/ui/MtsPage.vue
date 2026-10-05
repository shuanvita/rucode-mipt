<script setup lang="ts">
import { HeroSection } from '~/widgets/mts/hero'
import { InternshipSection } from '~/widgets/mts/internship'
import { ActionSection } from '~/widgets/mts/action-section'
import { ProductsSection } from '~/widgets/mts/products'
import { BenefitsSection } from '~/widgets/mws/benefits'
import { ContactsSection } from '~/widgets/mws/contacts'
import { FaqSection } from '~/widgets/faq'

import { mtsPageData } from '../model/MtsPage.data.ts'

import { usePageContent, useContentBlocks, ContentBlockRender } from '~/shared/api'

const blockComponents: Record<string, Component> = {
  hero: HeroSection,
  benefits: BenefitsSection,
  internship: InternshipSection,
  resume: ActionSection,
  testskills: ActionSection,
  products: ProductsSection,
  response: ActionSection,
  faq: FaqSection,
  contacts: ContactsSection,
}

const anchorIds: Record<string, string> = {
  benefits: 'benefits',
  internship: 'internship',
  resume: 'resume',
  testskills: 'skills',
  products: 'products',
  faq: 'faq',
  contacts: 'contacts',
}

const { data } = await usePageContent('/mts', mtsPageData)
const blocks = useContentBlocks(() => data.value?.page.blocks, blockComponents, '/mts')
</script>

<template>
  <div class="space-y-25 overflow-x-clip">
    <ContentBlockRender :blocks="blocks" :components="blockComponents" :anchor-ids="anchorIds" />
  </div>
</template>
